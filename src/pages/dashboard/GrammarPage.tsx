import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ArrowRight, BookOpen, Layers } from 'lucide-react'
import GrammarTopicDetail from '../../components/dashboard/GrammarTopicDetail'
import { grammarSections, grammarTopics } from '../../data/grammarTopics'

export default function GrammarPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedId = searchParams.get('topic')
  const selectedTopic = useMemo(() => grammarTopics.find((topic) => topic.id === selectedId), [selectedId])

  const closeTopic = () => {
    const params = new URLSearchParams(searchParams)
    params.delete('topic')
    setSearchParams(params)
  }

  return (
    <div>
      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2"><Layers className="h-5 w-5 text-violet-600" /><h1 className="text-xl font-bold text-gray-900 sm:text-2xl">Ngữ pháp tiếng Anh</h1></div>
          <p className="mt-1 text-sm text-gray-500">Học theo chủ đề, xem cấu trúc và ví dụ trước khi luyện tập.</p>
        </div>
        <span className="self-start rounded-full border border-violet-100 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700 sm:self-auto">{grammarTopics.length} chủ đề</span>
      </header>

      {selectedId && !selectedTopic && <div className="mb-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900" role="alert">Không tìm thấy chủ đề ngữ pháp trong thư viện.</div>}
      {selectedTopic && <GrammarTopicDetail topic={selectedTopic} onClose={closeTopic} />}

      <div className="space-y-7">
        {grammarSections.map((section) => {
          const topics = grammarTopics.filter((topic) => topic.section === section)
          return <section key={section} aria-labelledby={`grammar-${section}`}>
            <h2 id={`grammar-${section}`} className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-700">{section}</h2>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
              {topics.map((topic) => <article key={topic.id} className={`flex min-h-36 flex-col rounded-2xl border bg-white p-4 shadow-sm transition ${selectedId === topic.id ? 'border-violet-300 ring-2 ring-violet-100' : 'border-gray-200 hover:border-blue-200 hover:shadow-md'}`}>
                <div className="flex items-start justify-between gap-3"><h3 className="font-semibold text-gray-900">{topic.title}</h3><span className="shrink-0 rounded-md bg-gray-50 px-2 py-1 text-[11px] font-semibold text-gray-500">{topic.level}</span></div>
                <p className="mt-2 text-sm leading-5 text-gray-600">{topic.summary}</p>
                <button onClick={() => setSearchParams({ topic: topic.id })} aria-expanded={selectedId === topic.id} className="mt-auto inline-flex min-h-10 items-center gap-1 self-start pt-3 text-xs font-semibold text-blue-700 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                  <BookOpen className="h-4 w-4" /> {selectedId === topic.id ? 'Đang xem bài học' : 'Bắt đầu học'} <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </article>)}
            </div>
          </section>
        })}
      </div>
    </div>
  )
}
