export interface RawVocabItem {
  Vocab: string
  Type?: string
  IPA?: string
  'Eng. definition'?: string
  Example?: string
  'Viet. meaning'?: string
}

export interface RawVocabGroup {
  id?: string
  name: string
  sourceSheet: string
  count: number
  vocabulary: RawVocabItem[]
}

export interface RawVocabDataset {
  sourceFile: string
  description: string
  fields: Record<string, string>
  totalRecords: number
  groups: RawVocabGroup[]
}

export interface NormalizedVocabItem {
  id: string
  word: string
  type: string
  ipa: string
  definition: string
  example: string
  vietnamese: string
  groupName: string
  sourceSheet: string
  groupId: string
}

export interface NormalizedGroup {
  id: string
  name: string
  sourceSheet: string
  count: number
  vocabulary: NormalizedVocabItem[]
}

export type VocabSource = 'github' | 'local_fallback' | 'none'

export interface VocabularyState {
  groups: NormalizedGroup[]
  allWords: NormalizedVocabItem[]
  totalRecords: number
  source: VocabSource
  isLoading: boolean
  error: string | null
  isFallback: boolean
  lastFetchedAt: Date | null
}
