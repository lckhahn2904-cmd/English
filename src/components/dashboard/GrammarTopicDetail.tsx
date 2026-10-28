import { ArrowLeft, BookOpen, ClipboardList } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { GrammarTopic } from '../../data/grammarTopics'

export default function GrammarTopicDetail({ topic, onClose }: { topic: GrammarTopic; onClose: () => void }) {
  return (
    <article className="mb-6 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <button onClick={onClose} className="mb-3 inline-flex min-h-9 items-center gap-1 rounded-lg px-2 text-xs font-semibold text-blue-700 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
            <ArrowLeft className="h-4 w-4" /> Tất cả chủ đề
          </button>
          <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">{topic.section} · {topic.level}</p>
          <h2 className="mt-1 text-xl font-bold text-gray-900 sm:text-2xl">{topic.title}</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">{topic.explanation}</p>
        </div>
        <Link to={`/dashboard/exercises?topic=${encodeURIComponent(topic.id)}`} className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
          <ClipboardList className="h-4 w-4" /> Làm bài tập mẫu
        </Link>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <section className="rounded-xl bg-violet-50/70 p-4">
          <h3 className="flex items-center gap-2 text-sm font-bold text-gray-900"><BookOpen className="h-4 w-4 text-violet-600" /> Cấu trúc</h3>
          <p className="mt-2 whitespace-pre-line break-words font-mono text-sm leading-6 text-violet-950">{topic.structure}</p>
        </section>
        <section className="rounded-xl border border-gray-100 p-4">
          <h3 className="text-sm font-bold text-gray-900">Cách dùng</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-5 text-gray-600">
            {topic.usage.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
      </div>

      <section className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4">
        <h3 className="text-sm font-bold text-emerald-950">Ví dụ</h3>
        <div className="mt-2 space-y-3">
          {topic.examples.map((example) => <div key={example.english} className="text-sm">
            <p className="font-semibold text-gray-900">{example.english}</p>
            <p className="mt-0.5 text-gray-600">{example.vietnamese}</p>
          </div>)}
        </div>
      </section>
    </article>
  )
}
