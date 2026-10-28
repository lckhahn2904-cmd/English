import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, RefreshCw, Volume2 } from 'lucide-react'
import { useGuest } from '../../context/GuestContext'
import { useVocabulary } from '../../context/VocabularyContext'
import { vocabularyImageManifest } from '../../data/vocabularyImageManifest'
import { clampVocabularyWordIndex, createVocabularyLessons } from '../../services/vocabularyLessonService'

function courseHref(groupId?: string) {
  return groupId ? `/dashboard/courses?course=${encodeURIComponent(groupId)}` : '/dashboard/courses'
}

function lessonHref(groupId: string, lessonNumber: number) {
  return `/dashboard/study?${new URLSearchParams({ course: groupId, lesson: String(lessonNumber) })}`
}

export default function VocabularyFlashcardPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { groups, isLoading, error, refetch, speakWord } = useVocabulary()
  const { completedLessonIds, learnedVocabIds, toggleVocabLearned, markLessonCompleted } = useGuest()
  const courseId = searchParams.get('course')
  const lessonValue = searchParams.get('lesson')
  const lessonNumber = lessonValue && /^\d+$/.test(lessonValue) ? Number(lessonValue) : null
  const group = groups.find((item) => item.id === courseId)
  const lessons = useMemo(() => group ? createVocabularyLessons(group) : [], [group])
  const lesson = lessonNumber ? lessons[lessonNumber - 1] : undefined
  const requestedWord = Number(searchParams.get('word') ?? '1') - 1
  const wordIndex = clampVocabularyWordIndex(requestedWord, lesson?.words.length ?? 1)
  const word = lesson?.words[wordIndex]
  const [failedImageId, setFailedImageId] = useState<string | null>(null)
  const image = word ? vocabularyImageManifest[word.id] : undefined
  const isCompleted = Boolean(lesson && completedLessonIds.includes(lesson.id))
  const showResult = isCompleted && searchParams.get('result') === '1'

  const setWordIndex = (nextIndex: number) => {
    if (!lesson || !group) return
    const params = new URLSearchParams(searchParams)
    params.set('course', group.id)
    params.set('lesson', String(lesson.number))
    params.set('word', String(clampVocabularyWordIndex(nextIndex, lesson.words.length) + 1))
    params.delete('result')
    setSearchParams(params)
  }

  const finishLesson = () => {
    if (!lesson || !group || wordIndex !== lesson.words.length - 1) return
    markLessonCompleted(lesson.id)
    const params = new URLSearchParams(searchParams)
    params.set('result', '1')
    params.set('word', String(lesson.words.length))
    setSearchParams(params)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50 px-4 py-4 sm:px-6 sm:py-6">
      <div className="mx-auto w-full max-w-3xl">
        {isLoading && <div className="rounded-2xl border border-blue-100 bg-white p-5 text-sm text-blue-800 shadow-sm" role="status"><span className="inline-flex items-center gap-2"><RefreshCw className="h-4 w-4 animate-spin" /> Đang tải dữ liệu từ vựng…</span></div>}
        {!isLoading && error && <div className="rounded-2xl border border-red-200 bg-white p-5 shadow-sm" role="alert"><h1 className="font-semibold text-red-900">Không thể tải dữ liệu từ vựng</h1><p className="mt-1 text-sm text-red-800">{error}</p><button onClick={() => refetch(true)} className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"><RefreshCw className="h-4 w-4" /> Thử tải lại</button></div>}
        {!isLoading && !error && (!group || !lesson) && <section className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm" role="alert"><h1 className="font-semibold text-amber-900">Không tìm thấy bài học</h1><p className="mt-1 text-sm text-amber-800">Kiểm tra lại mã khóa học và số bài trong đường dẫn.</p><Link to={courseHref(group?.id)} className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-sm font-semibold text-blue-700 hover:bg-blue-50"><ArrowLeft className="h-4 w-4" /> Danh sách bài học</Link></section>}

        {!isLoading && !error && group && lesson && showResult && <section className="rounded-3xl border border-emerald-200 bg-white p-5 text-center shadow-sm sm:p-7">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600"><CheckCircle2 className="h-7 w-7" /></span>
          <p className="mt-3 text-sm font-semibold text-emerald-700">{group.name} · Bài {lesson.number}</p>
          <h1 className="mt-1 text-xl font-bold text-gray-900 sm:text-2xl">Bạn đã hoàn thành bài học</h1>
          <p className="mt-2 text-sm text-gray-600">Bạn đã đi hết {lesson.words.length} từ của bài.</p>
          <div className="mt-4 flex flex-col justify-center gap-2 sm:flex-row"><Link to={courseHref(group.id)} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"><ArrowLeft className="h-4 w-4" /> Danh sách bài học</Link>{lessons[lesson.number] && <Link to={lessonHref(group.id, lesson.number + 1)} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Bài tiếp theo <ArrowRight className="h-4 w-4" /></Link>}</div>
        </section>}

        {!isLoading && !error && group && lesson && !showResult && word && <>
          <Link to={courseHref(group.id)} className="mb-2 inline-flex min-h-10 items-center gap-2 rounded-lg px-2 text-sm font-semibold text-blue-700 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"><ArrowLeft className="h-4 w-4" /> Danh sách bài học · {group.name}</Link>
          <section className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm sm:p-4">
            <header className="mb-3 flex items-center justify-between gap-3">
              <div className="min-w-0"><h1 className="break-words text-base font-bold text-gray-900 sm:text-lg">{group.name} · Bài {lesson.number}</h1><p className="mt-0.5 text-xs font-semibold text-gray-600 sm:text-sm">Từ {wordIndex + 1}/{lesson.words.length}</p></div>
              <span className="shrink-0 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">{Math.round(((wordIndex + 1) / lesson.words.length) * 100)}%</span>
            </header>
            <div className="mb-3 h-1.5 rounded-full bg-gray-100" role="progressbar" aria-label={`Tiến độ bài ${lesson.number} - ${group.name}`} aria-valuenow={wordIndex + 1} aria-valuemin={0} aria-valuemax={lesson.words.length}><div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500 transition-all" style={{ width: `${((wordIndex + 1) / lesson.words.length) * 100}%` }} /></div>

            <article className="flashcard-content-layout rounded-xl bg-gradient-to-br from-blue-50 to-violet-50 p-3 sm:p-4">
              <div className="flashcard-full-row flex min-w-0 flex-wrap items-start justify-between gap-2">
                <div className="min-w-0"><h2 className="break-words text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{word.word}</h2><div className="mt-1.5 flex flex-wrap items-center gap-1.5">{word.type && <span className="rounded-md bg-white/80 px-2 py-1 text-xs font-semibold text-blue-700">{word.type}</span>}{word.ipa && <span className="rounded-lg border border-white bg-white/70 px-2.5 py-1 font-mono text-sm text-gray-600">{word.ipa}</span>}<button onClick={() => speakWord(word.word)} aria-label={`Phát âm ${word.word}`} className="inline-flex min-h-9 items-center gap-1 rounded-lg bg-blue-600 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"><Volume2 className="h-4 w-4" /> Phát âm</button></div></div>
              </div>

              <div className="flashcard-image-frame">
                {image && failedImageId !== word.id ? <img key={word.id} src={image} alt={`Minh họa ${word.word}${word.vietnamese ? ` — ${word.vietnamese}` : ''}`} loading="lazy" decoding="async" onError={() => setFailedImageId(word.id)} /> : <div className="flashcard-image-placeholder rounded-xl border border-white bg-white/70 px-3 text-center text-xs text-gray-500"><BookOpen className="h-6 w-6 text-violet-300" aria-hidden="true" /><span>{image ? 'Không tải được ảnh minh họa.' : 'Chưa có ảnh minh họa cho từ này.'}</span></div>}
              </div>

              <div className="min-w-0 space-y-2">
                {word.vietnamese && <div className="rounded-lg border border-blue-100 bg-white/80 p-2.5"><p className="text-[10px] font-bold uppercase tracking-wide text-blue-800">Nghĩa tiếng Việt</p><p className="mt-0.5 break-words text-base font-bold text-blue-950">{word.vietnamese}</p></div>}
                {word.definition && <div className="rounded-lg border border-white bg-white/70 p-2.5"><p className="text-[10px] font-bold uppercase tracking-wide text-gray-500">English definition</p><p className="mt-0.5 break-words whitespace-normal text-sm leading-5 text-gray-700">{word.definition}</p></div>}
                {word.example && <div className="rounded-lg border border-amber-100 bg-amber-50/80 p-2.5"><p className="text-[10px] font-bold uppercase tracking-wide text-amber-800">Example</p><p className="mt-0.5 break-words whitespace-normal text-sm italic leading-5 text-amber-950">“{word.example}”</p></div>}
              </div>

              <nav className="flashcard-full-row flashcard-actions-grid border-t border-white/80 pt-3" aria-label="Điều hướng từ vựng">
                <button onClick={() => setWordIndex(wordIndex - 1)} disabled={wordIndex === 0} className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:px-3 sm:text-sm"><ArrowLeft className="h-4 w-4" /> Từ trước</button>
                <button onClick={() => toggleVocabLearned(word.id)} aria-pressed={learnedVocabIds.includes(word.id)} className={`col-span-2 row-start-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 md:col-span-1 md:row-start-auto sm:text-sm ${learnedVocabIds.includes(word.id) ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'border border-emerald-200 bg-white text-emerald-700 hover:bg-emerald-50'}`}><CheckCircle2 className="h-4 w-4" />{learnedVocabIds.includes(word.id) ? 'Đã thuộc' : 'Đánh dấu đã thuộc'}</button>
                {wordIndex < lesson.words.length - 1 ? <button onClick={() => setWordIndex(wordIndex + 1)} className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-2 py-2 text-xs font-semibold text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:px-3 sm:text-sm">Từ tiếp theo <ArrowRight className="h-4 w-4" /></button> : <button onClick={finishLesson} className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-2 py-2 text-xs font-semibold text-white hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 sm:px-3 sm:text-sm">Hoàn thành bài <CheckCircle2 className="h-4 w-4" /></button>}
              </nav>
            </article>
          </section>
        </>}
      </div>
    </main>
  )
}
