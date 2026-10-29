import { lazy, Suspense } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import TwelveTensesGuide from '../../components/dashboard/TwelveTensesGuide'
import GrammarTopicDetail from '../../components/dashboard/GrammarTopicDetail'
import { grammarFolders, grammarTopics } from '../../data/grammarTopics'

const TenseSupplementLesson = lazy(() => import('../../components/dashboard/TenseSupplementLesson'))
const supplementalTopicIds = ['be-going-to', 'tense-contrasts', 'mixed-tense-practice']

export default function GrammarTensePage() {
  const { topicId } = useParams()
  const navigate = useNavigate()
  const topic = grammarTopics.find((item) => item.id === topicId)
  const folder = topic && grammarFolders.find((item) => item.items.some((folderItem) => folderItem.topicId === topic.id))

  if (!topic || !folder) {
    return <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900" role="alert">
      <p>Không tìm thấy bài học ngữ pháp này.</p>
      <Link to="/dashboard/grammar" className="mt-3 inline-flex min-h-9 items-center rounded-lg px-2 font-semibold text-blue-700 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">Quay lại danh sách 12 thì</Link>
    </div>
  }

  if (topic.section === '12 thì tiếng Anh') {
    if (supplementalTopicIds.includes(topic.id)) return <Suspense fallback={<div className="rounded-xl border border-gray-200 bg-white p-5 text-sm text-gray-600">Đang tải bài học…</div>}><TenseSupplementLesson topic={topic} onClose={() => navigate('/dashboard/grammar?folder=tenses')} /></Suspense>
    return <TwelveTensesGuide selectedTenseId={topic.id} onClose={() => navigate('/dashboard/grammar?folder=tenses')} />
  }

  return <GrammarTopicDetail topic={topic} folderTitle={folder.title} onClose={() => navigate(`/dashboard/grammar?folder=${encodeURIComponent(folder.id)}`)} />
}
