import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, CheckCircle2, Layers3, Sparkles } from 'lucide-react'
import { useGuest } from '../context/GuestContext'
import { useAuth } from '../context/AuthContext'

export default function HeroSection() {
  const { enterGuestMode } = useGuest()
  const { isAuthenticated } = useAuth()

  return (
    <section id="overview" className="relative overflow-hidden bg-slate-50 pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="pointer-events-none absolute -right-28 -top-32 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-bold tracking-[0.14em] text-blue-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-blue-600" /> ENGLISH LEARNING PLATFORM
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Học tiếng Anh<br className="hidden sm:block" /> theo cách của bạn.
            <span className="mt-2 block text-blue-600">Tiến bộ từng ngày.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Học ngữ pháp, mở rộng vốn từ và luyện tập tiếng Anh với lộ trình rõ ràng. Chủ động học theo tốc độ và mục tiêu của riêng bạn.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {isAuthenticated ? (
              <Link to="/dashboard" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 font-semibold text-white shadow-sm transition hover:bg-blue-700">
                Vào không gian học tập <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <Link to="/dashboard?guest=true" onClick={enterGuestMode} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 font-semibold text-white shadow-sm transition hover:bg-blue-700">
                Bắt đầu học miễn phí <ArrowRight className="h-4 w-4" />
              </Link>
            )}
            <Link to="/login" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50">
              Đăng nhập
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-500">Có thể bắt đầu học thử ngay, không cần tạo tài khoản.</p>
        </div>

        <div className="mx-auto w-full max-w-lg lg:ml-auto">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/70 sm:p-4">
            <div className="rounded-2xl bg-slate-50 p-4 sm:p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white"><BookOpen className="h-5 w-5" /></div>
                  <div><p className="text-xs font-medium text-slate-500">KHÔNG GIAN HỌC TẬP</p><p className="font-bold text-slate-900">Chọn nội dung của bạn</p></div>
                </div>
                <Sparkles className="h-5 w-5 text-indigo-500" />
              </div>
              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3 rounded-xl border border-blue-100 bg-white p-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700"><Layers3 className="h-5 w-5" /></div>
                  <div className="min-w-0 flex-1"><p className="font-semibold text-slate-900">Ngữ pháp tiếng Anh</p><p className="text-xs text-slate-500">Lộ trình theo danh mục, từ nền tảng đến mở rộng</p></div>
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600" />
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
                  <div className="flex items-center justify-between gap-2"><p className="font-semibold text-slate-900">12 thì tiếng Anh</p><span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">Lý thuyết &amp; luyện tập</span></div>
                  <div className="mt-3 grid grid-cols-3 gap-2" aria-hidden="true">
                    {['Hiện tại', 'Quá khứ', 'Tương lai'].map((label) => <span key={label} className="rounded-lg bg-slate-50 px-2 py-2 text-center text-xs font-medium text-slate-600">{label}</span>)}
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700"><BookOpen className="h-5 w-5" /></div>
                  <div><p className="font-semibold text-slate-900">Từ vựng &amp; flashcard</p><p className="text-xs text-slate-500">Ôn từ và xem nghĩa, ví dụ</p></div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 border-t border-slate-200 pt-4 text-xs text-slate-500"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Bài học và công cụ thực hành có sẵn trong website</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
