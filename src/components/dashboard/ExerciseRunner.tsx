import { useState } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2, RotateCcw, XCircle } from 'lucide-react'
import type { ExerciseCatalogItem } from '../../services/exerciseCatalog'

const normalize = (value: string) => value.trim().toLocaleLowerCase().replace(/[.!?]+$/g, '').replace(/\s+/g, ' ')

function activityName(item: ExerciseCatalogItem) {
  switch (item.practiceKind) {
    case 'guided-output': return 'Tạo câu trả lời'
    case 'self-assessment': return 'Tự đánh giá'
    case 'role-play': return 'Đóng vai tình huống'
    case 'transcript-comprehension': return 'Đọc hiểu transcript'
    case 'audio-listening': return 'Nghe audio'
    default: return 'Câu hỏi'
  }
}

export default function ExerciseRunner({
  items,
  onExit,
  onRestart,
  onComplete,
}: {
  items: ExerciseCatalogItem[]
  onExit: () => void
  onRestart: () => void
  onComplete?: (result: { items: ExerciseCatalogItem[]; outcomes: Record<string, boolean>; choiceIndexes: Record<string, number> }) => number
}) {
  const [index, setIndex] = useState(0)
  const [answer, setAnswer] = useState('')
  const [orderedTokens, setOrderedTokens] = useState<number[]>([])
  const [checked, setChecked] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [score, setScore] = useState(0)
  const [outcomes, setOutcomes] = useState<Record<string, boolean>>({})
  const [choiceIndexes, setChoiceIndexes] = useState<Record<string, number>>({})
  const [activityDone, setActivityDone] = useState(false)
  const [practiceResponse, setPracticeResponse] = useState('')
  const [selfChecks, setSelfChecks] = useState<Record<number, boolean>>({})
  const [finished, setFinished] = useState(false)
  const [savedQuizCount, setSavedQuizCount] = useState(0)

  const item = items[index]
  const tokenAnswer = item?.tokens ? orderedTokens.map((tokenIndex) => item.tokens?.[tokenIndex] ?? '').join(' ') : ''
  const resolvedAnswer = item?.questionType === 'word-order' ? tokenAnswer : answer
  const canCheck = Boolean(resolvedAnswer.trim())
  const choicesAreAnswers = item?.questionType === 'multiple-choice' || item?.questionType === 'transcript-comprehension'
  const progress = items.length ? ((index + (checked || activityDone ? 1 : 0)) / items.length) * 100 : 0
  const automaticTotal = items.filter((entry) => entry.scoring === 'automatic').length
  const activityTotal = items.length - automaticTotal

  const checkAnswer = () => {
    if (!item || !canCheck || checked) return
    const result = (item.answers ?? []).some((expected) => normalize(expected) === normalize(resolvedAnswer))
    setCorrect(result)
    setChecked(true)
    setOutcomes((current) => ({ ...current, [item.id]: result }))
    const selectedChoiceIndex = item.choices?.findIndex((choice) => normalize(choice) === normalize(resolvedAnswer)) ?? -1
    if (selectedChoiceIndex >= 0) setChoiceIndexes((current) => ({ ...current, [item.id]: selectedChoiceIndex }))
    if (result) setScore((current) => current + 1)
  }

  const nextItem = () => {
    if (index >= items.length - 1) {
      setSavedQuizCount(onComplete?.({ items, outcomes, choiceIndexes }) ?? 0)
      setFinished(true)
      return
    }
    setIndex((current) => current + 1)
    setAnswer('')
    setOrderedTokens([])
    setChecked(false)
    setCorrect(false)
    setActivityDone(false)
    setPracticeResponse('')
    setSelfChecks({})
  }

  if (!items.length) {
    return <section className="rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center">
      <h2 className="font-bold text-gray-900">Chưa có bài luyện trong lựa chọn này</h2>
      <p className="mt-2 text-sm text-gray-600">Hãy quay lại và chọn chủ đề có nội dung trong catalog.</p>
      <button onClick={onExit} className="mt-4 rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700">Quay lại</button>
    </section>
  }

  if (finished) {
    return <section className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm sm:p-9">
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700"><CheckCircle2 className="h-6 w-6" /></span>
      <p className="mt-4 text-xs font-bold uppercase tracking-wide text-blue-700">Hoàn thành lượt luyện</p>
      <h2 className="mt-2 text-2xl font-extrabold text-gray-900">Kết quả của bạn</h2>
      {automaticTotal > 0 && <p className="mt-3 text-lg font-bold text-gray-900">{score}/{automaticTotal} câu đúng</p>}
      {activityTotal > 0 && <p className="mt-2 text-sm text-gray-600">Bạn đã đi qua {activityTotal} hoạt động cần tự luyện hoặc tự đánh giá.</p>}
      <p className="mt-2 text-xs text-gray-500">{savedQuizCount > 0 ? `Đã lưu kết quả cho ${savedQuizCount} quiz bài học đã hoàn thành đủ câu.` : 'Kết quả lượt này chỉ hiển thị tại chỗ, chưa được lưu vào tiến độ học tập.'}</p>
      <div className="mt-6 flex flex-col justify-center gap-2 sm:flex-row">
        <button onClick={onRestart} className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white"><RotateCcw className="h-4 w-4" />Luyện lại</button>
        <button onClick={onExit} className="inline-flex min-h-10 items-center justify-center rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700">Về danh sách</button>
      </div>
    </section>
  }

  return <section className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
    <header className="border-b border-gray-100 p-4 sm:p-6">
      <button onClick={onExit} className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-900"><ArrowLeft className="h-4 w-4" />Quay lại danh sách</button>
      <div className="mt-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-blue-700">{item.topicTitle ?? item.contentGroup} · {activityName(item)}</p>
          <h1 className="mt-1 text-lg font-bold text-gray-900 sm:text-xl">{item.topicTitle ?? 'Bài luyện tập'}</h1>
          {item.difficulty && <p className="mt-1 text-xs text-gray-500">Mức độ theo nguồn: {item.difficulty}</p>}
        </div>
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">Câu {index + 1}/{items.length}</span>
      </div>
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-gray-100" role="progressbar" aria-label="Tiến độ lượt luyện" aria-valuemin={0} aria-valuemax={items.length} aria-valuenow={index + (checked || activityDone ? 1 : 0)}>
        <div className="h-full rounded-full bg-blue-600 transition-[width]" style={{ width: `${progress}%` }} />
      </div>
    </header>

    <div className="p-4 sm:p-6">
      {item.practiceKind === 'transcript-comprehension' && <div className="mb-4 rounded-xl border border-sky-100 bg-sky-50/70 p-4">
        <p className="text-[11px] font-bold uppercase tracking-wide text-sky-800">Bài đọc transcript · chưa có audio</p>
        <pre className="mt-2 whitespace-pre-wrap font-sans text-sm leading-6 text-slate-800">{item.context}</pre>
      </div>}

      {item.practiceKind === 'role-play' || item.practiceKind === 'guided-output' || item.practiceKind === 'self-assessment' ? (
        <div className="rounded-xl border border-violet-100 bg-violet-50/50 p-4 sm:p-5">
          <p className="text-xs font-bold uppercase tracking-wide text-violet-800">{activityName(item)} · không chấm điểm tự động</p>
          <h2 className="mt-2 text-base font-semibold leading-7 text-gray-900">{item.prompt}</h2>
          {(item.practiceKind === 'guided-output' || item.practiceKind === 'role-play') && <label className="mt-4 block">
            <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-wide text-gray-500">Câu trả lời / ghi chú của bạn · không chấm tự động</span>
            <textarea value={practiceResponse} onChange={(event) => setPracticeResponse(event.target.value)} rows={3} placeholder="Thử nói thành tiếng hoặc ghi câu trả lời của bạn…" className="w-full resize-y rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm leading-6 text-gray-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
          </label>}
          {item.practiceKind === 'guided-output' && item.answers?.[0] && <details className="mt-3 rounded-lg bg-white p-3"><summary className="cursor-pointer text-xs font-semibold text-blue-700">Xem câu mẫu tham khảo</summary><p className="mt-2 text-sm leading-6 text-gray-800">{item.answers[0]}</p></details>}
          {item.selfCheck && item.selfCheck.length > 0 && <div className="mt-4 space-y-2">
            <p className="text-[11px] font-bold uppercase tracking-wide text-gray-500">Tiêu chí tự kiểm tra</p>
            {item.selfCheck.map((criterion, criterionIndex) => <label key={`${criterionIndex}-${criterion}`} className="flex cursor-pointer items-start gap-2 rounded-lg bg-white/80 p-2.5 text-sm leading-5 text-gray-700">
              <input type="checkbox" checked={Boolean(selfChecks[criterionIndex])} onChange={(event) => setSelfChecks((current) => ({ ...current, [criterionIndex]: event.target.checked }))} className="mt-0.5 accent-blue-700" />
              <span>{criterion}</span>
            </label>)}
          </div>}
          {item.explanation && item.practiceKind === 'guided-output' && <p className="mt-3 text-xs leading-5 text-gray-600">{item.explanation}</p>}
          <button onClick={() => setActivityDone(true)} disabled={activityDone} className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-lg bg-violet-700 px-4 py-2 text-sm font-semibold text-white disabled:bg-violet-400"><CheckCircle2 className="h-4 w-4" />{activityDone ? 'Đã đánh dấu hoàn thành' : 'Hoàn thành hoạt động'}</button>
        </div>
      ) : item.practiceKind === 'audio-listening' ? (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4"><h2 className="font-semibold text-amber-950">Chưa có audio cho hoạt động này</h2><p className="mt-1 text-sm leading-6 text-amber-900">Catalog hiện không cung cấp tệp âm thanh để phát hoặc chấm nghe. Hoạt động được giữ riêng, không chuyển thành bài nghe giả lập.</p><button onClick={() => setActivityDone(true)} className="mt-3 rounded-lg border border-amber-300 px-3 py-2 text-sm font-semibold text-amber-900">Bỏ qua hoạt động</button></div>
      ) : (
        <div>
          <p className="text-sm font-semibold leading-7 text-gray-900">{item.prompt}</p>
          {item.questionType === 'word-order' && item.tokens ? <div className="mt-4 space-y-3">
            <div className="flex min-h-12 flex-wrap gap-2 rounded-xl border border-dashed border-blue-200 bg-blue-50/40 p-3">
              {orderedTokens.length === 0 && <span className="self-center text-xs text-gray-400">Chọn các từ theo thứ tự để tạo câu</span>}
              {orderedTokens.map((tokenIndex, position) => <button key={`${tokenIndex}-${position}`} disabled={checked} onClick={() => setOrderedTokens((current) => current.filter((_, indexOfToken) => indexOfToken !== position))} className="rounded-md bg-blue-100 px-2.5 py-1.5 text-sm font-semibold text-blue-900">{item.tokens?.[tokenIndex]}</button>)}
            </div>
            <div className="flex flex-wrap gap-2">{item.tokens.map((token, tokenIndex) => <button key={`${tokenIndex}-${token}`} disabled={checked || orderedTokens.includes(tokenIndex)} onClick={() => setOrderedTokens((current) => [...current, tokenIndex])} className="min-h-9 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700 hover:border-blue-300 disabled:opacity-40">{token}</button>)}</div>
          </div> : choicesAreAnswers && item.choices?.length ? <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {item.choices.map((choice, choiceIndex) => <button key={`${choiceIndex}-${choice}`} disabled={checked} onClick={() => setAnswer(choice)} aria-pressed={answer === choice} className={`min-h-11 rounded-lg border px-3 py-2 text-left text-sm transition ${answer === choice ? 'border-blue-500 bg-blue-50 font-semibold text-blue-900' : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300'} disabled:cursor-default`}>
              {item.correctIndex !== undefined && item.choices && item.choices.length > 2 && <span className="mr-1 font-bold">{String.fromCharCode(65 + choiceIndex)}.</span>}{choice}
            </button>)}
          </div> : <label className="mt-4 block">
            <span className="sr-only">Câu trả lời</span>
            <input value={answer} disabled={checked} onChange={(event) => setAnswer(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') checkAnswer() }} placeholder={item.questionType === 'fill-blank' ? 'Nhập từ hoặc cụm từ còn thiếu' : item.questionType === 'correct-mistake' ? 'Viết lại câu đã sửa' : 'Nhập câu trả lời'} className="min-h-11 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 disabled:bg-gray-50" />
          </label>}

          {checked && <div className={`mt-4 rounded-xl border p-3.5 ${correct ? 'border-emerald-200 bg-emerald-50' : 'border-rose-200 bg-rose-50'}`} aria-live="polite">
            <p className={`flex items-center gap-2 text-sm font-bold ${correct ? 'text-emerald-800' : 'text-rose-800'}`}>{correct ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}{correct ? 'Chính xác!' : 'Chưa chính xác'}</p>
            {!correct && item.answers?.length ? <p className="mt-1 text-sm text-gray-800">Đáp án: <span className="font-semibold">{item.answers.join(' / ')}</span></p> : null}
            {item.explanation && <p className="mt-2 text-sm leading-6 text-gray-700">{item.explanation}</p>}
          </div>}
          <div className="mt-5 flex flex-col-reverse justify-between gap-3 border-t border-gray-100 pt-4 sm:flex-row sm:items-center">
            <span className="self-center text-xs text-gray-400">{checked ? 'Kết quả chỉ dành cho lượt luyện này.' : 'Chọn hoặc nhập câu trả lời rồi kiểm tra.'}</span>
            {!checked ? <button onClick={checkAnswer} disabled={!canCheck} className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40">Kiểm tra đáp án <CheckCircle2 className="h-4 w-4" /></button> : <button onClick={nextItem} className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white">{index === items.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo'} <ArrowRight className="h-4 w-4" /></button>}
          </div>
        </div>
      )}

      {activityDone && <div className="mt-4 flex justify-end">
        <button onClick={nextItem} className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white">{index === items.length - 1 ? 'Xem kết quả' : 'Tiếp tục'} <ArrowRight className="h-4 w-4" /></button>
      </div>}
    </div>
  </section>
}
