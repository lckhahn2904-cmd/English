import { Link } from 'react-router-dom'
import { ArrowRight, Play, Star, Users, BookOpen } from 'lucide-react'
import { useGuest } from '../context/GuestContext'
import { useAuth } from '../context/AuthContext'

const stats = [
  { icon: Users, value: '50,000+', label: 'Học viên' },
  { icon: Star, value: '4.9/5', label: 'Đánh giá' },
  { icon: BookOpen, value: '200+', label: 'Bài học' },
]

export default function HeroSection() {
  const { enterGuestMode } = useGuest()
  const { isAuthenticated } = useAuth()

  return (
    <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white -z-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Nền tảng học tiếng Anh #1 Việt Nam
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            Nói tiếng Anh tự tin{' '}
            <span className="relative inline-block text-blue-600">
              chỉ trong 90 ngày
              <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-blue-200 rounded-full" />
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
            EasyTalk kết hợp AI cá nhân hóa, bài tập thực hành giao tiếp và lộ trình học được thiết kế bởi chuyên gia — giúp bạn tiến bộ nhanh hơn, nhớ lâu hơn.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                id="hero-cta-dashboard"
                className="group flex items-center gap-2 w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 justify-center"
              >
                Vào Không gian học tập
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ) : (
              <>
                <Link
                  to="/dashboard?guest=true"
                  id="hero-cta-free"
                  onClick={enterGuestMode}
                  className="group flex items-center gap-2 w-full sm:w-auto px-6 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 justify-center"
                >
                  Trải nghiệm miễn phí
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to="/register"
                  id="hero-cta-register"
                  className="group flex items-center gap-2 w-full sm:w-auto px-6 py-3.5 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 justify-center"
                >
                  <Play className="w-4 h-4 text-blue-500 fill-blue-500" />
                  Đăng ký tài khoản
                </Link>
              </>
            )}
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Icon className="w-4.5 h-4.5 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-gray-900 leading-none">{value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
