import { ArrowUpRight, BookOpen, Clock3, Languages, Network, Shapes, Tags } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useGuest } from '../context/GuestContext'

const learningContent = [
  { title: 'Ngữ pháp tiếng Anh', description: 'Khám phá lộ trình gồm các danh mục ngữ pháp từ nền tảng đến mở rộng.', to: '/dashboard/grammar', icon: BookOpen, tone: 'blue' },
  { title: '12 thì tiếng Anh', description: 'Xem bài học, công thức và phần luyện tập của từng thì.', to: '/dashboard/grammar?folder=tenses', icon: Clock3, tone: 'amber' },
  { title: 'Từ loại', description: 'Tìm hiểu danh từ, đại từ, động từ và các nhóm từ loại khác.', to: '/dashboard/grammar?folder=parts-of-speech', icon: Tags, tone: 'indigo' },
  { title: 'Cấu trúc câu', description: 'Học cách nhận biết và xây dựng các thành phần trong câu.', to: '/dashboard/grammar?folder=sentence-structure', icon: Network, tone: 'emerald' },
  { title: 'Mệnh đề', description: 'Khám phá các loại mệnh đề và cách kết hợp chúng.', to: '/dashboard/grammar?folder=clauses', icon: Languages, tone: 'violet' },
  { title: 'Các dạng câu đặc biệt', description: 'Tìm hiểu những cấu trúc câu thường gặp trong tiếng Anh.', to: '/dashboard/grammar?folder=special-sentences', icon: Shapes, tone: 'rose' },
  { title: 'Cấu trúc ngữ pháp mở rộng', description: 'Mở rộng kiến thức với các chủ điểm ngữ pháp nâng cao.', to: '/dashboard/grammar?folder=extended-grammar', icon: BookOpen, tone: 'sky' },
  { title: 'Từ vựng & flashcard', description: 'Tra cứu từ vựng theo nhóm, xem ví dụ và ôn tập bằng flashcard.', to: '/dashboard/vocabulary', icon: Languages, tone: 'teal' },
]

const toneClasses: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-700', amber: 'bg-amber-50 text-amber-700', indigo: 'bg-indigo-50 text-indigo-700',
  emerald: 'bg-emerald-50 text-emerald-700', violet: 'bg-violet-50 text-violet-700', rose: 'bg-rose-50 text-rose-700',
  sky: 'bg-sky-50 text-sky-700', teal: 'bg-teal-50 text-teal-700',
}

export default function LearningContentSection() {
  const { isAuthenticated } = useAuth()
  const { enterGuestMode } = useGuest()

  return (
    <section id="learning-content" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-9 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">Khám phá nội dung học tập</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Chọn chủ đề bạn muốn bắt đầu</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">Từ ngữ pháp có hệ thống đến từ vựng và công cụ ôn tập.</p>
          </div>
          <Link to={isAuthenticated ? '/dashboard/grammar' : '/dashboard/grammar?guest=true'} onClick={() => !isAuthenticated && enterGuestMode()} className="inline-flex min-h-10 items-center gap-1 self-start text-sm font-semibold text-blue-700 hover:text-blue-800 sm:self-auto">
            Xem lộ trình ngữ pháp <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {learningContent.map(({ title, description, to, icon: Icon, tone }) => (
            <Link key={title} to={isAuthenticated ? to : `${to}${to.includes('?') ? '&' : '?'}guest=true`} onClick={() => !isAuthenticated && enterGuestMode()} className="group flex min-h-48 flex-col rounded-2xl border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
              <span className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${toneClasses[tone]}`}><Icon className="h-5 w-5" /></span>
              <h3 className="font-bold text-slate-900 group-hover:text-blue-700">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-700">Khám phá <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
