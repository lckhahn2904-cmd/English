import { useMemo, useState } from 'react'
import { CheckCircle2, Lightbulb, Mic, RotateCcw, Send, Volume2 } from 'lucide-react'
import type { A0Lesson } from '../../data/speakingCurriculum'
import { allA0Lessons } from '../../data/speakingCurriculum'
import { Link } from 'react-router-dom'
import { useGuest } from '../../context/GuestContext'
import { buildLearningContext, buildLearningIntelligence } from '../../services/learningIntelligenceService'

type SupportLevel = 'full' | 'guided' | 'limited' | 'independent'
type Turn = { role: 'learner' | 'coach'; text: string }

const supportOptions: { id: SupportLevel; label: string; description: string }[] = [
  { id: 'full', label: 'Full support', description: 'Xem câu mẫu đầy đủ.' },
  { id: 'guided', label: 'Guided support', description: 'Dùng từ khóa và khung câu.' },
  { id: 'limited', label: 'Limited support', description: 'Chỉ xem gợi ý nhỏ.' },
  { id: 'independent', label: 'Independent', description: 'Tự trả lời trước khi xem trợ giúp.' },
]

export default function GuidedSpeakingPractice({ lesson }: { lesson: A0Lesson }) {
  const { recordLearningEvidence, completedLessonIds, activeSpeakingLessonId, learningEvidence } = useGuest()
  const learningInput = { completedLessonIds, activeSpeakingLessonId, learningEvidence, learnedVocabulary: [], lessons: allA0Lessons }
  const intelligence = useMemo(() => buildLearningIntelligence(learningInput), [activeSpeakingLessonId, completedLessonIds, learningEvidence])
  const learningContext = buildLearningContext(intelligence, learningInput, allA0Lessons, lesson)
  const [support, setSupport] = useState<SupportLevel>(learningContext.supportLevel)
  const [taskIndex, setTaskIndex] = useState(0)
  const [answer, setAnswer] = useState('')
  const [turns, setTurns] = useState<Turn[]>([])
  const [showHelp, setShowHelp] = useState(false)
  const [finished, setFinished] = useState(false)
  const [selfCheck, setSelfCheck] = useState<boolean | null>(null)
  const [feedback, setFeedback] = useState('')
  const prompt = lesson.ai_conversation.openingQuestion
  const promptTranslation = lesson.ai_conversation.openingQuestionTranslation
  const output = lesson.exercises.find((exercise) => exercise.type === 'guided-output')
  const currentTask = lesson.speaking_tasks[Math.min(taskIndex, lesson.speaking_tasks.length - 1)]
  const supportHint = useMemo(() => {
    if (support === 'full') return output?.modelAnswer ?? currentTask?.sentenceStarter ?? ''
    if (support === 'guided') return lesson.sentence_patterns[0]?.formula ?? currentTask?.sentenceStarter ?? ''
    if (support === 'limited') return lesson.vocabulary.slice(0, 3).map((word) => word.word).join(' · ')
    return ''
  }, [currentTask, lesson, output, support])

  const submit = () => {
    const cleanAnswer = answer.trim()
    if (!cleanAnswer) return
    setTurns((previous) => [...previous, { role: 'learner', text: cleanAnswer }])
    recordLearningEvidence({
      activityId: `guided-text:${lesson.id}:${Date.now()}`,
      activityType: 'speaking-guided-practice',
      lessonId: lesson.id,
      knowledgeIds: lesson.knowledge.introduces,
      outcome: 'self-reported-practice',
    })
    setAnswer('')
    setShowHelp(true)
    setSelfCheck(null)
    setFeedback('')
  }

  const tryAgain = () => {
    setTurns((previous) => [...previous, { role: 'coach', text: 'Thử trả lời lại câu hỏi này nhé.' }])
    setShowHelp(false)
    setSelfCheck(null)
    setFeedback('')
  }

  const goNext = () => {
    if (turns.filter((turn) => turn.role === 'learner').length >= lesson.speaking_tasks.length) {
      setFinished(true)
      return
    }
    setTurns((previous) => [...previous, { role: 'coach', text: 'Tốt lắm, mình chuyển sang câu luyện tiếp theo nhé.' }])
    setTaskIndex((index) => Math.min(index + 1, lesson.speaking_tasks.length - 1))
    setShowHelp(false)
    setSelfCheck(null)
    setFeedback('')
  }

  const reset = () => {
    setTurns([])
    setTaskIndex(0)
    setAnswer('')
    setShowHelp(false)
    setFinished(false)
    setSelfCheck(null)
    setFeedback('')
  }

  return (
    <section className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6" aria-labelledby="guided-practice-heading">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div><p className="text-xs font-bold uppercase tracking-wider text-blue-700">Guided Speaking · {lesson.code}</p><h2 id="guided-practice-heading" className="mt-1 text-lg font-bold text-slate-950">Luyện trả lời từng câu</h2><p className="mt-1 text-sm leading-6 text-slate-600">Bài luyện tự hướng dẫn theo nội dung A0. Chưa kết nối AI, ghi âm hay chấm phát âm.</p></div>
        <label className="text-xs font-semibold text-slate-600">Mức hỗ trợ<select value={support} onChange={(event) => setSupport(event.target.value as SupportLevel)} className="mt-1 block min-h-10 rounded-lg border border-slate-200 bg-white px-2.5 text-sm text-slate-800">{supportOptions.map((option) => <option key={option.id} value={option.id}>{option.label}</option>)}</select></label>
      </div>

      {!finished ? <>
        <div className="mt-4 rounded-xl bg-blue-50 p-4"><p className="text-[11px] font-bold uppercase tracking-wide text-blue-700">Câu hỏi {taskIndex + 1} / {Math.max(lesson.speaking_tasks.length, 1)}</p><p className="mt-2 text-lg font-bold text-slate-950">{taskIndex === 0 ? prompt : currentTask?.prompt ?? prompt}</p><p className="mt-1 text-sm text-slate-600">{taskIndex === 0 ? promptTranslation : currentTask?.prompt}</p></div>

        <div className="mt-3 max-h-56 space-y-2 overflow-y-auto" aria-live="polite">{turns.map((turn, index) => <div key={`${index}-${turn.role}`} className={`max-w-[90%] rounded-xl px-3 py-2 text-sm leading-6 ${turn.role === 'learner' ? 'ml-auto bg-indigo-50 text-indigo-950' : 'bg-slate-100 text-slate-800'}`}><span className="mb-0.5 block text-[10px] font-bold uppercase tracking-wide text-slate-500">{turn.role === 'learner' ? 'Bạn' : 'Hướng dẫn'}</span>{turn.text}</div>)}</div>

        <label htmlFor="guided-speaking-answer" className="mt-4 block text-sm font-semibold text-slate-800">Câu trả lời của bạn</label>
        <textarea id="guided-speaking-answer" value={answer} onChange={(event) => setAnswer(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); submit() } }} rows={3} maxLength={500} className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" placeholder="Viết câu trả lời bằng tiếng Anh…" disabled={showHelp} />
        <div className="mt-2 flex flex-wrap gap-2"><button type="button" onClick={submit} disabled={!answer.trim() || showHelp} className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"><Send className="h-4 w-4" /> Gửi câu trả lời</button><button type="button" disabled aria-label="Voice mode chưa được tích hợp" className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-400"><Mic className="h-4 w-4" /> Voice chưa hỗ trợ</button><button type="button" onClick={reset} className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"><RotateCcw className="h-4 w-4" /> Làm lại</button></div>

        {showHelp && <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4"><div className="flex items-center gap-2 text-sm font-bold text-amber-950"><Lightbulb className="h-4 w-4" />Gợi ý học tập</div><p className="mt-2 text-xs leading-5 text-amber-900">Đây là gợi ý từ giáo trình, không phải AI phân tích câu trả lời của bạn.</p>{supportHint && <p className="mt-2 rounded-lg bg-white/80 p-3 text-sm font-semibold text-slate-900">{supportHint}</p>}{output?.explanation && <p className="mt-2 text-sm leading-6 text-slate-700">{output.explanation}</p>}<p className="mt-3 text-sm font-semibold text-slate-800">Bạn tự kiểm tra: câu trả lời có đúng mục tiêu bài học không?</p><div className="mt-2 flex flex-wrap gap-2"><button type="button" aria-pressed={selfCheck === true} onClick={() => { setSelfCheck(true); setFeedback('') }} className={`min-h-9 rounded-lg border px-3 text-xs font-semibold ${selfCheck === true ? 'border-emerald-400 bg-emerald-100 text-emerald-900' : 'border-slate-200 bg-white text-slate-700'}`}>Có, mình đã thử</button><button type="button" aria-pressed={selfCheck === false} onClick={() => { setSelfCheck(false); setFeedback('') }} className={`min-h-9 rounded-lg border px-3 text-xs font-semibold ${selfCheck === false ? 'border-amber-400 bg-amber-100 text-amber-900' : 'border-slate-200 bg-white text-slate-700'}`}>Mình muốn thử lại</button></div>{selfCheck === false && <button type="button" onClick={tryAgain} className="mt-3 inline-flex min-h-9 items-center gap-2 rounded-lg border border-amber-300 bg-white px-3 text-xs font-semibold text-amber-900"><RotateCcw className="h-3.5 w-3.5" />Thử lại câu này</button>}{selfCheck === true && <><label htmlFor="practice-reflection" className="mt-3 block text-xs font-semibold text-slate-700">Ghi chú của bạn (không lưu)</label><input id="practice-reflection" value={feedback} onChange={(event) => setFeedback(event.target.value)} maxLength={160} className="mt-1 min-h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm" placeholder="Từ hoặc cấu trúc muốn ôn lại…" /><button type="button" onClick={goNext} className="mt-3 inline-flex min-h-10 items-center gap-2 rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white hover:bg-blue-700"><CheckCircle2 className="h-4 w-4" />Câu tiếp theo</button></>}</div>}
      </> : <div className="mt-4 rounded-xl bg-emerald-50 p-4"><h3 className="font-bold text-emerald-950">Bạn đã hoàn thành lượt luyện này</h3><p className="mt-2 text-sm leading-6 text-emerald-900">Đã trả lời {turns.filter((turn) => turn.role === 'learner').length} câu trong bài {lesson.code}. Chưa có điểm số tự động; phát âm và độ trôi chảy chưa được đánh giá.</p>{feedback && <p className="mt-2 text-sm text-emerald-900">Ghi chú cuối: {feedback}</p>}<p className="mt-2 text-xs text-emerald-800">Phiên này chỉ nằm trong bộ nhớ của trang và sẽ mất khi rời hoặc tải lại.</p><button type="button" onClick={reset} className="mt-3 inline-flex min-h-10 items-center gap-2 rounded-lg border border-emerald-200 bg-white px-3 text-sm font-semibold text-emerald-800"><RotateCcw className="h-4 w-4" />Luyện lại</button></div>}

      {finished && <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2"><div className="rounded-xl border border-slate-200 p-3"><p className="text-xs font-bold uppercase tracking-wide text-slate-600">Mục tiêu đã thực hành</p><ul className="mt-2 space-y-1.5">{lesson.speaking_tasks.flatMap((task) => task.successCriteria).slice(0, 4).map((criterion) => <li key={criterion} className="flex gap-2 text-xs leading-5 text-slate-700"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />{criterion}</li>)}</ul></div><div className="rounded-xl border border-slate-200 p-3"><p className="text-xs font-bold uppercase tracking-wide text-slate-600">Nội dung để ôn lại</p><p className="mt-2 text-xs leading-5 text-slate-700">{lesson.sentence_patterns.map((pattern) => pattern.formula).join(' · ') || 'Xem lại mục tiêu bài học.'}</p><p className="mt-2 text-xs leading-5 text-slate-600">Từ vựng: {lesson.vocabulary.slice(0, 5).map((word) => word.word).join(', ') || 'theo nội dung bài học'}</p>{lesson.related_lessons.length > 0 && <p className="mt-2 text-xs text-slate-600">Bài liên quan: {lesson.related_lessons.map((code) => { const related = allA0Lessons.find((candidate) => candidate.code === code); return related ? <Link key={code} className="ml-1 font-semibold text-blue-700 hover:underline" to={`/dashboard/speaking/lesson/${related.id}`}>{code}</Link> : null })}</p>}</div></div>}

      <div className="mt-4 flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs leading-5 text-slate-600"><Volume2 className="mt-0.5 h-4 w-4 shrink-0" /><span>Âm thanh mẫu, speech-to-text, lưu phiên và đánh giá phát âm đang chờ dịch vụ phù hợp. Trình duyệt không được yêu cầu microphone trong bài luyện này.</span></div>
    </section>
  )
}
