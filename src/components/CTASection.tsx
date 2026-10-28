import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { useGuest } from '../context/GuestContext'
import { useAuth } from '../context/AuthContext'

const perks = [
  'Truy cập 50+ bài học miễn phí',
  'Không cần thẻ tín dụng',
  'Hủy bất cứ lúc nào',
]

export default function CTASection() {
  const { enterGuestMode } = useGuest()
  const { isAuthenticated } = useAuth()

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center bg-blue-600 rounded-3xl px-8 py-14 sm:px-14 sm:py-16 shadow-xl shadow-blue-200/50">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Sẵn sàng nói tiếng Anh <br className="hidden sm:block" />tự tin hơn?
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Tham gia cùng hơn 50,000 học viên đang học tiếng Anh hiệu quả với EasyTalk. Bắt đầu miễn phí ngay hôm nay.
          </p>

          {/* Perks */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {perks.map((perk) => (
              <div key={perk} className="flex items-center gap-1.5 text-sm text-blue-100">
                <CheckCircle className="w-4 h-4 text-blue-200 shrink-0" />
                {perk}
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                id="cta-section-dashboard"
                className="group flex items-center gap-2 w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-blue-700 bg-white hover:bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 justify-center"
              >
                Vào Không gian học tập
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ) : (
              <>
                <Link
                  to="/dashboard?guest=true"
                  id="cta-section-register"
                  onClick={enterGuestMode}
                  className="group flex items-center gap-2 w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-blue-700 bg-white hover:bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 justify-center"
                >
                  Bắt đầu miễn phí
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to="/login"
                  id="cta-section-login"
                  className="w-full sm:w-auto px-8 py-3.5 text-base font-medium text-blue-100 hover:text-white border border-blue-400/50 hover:border-blue-300 rounded-xl transition-all duration-200 justify-center flex items-center"
                >
                  Đăng nhập
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
