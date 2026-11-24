import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useGuest } from '../context/GuestContext'
import { useAuth } from '../context/AuthContext'

export default function CTASection() {
  const { enterGuestMode } = useGuest()
  const { isAuthenticated } = useAuth()

  return (
    <section className="bg-white px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-blue-700 px-6 py-12 text-center sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute -right-14 -top-24 h-64 w-64 rounded-full border-[36px] border-white/10" />
        <div className="pointer-events-none absolute -bottom-32 -left-12 h-64 w-64 rounded-full border-[36px] border-white/10" />
        <div className="relative mx-auto max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-100">EasyTalk English</p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">Bắt đầu hành trình tiếng Anh của bạn.</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-blue-100 sm:text-lg">Mỗi ngày một bước nhỏ, mỗi bài học thêm tự tin. Hãy bắt đầu cùng EasyTalk English ngay hôm nay.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            {isAuthenticated ? (
              <Link to="/dashboard" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 font-semibold text-blue-800 transition hover:bg-blue-50">Vào không gian học tập <ArrowRight className="h-4 w-4" /></Link>
            ) : (
              <Link to="/dashboard?guest=true" onClick={enterGuestMode} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 font-semibold text-blue-800 transition hover:bg-blue-50">Bắt đầu học miễn phí <ArrowRight className="h-4 w-4" /></Link>
            )}
            <Link to="/login" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-blue-300/70 px-6 font-semibold text-white transition hover:bg-blue-600">Đăng nhập</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
