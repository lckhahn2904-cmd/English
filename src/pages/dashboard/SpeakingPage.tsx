import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, AudioLines, BookOpen, CheckCircle2, Clock3, GraduationCap, Headphones, LockKeyhole, MessageCircle, Mic2, Sparkles, Target } from 'lucide-react'
import { useGuest } from '../../context/GuestContext'
import { useVocabulary } from '../../context/VocabularyContext'
import { A0_KNOWLEDGE_UNITS, a0Modules, allA0Lessons, speakingAiModes, speakingSupportLevels } from '../../data/speakingCurriculum'
import { buildLearningIntelligence } from '../../services/learningIntelligenceService'
import { buildCommunicationLearningPath, getLearningGoalLabel } from '../../services/communicationLearningPathService'

const practiceOptions = [
  { id: 'pronunciation', title: 'Pronunciation & Intonation', description: 'Học IPA, âm dễ nhầm, trọng âm và tự ghi âm theo giáo trình A0.', icon: AudioLines, to: '/dashboard/speaking/pronunciation', active: true, tag: 'A0 · luyện thủ công' },
  { id: 'guided', title: 'Guided Speaking', description: 'Thực hành theo mục tiêu và mẫu câu trong các bài hội thoại A0.', icon: Mic2, to: '/dashboard/speaking/lesson/a025', active: true, tag: 'Có bài học' },
  { id: 'listening', title: 'Listening & Comprehension', description: 'Luyện đọc hiểu transcript giao tiếp và xem trạng thái audio của từng bài.', icon: Headphones, to: '/dashboard/speaking/listening', active: true, tag: 'Transcript practice' },
  { id: 'ai-conversation', title: 'AI Conversation', description: 'Chọn chủ đề, role-play, tình huống hàng ngày hoặc Free Talk theo nội dung A0.', icon: Sparkles, to: '/dashboard/conversation', active: true, tag: 'A0 · Bản nền' },
  { id: 'assessment', title: 'Communication Assessment', description: 'Chọn quiz transcript, nhiệm vụ nói tự kiểm tra, nhận diện IPA hoặc tình huống giao tiếp.', icon: Target, to: '/dashboard/communication-assessment', active: true, tag: 'Không chấm giọng tự động' },
]

export default function SpeakingPage() {
  const { completedLessonIds, activeSpeakingLessonId, learningEvidence, learnedVocabIds, communicationPathPreferences, updateCommunicationPathPreferences } = useGuest()
  const { allWords } = useVocabulary()
  const a0CompletedIds = new Set(completedLessonIds.filter((id) => id.startsWith('speaking-a')))
  const completedLessons = completedLessonIds.flatMap((completedId) => {
    const lesson = allA0Lessons.find((candidate) => completedId === `speaking-${candidate.id}`)
    return lesson ? [lesson] : []
  })
  const activeLesson = allA0Lessons.find((lesson) => lesson.id === activeSpeakingLessonId && !a0CompletedIds.has(`speaking-${lesson.id}`))
  const path = useMemo(() => buildCommunicationLearningPath(completedLessonIds, activeSpeakingLessonId), [completedLessonIds, activeSpeakingLessonId])
  const learningInput = useMemo(() => ({
    completedLessonIds,
    activeSpeakingLessonId,
    learningEvidence,
    learnedVocabulary: allWords.filter((word) => learnedVocabIds.includes(word.id)).map((word) => word.word),
    lessons: allA0Lessons,
  }), [activeSpeakingLessonId, allWords, completedLessonIds, learnedVocabIds, learningEvidence])
  const learningIntelligence = useMemo(() => buildLearningIntelligence(learningInput), [learningInput])
  const lastCompleted = [...completedLessons].reverse()[0]
  const continueLesson = path.nextLesson
  const currentLesson = activeLesson ?? lastCompleted
  const isA0Complete = completedLessons.length === allA0Lessons.length
  const progressPercent = path.overallPercentage
  const currentStage = path.stages.find((stage) => stage.id === path.currentStageId)
  const reviewRecommendations = learningIntelligence.recommendations.filter((recommendation) => recommendation.kind === 'review-knowledge')
  const preferredCategory = communicationPathPreferences.goal === 'daily-life' ? 'Daily Life'
    : communicationPathPreferences.goal === 'travel' ? 'Travel'
      : communicationPathPreferences.goal === 'workplace' ? 'Workplace'
        : communicationPathPreferences.goal === 'confidence' ? 'Job Interview' : null
  const focusedScenarios = path.stages.flatMap((stage) => stage.focusGoals.includes(communicationPathPreferences.goal) ? stage.scenarios : [])
    .sort((left, right) => Number(right.category === preferredCategory) - Number(left.category === preferredCategory))
    .slice(0, communicationPathPreferences.pace === 'light' ? 2 : 4)

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
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-wider text-blue-700">Learning Path</p><h2 id="speaking-path-heading" className="mt-1 text-lg font-bold text-slate-950 sm:text-xl">5 chặng học giao tiếp</h2></div><span className="text-xs text-slate-500">A0 có tiến độ theo 32 bài; chặng mở rộng không bị khóa</span></div>
        <div className="mb-4 grid gap-3 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4 sm:grid-cols-2"><label className="text-xs font-bold text-slate-700">Mục tiêu giao tiếp ưu tiên<select value={communicationPathPreferences.goal} onChange={(event) => updateCommunicationPathPreferences({ goal: event.target.value as typeof communicationPathPreferences.goal })} className="mt-1.5 min-h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm font-normal"><option value="general">Giao tiếp tổng quát</option><option value="daily-life">Đời sống hằng ngày</option><option value="travel">Du lịch</option><option value="workplace">Công việc</option><option value="confidence">Tự tin trò chuyện</option></select></label><label className="text-xs font-bold text-slate-700">Nhịp gợi ý<select value={communicationPathPreferences.pace} onChange={(event) => updateCommunicationPathPreferences({ pace: event.target.value as typeof communicationPathPreferences.pace })} className="mt-1.5 min-h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm font-normal"><option value="light">Nhẹ nhàng · 2 tình huống gợi ý</option><option value="steady">Đều đặn · 4 tình huống gợi ý</option></select></label><p className="text-[11px] leading-5 text-slate-600 sm:col-span-2">Tùy chỉnh chỉ sắp xếp số tình huống gợi ý; không thay đổi bài đã hoàn thành. Thiết lập giữ trong phiên này. Bạn có thể mở bất kỳ bài hoặc chặng nào.</p></div>
        <div className="mb-4 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:grid-cols-[1fr_auto] sm:items-center"><div><p className="text-xs font-bold uppercase tracking-wide text-slate-500">{currentStage ? 'Chặng hiện tại' : 'Phần nền tảng A0 đã hoàn thành'}</p><p className="mt-1 text-sm font-bold text-slate-900">{currentStage?.title ?? 'Bạn có thể khám phá các tình huống mở rộng'}</p><p className="mt-1 text-xs leading-5 text-slate-600">{currentStage?.goal ?? 'Chặng Workplace và Confident là thư viện luyện tập xem trước; chưa có dữ liệu hoàn thành cho các role-play này.'}</p></div><span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-800">{path.completedLessonCount}/{path.totalTrackedLessons} bài · {path.overallPercentage}%</span></div>
        <div className="space-y-3">{path.stages.map((stage, index) => <article key={stage.id} className={`rounded-2xl border bg-white p-4 shadow-sm ${stage.status === 'in-progress' ? 'border-blue-300 ring-1 ring-blue-100' : 'border-slate-200'}`}><div className="flex items-start gap-3"><span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-extrabold ${stage.status === 'complete' ? 'bg-emerald-100 text-emerald-800' : stage.status === 'in-progress' ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-600'}`}>{stage.status === 'complete' ? <CheckCircle2 className="h-4 w-4" /> : index + 1}</span><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center justify-between gap-2"><h3 className="text-sm font-bold text-slate-950">Stage {index + 1} · {stage.title}</h3><span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${stage.status === 'complete' ? 'bg-emerald-50 text-emerald-800' : stage.status === 'in-progress' ? 'bg-blue-50 text-blue-800' : stage.status === 'practice-preview' ? 'bg-amber-50 text-amber-900' : 'bg-slate-100 text-slate-600'}`}>{stage.status === 'complete' ? 'Hoàn thành theo bài học' : stage.status === 'in-progress' ? 'Đang học' : stage.status === 'practice-preview' ? 'Thư viện xem trước · chưa theo dõi' : 'Có thể tiếp tục · tự chọn'}</span></div><p className="mt-1 text-xs leading-5 text-slate-600">{stage.goal}</p>{stage.progressPercentage !== null ? <><div className="mt-3 flex items-center justify-between text-[10px] text-slate-500"><span>{stage.completedLessonCount}/{stage.trackedLessonCount} bài học hoàn thành</span><span>{stage.progressPercentage}%</span></div><div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100" role="progressbar" aria-label={`Tiến độ ${stage.title}`} aria-valuemin={0} aria-valuemax={stage.trackedLessonCount} aria-valuenow={stage.completedLessonCount}><div className="h-full rounded-full bg-blue-600" style={{ width: `${stage.progressPercentage}%` }} /></div></> : <p className="mt-2 text-[11px] leading-5 text-amber-900">Có tình huống luyện tập, nhưng hội thoại AI chưa kết nối nên chưa thể xác nhận hoàn thành.</p>}
          <details className="mt-3"><summary className="min-h-9 cursor-pointer text-xs font-bold text-blue-700">Xem bài học và tình huống trong chặng</summary>{stage.lessons.length > 0 && <ul className="mt-2 divide-y divide-slate-100 rounded-xl border border-slate-100">{stage.lessons.map((lesson) => {const done = a0CompletedIds.has(`speaking-${lesson.id}`);const active = activeLesson?.id === lesson.id;const supported = [lesson.vocabulary.length > 0 && 'Từ vựng', lesson.listening.script.trim() && 'Transcript', lesson.pronunciation.focus && 'Phát âm', lesson.speaking_tasks.length > 0 && 'Speaking'].filter(Boolean);return <li key={lesson.id} className="flex flex-col gap-2 p-3 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-xs font-semibold text-slate-900">{lesson.code} · {lesson.title}{active && <span className="ml-2 rounded bg-blue-50 px-1.5 py-0.5 text-[9px] text-blue-700">Đang học</span>}</p><p className="mt-1 text-[10px] text-slate-500">{supported.join(' · ')}</p></div><div className="flex items-center gap-3"><span className={`text-[10px] font-semibold ${done ? 'text-emerald-700' : 'text-slate-500'}`}>{done ? 'Hoàn thành' : 'Chưa hoàn thành'}</span><Link to={`/dashboard/speaking/lesson/${lesson.id}`} className="text-xs font-bold text-blue-700 hover:underline">{done ? 'Ôn lại' : active ? 'Tiếp tục' : 'Mở bài'}</Link><Link to={`/dashboard/speaking/listening/a0-${lesson.id}`} className="text-[10px] font-semibold text-slate-600 hover:underline">Transcript</Link></div></li>})}</ul>}{stage.scenarios.length > 0 && <div className="mt-3"><p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">Tình huống liên quan</p><div className="mt-2 flex flex-wrap gap-2">{stage.scenarios.map((scenario) => <Link key={scenario.id} to={`/dashboard/conversation?scenario=${scenario.id}`} className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-[10px] font-semibold text-indigo-800 hover:bg-indigo-100">{scenario.title}</Link>)}</div></div>}<div className="mt-3 flex flex-wrap gap-2"><Link to="/dashboard/speaking/pronunciation" className="text-[10px] font-semibold text-slate-600 hover:underline">Pronunciation</Link><Link to="/dashboard/speaking/listening" className="text-[10px] font-semibold text-slate-600 hover:underline">Listening & transcript</Link><Link to="/dashboard/communication-assessment" className="text-[10px] font-semibold text-slate-600 hover:underline">Assessment</Link></div></details></div></div></article>)}</div>
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

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2" aria-label="Ôn tập và chủ đề ưu tiên">
        <article className="rounded-2xl border border-amber-100 bg-amber-50/50 p-5 shadow-sm"><div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-amber-700" /><h2 className="text-sm font-bold text-slate-900">Review Recommended · Smart Review</h2></div>{reviewRecommendations.length > 0 ? <><p className="mt-2 text-xs leading-5 text-slate-600">Đề xuất từ kết quả cần hỗ trợ được ghi nhận ở nhiều hoạt động.</p><ul className="mt-3 space-y-2">{reviewRecommendations.map((item) => <li key={item.id} className="rounded-xl bg-white p-3"><p className="text-xs font-bold text-slate-900">{item.activity}</p><p className="mt-1 text-[11px] leading-5 text-slate-600">{item.reason}</p>{item.lessonId && <Link to={`/dashboard/speaking/lesson/${item.lessonId}`} className="mt-2 inline-flex min-h-8 items-center gap-1 text-xs font-semibold text-blue-700 hover:underline">Ôn bài gốc <ArrowRight className="h-3 w-3" /></Link>}</li>)}</ul></> : <p className="mt-2 text-xs leading-5 text-slate-600">Chưa có đủ kết quả lặp lại để xác định điểm cần ôn. Bạn vẫn có thể tự chọn một bài bất kỳ.</p>}</article>
        <article className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5 shadow-sm"><div className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-indigo-700" /><h2 className="text-sm font-bold text-slate-900">Gợi ý theo mục tiêu · {getLearningGoalLabel(communicationPathPreferences.goal)}</h2></div><p className="mt-2 text-xs leading-5 text-slate-600">{focusedScenarios.length ? `${focusedScenarios.length} tình huống được ưu tiên theo thiết lập của bạn. Đây là nội dung luyện mở, chưa ghi nhận hoàn thành.` : 'Chưa có tình huống khớp mục tiêu này.'}</p><ul className="mt-3 space-y-2">{focusedScenarios.map((scenario) => <li key={scenario.id} className="flex items-center justify-between gap-2 rounded-xl bg-white p-3"><span><span className="block text-xs font-bold text-slate-900">{scenario.title}</span><span className="text-[10px] text-slate-500">{scenario.category} · {scenario.level} đề xuất</span></span><Link to={`/dashboard/conversation?scenario=${scenario.id}`} className="text-xs font-bold text-indigo-700 hover:underline">Mở</Link></li>)}</ul></article>
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
