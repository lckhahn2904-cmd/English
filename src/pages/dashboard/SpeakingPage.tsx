import { useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2, MessageSquare, RotateCcw, Volume2 } from 'lucide-react'
import { useVocabulary } from '../../context/VocabularyContext'
import { speakingCategories } from '../../data/speakingScenarios'

const scenarios = speakingCategories.flatMap((category) => category.scenarios.map((scenario) => ({ ...scenario, categoryTitle: category.title })))

export default function SpeakingPage() {
  const [scenarioId, setScenarioId] = useState(scenarios[0]?.id ?? '')
  const [turnIndex, setTurnIndex] = useState(0)
  const [finished, setFinished] = useState(false)
  const { speakWord } = useVocabulary()
  const scenario = useMemo(() => scenarios.find((item) => item.id === scenarioId), [scenarioId])
  const turn = scenario?.turns[turnIndex]

  const chooseScenario = (id: string) => {
    setScenarioId(id)
    setTurnIndex(0)
    setFinished(false)
  }

  const nextTurn = () => {
    if (!scenario) return
    if (turnIndex === scenario.turns.length - 1) setFinished(true)
    else setTurnIndex((current) => current + 1)
  }

  return (
    <div>
      <header className="mb-6">
        <div className="flex items-center gap-2"><MessageSquare className="h-5 w-5 text-blue-600" /><h1 className="text-xl font-bold text-gray-900 sm:text-2xl">Luyện giao tiếp</h1></div>
        <p className="mt-1 text-sm text-gray-500">Chọn tình huống, luyện từng lượt hội thoại và nghe phát âm tiếng Anh.</p>
      </header>

      <div className="grid grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.6fr)]">
        <aside className="space-y-4">
          {speakingCategories.map((category) => <section key={category.id} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
            <h2 className="font-bold text-gray-900">{category.title}</h2>
            <p className="mt-1 text-xs leading-5 text-gray-500">{category.description}</p>
            <div className="mt-3 space-y-2">{category.scenarios.map((item) => <button key={item.id} onClick={() => chooseScenario(item.id)} aria-pressed={scenarioId === item.id} className={`w-full rounded-xl border p-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${scenarioId === item.id ? 'border-blue-300 bg-blue-50' : 'border-gray-100 hover:border-blue-200 hover:bg-gray-50'}`}>
              <span className="block text-sm font-semibold text-gray-800">{item.title}</span><span className="mt-1 block text-xs text-gray-500">{item.level} · {item.turns.length} lượt</span>
            </button>)}</div>
          </section>)}
        </aside>

        {scenario && turn && <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6" aria-label={`Hội thoại: ${scenario.title}`}>
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div><p className="text-xs font-semibold uppercase tracking-wide text-violet-700">{scenario.categoryTitle} · {scenario.level}</p><h2 className="mt-1 text-lg font-bold text-gray-900 sm:text-xl">{scenario.title}</h2><p className="mt-1 text-sm text-gray-600">Mục tiêu: {scenario.goal}</p></div>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">Lượt {Math.min(turnIndex + 1, scenario.turns.length)}/{scenario.turns.length}</span>
          </div>
          <div className="mt-4 h-1.5 rounded-full bg-gray-100" role="progressbar" aria-label="Tiến độ lượt hội thoại" aria-valuemin={0} aria-valuemax={scenario.turns.length} aria-valuenow={finished ? scenario.turns.length : turnIndex + 1}><div className="h-full rounded-full bg-blue-500 transition-all" style={{ width: `${((finished ? scenario.turns.length : turnIndex + 1) / scenario.turns.length) * 100}%` }} /></div>

          {finished ? <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5 text-center sm:p-8">
            <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-600" /><h3 className="mt-2 font-bold text-emerald-950">Bạn đã xem hết hội thoại</h3><p className="mt-1 text-sm text-emerald-800">Có thể luyện lại từng lượt hoặc chọn tình huống khác.</p><button onClick={() => { setTurnIndex(0); setFinished(false) }} className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800"><RotateCcw className="h-4 w-4" /> Luyện lại</button>
          </div> : <>
            <article className={`mt-5 rounded-2xl p-5 sm:p-7 ${turn.role === 'you' ? 'bg-blue-50' : 'bg-gray-50'}`} aria-live="polite">
              <p className="text-xs font-bold uppercase tracking-wide text-gray-500">{turn.role === 'you' ? 'Lượt của bạn' : turn.speaker}</p>
              <p className="mt-2 break-words text-lg font-semibold leading-7 text-gray-900 sm:text-xl">{turn.english}</p>
              <p className="mt-2 break-words text-sm leading-6 text-gray-600">{turn.vietnamese}</p>
              <button onClick={() => speakWord(turn.english)} className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-lg border border-blue-200 bg-white px-3 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"><Volume2 className="h-4 w-4" /> Nghe phát âm</button>
            </article>
            <nav className="mt-4 flex flex-col-reverse justify-between gap-2 sm:flex-row" aria-label="Điều hướng hội thoại">
              <button onClick={() => setTurnIndex((current) => Math.max(0, current - 1))} disabled={turnIndex === 0} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"><ArrowLeft className="h-4 w-4" /> Lượt trước</button>
              <button onClick={nextTurn} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">{turnIndex === scenario.turns.length - 1 ? 'Kết thúc hội thoại' : 'Lượt tiếp theo'} <ArrowRight className="h-4 w-4" /></button>
            </nav>
          </>}
        </section>}
      </div>
    </div>
  )
}
