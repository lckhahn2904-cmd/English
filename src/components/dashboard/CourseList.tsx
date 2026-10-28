import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { AlertCircle, ArrowRight, BookOpen, CheckCircle2, RefreshCw } from 'lucide-react'
import { useGuest } from '../../context/GuestContext'
import { useVocabulary } from '../../context/VocabularyContext'
import { createVocabularyLessons } from '../../services/vocabularyLessonService'

function studyHref(groupId: string, lessonNumber: number) {
  return `/dashboard/study?${new URLSearchParams({ course: groupId, lesson: String(lessonNumber) })}`
}

export default function CourseList() {
  const navigate = useNavigate()
  const { groups, isLoading, error, refetch } = useVocabulary()
  const { completedLessonIds } = useGuest()
  const courses = useMemo(() => groups.map((group) => ({
    group,
    lessons: createVocabularyLessons(group),
  })), [groups])
  const completedCount = (lessons: Array<{ id: string }>) =>
    lessons.filter((lesson) => completedLessonIds.includes(lesson.id)).length
  const nextCourse = courses.find(({ lessons }) => lessons.some((lesson) => !completedLessonIds.includes(lesson.id)))
  const nextLesson = nextCourse?.lessons.find((lesson) => !completedLessonIds.includes(lesson.id))

  return (
    <div className="space-y-4">
      <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-2xs" aria-labelledby="next-lesson-title">
        <div className="mb-4 flex items-center gap-2 text-blue-600">
          <BookOpen className="h-4 w-4" aria-hidden="true" />
          <p className="text-xs font-semibold uppercase tracking-wide">Bài học tiếp theo</p>
        </div>

        {isLoading && <p className="text-sm text-gray-500" role="status">Đang tải khóa học…</p>}
        {!isLoading && error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-3" role="alert">
            <div className="flex items-start gap-2 text-sm text-red-800">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <p>Không tải được danh sách khóa học: {error}</p>
            </div>
            <button onClick={() => refetch(true)} className="mt-3 inline-flex min-h-10 items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-xs font-semibold text-white hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500">
              <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" /> Thử tải lại
            </button>
          </div>
        )}
        {!isLoading && !error && nextCourse && nextLesson && (
          <>
            <h2 id="next-lesson-title" className="text-sm font-bold text-gray-900">{nextCourse.group.name} · Bài {nextLesson.number}</h2>
            <p className="mt-1 text-xs text-gray-500">{nextLesson.words.length} từ theo thứ tự trong nhóm gốc.</p>
            <button
              id="continue-lesson-btn"
              onClick={() => navigate(studyHref(nextCourse.group.id, nextLesson.number))}
              className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-2xs transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <BookOpen className="h-4 w-4" aria-hidden="true" /> Học bài này <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </>
        )}
        {!isLoading && !error && !nextLesson && courses.length > 0 && (
          <div className="flex items-center gap-2 text-sm font-medium text-emerald-700" role="status">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> Đã hoàn thành các bài trong phiên này.
          </div>
        )}
      </section>

      <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-2xs" aria-labelledby="course-list-title">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 id="course-list-title" className="text-sm font-semibold text-gray-900">Khóa từ vựng</h2>
          <button
            id="view-all-courses-btn"
            onClick={() => navigate('/dashboard/courses')}
            className="inline-flex min-h-10 items-center gap-1 rounded-lg px-2 text-xs font-medium text-blue-600 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Xem tất cả <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>

        {isLoading && <p className="text-sm text-gray-500" role="status">Đang tải nhóm từ vựng…</p>}
        {!isLoading && !error && courses.length > 0 && (
          <div className="space-y-3">
            {courses.map(({ group, lessons }) => {
              const done = completedCount(lessons)
              const percent = lessons.length ? Math.round((done / lessons.length) * 100) : 0
              return (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => navigate(`/dashboard/courses?course=${encodeURIComponent(group.id)}`)}
                  className="group flex min-h-16 w-full items-center gap-3 rounded-xl p-3 text-left transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label={`${group.name}, ${group.count} từ, ${done} trên ${lessons.length} bài hoàn thành trong phiên`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <BookOpen className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center justify-between gap-2">
                      <span className="truncate text-sm font-semibold text-gray-900">{group.name}</span>
                      <span className="shrink-0 text-[11px] text-gray-500">{group.count} từ</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-100" aria-hidden="true">
                        <div className="h-full rounded-full bg-blue-500 transition-all" style={{ width: `${percent}%` }} />
                      </div>
                      <span className="shrink-0 text-[11px] text-gray-500">{done}/{lessons.length} bài · {percent}%</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-gray-300 transition-colors group-hover:text-blue-600" aria-hidden="true" />
                </button>
              )
            })}
          </div>
        )}
        {!isLoading && !error && courses.length === 0 && <p className="text-sm text-gray-500">Chưa có nhóm từ vựng khả dụng.</p>}
        <p className="mt-3 border-t border-gray-100 pt-3 text-[11px] leading-relaxed text-gray-500">
          Tiến độ chỉ phản ánh hoạt động trong phiên hiện tại; chưa được lưu vào tài khoản.
        </p>
      </section>
    </div>
  )
}
