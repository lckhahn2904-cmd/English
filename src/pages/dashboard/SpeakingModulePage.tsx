import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Circle, GraduationCap } from 'lucide-react'
import { useGuest } from '../../context/GuestContext'
import { a0Modules } from '../../data/speakingCurriculum'

export default function SpeakingModulePage() {
  const { moduleId } = useParams()
  const module = a0Modules.find((item) => item.id === moduleId)
  const { completedLessonIds, activeSpeakingLessonId } = useGuest()

  if (!module) return <Navigate to="/dashboard/speaking" replace />

  const completed = module.lessons.filter((item) => completedLessonIds.includes(`speaking-${item.id}`)).length
  const activeLesson = module.lessons.find((item) => item.id === activeSpeakingLessonId && !completedLessonIds.includes(`speaking-${item.id}`))
  const nextLesson = activeLesson ?? module.lessons.find((item) => !completedLessonIds.includes(`speaking-${item.id}`))
  const percent = Math.round((completed / module.lessons.length) * 100)

  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <Link to="/dashboard/speaking" className="mb-5 inline-flex min-h-9 items-center gap-1.5 rounded-lg px-2 text-sm font-semibold text-blue-700 hover:bg-blue-50"><ArrowLeft className="h-4 w-4" /> Quay lại lộ trình giao tiếp</Link>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div><p className="text-xs font-bold uppercase tracking-wider text-blue-700">Cấp độ A0 · Module {module.code}</p><h1 className="mt-1 text-xl font-bold text-slate-950 sm:text-2xl">{module.title}</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{module.objective}</p></div>
          <div className="flex shrink-0 items-center gap-3 rounded-xl bg-slate-50 px-4 py-3"><GraduationCap className="h-5 w-5 text-blue-600" /><div><p className="text-sm font-bold text-slate-900">{completed}/{module.lessons.length} bài hoàn thành</p><p className="text-xs text-slate-500">Tiến độ trong phiên học hiện tại</p></div></div>
        </div>
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100" role="progressbar" aria-label="Tiến độ module" aria-valuemin={0} aria-valuemax={module.lessons.length} aria-valuenow={completed}><div className="h-full rounded-full bg-blue-600 transition-all" style={{ width: `${percent}%` }} /></div>
        {nextLesson && <Link to={`/dashboard/speaking/lesson/${nextLesson.id}`} className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">{activeLesson ? 'Tiếp tục bài đang học' : 'Bắt đầu bài tiếp theo'} <ArrowRight className="h-4 w-4" /></Link>}
        {!nextLesson && <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700"><CheckCircle2 className="h-4 w-4" /> Bạn đã hoàn thành module này trong phiên hiện tại.</p>}
      </header>

      <section aria-label={`Danh sách bài học module ${module.code}`} className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {module.lessons.map((item, index) => {
          const isComplete = completedLessonIds.includes(`speaking-${item.id}`)
          const isActive = item.id === activeSpeakingLessonId && !isComplete
          return (
            <Link key={item.id} to={`/dashboard/speaking/lesson/${item.id}`} className="group flex min-h-24 items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
              <span className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${isComplete ? 'bg-emerald-50 text-emerald-700' : isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>{isComplete ? <CheckCircle2 className="h-5 w-5" /> : isActive ? <BookOpen className="h-4 w-4" /> : String(index + 1).padStart(2, '0')}</span>
              <span className="min-w-0 flex-1"><span className="flex flex-wrap items-center gap-2"><span className="text-[11px] font-bold tracking-wide text-slate-400">{item.code}</span>{isActive && <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-700">Đang học</span>}{isComplete && <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">Hoàn thành</span>}</span><span className="mt-1 block text-sm font-semibold text-slate-900 group-hover:text-blue-700">{item.title}</span><span className="mt-1 block text-xs leading-5 text-slate-600">{item.objectives[0]}</span></span>
              {!isComplete && <Circle className="mt-2 h-4 w-4 shrink-0 text-slate-300" />}
            </Link>
          )
        })}
      </section>
    </div>
  )
}
