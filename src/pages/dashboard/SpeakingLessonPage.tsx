import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, AudioLines, BookOpenCheck, Check, CheckCircle2, CircleHelp, Lightbulb, ListChecks, MessageCircle, VolumeX } from 'lucide-react'
import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { useGuest } from '../../context/GuestContext'
import { allA0Lessons, a0Modules, buildA0AIContext, speakingSupportLevels } from '../../data/speakingCurriculum'
import GuidedSpeakingPractice from '../../components/dashboard/GuidedSpeakingPractice'

function LessonSection({ title, children, icon: Icon }: { title: string; children: ReactNode; icon?: LucideIcon }) {
  return <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"><div className="mb-3 flex items-center gap-2">{Icon && <Icon className="h-5 w-5 text-blue-600" />}<h2 className="font-bold text-slate-900">{title}</h2></div>{children}</section>
}

function LessonLink({ code, label }: { code: string; label: string }) {
  const target = allA0Lessons.find((candidate) => candidate.code === code)
  if (!target) return <span className="text-xs text-slate-500">{label}</span>
  return <Link className="rounded-lg bg-blue-50 px-2.5 py-1.5 text-xs font-semibold text-blue-700 hover:bg-blue-100" to={`/dashboard/speaking/lesson/${target.id}`}>{label}</Link>
}

export default function SpeakingLessonPage() {
  const { lessonId } = useParams()
  const item = allA0Lessons.find((lesson) => lesson.id === lessonId?.toLowerCase())
  const parentModule = a0Modules.find((module) => module.lessons.some((lesson) => lesson.id === item?.id))
  const { completeLesson, completedLessonIds, activeSpeakingLessonId, setActiveSpeakingLesson, recordLearningEvidence } = useGuest()
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [checked, setChecked] = useState(false)
  const [draft, setDraft] = useState('')
  const [assessmentChecks, setAssessmentChecks] = useState<boolean[]>([])
  const isComplete = item ? completedLessonIds.includes(`speaking-${item.id}`) : false
  const quiz = item?.exercises.find((exercise) => exercise.type === 'multiple-choice')
  const outputTask = item?.exercises.find((exercise) => exercise.type === 'guided-output')
  const isCorrect = selectedAnswer === quiz?.answerIndex
  const assessmentReady = checked && isCorrect && !!item && item.assessment.criteria.every((_, index) => assessmentChecks[index])
  const aiContext = item ? buildA0AIContext(item, allA0Lessons, completedLessonIds) : null

  useEffect(() => {
    if (!item) return
    setActiveSpeakingLesson(item.id)
    setSelectedAnswer(null)
    setChecked(false)
    setDraft('')
    setAssessmentChecks([])
  }, [item?.id, setActiveSpeakingLesson])

  if (!item || !parentModule || !quiz || !outputTask || !aiContext) return <Navigate to="/dashboard/speaking" replace />

  const moduleIndex = a0Modules.findIndex((module) => module.id === parentModule.id)
  const lessonIndex = parentModule.lessons.findIndex((lesson) => lesson.id === item.id)
  const nextLesson = parentModule.lessons[lessonIndex + 1] ?? a0Modules[moduleIndex + 1]?.lessons[0]
  const handleComplete = () => {
    if (!assessmentReady || isComplete) return
    completeLesson(`speaking-${item.id}`, 0)
    if (activeSpeakingLessonId === item.id) setActiveSpeakingLesson(null)
  }
  const handleCheckQuiz = () => {
    if (selectedAnswer === null || checked) return
    setChecked(true)
    recordLearningEvidence({
      activityId: `speaking-lesson-check:${item.id}:${quiz.id}`,
      activityType: 'speaking-lesson-check',
      lessonId: item.id,
      knowledgeIds: item.knowledge.introduces,
      outcome: isCorrect ? 'met' : 'needs-support',
    })
  }
  const toggleAssessment = (index: number) => setAssessmentChecks((previous) => {
    const next = [...previous]
    next[index] = !next[index]
    return next
  })

  return (
    <div className="space-y-5">
      <header className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <Link to={`/dashboard/speaking/module/${parentModule.id}`} className="mb-5 inline-flex min-h-9 items-center gap-1.5 rounded-lg px-2 text-sm font-semibold text-blue-700 hover:bg-blue-50"><ArrowLeft className="h-4 w-4" /> Module {parentModule.code}</Link>
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700"><span>Cấp độ {item.level}</span><span aria-hidden="true">·</span><span>{parentModule.code}</span><span aria-hidden="true">·</span><span>{item.code} / {String(item.order).padStart(2, '0')}</span></div>
        <h1 className="mt-2 text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">{item.title}</h1>
        <p className="mt-1 text-sm font-medium text-slate-600">{item.title_vi}</p>
        <ul className="mt-4 space-y-1.5">{item.objectives.map((objective) => <li key={objective} className="flex gap-2 text-sm leading-6 text-slate-700"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-600" />{objective}</li>)}</ul>
        {isComplete && <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700"><CheckCircle2 className="h-4 w-4" /> Đã hoàn thành trong phiên hiện tại</p>}
      </header>

      <LessonSection title="Introduction" icon={Lightbulb}><p className="text-sm leading-6 text-slate-700">{item.introduction}</p></LessonSection>

      {item.alphabet && <LessonSection title="English Alphabet · 26 chữ cái" icon={BookOpenCheck}><div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-7">{item.alphabet.map((letter) => <article key={letter.letter} className="rounded-xl border border-slate-100 bg-slate-50 p-2 text-center"><p className="text-lg font-bold text-blue-700">{letter.letter}</p><p className="text-[11px] font-semibold text-slate-700">{letter.letterName}</p><p className="font-mono text-[10px] text-slate-500">{letter.ipa}</p></article>)}</div><p className="mt-3 text-xs leading-5 text-slate-500">Tên chữ cái và âm của chữ cái trong một từ không phải lúc nào cũng giống nhau. Z có tên zee trong tiếng Anh Mỹ và zed trong tiếng Anh Anh.</p></LessonSection>}

      {item.vocabulary.length > 0 && <LessonSection title="Vocabulary" icon={BookOpenCheck}><div className="grid grid-cols-1 gap-3 sm:grid-cols-2">{item.vocabulary.map((word) => <article key={word.word} className="rounded-xl border border-slate-100 bg-slate-50 p-3.5"><div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1"><h3 className="font-bold text-slate-950">{word.word}</h3><span className="font-mono text-xs text-indigo-700">{word.ipa}</span></div><p className="mt-1 text-sm text-slate-700">{word.meaning}<span className="ml-2 text-xs text-slate-500">{word.partOfSpeech}</span></p><p className="mt-2 text-sm font-medium text-slate-800">{word.example}</p><p className="text-xs text-slate-500">{word.exampleTranslation}</p>{word.usageNote && <p className="mt-2 text-xs leading-5 text-slate-600">Ghi chú: {word.usageNote}</p>}</article>)}</div></LessonSection>}

      <LessonSection title="Explanation" icon={Lightbulb}><div className="space-y-4">{item.explanations.map((explanation) => <div key={explanation.heading}><h3 className="text-sm font-semibold text-slate-900">{explanation.heading}</h3><p className="mt-1 text-sm leading-6 text-slate-700">{explanation.text}</p></div>)}</div></LessonSection>

      {item.sentence_patterns.length > 0 && <LessonSection title="Sentence Patterns" icon={BookOpenCheck}><div className="space-y-3">{item.sentence_patterns.map((pattern, index) => <article key={`${pattern.name}-${index}`} className="rounded-xl border border-blue-100 bg-blue-50/50 p-4"><h3 className="text-xs font-bold uppercase tracking-wide text-blue-800">{pattern.name}</h3><pre className="mt-2 whitespace-pre-wrap break-words rounded-lg bg-white px-3 py-2 font-mono text-sm font-semibold leading-6 text-slate-900">{pattern.formula}</pre><p className="mt-2 text-sm leading-6 text-slate-700">{pattern.explanation}</p><ul className="mt-2 space-y-1">{pattern.components.map((component) => <li key={component.label} className="text-xs leading-5 text-slate-600"><strong className="text-slate-800">{component.label}:</strong> {component.description}</li>)}</ul><div className="mt-3 border-t border-blue-100 pt-3"><p className="text-sm font-semibold text-slate-900">{pattern.example}</p><p className="text-xs text-slate-600">{pattern.exampleTranslation}</p><p className="mt-2 text-xs leading-5 text-amber-900"><strong>Lỗi thường gặp:</strong> {pattern.commonMistake}</p></div></article>)}</div></LessonSection>}

      <LessonSection title="Pronunciation" icon={AudioLines}><p className="text-sm leading-6 text-slate-700">{item.pronunciation.focus}</p><p className="mt-2 text-xs leading-5 text-slate-500">{item.pronunciation.explanation}</p>{item.pronunciation.examples.length > 0 && <div className="mt-3 flex flex-wrap gap-2">{item.pronunciation.examples.map((example) => <span key={example} className="rounded-lg bg-slate-100 px-2.5 py-1.5 font-mono text-xs text-slate-700">{example}</span>)}</div>}{item.pronunciation.commonConfusions.length > 0 && <div className="mt-3"><p className="text-xs font-semibold text-slate-700">Dễ nhầm</p><ul className="mt-1 list-disc space-y-1 pl-5 text-xs leading-5 text-slate-600">{item.pronunciation.commonConfusions.map((confusion) => <li key={confusion}>{confusion}</li>)}</ul></div>}<ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-6 text-slate-700">{item.pronunciation.practice.map((step) => <li key={step}>{step}</li>)}</ol><p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs leading-5 text-amber-950">Chưa có công cụ phân tích âm thanh. Hướng dẫn này không chấm độ chính xác phát âm.</p></LessonSection>

      <LessonSection title="Listening" icon={VolumeX}><div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800"><VolumeX className="h-4 w-4" /> Audio chờ tích hợp</div><p className="mt-3 text-sm font-medium text-slate-800">Mục tiêu nghe: {item.listening.purpose}</p><p className="mt-1 text-sm leading-6 text-slate-600">{item.listening.task}</p><details className="mt-3 rounded-xl border border-slate-200 p-3"><summary className="cursor-pointer text-xs font-semibold text-slate-700">Xem kịch bản dự kiến cho audio</summary><p className="mt-2 text-sm leading-6 text-slate-700">{item.listening.script}</p><p className="mt-2 text-xs text-slate-500">Đây là văn bản chờ thu âm/tích hợp, hiện chưa phát được.</p></details></LessonSection>

      <LessonSection title="Speaking" icon={MessageCircle}>{item.speaking_tasks.map((task, index) => <div key={`${task.prompt}-${index}`} className="space-y-2"><p className="text-sm font-semibold text-slate-900">{task.prompt}</p><ol className="list-decimal space-y-1 pl-5 text-sm leading-6 text-slate-700">{task.steps.map((step) => <li key={step}>{step}</li>)}</ol>{task.sentenceStarter && <div className="rounded-lg bg-indigo-50 px-3 py-2"><p className="text-[11px] font-bold uppercase tracking-wide text-indigo-700">Mẫu tham khảo</p><p className="mt-1 text-sm font-medium text-indigo-950">{task.sentenceStarter}</p></div>}<ul className="mt-2 space-y-1">{task.successCriteria.map((criterion) => <li key={criterion} className="flex gap-2 text-xs leading-5 text-slate-600"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />{criterion}</li>)}</ul></div>)}</LessonSection>

      <GuidedSpeakingPractice key={item.id} lesson={item} />

      <LessonSection title="AI integration status" icon={MessageCircle}><div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-900">Provider needed</span><span className="text-xs text-slate-600">Chưa kết nối AI, speech-to-text, text-to-speech hoặc công cụ đánh giá phát âm.</span></div><div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-wide text-slate-500">Tình huống giáo trình</p><p className="mt-1 text-sm text-slate-800">{item.ai_conversation.scenario}</p><p className="mt-2 text-xs leading-5 text-slate-600">Mục tiêu: {item.ai_conversation.goal}</p></div><div><p className="text-xs font-bold uppercase tracking-wide text-slate-500">Ngữ cảnh A0 có sẵn</p><p className="mt-1 text-sm text-slate-800">{aiContext.level} · {aiContext.currentLesson.code} · {aiContext.currentLesson.title}</p><p className="mt-2 text-xs leading-5 text-slate-600">Đã học: {aiContext.completedLessonCodes.join(", ") || "chưa có bài hoàn thành trong phiên"}.</p></div></div><p className="mt-3 text-xs leading-5 text-slate-600">Kiến thức được phép cho bài hiện tại: {aiContext.allowedKnowledge.join(" · ") || "nội dung bài hiện tại"}.</p><p className="mt-2 text-xs leading-5 text-amber-900">Kiến thức nền chưa học: {aiContext.missingPrerequisites.join(" · ") || "không có"}. AI tương lai cần giải thích kiến thức cần thiết trước khi hỏi.</p><p className="mt-2 text-xs font-semibold text-slate-600">Bốn mức hỗ trợ đã định nghĩa: {speakingSupportLevels.join(" · ")}.</p><p className="mt-2 text-xs leading-5 text-slate-600">Lượt chat ở trên là bài tự luyện dựa trên giáo trình; không gửi câu trả lời tới AI và không được chấm tự động.</p></LessonSection>

      <LessonSection title="Exercises" icon={ListChecks}>
        <article className="rounded-xl border border-slate-200 p-4"><p className="text-xs font-bold uppercase tracking-wide text-blue-700">Kiểm tra kiến thức</p><p className="mt-2 text-sm font-semibold text-slate-900">{quiz.prompt}</p><div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">{quiz.options?.map((option, index) => <button key={option} type="button" onClick={() => { setSelectedAnswer(index); setChecked(false) }} aria-pressed={selectedAnswer === index} className={`min-h-11 rounded-xl border px-3 py-2 text-left text-sm transition ${selectedAnswer === index ? 'border-blue-400 bg-blue-50 text-blue-900 ring-2 ring-blue-100' : 'border-slate-200 bg-white text-slate-700 hover:border-blue-200'}`}>{option}</button>)}</div><button disabled={selectedAnswer === null || checked} onClick={handleCheckQuiz} className="mt-3 inline-flex min-h-10 items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300">Kiểm tra đáp án <ArrowRight className="h-4 w-4" /></button>{checked && <p role="status" className={`mt-3 rounded-xl p-3 text-sm leading-6 ${isCorrect ? 'bg-emerald-50 text-emerald-900' : 'bg-amber-50 text-amber-950'}`}><strong>{isCorrect ? 'Chính xác. ' : 'Chưa đúng. '}</strong>{quiz.explanation}</p>}</article>
        <article className="mt-3 rounded-xl border border-indigo-100 bg-indigo-50/40 p-4"><p className="text-xs font-bold uppercase tracking-wide text-indigo-700">Nhiệm vụ đầu ra</p><p className="mt-2 text-sm font-semibold text-slate-900">{outputTask.prompt}</p><textarea value={draft} onChange={(event) => setDraft(event.target.value)} rows={3} className="mt-3 w-full resize-y rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" placeholder="Ghi câu trả lời của bạn hoặc thực hành nói thành tiếng…" /><details className="mt-2"><summary className="cursor-pointer text-xs font-semibold text-indigo-800">Xem một câu trả lời mẫu</summary><p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-700">{outputTask.modelAnswer}</p></details><p className="mt-2 text-xs leading-5 text-slate-600">{outputTask.explanation}</p></article>
      </LessonSection>

      <LessonSection title="Review" icon={CheckCircle2}><ul className="space-y-2">{item.review.map((point) => <li key={point} className="flex gap-2 text-sm leading-6 text-slate-700"><Check className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />{point}</li>)}</ul></LessonSection>

      <LessonSection title="Assessment" icon={CircleHelp}><p className="text-sm leading-6 text-slate-700">{item.assessment.task}</p><p className="mt-2 text-xs text-slate-600">Điều kiện đạt: {item.assessment.passRule}</p><div className="mt-3 space-y-2">{item.assessment.criteria.map((criterion, index) => <label key={criterion} className="flex cursor-pointer items-start gap-2 rounded-lg border border-slate-100 p-3 text-sm leading-5 text-slate-700"><input type="checkbox" checked={assessmentChecks[index] ?? false} onChange={() => toggleAssessment(index)} className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />{criterion}</label>)}</div><p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-xs leading-5 text-amber-950">{item.assessment.limitation}</p></LessonSection>

      <LessonSection title="Knowledge Map" icon={BookOpenCheck}><p className="text-sm text-slate-700">Kiến thức được giới thiệu ở bài này:</p><div className="mt-2 flex flex-wrap gap-2">{item.knowledge.introduces.map((id) => <span key={id} className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-800">{id}</span>)}</div>{item.prerequisites.length > 0 && <div className="mt-4"><p className="text-xs font-semibold text-slate-700">Kiến thức nền và bài liên quan</p><div className="mt-2 flex flex-wrap gap-2">{item.prerequisites.map((code) => <LessonLink key={code} code={code} label={`Học trước ${code}`} />)}</div></div>}{item.related_lessons.length > 0 && <div className="mt-3"><p className="text-xs font-semibold text-slate-700">Được ôn lại ở</p><div className="mt-2 flex flex-wrap gap-2">{item.related_lessons.map((code) => <LessonLink key={code} code={code} label={code} />)}</div></div>}</LessonSection>

      <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <p className="max-w-xl text-xs leading-5 text-slate-500">Tiến độ chỉ ở phiên hiện tại. Hoàn thành cần trả lời đúng câu hỏi kiến thức và tự xác nhận tiêu chí đánh giá, không chỉ nhấn nút.</p>
        <div className="flex flex-col gap-2 sm:flex-row">
          {!isComplete && <button onClick={handleComplete} disabled={!assessmentReady} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-300"><CheckCircle2 className="h-4 w-4" /> Xác nhận hoàn thành</button>}
          {nextLesson && <Link to={`/dashboard/speaking/lesson/${nextLesson.id}`} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">Bài tiếp theo <ArrowRight className="h-4 w-4" /></Link>}
          {!nextLesson && <Link to={`/dashboard/speaking/module/${parentModule.id}`} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">Trở lại module <ArrowLeft className="h-4 w-4" /></Link>}
        </div>
      </div>
    </div>
  )
}
