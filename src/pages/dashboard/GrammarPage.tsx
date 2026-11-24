import { Link, useSearchParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Layers,
  Tag,
  GitFork,
  Clock,
  Link2,
  Sparkles,
  GraduationCap
} from 'lucide-react'
import { TwelveTensesSummary } from '../../components/dashboard/TwelveTensesGuide'
import { grammarFolders, grammarTopics, type GrammarFolderItem, type GrammarTopic } from '../../data/grammarTopics'

const folderMeta: Record<string, {
  num: number;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  badgeBg: string;
}> = {
  'parts-of-speech': { num: 1, icon: Tag, iconBg: 'bg-blue-50 text-blue-700', badgeBg: 'bg-blue-50 text-blue-700 border-blue-100' },
  'sentence-structure': { num: 2, icon: GitFork, iconBg: 'bg-emerald-50 text-emerald-700', badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
  'tenses': { num: 3, icon: Clock, iconBg: 'bg-amber-50 text-amber-700', badgeBg: 'bg-amber-50 text-amber-700 border-amber-100' },
  'clauses': { num: 4, icon: Link2, iconBg: 'bg-purple-50 text-purple-700', badgeBg: 'bg-purple-50 text-purple-700 border-purple-100' },
  'special-sentences': { num: 5, icon: Sparkles, iconBg: 'bg-rose-50 text-rose-700', badgeBg: 'bg-rose-50 text-rose-700 border-rose-100' },
  'extended-grammar': { num: 6, icon: GraduationCap, iconBg: 'bg-sky-50 text-sky-700', badgeBg: 'bg-sky-50 text-sky-700 border-sky-100' }
}

function GrammarTopicCard({ topic, itemTitle, stripOrdinal = false }: { topic: GrammarTopic; itemTitle?: string; stripOrdinal?: boolean }) {
  const cardClass = 'group flex min-h-36 flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
  const sourceTitle = itemTitle || topic.title
  const displayTitle = stripOrdinal ? sourceTitle.replace(/^\s*\d+\.\s*/, '') : sourceTitle
  const content = <>
    <div className="flex items-start justify-between gap-3">
      <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">{displayTitle}</h3>
      <span className="shrink-0 rounded-md bg-gray-50 px-2 py-1 text-[11px] font-semibold text-gray-500 border border-gray-100">{topic.level}</span>
    </div>
    <p className="mt-2 text-sm leading-5 text-gray-600 line-clamp-2">{topic.summary}</p>
    <span className="mt-auto inline-flex min-h-10 items-center gap-1 self-start pt-3 text-xs font-semibold text-blue-700 group-hover:text-blue-800">
      <BookOpen className="h-4 w-4" /> Bắt đầu học <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
    </span>
  </>

  return <Link to={`/dashboard/grammar/${encodeURIComponent(topic.id)}`} className={cardClass} aria-label={`Bắt đầu học: ${displayTitle}`}>{content}</Link>
}

function PlannedTopicCard({ item }: { item: GrammarFolderItem }) {
  return (
    <article className="flex min-h-36 flex-col rounded-2xl border border-dashed border-gray-300 bg-gray-50/70 p-4">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-gray-800">{item.title}</h3>
        <span className="shrink-0 rounded-md bg-white px-2 py-1 text-[11px] font-semibold text-gray-500">Sắp học</span>
      </div>
      <p className="mt-2 text-sm leading-5 text-gray-600">Chủ đề đã có trong lộ trình; bài học chi tiết chưa được xây dựng.</p>
      <span className="mt-auto inline-flex min-h-10 items-center gap-1 self-start pt-3 text-xs font-semibold text-gray-500">
        <BookOpen className="h-4 w-4" /> Chưa có bài học
      </span>
    </article>
  )
}

export default function GrammarPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const folderId = searchParams.get('folder')
  const selectedFolder = grammarFolders.find((folder) => folder.id === folderId)
  const openFolder = (id: string) => setSearchParams({ folder: id })
  const backToFolders = () => setSearchParams({})

  const selectedMeta = selectedFolder ? folderMeta[selectedFolder.id] : undefined

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="h-6 w-6 text-violet-600" />
            <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">Ngữ pháp tiếng Anh</h1>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Lộ trình học chuẩn hóa 6 danh mục từ cơ bản đến nâng cao, tích hợp lý thuyết sâu và 600 bài tập thực hành tương tác.
          </p>
        </div>
        <span className="self-start rounded-full border border-violet-100 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700 sm:self-auto">
          {grammarFolders.length} danh mục lớn
        </span>
      </header>

      {!selectedFolder ? (
        <section aria-label="Danh mục ngữ pháp" className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {grammarFolders.map((folder) => {
            const meta = folderMeta[folder.id] || { num: 0, icon: BookOpen, iconBg: 'bg-blue-50 text-blue-700', badgeBg: 'bg-gray-50 text-gray-600' }
            const Icon = meta.icon
            return (
              <button
                key={folder.id}
                onClick={() => openFolder(folder.id)}
                className="group flex min-h-48 flex-col rounded-2xl border border-gray-200 bg-white p-5 text-left shadow-sm transition hover:border-blue-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                <div className="flex w-full items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className={`rounded-xl p-2.5 ${meta.iconBg}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      DANH MỤC {meta.num}
                    </span>
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold border ${meta.badgeBg}`}>
                    {folder.items.length} chủ đề
                  </span>
                </div>
                <h2 className="mt-3.5 text-base font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {folder.title}
                </h2>
                <p className="mt-1.5 text-sm leading-5 text-gray-600 line-clamp-2">
                  {folder.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-blue-700 group-hover:text-blue-800">
                  Xem danh sách chủ đề <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            )
          })}
        </section>
      ) : (
        <section aria-labelledby="selected-grammar-folder">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <button
                onClick={backToFolders}
                className="mb-2 inline-flex min-h-9 items-center gap-1.5 rounded-lg px-2.5 py-1 text-sm font-semibold text-blue-700 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <ArrowLeft className="h-4 w-4" /> Quay lại tất cả danh mục
              </button>
              <div className="flex items-center gap-2">
                {selectedMeta && (
                  <span className="text-xs font-bold uppercase tracking-wider text-violet-700">
                    DANH MỤC {selectedMeta.num}
                  </span>
                )}
              </div>
              <h2 id="selected-grammar-folder" className="text-xl font-bold text-gray-900 sm:text-2xl">
                {selectedFolder.title}
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                {selectedFolder.description}
              </p>
            </div>
            <span className="self-start rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600 sm:self-auto">
              {selectedFolder.items.length} chủ đề
            </span>
          </div>

          {selectedFolder.id === 'tenses' && (
            <>
              <TwelveTensesSummary />
              <nav aria-label="Tài liệu ôn tập thì" className="mt-4 rounded-xl border border-amber-100 bg-amber-50/60 p-4">
                <h3 className="text-sm font-bold text-amber-950">Tài liệu ôn tập thêm</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    { id: 'be-going-to', label: 'Tương lai gần (be going to)' },
                    { id: 'tense-contrasts', label: 'Phân biệt các thì' },
                    { id: 'mixed-tense-practice', label: 'Luyện tập tổng hợp các thì' }
                  ].map((resource) => (
                    <Link
                      key={resource.id}
                      to={`/dashboard/grammar/${resource.id}`}
                      className="inline-flex min-h-9 items-center rounded-lg border border-amber-200 bg-white px-3 py-1.5 text-xs font-semibold text-amber-900 hover:bg-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                    >
                      {resource.label}
                    </Link>
                  ))}
                </div>
              </nav>
            </>
          )}

          <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 xl:grid-cols-3">
            {selectedFolder.items.map((item) => {
              const topic = item.topicId ? grammarTopics.find((candidate) => candidate.id === item.topicId) : undefined
              return topic ? (
                <GrammarTopicCard
                  key={`${selectedFolder.id}-${item.title}`}
                  topic={topic}
                  itemTitle={item.title}
                  stripOrdinal={selectedFolder.id !== 'tenses'}
                />
              ) : (
                <PlannedTopicCard
                  key={`${selectedFolder.id}-${item.title}`}
                  item={item}
                />
              )
            })}
          </div>

        </section>
      )}
    </div>
  )
}
