import { Settings, User, Bell, Shield, Palette, UserPlus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useGuest } from '../../context/GuestContext'
import { useAuth } from '../../context/AuthContext'

const settingSections = [
  {
    icon: User,
    title: 'Thông tin cá nhân',
    description: 'Tên, email, ảnh đại diện',
    badge: 'Sắp có',
  },
  {
    icon: Bell,
    title: 'Thông báo',
    description: 'Nhắc học hàng ngày và cập nhật khóa học',
    badge: 'Sắp có',
  },
  {
    icon: Palette,
    title: 'Giao diện',
    description: 'Chế độ tối, màu sắc chủ đề',
    badge: 'Sắp có',
  },
  {
    icon: Shield,
    title: 'Bảo mật',
    description: 'Mật khẩu và xác thực hai bước',
    badge: 'Sắp có',
  },
]

function getInitials(name: string) {
  if (!name) return 'U'
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[parts.length - 2][0] + parts[parts.length - 1][0]).toUpperCase()
}

export default function SettingsPage() {
  const { isGuest } = useGuest()
  const { user, isAuthenticated } = useAuth()
  const isGuestMode = !isAuthenticated && isGuest

  const realName =
    user?.user_metadata?.full_name ||
    user?.user_metadata?.name ||
    user?.email?.split('@')[0] ||
    'Học viên'
  const realEmail = user?.email || 'user@easytalk.vn'

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-900">Cài đặt</h1>
        <p className="text-sm text-gray-500 mt-1">Quản lý tài khoản và tuỳ chỉnh trải nghiệm</p>
      </div>

      {/* Account card */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-2xs mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${
              isGuestMode ? 'bg-amber-500' : 'bg-blue-600'
            }`}
          >
            <span className="text-lg font-bold text-white">
              {isGuestMode ? 'K' : getInitials(realName)}
            </span>
          </div>
          <div>
            <p className="font-semibold text-gray-900">
              {isGuestMode ? 'Khách trải nghiệm' : realName}
            </p>
            <p className="text-sm text-gray-500">
              {isGuestMode ? 'guest@easytalk.vn (Chưa đăng ký)' : realEmail}
            </p>
            <span className="inline-block mt-1 text-xs font-medium text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">
              {isGuestMode ? 'Chế độ học thử' : 'Thành viên chính thức'}
            </span>
          </div>
        </div>

        {isGuestMode && (
          <Link
            to="/register"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-2xs self-start sm:self-auto"
          >
            <UserPlus className="w-4 h-4" />
            Đăng ký để lưu tiến độ
          </Link>
        )}
      </div>

      {/* Settings list */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
        {settingSections.map(({ icon: Icon, title, description, badge }, i) => (
          <div
            key={title}
            className={`flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors cursor-not-allowed opacity-70
              ${i < settingSections.length - 1 ? 'border-b border-gray-100' : ''}`}
          >
            <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
              <Icon className="w-4.5 h-4.5 text-gray-500" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">{title}</p>
              <p className="text-xs text-gray-500">{description}</p>
            </div>
            <span className="text-xs text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full font-medium shrink-0">
              {badge}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 p-4 bg-blue-50 rounded-xl border border-blue-100">
        <Settings className="w-4 h-4 text-blue-500 shrink-0" />
        <p className="text-xs text-blue-700 leading-relaxed">
          Tài khoản đã được liên kết với Supabase Auth. Các tùy chỉnh nâng cao sẽ tiếp tục được mở rộng.
        </p>
      </div>
    </div>
  )
}
