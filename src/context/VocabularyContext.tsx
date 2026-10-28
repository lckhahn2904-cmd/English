import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react'
import type {
  NormalizedGroup,
  NormalizedVocabItem,
  VocabSource,
} from '../types/vocabulary'
import {
  loadVocabularyDataset,
  playPronunciation,
} from '../services/vocabularyService'

export interface VocabularyContextType {
  groups: NormalizedGroup[]
  allWords: NormalizedVocabItem[]
  totalRecords: number
  source: VocabSource
  isLoading: boolean
  error: string | null
  isFallback: boolean
  warning?: string
  refetch: (force?: boolean) => Promise<void>
  speakWord: (word: string) => void
}

const VocabularyContext = createContext<VocabularyContextType | undefined>(undefined)

export function VocabularyProvider({ children }: { children: ReactNode }) {
  const [groups, setGroups] = useState<NormalizedGroup[]>([])
  const [allWords, setAllWords] = useState<NormalizedVocabItem[]>([])
  const [totalRecords, setTotalRecords] = useState<number>(0)
  const [source, setSource] = useState<VocabSource>('none')
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [isFallback, setIsFallback] = useState<boolean>(false)
  const [warning, setWarning] = useState<string | undefined>(undefined)

  const fetchData = useCallback(async (force = false) => {
    setIsLoading(true)
    setError(null)

    try {
      const result = await loadVocabularyDataset(force)
      setGroups(result.groups)
      setAllWords(result.allWords)
      setTotalRecords(result.totalRecords)
      setSource(result.source)
      setIsFallback(result.isFallback)
      setWarning(result.warning)
    } catch (err: any) {
      console.error('Lỗi khi tải dữ liệu từ vựng:', err)
      setError(err?.message || 'Không thể tải dữ liệu từ vựng.')
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData(false)
  }, [fetchData])

  const speakWord = useCallback((word: string) => {
    playPronunciation(word)
  }, [])

  const value = useMemo(
    () => ({
      groups,
      allWords,
      totalRecords,
      source,
      isLoading,
      error,
      isFallback,
      warning,
      refetch: (force = true) => fetchData(force),
      speakWord,
    }),
    [groups, allWords, totalRecords, source, isLoading, error, isFallback, warning, fetchData, speakWord]
  )

  return (
    <VocabularyContext.Provider value={value}>
      {children}
    </VocabularyContext.Provider>
  )
}

export function useVocabulary(): VocabularyContextType {
  const context = useContext(VocabularyContext)
  if (!context) {
    throw new Error('useVocabulary must be used within a VocabularyProvider')
  }
  return context
}
