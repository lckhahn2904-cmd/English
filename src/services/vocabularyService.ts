import type {
  RawVocabDataset,
  RawVocabGroup,
  RawVocabItem,
  NormalizedVocabItem,
  NormalizedGroup,
  VocabSource,
} from '../types/vocabulary'

export const GITHUB_VOCAB_RAW_URL =
  'https://raw.githubusercontent.com/lckhahn2904-cmd/English/main/easytalk-vocabulary.json'

export interface FetchVocabResult {
  groups: NormalizedGroup[]
  allWords: NormalizedVocabItem[]
  totalRecords: number
  source: VocabSource
  isFallback: boolean
  warning?: string
}

let cachedResult: FetchVocabResult | null = null
let inFlightRequest: Promise<FetchVocabResult> | null = null

function validateRawDataset(data: unknown): asserts data is RawVocabDataset {
  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    throw new Error('Dữ liệu JSON không hợp lệ hoặc rỗng.')
  }

  const dataset = data as Partial<RawVocabDataset>
  if (!Array.isArray(dataset.groups) || dataset.groups.length === 0) {
    throw new Error('Dữ liệu JSON thiếu danh sách nhóm từ vựng (groups).')
  }
  if (!Number.isInteger(dataset.totalRecords) || (dataset.totalRecords ?? 0) < 1) {
    throw new Error('Dữ liệu JSON thiếu tổng số bản ghi hợp lệ (totalRecords).')
  }

  const groupIds = new Set<string>()
  let recordTotal = 0
  for (const [index, candidate] of dataset.groups.entries()) {
    if (!candidate || typeof candidate !== 'object' || Array.isArray(candidate)) {
      throw new Error(`Nhóm từ vựng thứ ${index + 1} không đúng định dạng.`)
    }
    const group = candidate as RawVocabGroup
    if (typeof group.name !== 'string' || !group.name.trim() ||
        typeof group.sourceSheet !== 'string' || !group.sourceSheet.trim()) {
      throw new Error(`Nhóm từ vựng thứ ${index + 1} thiếu tên nhóm hoặc sheet gốc.`)
    }
    if (!Number.isInteger(group.count) || group.count < 0 || !Array.isArray(group.vocabulary)) {
      throw new Error(`Nhóm "${group.name}" thiếu count hợp lệ hoặc danh sách vocabulary.`)
    }
    if (group.count !== group.vocabulary.length) {
      throw new Error(`Nhóm "${group.name}" khai báo ${group.count} bản ghi nhưng có ${group.vocabulary.length}.`)
    }

    const groupId = group.id?.trim() || `group-${index + 1}`
    if (groupIds.has(groupId)) throw new Error(`ID nhóm bị trùng: "${groupId}".`)
    groupIds.add(groupId)

    for (const [itemIndex, item] of group.vocabulary.entries()) {
      if (!item || typeof item !== 'object' || typeof (item as RawVocabItem).Vocab !== 'string' || !(item as RawVocabItem).Vocab.trim()) {
        throw new Error(`Bản ghi ${itemIndex + 1} trong nhóm "${group.name}" thiếu trường Vocab.`)
      }
    }
    recordTotal += group.vocabulary.length
  }

  if (recordTotal !== dataset.totalRecords) {
    throw new Error(`Tổng bản ghi thực tế (${recordTotal}) không khớp totalRecords (${dataset.totalRecords}).`)
  }
}

function normalizeDataset(raw: RawVocabDataset) {
  const groups: NormalizedGroup[] = raw.groups.map((group, groupIndex) => {
    const groupId = group.id?.trim() || `group-${groupIndex + 1}`
    const vocabulary = group.vocabulary.map((item, itemIndex) => ({
      id: `${groupId}-w${itemIndex + 1}`,
      word: item.Vocab.trim(),
      type: item.Type?.trim() || '',
      ipa: item.IPA?.trim() || '',
      definition: item['Eng. definition']?.trim() || '',
      example: item.Example?.trim() || '',
      vietnamese: item['Viet. meaning']?.trim() || '',
      groupName: group.name,
      sourceSheet: group.sourceSheet,
      groupId,
    }))
    return { id: groupId, name: group.name, sourceSheet: group.sourceSheet, count: group.count, vocabulary }
  })
  return { groups, allWords: groups.flatMap((group) => group.vocabulary), totalRecords: raw.totalRecords }
}

async function loadLocalFallback() {
  const localModule = await import('../data/easytalk-vocabulary.json')
  const localData = localModule.default as unknown
  validateRawDataset(localData)
  return normalizeDataset(localData)
}

async function loadFromGitHub(): Promise<FetchVocabResult> {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 12000)
  try {
    const response = await fetch(GITHUB_VOCAB_RAW_URL, { signal: controller.signal, cache: 'no-cache' })
    if (!response.ok) throw new Error(`GitHub Raw trả về HTTP ${response.status} (${response.statusText}).`)
    const json: unknown = await response.json()
    validateRawDataset(json)
    return { ...normalizeDataset(json), source: 'github', isFallback: false }
  } finally {
    clearTimeout(timeoutId)
  }
}

export async function loadVocabularyDataset(forceRefresh = false): Promise<FetchVocabResult> {
  if (cachedResult && !forceRefresh) return cachedResult
  if (inFlightRequest) return inFlightRequest

  inFlightRequest = (async () => {
    try {
      const result = await loadFromGitHub()
      cachedResult = result
      return result
    } catch (githubError) {
      const reason = githubError instanceof Error ? githubError.message : 'Lỗi mạng không xác định.'
      try {
        const fallback = await loadLocalFallback()
        const result: FetchVocabResult = {
          ...fallback,
          source: 'local_fallback',
          isFallback: true,
          warning: `Không tải được dữ liệu GitHub (${reason}). Đang dùng bản dự phòng cục bộ src/data/easytalk-vocabulary.json (${fallback.totalRecords.toLocaleString()} từ, ${fallback.groups.length} nhóm).`,
        }
        cachedResult = result
        return result
      } catch (localError) {
        const fallbackReason = localError instanceof Error ? localError.message : 'JSON dự phòng không hợp lệ.'
        cachedResult = null
        throw new Error(`Không tải được GitHub (${reason}) và bản dự phòng cục bộ không hợp lệ (${fallbackReason}).`)
      }
    }
  })()

  try {
    return await inFlightRequest
  } finally {
    inFlightRequest = null
  }
}

export function playPronunciation(word: string, rate = 0.9): boolean {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return false
  try {
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(word)
    utterance.lang = 'en-US'
    utterance.rate = rate
    window.speechSynthesis.speak(utterance)
    return true
  } catch (error) {
    console.error('Lỗi khi phát âm từ vựng:', error)
    return false
  }
}
