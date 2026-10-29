import { Link, useSearchParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, BookOpen, FolderOpen, Layers } from 'lucide-react'
import { TwelveTensesSummary } from '../../components/dashboard/TwelveTensesGuide'
import { grammarFolders, grammarTopics, type GrammarFolderItem, type GrammarTopic } from '../../data/grammarTopics'

function GrammarTopicCard({ topic }: { topic: GrammarTopic }) {
  const cardClass = 'group flex min-h-36 flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
  const content = <>
    <div className="flex items-start justify-between gap-3"><h3 className="font-semibold text-gray-900">{topic.title}</h3><span className="shrink-0 rounded-md bg-gray-50 px-2 py-1 text-[11px] font-semibold text-gray-500">{topic.level}</span></div>
    <p className="mt-2 text-sm leading-5 text-gray-600">{topic.summary}</p>
    <span className="mt-auto inline-flex min-h-10 items-center gap-1 self-start pt-3 text-xs font-semibold text-blue-700 group-hover:text-blue-800"><BookOpen className="h-4 w-4" /> Bắt đầu học <ArrowRight className="h-3.5 w-3.5" /></span>
  </>

  return <Link to={`/dashboard/grammar/${encodeURIComponent(topic.id)}`} className={cardClass} aria-label={`Bắt đầu học: ${topic.title}`}>{content}</Link>
}

function PlannedTopicCard({ item }: { item: GrammarFolderItem }) {
  return <article className="flex min-h-36 flex-col rounded-2xl border border-dashed border-gray-300 bg-gray-50/70 p-4">
    <div className="flex items-start justify-between gap-3"><h3 className="font-semibold text-gray-800">{item.title}</h3><span className="shrink-0 rounded-md bg-white px-2 py-1 text-[11px] font-semibold text-gray-500">Sắp học</span></div>
    <p className="mt-2 text-sm leading-5 text-gray-600">Chủ đề đã có trong lộ trình; bài học chi tiết chưa được xây dựng.</p>
    <span className="mt-auto inline-flex min-h-10 items-center gap-1 self-start pt-3 text-xs font-semibold text-gray-500"><BookOpen className="h-4 w-4" /> Chưa có bài học</span>
  </article>
}

export default function GrammarPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const folderId = searchParams.get('folder')
  const selectedFolder = grammarFolders.find((folder) => folder.id === folderId)
  const openFolder = (id: string) => setSearchParams({ folder: id })
  const backToFolders = () => setSearchParams({})

  return <div>
    <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="flex items-center gap-2"><Layers className="h-5 w-5 text-violet-600" /><h1 className="text-xl font-bold text-gray-900 sm:text-2xl">Ngữ pháp tiếng Anh</h1></div>
        <p className="mt-1 text-sm text-gray-500">Học theo lộ trình, từ kiến thức nền tảng đến cấu trúc nâng cao.</p>
      </div>
      <span className="self-start rounded-full border border-violet-100 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700 sm:self-auto">{grammarFolders.length} danh mục</span>
    </header>

    {!selectedFolder ? <section aria-label="Danh mục ngữ pháp" className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {grammarFolders.map((folder) => <button key={folder.id} onClick={() => openFolder(folder.id)} className="group flex min-h-44 flex-col rounded-2xl border border-gray-200 bg-white p-5 text-left shadow-sm transition hover:border-blue-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
        <div className="flex w-full items-start justify-between gap-3"><span className="rounded-xl bg-blue-50 p-2.5 text-blue-700"><FolderOpen className="h-5 w-5" /></span><span className="rounded-full bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-600">{folder.items.length} chủ đề</span></div>
        <h2 className="mt-4 font-bold text-gray-900">{folder.title}</h2><p className="mt-1 text-sm leading-5 text-gray-600">{folder.description}</p>
        <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-blue-700">Xem chủ đề <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></span>
      </button>)}
    </section> : <section aria-labelledby="selected-grammar-folder">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div><button onClick={backToFolders} className="mb-2 inline-flex min-h-9 items-center gap-1 rounded-lg px-2 text-sm font-semibold text-blue-700 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"><ArrowLeft className="h-4 w-4" /> Tất cả danh mục</button><h2 id="selected-grammar-folder" className="text-lg font-bold text-gray-900">{selectedFolder.title}</h2><p className="mt-1 text-sm text-gray-600">{selectedFolder.description}</p></div>
        <span className="self-start rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600 sm:self-auto">{selectedFolder.items.length} chủ đề</span>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {selectedFolder.items.map((item) => {
          const topic = item.topicId ? grammarTopics.find((candidate) => candidate.id === item.topicId) : undefined
          return topic ? <GrammarTopicCard key={`${selectedFolder.id}-${item.title}`} topic={topic} /> : <PlannedTopicCard key={`${selectedFolder.id}-${item.title}`} item={item} />
        })}
      </div>
      {selectedFolder.id === 'tenses' && <TwelveTensesSummary />}
    </section>}
  </div>
}
