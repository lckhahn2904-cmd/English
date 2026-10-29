import { Link, useNavigate, useParams } from 'react-router-dom'
import TwelveTensesGuide from '../../components/dashboard/TwelveTensesGuide'
import { grammarTopics } from '../../data/grammarTopics'

export default function GrammarTensePage() {
  const { tenseId } = useParams()
  const navigate = useNavigate()
  const topic = grammarTopics.find((item) => item.id === tenseId && item.section === '12 thì tiếng Anh')

  if (!topic) {
    return <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900" role="alert">
      <p>Không tìm thấy bài học ngữ pháp này.</p>
      <Link to="/dashboard/grammar" className="mt-3 inline-flex min-h-9 items-center rounded-lg px-2 font-semibold text-blue-700 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">Quay lại danh sách 12 thì</Link>
    </div>
  }

  return <TwelveTensesGuide selectedTenseId={topic.id} onClose={() => navigate('/dashboard/grammar')} />
}
