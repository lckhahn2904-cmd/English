import { useState } from 'react'
import { ArrowRight, CheckCircle2, RotateCcw, XCircle } from 'lucide-react'
import { exerciseTypeLabels, interactiveExercises, type InteractiveExercise } from '../../data/interactiveExercises'

function normalizeAnswer(value: string) {
  return value.trim().toLocaleLowerCase().replace(/[.!?]+$/g, '').replace(/\s+/g, ' ')
}

function getAnswer(exercise: InteractiveExercise, textAnswer: string, selectedTokens: number[]) {
  if (exercise.type === 'multiple-choice') return textAnswer
  if (exercise.type === 'word-order') return selectedTokens.map((index) => exercise.tokens[index]).join(' ')
  return textAnswer
}

export default function InteractiveExerciseBlock({ topicName }: { topicName?: string }) {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [textAnswer, setTextAnswer] = useState('')
  const [selectedTokens, setSelectedTokens] = useState<number[]>([])
  const [checked, setChecked] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const exercise = interactiveExercises[questionIndex]
  const answer = getAnswer(exercise, textAnswer, selectedTokens)
  const canCheck = exercise.type === 'word-order'
    ? selectedTokens.length === exercise.tokens.length
    : Boolean(textAnswer.trim())

  const checkAnswer = () => {
    if (!canCheck || checked) return
    const correct = exercise.correctAnswers.some((item) => normalizeAnswer(item) === normalizeAnswer(answer))
    setIsCorrect(correct)
    setChecked(true)
    if (correct) setScore((current) => current + 1)
  }

  const nextQuestion = () => {
    if (!checked) return
    if (questionIndex === interactiveExercises.length - 1) {
      setShowResult(true)
      return
    }
    setQuestionIndex((current) => current + 1)
    setTextAnswer('')
    setSelectedTokens([])
    setChecked(false)
    setIsCorrect(false)
  }

  const restart = () => {
    setQuestionIndex(0)
    setTextAnswer('')
    setSelectedTokens([])
    setChecked(false)
    setIsCorrect(false)
    setScore(0)
    setShowResult(false)
  }

  if (showResult) return (
    <section className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm sm:p-6" aria-live="polite">
      <div className="text-center"><CheckCircle2 className="mx-auto h-9 w-9 text-emerald-600" /><p className="mt-2 text-xs font-bold uppercase tracking-wide text-emerald-700">Kết quả bài luyện tập mẫu</p><h2 className="mt-1 text-2xl font-bold text-gray-900">{score}/{interactiveExercises.length} câu đúng</h2><p className="mt-2 text-sm text-gray-600">Kết quả chỉ hiển thị trong phiên này, chưa được lưu thành tiến độ.</p><button onClick={restart} className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"><RotateCcw className="h-4 w-4" /> Làm lại</button></div>
    </section>
  )

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div><p className="text-xs font-bold uppercase tracking-wide text-violet-700">Luyện tập tương tác · {exerciseTypeLabels[exercise.type]}</p><h2 className="mt-1 text-lg font-bold text-gray-900">{topicName ? `Bài tập gợi ý: ${topicName}` : 'Bài luyện tập tổng hợp'}</h2><p className="mt-1 text-xs text-gray-500">Câu {questionIndex + 1}/{interactiveExercises.length}</p></div>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{score} đúng</span>
      </header>
      <div className="mt-3 h-1.5 rounded-full bg-gray-100" role="progressbar" aria-label="Tiến độ bài luyện tập" aria-valuemin={0} aria-valuemax={interactiveExercises.length} aria-valuenow={questionIndex + (checked ? 1 : 0)}><div className="h-full rounded-full bg-blue-500 transition-all" style={{ width: `${((questionIndex + (checked ? 1 : 0)) / interactiveExercises.length) * 100}%` }} /></div>

      <div className="mt-4 rounded-xl bg-gray-50 p-4 sm:p-5">
        <p className="text-sm font-semibold leading-6 text-gray-900">{exercise.prompt}</p>
        {exercise.type === 'multiple-choice' && <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2" role="group" aria-label="Các lựa chọn trả lời">{exercise.choices.map((choice) => <button key={choice} onClick={() => !checked && setTextAnswer(choice)} aria-pressed={textAnswer === choice} disabled={checked} className={`min-h-11 rounded-lg border px-3 py-2 text-left text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:cursor-default ${textAnswer === choice ? 'border-blue-400 bg-blue-50 font-semibold text-blue-800' : 'border-gray-200 bg-white text-gray-700 hover:border-blue-200'}`}>{choice}</button>)}</div>}
        {(exercise.type === 'fill-blank' || exercise.type === 'correct-mistake') && <div className="mt-3"><label htmlFor={`answer-${exercise.id}`} className="sr-only">Câu trả lời</label><input id={`answer-${exercise.id}`} value={textAnswer} onChange={(event) => setTextAnswer(event.target.value)} disabled={checked} onKeyDown={(event) => { if (event.key === 'Enter' && canCheck && !checked) checkAnswer() }} placeholder={exercise.type === 'fill-blank' ? 'Nhập từ còn thiếu…' : 'Nhập lại câu đã sửa…'} className="min-h-11 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 disabled:bg-gray-100" />{'hint' in exercise && <p className="mt-1.5 text-xs text-gray-500">Gợi ý: {exercise.hint}</p>}</div>}
        {exercise.type === 'word-order' && <div className="mt-3 space-y-3"><div className="flex min-h-11 flex-wrap gap-2 rounded-lg border border-dashed border-blue-200 bg-white p-2" aria-label="Các từ đã chọn">{selectedTokens.length === 0 && <span className="self-center px-1 text-xs text-gray-400">Chọn từ theo thứ tự để tạo câu</span>}{selectedTokens.map((tokenIndex, position) => <button key={`${tokenIndex}-${position}`} disabled={checked} onClick={() => setSelectedTokens((current) => current.filter((_, index) => index !== position))} className="rounded-md bg-blue-100 px-2.5 py-1.5 text-sm font-semibold text-blue-800 disabled:cursor-default">{exercise.tokens[tokenIndex]}</button>)}</div><div className="flex flex-wrap gap-2">{exercise.tokens.map((token, tokenIndex) => <button key={`${token}-${tokenIndex}`} disabled={checked || selectedTokens.includes(tokenIndex)} onClick={() => setSelectedTokens((current) => [...current, tokenIndex])} className="min-h-9 rounded-md border border-gray-200 bg-white px-2.5 py-1.5 text-sm text-gray-700 hover:border-blue-300 disabled:cursor-not-allowed disabled:opacity-40">{token}</button>)}</div></div>}
      </div>

      {checked && <div className={`mt-3 rounded-xl border p-3.5 ${isCorrect ? 'border-emerald-200 bg-emerald-50' : 'border-amber-200 bg-amber-50'}`} aria-live="polite">
        <p className={`flex items-center gap-2 text-sm font-bold ${isCorrect ? 'text-emerald-800' : 'text-amber-900'}`}>{isCorrect ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}{isCorrect ? 'Chính xác!' : 'Chưa chính xác'}</p>
        {!isCorrect && <p className="mt-1 text-sm text-gray-800">Đáp án: <span className="font-semibold">{exercise.correctAnswers[0]}</span></p>}
        <p className="mt-1 text-sm leading-5 text-gray-700">{exercise.explanation}</p>
      </div>}

      <footer className="mt-4 flex flex-col-reverse justify-between gap-2 sm:flex-row">
        {!checked ? <span className="self-center text-xs text-gray-400">Câu trả lời chưa được chấm.</span> : <span className="self-center text-xs text-gray-400">Kết quả của phiên luyện tập này chưa được lưu.</span>}
        {!checked ? <button onClick={checkAnswer} disabled={!canCheck} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40">Kiểm tra <CheckCircle2 className="h-4 w-4" /></button> : <button onClick={nextQuestion} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">{questionIndex === interactiveExercises.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo'} <ArrowRight className="h-4 w-4" /></button>}
      </footer>
    </section>
  )
}
