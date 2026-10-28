import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  Library,
  Search,
  Volume2,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Filter,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Eye,
} from 'lucide-react'
import { useVocabulary } from '../../context/VocabularyContext'
import { useGuest } from '../../context/GuestContext'
import type { NormalizedVocabItem } from '../../types/vocabulary'
import WordDetailModal from '../../components/dashboard/WordDetailModal'
import DataSourceBadge from '../../components/dashboard/DataSourceBadge'

const ITEMS_PER_PAGE = 30

export default function VocabularyPage() {
  const [searchParams] = useSearchParams()
  const { groups, allWords, totalRecords, isLoading, error, refetch, speakWord } =
    useVocabulary()
  const { learnedVocabIds, toggleVocabLearned } = useGuest()

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGroup, setSelectedGroup] = useState<string>(() => searchParams.get('group') || 'all')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [selectedDetailWord, setSelectedDetailWord] = useState<NormalizedVocabItem | null>(null)

  // Reset pagination when searching or changing filter
  const handleGroupChange = (groupId: string) => {
    setSelectedGroup(groupId)
    setCurrentPage(1)
  }

  const handleSearchChange = (term: string) => {
    setSearchTerm(term)
    setCurrentPage(1)
  }

  // Filtered list
  const filteredVocab = useMemo(() => {
    const term = searchTerm.trim().toLowerCase()

    return allWords.filter((v) => {
      const matchesSearch =
        !term ||
        v.word.toLowerCase().includes(term) ||
        v.vietnamese.toLowerCase().includes(term) ||
        v.definition.toLowerCase().includes(term) ||
        v.type.toLowerCase().includes(term)

      const matchesGroup =
        selectedGroup === 'all' || v.groupId === selectedGroup || v.groupName === selectedGroup

      return matchesSearch && matchesGroup
    })
  }, [allWords, searchTerm, selectedGroup])

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredVocab.length / ITEMS_PER_PAGE))
  const paginatedWords = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredVocab.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }, [filteredVocab, currentPage])

  // Navigation for detail modal
  const currentDetailIndex = useMemo(() => {
    if (!selectedDetailWord) return -1
    return filteredVocab.findIndex((w) => w.id === selectedDetailWord.id)
  }, [selectedDetailWord, filteredVocab])

  const handleNextWord = () => {
    if (currentDetailIndex >= 0 && currentDetailIndex < filteredVocab.length - 1) {
      setSelectedDetailWord(filteredVocab[currentDetailIndex + 1])
    }
  }

  const handlePrevWord = () => {
    if (currentDetailIndex > 0) {
      setSelectedDetailWord(filteredVocab[currentDetailIndex - 1])
    }
  }

  // Learned stats
  const learnedCount = useMemo(() => {
    return allWords.filter((v) => learnedVocabIds.includes(v.id)).length
  }, [allWords, learnedVocabIds])

  const progressPercent = totalRecords > 0 ? Math.round((learnedCount / totalRecords) * 100) : 0

  return (
    <div>
      {/* Title & Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-1">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Library className="w-6 h-6 text-blue-600" />
              Thư viện từ vựng tiếng Anh
            </h1>
            <DataSourceBadge />
          </div>
          <p className="text-xs sm:text-sm text-gray-500">
            Kho dữ liệu hơn 2,900 từ vựng phân loại theo nhóm, kèm phiên âm IPA, nghĩa tiếng Việt, câu ví dụ và phát âm chuẩn
          </p>
        </div>

        {/* Progress badge */}
        <div className="bg-white border border-gray-200/90 rounded-2xl px-4 py-2.5 shadow-2xs flex items-center gap-3 self-start sm:self-auto shrink-0">
          <div>
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Đã thuộc:</span>
              <strong className="text-blue-700 ml-2">
                {learnedCount}/{totalRecords.toLocaleString()} từ ({progressPercent}%)
              </strong>
            </div>
            <div className="w-36 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
          <Sparkles className="w-4 h-4 text-amber-500" />
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs mb-6 flex flex-col gap-3">
        {/* Search Input */}
        <div className="relative w-full">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Tìm kiếm theo từ tiếng Anh, nghĩa tiếng Việt, từ loại hoặc định nghĩa..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>

        {/* Group / Sheet Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
          <Filter className="w-3.5 h-3.5 text-gray-400 ml-1 shrink-0" />
          <button
            onClick={() => handleGroupChange('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              selectedGroup === 'all'
                ? 'bg-blue-600 text-white shadow-2xs'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Tất cả ({totalRecords.toLocaleString()})
          </button>

          {groups.map((g) => {
            const isSelected = selectedGroup === g.id || selectedGroup === g.name
            return (
              <button
                key={g.id}
                onClick={() => handleGroupChange(g.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {g.name} ({g.count.toLocaleString()})
              </button>
            )
          })}
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-5 border border-gray-100 shadow-2xs animate-pulse space-y-3"
            >
              <div className="h-5 bg-gray-200 rounded-md w-1/3" />
              <div className="h-4 bg-gray-100 rounded-md w-1/2" />
              <div className="h-14 bg-gray-50 rounded-xl" />
            </div>
          ))}
        </div>
      )}

      {/* Error State */}
      {!isLoading && error && (
        <div className="bg-red-50 border border-red-200 rounded-3xl p-8 text-center max-w-lg mx-auto">
          <BookOpen className="w-10 h-10 text-red-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-red-900 mb-1">Không thể tải dữ liệu từ vựng</h3>
          <p className="text-xs text-red-700 leading-relaxed mb-4">{error}</p>
          <button
            onClick={() => refetch(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Thử tải lại</span>
          </button>
        </div>
      )}

      {/* Empty Search Result */}
      {!isLoading && !error && filteredVocab.length === 0 && (
        <div className="bg-white rounded-3xl p-12 text-center border border-gray-200/80">
          <BookOpen className="w-10 h-10 text-gray-300 mx-auto mb-3" />
          <h3 className="text-sm font-bold text-gray-800">Không tìm thấy từ vựng nào</h3>
          <p className="text-xs text-gray-500 mt-1">
            Hãy thử tìm kiếm với từ khóa khác hoặc chọn nhóm "Tất cả"
          </p>
        </div>
      )}

      {/* Vocabulary Cards Grid */}
      {!isLoading && !error && filteredVocab.length > 0 && (
        <>
          <div className="flex items-center justify-between text-xs text-gray-500 mb-3 px-1">
            <span>
              Hiển thị <strong>{paginatedWords.length}</strong> trên tổng số{' '}
              <strong>{filteredVocab.length.toLocaleString()}</strong> từ vựng phù hợp
            </span>
            <span>
              Trang {currentPage} / {totalPages}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {paginatedWords.map((v) => {
              const isLearned = learnedVocabIds.includes(v.id)

              return (
                <div
                  key={v.id}
                  className={`bg-white rounded-3xl p-5 border transition-all flex flex-col justify-between hover:shadow-md ${
                    isLearned
                      ? 'border-emerald-300 ring-2 ring-emerald-500/10 shadow-xs'
                      : 'border-gray-200/80 shadow-2xs hover:border-blue-200'
                  }`}
                >
                  <div>
                    {/* Top line: word, ipa, type, group */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="text-lg font-bold text-gray-900 truncate">
                            {v.word}
                          </span>
                          {v.type && (
                            <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md shrink-0">
                              {v.type}
                            </span>
                          )}
                        </div>

                        {v.ipa && (
                          <span className="text-xs font-mono text-gray-500 mt-0.5 block">
                            {v.ipa}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() => speakWord(v.word)}
                          title="Nghe phát âm chuẩn"
                          className="p-1.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setSelectedDetailWord(v)}
                          title="Xem chi tiết từ vựng"
                          className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Vietnamese Meaning */}
                    {v.vietnamese && (
                      <div className="mb-2.5">
                        <span className="text-[11px] text-gray-400">Nghĩa: </span>
                        <strong className="text-sm text-blue-700 font-semibold">
                          {v.vietnamese}
                        </strong>
                      </div>
                    )}

                    {/* Definition or Example */}
                    {v.example && (
                      <div className="bg-gray-50/80 border border-gray-100 rounded-2xl p-2.5 text-xs text-gray-600 line-clamp-2">
                        "{v.example}"
                      </div>
                    )}
                  </div>

                  {/* Card bottom bar */}
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                    <span className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md truncate max-w-[120px]">
                      {v.groupName}
                    </span>

                    <button
                      onClick={() => toggleVocabLearned(v.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
                        isLearned
                          ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-2xs'
                          : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{isLearned ? 'Đã thuộc' : 'Thuộc'}</span>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs">
              <span className="text-xs text-gray-500">
                Hiển thị trang <strong>{currentPage}</strong> / <strong>{totalPages}</strong> (
                {filteredVocab.length.toLocaleString()} từ)
              </span>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1.5 rounded-xl text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Trang trước</span>
                </button>

                {/* Page numbers preview */}
                <div className="hidden sm:flex items-center gap-1 px-2">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, idx) => {
                    let pageNum = idx + 1
                    if (totalPages > 5 && currentPage > 3) {
                      pageNum = Math.min(currentPage - 2 + idx, totalPages - 4 + idx)
                    }
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-8 h-8 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                          currentPage === pageNum
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {pageNum}
                      </button>
                    )
                  })}
                </div>

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1.5 rounded-xl text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
                >
                  <span>Trang sau</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* Word Detail Modal */}
      {selectedDetailWord && (
        <WordDetailModal
          word={selectedDetailWord}
          onClose={() => setSelectedDetailWord(null)}
          onNext={handleNextWord}
          onPrev={handlePrevWord}
          hasNext={currentDetailIndex < filteredVocab.length - 1}
          hasPrev={currentDetailIndex > 0}
        />
      )}
    </div>
  )
}
