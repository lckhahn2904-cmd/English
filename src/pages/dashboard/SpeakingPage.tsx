import { Link } from 'react-router-dom'
import { ArrowRight, AudioLines, BookOpen, CheckCircle2, Clock3, GraduationCap, LockKeyhole, MessageCircle, Mic2, Sparkles, Target } from 'lucide-react'
import { useGuest } from '../../context/GuestContext'
import { A0_KNOWLEDGE_UNITS, a0Modules, allA0Lessons, speakingAiModes, speakingLevels, speakingSupportLevels } from '../../data/speakingCurriculum'

const practiceOptions = [
  { id: 'pronunciation', title: 'Pronunciation Practice', description: 'Luyện chữ cái, nguyên âm, phụ âm và trọng âm với hướng dẫn theo bài A0.', icon: AudioLines, to: '/dashboard/speaking/lesson/a003', active: true, tag: 'Có bài học' },
  { id: 'guided', title: 'Guided Speaking', description: 'Thực hành theo mục tiêu và mẫu câu trong các bài hội thoại A0.', icon: Mic2, to: '/dashboard/speaking/lesson/a025', active: true, tag: 'Có bài học' },
  { id: 'ai-conversation', title: 'AI Conversation', description: 'Hội thoại tự do với AI chưa được kết nối trong phiên bản này.', icon: Sparkles, active: false, tag: 'Coming Soon' },
  { id: 'assessment', title: 'Speaking Assessment', description: 'Đánh giá trình độ nói tự động chưa được triển khai.', icon: Target, active: false, tag: 'Coming Soon' },
]

export default function SpeakingPage() {
  const { completedLessonIds, activeSpeakingLessonId } = useGuest()
  const a0CompletedIds = new Set(completedLessonIds.filter((id) => id.startsWith('speaking-a')))
  const completedLessons = allA0Lessons.filter((lesson) => a0CompletedIds.has(`speaking-${lesson.id}`))
  const activeLesson = allA0Lessons.find((lesson) => lesson.id === activeSpeakingLessonId && !a0CompletedIds.has(`speaking-${lesson.id}`))
  const lastCompleted = [...completedLessons].reverse()[0]
  const continueLesson = activeLesson ?? (() => {
    const recentIndex = lastCompleted ? allA0Lessons.findIndex((lesson) => lesson.id === lastCompleted.id) : -1
    return allA0Lessons.slice(recentIndex + 1).find((lesson) => !a0CompletedIds.has(`speaking-${lesson.id}`))
      ?? allA0Lessons.find((lesson) => !a0CompletedIds.has(`speaking-${lesson.id}`))
  })()
  const currentLesson = activeLesson ?? lastCompleted
  const isA0Complete = completedLessons.length === allA0Lessons.length
  const progressPercent = Math.round((completedLessons.length / allA0Lessons.length) * 100)

  return (
    <div className="space-y-7">
      <header className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-3xl"><div className="flex items-center gap-2"><MessageCircle className="h-6 w-6 text-blue-600" /><h1 className="text-xl font-bold text-slate-950 sm:text-2xl">Giao tiếp tiếng Anh</h1></div><p className="mt-2 text-sm leading-6 text-slate-600">Xây nền tảng giao tiếp từ phát âm, từ vựng và câu đơn giản đến những hội thoại đầu tiên.</p></div>
          <div className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl border border-slate-200 bg-slate-50 px-3 py-2"><span className="text-xs text-slate-500">Cấp độ hiện tại</span><span className="rounded-lg bg-white px-2 py-1 text-xs font-bold text-slate-700 shadow-sm">Chưa xác định</span></div>
        </div>
        <p className="mt-4 text-xs text-slate-500">Chưa có dữ liệu đánh giá CEFR trong hệ thống. A0 là lộ trình nền tảng khả dụng, không phải kết quả đánh giá đầu vào.</p>
        <p className="mt-3 rounded-xl bg-blue-50 px-4 py-3 text-xs leading-5 text-blue-950"><strong>Kết quả kỳ vọng A0:</strong> nhận diện chữ cái, dùng từ vựng và câu đơn giản, chào hỏi và giới thiệu bản thân; hiểu câu ngắn khi người đối diện nói chậm, rõ. A0 không đặt mục tiêu giao tiếp lưu loát.</p>
      </header>

      <section aria-labelledby="speaking-path-heading">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-wider text-blue-700">Learning Path</p><h2 id="speaking-path-heading" className="mt-1 text-lg font-bold text-slate-950 sm:text-xl">Lộ trình A0 đến B2</h2></div><span className="text-xs text-slate-500">Chỉ A0 có giáo trình trong phiên bản này</span></div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
          {speakingLevels.map((level) => {
            const available = level.status === 'available'
            return available ? (
              <Link key={level.id} to="/dashboard/speaking/module/a0-01" className="group min-h-32 rounded-2xl border border-blue-200 bg-white p-4 shadow-sm transition hover:border-blue-400 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                <span className="flex items-center justify-between"><span className="text-lg font-extrabold text-blue-700">{level.label}</span><CheckCircle2 className="h-4 w-4 text-blue-600" /></span><span className="mt-1 block text-xs font-semibold text-slate-800">{level.title}</span><span className="mt-2 block text-[11px] leading-4 text-slate-500">Đang triển khai · {completedLessons.length}/{allA0Lessons.length} bài</span>
              </Link>
            ) : (
              <article key={level.id} className="min-h-32 rounded-2xl border border-slate-200 bg-slate-50 p-4"><span className="flex items-center justify-between"><span className="text-lg font-extrabold text-slate-400">{level.label}</span><LockKeyhole className="h-4 w-4 text-slate-400" /></span><span className="mt-1 block text-xs font-semibold text-slate-600">{level.title}</span><span className="mt-2 block text-[11px] leading-4 text-slate-500">Chưa triển khai</span></article>
            )
          })}
        </div>
      </section>

      <section aria-labelledby="speaking-practice-heading">
        <div className="mb-4"><p className="text-xs font-bold uppercase tracking-wider text-blue-700">Practice</p><h2 id="speaking-practice-heading" className="mt-1 text-lg font-bold text-slate-950 sm:text-xl">Khu vực luyện tập</h2></div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {practiceOptions.map(({ id, title, description, icon: Icon, to, active, tag }) => {
            const card = <><span className={`flex h-10 w-10 items-center justify-center rounded-xl ${active ? 'bg-blue-50 text-blue-700' : 'bg-slate-100 text-slate-500'}`}><Icon className="h-5 w-5" /></span><span className="mt-4 flex items-center justify-between gap-2"><span className="text-sm font-bold text-slate-900">{title}</span>{!active && <LockKeyhole className="h-3.5 w-3.5 shrink-0 text-slate-400" />}</span><span className="mt-2 flex-1 text-xs leading-5 text-slate-600">{description}</span><span className={`mt-4 inline-flex self-start rounded-full px-2.5 py-1 text-[10px] font-semibold ${active ? 'bg-blue-50 text-blue-700' : 'bg-slate-100 text-slate-500'}`}>{tag}</span></>
            return active && to ? <Link key={id} to={to} className="flex min-h-52 flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">{card}</Link> : <article key={id} aria-label={`${title}: Coming Soon`} className="flex min-h-52 flex-col rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4">{card}</article>
          })}
        </div>
        <div className="mt-3 rounded-xl border border-indigo-100 bg-indigo-50/60 px-4 py-3 text-xs leading-5 text-indigo-950"><strong>Khung tích hợp AI đã được chuẩn bị:</strong> AI Teacher, Guided Speaking và Free Conversation; ngữ cảnh thiết kế gồm cấp độ, module, bài học, từ vựng/ngữ pháp đã học, lỗi thường gặp và lịch sử. 4 mức hỗ trợ: {speakingSupportLevels.join(' · ')}. Chưa kết nối nhà cung cấp AI hoặc công cụ giọng nói.</div>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">{speakingAiModes.map((mode) => <div key={mode.id} className="flex items-center justify-between gap-2 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-3 py-2.5"><span className="text-xs font-semibold text-slate-700">{mode.title}</span><span className="rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-slate-500">Coming Soon</span></div>)}</div>
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-[1.2fr_0.8fr]" aria-label="Tiếp tục học và tiến độ">
        <article className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center gap-2 text-blue-700"><BookOpen className="h-5 w-5" /><h2 className="font-bold">Continue Learning</h2></div>
          {currentLesson ? <><p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-500">{activeLesson ? 'Bài đang học' : 'Bài hoàn thành gần nhất · phiên hiện tại'}</p><h3 className="mt-1 text-lg font-bold text-slate-950">{currentLesson.code} · {currentLesson.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{currentLesson.objectives[0]}</p>{continueLesson ? <Link to={`/dashboard/speaking/lesson/${continueLesson.id}`} className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">{activeLesson ? 'Tiếp tục học' : 'Học bài tiếp theo'} <ArrowRight className="h-4 w-4" /></Link> : <p className="mt-4 text-sm font-semibold text-emerald-700">Bạn đã hoàn thành 32 bài A0 trong phiên này.</p>}</> : <><p className="mt-3 text-sm leading-6 text-slate-600">Bạn chưa có bài học giao tiếp nào trong phiên hiện tại. Bắt đầu với lộ trình A0.</p><Link to="/dashboard/speaking/module/a0-01" className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Bắt đầu A0 <ArrowRight className="h-4 w-4" /></Link></>}
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center gap-2"><GraduationCap className="h-5 w-5 text-indigo-600" /><h2 className="font-bold text-slate-900">Learning Progress</h2></div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-slate-500">Bài hoàn thành</p><p className="mt-1 text-xl font-bold text-slate-900">{completedLessons.length}<span className="text-sm font-medium text-slate-400">/{allA0Lessons.length}</span></p></div>
            <div className="rounded-xl bg-slate-50 p-3"><p className="text-xs text-slate-500">Bài đang học</p><p className="mt-1 text-xl font-bold text-slate-900">{activeLesson ? 1 : 0}</p></div>
          </div>
          <div className="mt-4 flex items-center justify-between text-xs"><span className="font-semibold text-slate-700">Tiến độ A0</span><span className="text-slate-500">{progressPercent}%</span></div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100" role="progressbar" aria-label="Tiến độ lộ trình A0" aria-valuemin={0} aria-valuemax={allA0Lessons.length} aria-valuenow={completedLessons.length}><div className="h-full rounded-full bg-indigo-600 transition-all" style={{ width: `${progressPercent}%` }} /></div>
          <div className="mt-4 space-y-2">{a0Modules.map((module) => {const complete = module.lessons.filter((lesson) => a0CompletedIds.has(`speaking-${lesson.id}`)).length; return <div key={module.id} className="flex items-center justify-between gap-2 text-xs"><span className="truncate text-slate-600">{module.code} · {module.title}</span><span className="shrink-0 font-semibold text-slate-700">{complete}/{module.lessons.length}</span></div>})}</div>
          <div className="mt-4 border-t border-slate-100 pt-3"><div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700"><Clock3 className="h-3.5 w-3.5" /> Lịch sử luyện tập</div>{completedLessons.length === 0 ? <p className="mt-2 text-xs leading-5 text-slate-500">Chưa có lịch sử trong phiên hiện tại.</p> : <ul className="mt-2 space-y-1.5">{completedLessons.slice(-3).reverse().map((lesson) => <li key={lesson.id}><Link to={`/dashboard/speaking/lesson/${lesson.id}`} className="text-xs text-blue-700 hover:underline">{lesson.code} · {lesson.title}</Link><span className="ml-2 text-[10px] text-slate-400">Phiên hiện tại</span></li>)}</ul>}</div>
          <p className="mt-3 text-[11px] leading-5 text-slate-500">Tiến độ không được lưu vào Supabase và sẽ mất khi tải lại trang. Chưa có dữ liệu đánh giá CEFR.</p>
          {isA0Complete && <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700"><CheckCircle2 className="h-4 w-4" /> Hoàn thành A0 trong phiên này</div>}
        </article>
      </section>

      <section aria-labelledby="a0-modules-heading">
        <div className="mb-4 flex items-end justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-wider text-blue-700">A0 · Beginner Foundation</p><h2 id="a0-modules-heading" className="mt-1 text-lg font-bold text-slate-950 sm:text-xl">4 module · 32 bài học</h2></div><span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm">{completedLessons.length}/{allA0Lessons.length} hoàn thành</span></div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {a0Modules.map((module) => {const done = module.lessons.filter((lesson) => a0CompletedIds.has(`speaking-${lesson.id}`)).length;return <Link key={module.id} to={`/dashboard/speaking/module/${module.id}`} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md"><div className="flex items-start justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-wider text-blue-700">Module {module.code}</p><h3 className="mt-1 font-bold text-slate-900 group-hover:text-blue-700">{module.title}</h3></div><span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">{done}/8</span></div><p className="mt-2 text-sm leading-6 text-slate-600">{module.objective}</p><div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-blue-600" style={{ width: `${Math.round((done / 8) * 100)}%` }} /></div><span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-700">Mở module <ArrowRight className="h-3.5 w-3.5" /></span></Link>})}
        </div>
      </section>

      <section aria-labelledby="a0-knowledge-map-heading" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <details>
          <summary id="a0-knowledge-map-heading" className="cursor-pointer list-none text-lg font-bold text-slate-950 marker:hidden">Bản đồ kiến thức A0 · lần đầu học, kiến thức nền và bài ôn</summary>
          <p className="mt-2 text-sm leading-6 text-slate-600">Mỗi khái niệm có bài giới thiệu đầu tiên, các kiến thức cần có trước và những bài sẽ ôn lại.</p>
          <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-2">
            {A0_KNOWLEDGE_UNITS.map((unit) => {
              const introductoryLesson = allA0Lessons.find((lesson) => lesson.code === unit.introducedIn)
              const lessonTitle = introductoryLesson?.title ?? unit.introducedIn
              return <article key={unit.id} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex flex-wrap items-start justify-between gap-2"><h3 className="text-sm font-semibold text-slate-900">{unit.title}</h3><span className="rounded-full bg-white px-2 py-1 text-[10px] font-semibold uppercase text-slate-500">{unit.area}</span></div>
                <p className="mt-2 text-xs text-slate-600">Giới thiệu lần đầu: <Link className="font-semibold text-blue-700 hover:underline" to={`/dashboard/speaking/lesson/${introductoryLesson?.id ?? ''}`}>{unit.introducedIn} · {lessonTitle}</Link></p>
                {unit.buildsOn.length > 0 && <p className="mt-2 text-xs leading-5 text-slate-600">Kiến thức nền: {unit.buildsOn.map((id) => A0_KNOWLEDGE_UNITS.find((candidate) => candidate.id === id)?.title ?? id).join(' · ')}</p>}
                {unit.reinforcedIn.length > 0 && <div className="mt-2 flex flex-wrap items-center gap-1.5"><span className="text-xs text-slate-500">Ôn lại:</span>{unit.reinforcedIn.map((code) => {const related = allA0Lessons.find((lesson) => lesson.code === code); return <Link key={code} to={`/dashboard/speaking/lesson/${related?.id ?? ''}`} className="rounded-md bg-white px-2 py-1 text-[10px] font-semibold text-blue-700 hover:bg-blue-100">{code}</Link>})}</div>}
              </article>
            })}
          </div>
        </details>
      </section>

    </div>
  )
}
