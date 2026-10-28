import { Link } from 'react-router-dom'
import { BookOpen, MessageCircle, Share2, Video, Mail } from 'lucide-react'

const footerLinks = {
  'Sản phẩm': [
    { label: 'Tính năng', href: '#benefits' },
    { label: 'Lộ trình học', href: '#process' },
    { label: 'Bảng giá', href: '/pricing' },
    { label: 'Dùng thử miễn phí', href: '/register' },
  ],
  'Hỗ trợ': [
    { label: 'Trung tâm trợ giúp', href: '/help' },
    { label: 'Liên hệ', href: '/contact' },
    { label: 'Cộng đồng', href: '/community' },
  ],
  'Công ty': [
    { label: 'Về chúng tôi', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Tuyển dụng', href: '/careers' },
  ],
}

const socialLinks = [
  { icon: MessageCircle, href: '#', label: 'Facebook' },
  { icon: Share2, href: '#', label: 'Twitter' },
  { icon: Video, href: '#', label: 'YouTube' },
  { icon: Mail, href: 'mailto:hello@easytalk.vn', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group w-fit">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                <BookOpen className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Easy<span className="text-blue-400">Talk</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Nền tảng học tiếng Anh thông minh dành cho người Việt. Học hiệu quả, tiến bộ rõ ràng.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-gray-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-sm font-semibold text-white mb-4">{group}</h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    {href.startsWith('/') ? (
                      <Link
                        to={href}
                        className="text-sm hover:text-white transition-colors"
                      >
                        {label}
                      </Link>
                    ) : (
                      <a href={href} className="text-sm hover:text-white transition-colors">
                        {label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} EasyTalk. Bảo lưu mọi quyền.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">
              Chính sách bảo mật
            </Link>
            <Link to="/terms" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">
              Điều khoản sử dụng
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
