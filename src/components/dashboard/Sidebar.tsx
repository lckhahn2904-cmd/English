import { NavLink, useNavigate } from 'react-router-dom'
import {
  BookOpen,
  Home,
  GraduationCap,
  Library,
  Layers,
  MessageSquare,
  ClipboardList,
  Settings,
  LogOut,
  X,
  ChevronRight,
} from 'lucide-react'
import { useGuest } from '../../context/GuestContext'
import { useAuth } from '../../context/AuthContext'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const navSections = [
  {
    label: 'LEARNING SPACE',
    items: [
      { to: '/dashboard', icon: Home, label: 'Home', end: true },
      { to: '/dashboard/courses', icon: GraduationCap, label: 'Khóa học của tôi' },
      { to: '/dashboard/grammar', icon: Layers, label: 'Ngữ pháp' },
      { to: '/dashboard/speaking', icon: MessageSquare, label: 'Giao tiếp' },
      { to: '/dashboard/vocabulary', icon: Library, label: 'Thư viện từ vựng' },
      { to: '/dashboard/exercises', icon: ClipboardList, label: 'Bài tập thêm' },
    ],
  },
]

const bottomItems = [
  { to: '/dashboard/settings', icon: Settings, label: 'Cài đặt' },
]

// Avatar initials helper
function getInitials(name: string) {
  if (!name) return 'U'
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[parts.length - 2][0] + parts[parts.length - 1][0]).toUpperCase()
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigate = useNavigate()
  const { isGuest, exitGuestMode } = useGuest()
  const { user, isAuthenticated, signOut } = useAuth()

  // Authenticated user is never considered a guest
  const isGuestMode = !isAuthenticated && isGuest

  const realName =
    user?.user_metadata?.full_name ||
    user?.user_metadata?.name ||
    user?.email?.split('@')[0] ||
    'Học viên'
  const realEmail = user?.email || 'user@easytalk.vn'

  const handleLogout = async () => {
    if (isGuestMode) {
      exitGuestMode()
      navigate('/')
    } else {
      try {
        const { error } = await signOut()
        if (error) {
          console.error('Logout error:', error)
        }
        navigate('/login')
      } catch (err) {
        console.error('Logout failed:', err)
        navigate('/login')
      }
    }
  }

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 group ${
      isActive
        ? 'bg-blue-50 text-blue-700 font-semibold'
        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
    }`

  const renderSidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center justify-between px-4 h-16 border-b border-gray-100 shrink-0">
        <NavLink to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
            <BookOpen className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-base text-gray-900 tracking-tight">
            Easy<span className="text-blue-600">Talk</span>
          </span>
        </NavLink>
        {/* Close button — mobile only */}
        <button
          id="sidebar-close-btn"
          onClick={onClose}
          className="lg:hidden p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          aria-label="Đóng menu"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {navSections.map((section) => (
          <div key={section.label}>
            <p className="px-3 mb-2 text-[10px] font-bold tracking-widest text-gray-400 uppercase">
              {section.label}
            </p>
            <ul className="space-y-0.5">
              {section.items.map(({ to, icon: Icon, label, end }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={end}
                    className={navLinkClass}
                    onClick={onClose}
                  >
                    {({ isActive }) => (
                      <>
                        <Icon
                          className={`w-4.5 h-4.5 shrink-0 ${isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}`}
                          strokeWidth={isActive ? 2.5 : 2}
                        />
                        <span className="flex-1">{label}</span>
                        {isActive && (
                          <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="px-3 py-4 border-t border-gray-100 space-y-0.5 shrink-0">
        {bottomItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={navLinkClass}
            onClick={onClose}
          >
            {({ isActive }) => (
              <>
                <Icon
                  className={`w-4.5 h-4.5 shrink-0 ${isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span>{label}</span>
              </>
            )}
          </NavLink>
        ))}

        {/* User area — Guest Mode vs Registered User */}
        <div className="mt-3 pt-3 border-t border-gray-100">
          {isGuestMode ? (
            <div className="space-y-2">
              <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-amber-50/70 border border-amber-100">
                {/* Guest Avatar */}
                <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center shrink-0 text-white font-bold text-xs shadow-2xs">
                  K
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs font-bold text-gray-900 truncate">Khách trải nghiệm</p>
                    <span className="text-[10px] font-semibold bg-amber-200/80 text-amber-800 px-1.5 py-0.2 rounded-sm">
                      Guest
                    </span>
                  </div>
                  <p className="text-[11px] text-amber-700 truncate">Học thử không lưu lịch sử</p>
                </div>
              </div>

              {/* CTA Đăng ký để lưu tiến độ */}
              <NavLink
                to="/register"
                onClick={onClose}
                id="sidebar-register-cta"
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100/80 rounded-xl transition-colors border border-blue-200/60"
              >
                <span>Đăng ký để lưu tiến độ</span>
              </NavLink>

              {/* Exit guest mode button */}
              <button
                id="sidebar-logout-btn"
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-150 group"
              >
                <LogOut className="w-4 h-4 shrink-0 text-gray-400 group-hover:text-red-500" strokeWidth={2} />
                Thoát trải nghiệm
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors cursor-default">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-white">{getInitials(realName)}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 truncate">{realName}</p>
                  <p className="text-xs text-gray-400 truncate">{realEmail}</p>
                </div>
              </div>

              <button
                id="sidebar-logout-btn"
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all duration-150 group mt-0.5"
              >
                <LogOut className="w-4.5 h-4.5 shrink-0 text-gray-400 group-hover:text-red-500" strokeWidth={2} />
                Đăng xuất
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Desktop sidebar — always visible */}
      <aside className="hidden lg:flex flex-col w-64 h-screen bg-white border-r border-gray-100 fixed top-0 left-0 z-30">
        {renderSidebarContent()}
      </aside>

      {/* Mobile sidebar — slide in */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white border-r border-gray-100 z-50 flex flex-col lg:hidden
          transform transition-transform duration-250 ease-out
          ${isOpen ? 'translate-x-0 shadow-xl' : '-translate-x-full'}`}
      >
        {renderSidebarContent()}
      </aside>
    </>
  )
}
