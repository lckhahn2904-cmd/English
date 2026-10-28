import { useEffect, useState } from 'react'
import {
  X,
  Volume2,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Layers,
  ImageOff,
} from 'lucide-react'
import type { NormalizedVocabItem } from '../../types/vocabulary'
import { playPronunciation } from '../../services/vocabularyService'
import { useGuest } from '../../context/GuestContext'
import { vocabularyImageManifest } from '../../data/vocabularyImageManifest'

interface WordDetailModalProps {
  word: NormalizedVocabItem | null
  onClose: () => void
  onNext?: () => void
  onPrev?: () => void
  hasNext?: boolean
  hasPrev?: boolean
}

function VocabularyIllustration({ word }: { word: NormalizedVocabItem }) {
  const [failed, setFailed] = useState(false)
  const imageSrc = vocabularyImageManifest[word.id]

  return (
    <div className="mx-auto my-4 flex aspect-square w-full max-w-[18rem] items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-blue-50 to-violet-50">
      {imageSrc && !failed ? (
        <img
          src={imageSrc}
          alt={`Illustration of ${word.word}`}
          className="h-full w-full object-contain"
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex flex-col items-center gap-2 px-4 text-center text-sm text-gray-500" role="img" aria-label={`No illustration available for ${word.word}`}>
          <ImageOff className="h-7 w-7 text-gray-400" aria-hidden="true" />
          <span>No illustration available</span>
        </div>
      )}
    </div>
  )
}

export default function WordDetailModal({
  word,
  onClose,
  onNext,
  onPrev,
  hasNext = false,
  hasPrev = false,
}: WordDetailModalProps) {
  const { learnedVocabIds, toggleVocabLearned } = useGuest()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && onNext && hasNext) onNext()
      if (e.key === 'ArrowLeft' && onPrev && hasPrev) onPrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, onNext, onPrev, hasNext, hasPrev])

  if (!word) return null

  const isLearned = learnedVocabIds.includes(word.id)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-h-[90vh] max-w-lg w-full overflow-y-auto p-6 sm:p-8 shadow-2xl border border-gray-100 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top header: group badge & close button */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              <Layers className="w-3.5 h-3.5" />
              {word.groupName}
            </span>
            {word.type && (
              <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-gray-100 text-gray-700">
                {word.type}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <VocabularyIllustration key={word.id} word={word} />

        {/* Word Hero & Pronunciation */}
        <div className="py-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
            {word.word}
          </h2>

          <div className="flex items-center justify-center gap-3">
            {word.ipa && (
              <span className="text-base font-mono text-gray-500 bg-gray-50 border border-gray-200 px-3 py-1 rounded-lg">
                {word.ipa}
              </span>
            )}

            <button
              onClick={() => playPronunciation(word.word)}
              title="Nghe phát âm chuẩn (US)"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <Volume2 className="w-4 h-4" />
              <span>Phát âm</span>
            </button>
          </div>
        </div>

        {/* Meaning & Definition Cards */}
        <div className="space-y-4">
          {/* Vietnamese meaning */}
          {word.vietnamese && (
            <div className="bg-blue-50/80 border border-blue-200/80 rounded-2xl p-4">
              <span className="block text-[11px] font-bold tracking-wider text-blue-900 uppercase mb-1">
                Nghĩa tiếng Việt
              </span>
              <p className="text-lg font-bold text-blue-950">{word.vietnamese}</p>
            </div>
          )}

          {/* English definition */}
          {word.definition && (
            <div className="bg-gray-50 border border-gray-200/70 rounded-2xl p-4">
              <span className="block text-[11px] font-bold tracking-wider text-gray-500 uppercase mb-1">
                English Definition
              </span>
              <p className="text-sm text-gray-700 leading-relaxed">{word.definition}</p>
            </div>
          )}

          {/* Example */}
          {word.example && (
            <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-4">
              <span className="block text-[11px] font-bold tracking-wider text-amber-800 uppercase mb-1">
                Ví dụ thực tế
              </span>
              <p className="text-sm font-medium text-amber-950 italic">
                "{word.example}"
              </p>
            </div>
          )}
        </div>

        {/* Footer: Learn toggle + Navigation */}
        <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between gap-3">
          <button
            onClick={() => toggleVocabLearned(word.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer ${
              isLearned
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isLearned ? 'Đã thuộc từ này' : 'Đánh dấu đã thuộc'}</span>
          </button>

          <div className="flex items-center gap-1.5">
            <button
              onClick={onPrev}
              disabled={!hasPrev}
              title="Từ trước đó (Phím mũi tên trái)"
              className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onNext}
              disabled={!hasNext}
              title="Từ tiếp theo (Phím mũi tên phải)"
              className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
