import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, BookOpen, CircleCheck, Clock3, RefreshCw, RotateCcw, Volume2 } from 'lucide-react'
import DataSourceBadge from './DataSourceBadge'
import { useGuest } from '../../context/GuestContext'
import { useVocabulary } from '../../context/VocabularyContext'
import { createVocabularyLessons } from '../../services/vocabularyLessonService'

const groupIcons = [Volume2, BookOpen, CircleCheck, Clock3, BookOpen, Volume2]

function courseHref(groupId: string) {
  return `/dashboard/courses?course=${encodeURIComponent(groupId)}`
}

function lessonHref(groupId: string, lessonNumber: number, result = false) {
  const params = new URLSearchParams({ course: groupId, lesson: String(lessonNumber) })
  if (result) params.set('result', '1')
  return `/dashboard/study?${params.toString()}`
}

export default function VocabularyCourseFlow() {
  const [searchParams] = useSearchParams()
  const { groups, isLoading, error, refetch } = useVocabulary()
  const { completedLessonIds, learnedVocabIds } = useGuest()
  const courseId = searchParams.get('course')
  const selectedGroup = groups.find((group) => group.id === courseId)
  const lessons = useMemo(() => selectedGroup ? createVocabularyLessons(selectedGroup) : [], [selectedGroup])
  const totalWords = groups.reduce((sum, group) => sum + group.count, 0)

  return (
    <section className="mb-10">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Lộ trình Tiếng Anh
            </h1>
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
              {groups.length} Khóa học chính thức
            </span>
            <DataSourceBadge />
          </div>
          <p className="max-w-3xl text-sm leading-6 text-gray-600">
            Bộ tài liệu {totalWords.toLocaleString()} từ vựng nền tảng được tích hợp sẵn — Bạn có thể học ngay mà không cần tải lên file!
          </p>
        </div>
        <Link to="/dashboard/vocabulary" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">
          <BookOpen className="h-4 w-4" /> Quản lý thư viện
        </Link>
      </div>

      {isLoading && <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 text-sm text-blue-800" role="status"><span className="inline-flex items-center gap-2"><RefreshCw className="h-4 w-4 animate-spin" /> Đang tải dữ liệu từ vựng…</span></div>}
      {!isLoading && error && <div className="rounded-2xl border border-red-200 bg-red-50 p-6" role="alert"><h2 className="font-semibold text-red-900">Không thể tải dữ liệu từ vựng</h2><p className="mt-1 text-sm text-red-800">{error}</p><button onClick={() => refetch(true)} className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"><RefreshCw className="h-4 w-4" /> Thử tải lại</button></div>}

      {!isLoading && !error && !courseId && <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, index) => {
          const groupLessons = createVocabularyLessons(group)
          const completedCount = groupLessons.filter((item) => completedLessonIds.includes(item.id)).length
          const learnedCount = group.vocabulary.filter((word) => learnedVocabIds.includes(word.id)).length
          const completed = groupLessons.length > 0 && completedCount === groupLessons.length
          const started = completedCount > 0 || learnedCount > 0
          const GroupIcon = groupIcons[index % groupIcons.length]
          return <Link key={group.id} to={courseHref(group.id)} className="group flex min-h-[280px] flex-col rounded-2xl border border-gray-200 bg-white p-5 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-violet-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 active:translate-y-0 sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-sm font-bold text-violet-700" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><span className="ml-auto rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{group.count.toLocaleString()} từ</span><span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Cốt lõi</span></div>
            <div className="mb-3 flex items-center gap-2"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-50 to-blue-50 text-violet-700" aria-hidden="true"><GroupIcon className="h-4 w-4" /></span><h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-700">{group.name}</h2></div>
            <p className="text-xs text-gray-400">Sheet gốc: {group.sourceSheet}</p>
            <p className="mt-3 text-sm leading-5 text-gray-600">{groupLessons.length} bài học · {group.count.toLocaleString()} từ theo thứ tự dữ liệu.</p>
            <div className="mt-auto flex items-center justify-between gap-3 border-t border-gray-100 pt-4"><span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${completed ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : started ? 'border-blue-200 bg-blue-50 text-blue-700' : 'border-gray-200 bg-gray-50 text-gray-600'}`}>{completed ? 'Hoàn thành' : started ? 'Đang học' : 'Chưa bắt đầu'}</span><span className="inline-flex min-h-11 items-center gap-1 rounded-lg bg-blue-600 px-3.5 py-2 text-sm font-semibold text-white transition group-hover:bg-violet-700">Học ngay <ArrowRight className="h-4 w-4" /></span></div>
          </Link>
        })}
      </div>}

      {!isLoading && !error && courseId && !selectedGroup && <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6" role="alert"><p className="text-sm text-amber-900">Không tìm thấy khóa học trong dữ liệu.</p><Link to="/dashboard/courses" className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue-700"><ArrowLeft className="h-4 w-4" /> Danh sách khóa học</Link></div>}

      {!isLoading && !error && selectedGroup && <div>
        <Link to="/dashboard/courses" className="mb-4 inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-sm font-semibold text-blue-700 hover:bg-blue-50"><ArrowLeft className="h-4 w-4" /> Tất cả khóa học</Link>
        <div className="mb-5 rounded-2xl border border-violet-100 bg-gradient-to-r from-violet-50 to-blue-50 p-5 sm:p-6"><p className="text-xs font-semibold uppercase tracking-wide text-violet-700">Sheet gốc: {selectedGroup.sourceSheet}</p><h2 className="mt-1 text-2xl font-bold text-gray-900">{selectedGroup.name}</h2><p className="mt-2 text-sm text-gray-600">{lessons.length} bài học, {selectedGroup.vocabulary.length.toLocaleString()} từ.</p></div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">{lessons.map((item) => {
          const completed = completedLessonIds.includes(item.id)
          const learned = item.words.filter((word) => learnedVocabIds.includes(word.id)).length
          const firstWord = (item.number - 1) * 20 + 1
          const lastWord = firstWord + item.words.length - 1
          return <article key={item.id} className="flex min-h-40 flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"><div className="flex items-start justify-between gap-3"><div><h3 className="font-bold text-gray-900">Bài {item.number}</h3><p className="mt-1 text-xs text-gray-500">Từ {firstWord}–{lastWord} · {item.words.length} từ</p></div><span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${completed ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : learned ? 'border-blue-200 bg-blue-50 text-blue-700' : 'border-gray-200 bg-gray-50 text-gray-600'}`}>{completed ? 'Hoàn thành' : learned ? 'Đang học' : 'Chưa bắt đầu'}</span></div><div className="mt-auto flex items-center justify-between gap-3 pt-5"><span className="text-xs text-gray-500">Đã thuộc {learned}/{item.words.length}</span><div className="flex gap-2">{completed && <Link to={lessonHref(selectedGroup.id, item.number, true)} className="inline-flex min-h-11 items-center gap-1 rounded-lg border border-emerald-200 px-3 py-2 text-xs font-semibold text-emerald-700 hover:bg-emerald-50">Kết quả</Link>}<Link to={lessonHref(selectedGroup.id, item.number)} className="inline-flex min-h-11 items-center gap-1 rounded-lg bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-blue-700">{completed && <RotateCcw className="h-3.5 w-3.5" />}{completed ? 'Học lại' : 'Bắt đầu'} <ArrowRight className="h-3.5 w-3.5" /></Link></div></div></article>
        })}</div>
      </div>}
    </section>
  )
}
