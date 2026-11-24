import { Link } from 'react-router-dom'
import { ArrowUpRight, BookOpen } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useGuest } from '../context/GuestContext'

export default function Footer() {
  const { isAuthenticated } = useAuth()
  const { enterGuestMode } = useGuest()
  const learnerPath = (path: string) => isAuthenticated ? path : `${path}${path.includes('?') ? '&' : '?'}guest=true`
  const enterLearnerMode = () => { if (!isAuthenticated) enterGuestMode() }

  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-9 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12">
          <div>
            <Link to="/" className="mb-4 inline-flex items-center gap-2.5 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600"><BookOpen className="h-5 w-5" /></span>
              <span className="text-lg font-bold tracking-tight">EasyTalk English</span>
            </Link>
            <p className="max-w-sm text-sm leading-6">Nền tảng học tiếng Anh giúp bạn xây dựng kiến thức, luyện tập và tiến bộ mỗi ngày.</p>
          </div>

          <div><h3 className="mb-4 text-sm font-semibold text-white">Khám phá</h3><ul className="space-y-3 text-sm">
            <li><a className="hover:text-white" href="#overview">Tổng quan</a></li><li><a className="hover:text-white" href="#learning-content">Nội dung học tập</a></li><li><a className="hover:text-white" href="#process">Quy trình học</a></li>
          </ul></div>

          <div><h3 className="mb-4 text-sm font-semibold text-white">Nội dung học</h3><ul className="space-y-3 text-sm">
            <li><Link onClick={enterLearnerMode} className="hover:text-white" to={learnerPath('/dashboard/grammar')}>Ngữ pháp</Link></li>
            <li><Link onClick={enterLearnerMode} className="hover:text-white" to={learnerPath('/dashboard/grammar?folder=tenses')}>12 thì tiếng Anh</Link></li>
            <li><Link onClick={enterLearnerMode} className="hover:text-white" to={learnerPath('/dashboard/vocabulary')}>Từ vựng</Link></li>
          </ul></div>

          <div><h3 className="mb-4 text-sm font-semibold text-white">Tài khoản</h3><ul className="space-y-3 text-sm">
            <li><Link className="hover:text-white" to="/register">Tạo tài khoản</Link></li><li><Link className="hover:text-white" to="/login">Đăng nhập</Link></li>
            <li><Link onClick={enterLearnerMode} className="inline-flex items-center gap-1 font-medium text-blue-300 hover:text-white" to={learnerPath('/dashboard')}>Học thử <ArrowUpRight className="h-3.5 w-3.5" /></Link></li>
          </ul></div>
        </div>
        <div className="border-t border-slate-800 py-5 text-xs text-slate-500">© {new Date().getFullYear()} EasyTalk English. Bảo lưu mọi quyền.</div>
      </div>
    </footer>
  )
}
