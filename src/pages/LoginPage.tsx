import { useState, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {
  BookOpen,
  ArrowLeft,
  Mail,
  Lock,
  Eye,
  EyeOff,
  AlertCircle,
  AlertTriangle,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useGuest } from '../context/GuestContext'

export default function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { signIn, isAuthenticated, isSupabaseConfigured } = useAuth()
  const { enterGuestMode } = useGuest()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const isSubmittingRef = useRef(false)

  // Redirect if already authenticated
  if (isAuthenticated) {
    navigate('/dashboard', { replace: true })
    return null
  }

  const validateForm = (): boolean => {
    if (!email.trim()) {
      setErrorMessage('Vui lòng nhập địa chỉ email.')
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      setErrorMessage('Định dạng email không hợp lệ. Ví dụ: user@example.com')
      return false
    }
    if (!password) {
      setErrorMessage('Vui lòng nhập mật khẩu.')
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isSubmittingRef.current || isSubmitting) return

    setErrorMessage(null)

    if (!isSupabaseConfigured) {
      setErrorMessage(
        'Supabase chưa được cấu hình. Vui lòng thêm VITE_SUPABASE_URL và VITE_SUPABASE_ANON_KEY vào file .env.local.'
      )
      return
    }

    if (!validateForm()) return

    isSubmittingRef.current = true
    setIsSubmitting(true)

    try {
      const { user, error } = await signIn(email, password)

      if (error) {
        const errorMsg = (error as any)?.message || ''
        if (
          errorMsg.toLowerCase().includes('invalid login credentials') ||
          errorMsg.toLowerCase().includes('invalid_grant')
        ) {
          setErrorMessage('Email hoặc mật khẩu không chính xác. Vui lòng kiểm tra lại.')
        } else if (errorMsg.toLowerCase().includes('email not confirmed')) {
          setErrorMessage(
            'Tài khoản chưa được kích hoạt. Vui lòng kiểm tra hộp thư email để xác nhận trước khi đăng nhập.'
          )
        } else if (errorMsg.toLowerCase().includes('rate limit')) {
          setErrorMessage('Bạn đã thử đăng nhập quá nhiều lần. Vui lòng thử lại sau vài phút.')
        } else {
          setErrorMessage(
            error.message || 'Đăng nhập không thành công. Vui lòng kiểm tra kết nối mạng và thử lại.'
          )
        }
        return
      }

      if (user) {
        // Successful login
        const fromPath = (location.state as any)?.from?.pathname || '/dashboard'
        navigate(fromPath, { replace: true })
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'Có lỗi bất ngờ xảy ra. Vui lòng thử lại.')
    } finally {
      isSubmittingRef.current = false
      setIsSubmitting(false)
    }
  }

  const handleStartGuest = () => {
    enterGuestMode()
    navigate('/dashboard?guest=true')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2.5 mb-6 group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-700 transition-colors shadow-sm">
            <BookOpen className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-extrabold text-2xl text-gray-900 tracking-tight">
            Easy<span className="text-blue-600">Talk</span>
          </span>
        </Link>

        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
          Đăng nhập tài khoản
        </h2>
        <p className="mt-2 text-center text-sm text-gray-500">
          Tiếp tục lộ trình học tiếng Anh và đồng bộ tiến độ của bạn
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        {/* Missing Supabase config alert */}
        {!isSupabaseConfigured && (
          <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3 text-amber-900 text-xs sm:text-sm">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-bold">Cần cấu hình Supabase</p>
              <p className="text-amber-800">
                Chưa tìm thấy biến môi trường <code className="bg-amber-100 px-1 py-0.5 rounded text-xs font-mono">VITE_SUPABASE_URL</code> hoặc <code className="bg-amber-100 px-1 py-0.5 rounded text-xs font-mono">VITE_SUPABASE_ANON_KEY</code> trong <code className="bg-amber-100 px-1 py-0.5 rounded text-xs font-mono">.env.local</code>.
              </p>
            </div>
          </div>
        )}

        <div className="bg-white py-8 px-6 shadow-sm border border-gray-100 rounded-3xl sm:px-10">
          {errorMessage && (
            <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2.5 text-xs sm:text-sm text-red-700">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <div className="flex-1 font-medium">{errorMessage}</div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="login-email"
                className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1"
              >
                Địa chỉ Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="login-email"
                  type="email"
                  autoComplete="email"
                  required
                  disabled={isSubmitting}
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="login-password"
                className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1"
              >
                Mật khẩu
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  disabled={isSubmitting}
                  placeholder="Nhập mật khẩu của bạn"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50"
                  aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                id="login-submit-btn"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-xs text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Đang đăng nhập...</span>
                  </>
                ) : (
                  <span>Đăng nhập</span>
                )}
              </button>
            </div>
          </form>

          {/* Guest mode alternative */}
          <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col gap-3 text-center">
            <p className="text-xs text-gray-500">
              Chưa có tài khoản?{' '}
              <Link
                to="/register"
                id="login-register-link"
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                Đăng ký miễn phí
              </Link>
            </p>

            <div className="pt-1 flex items-center justify-between text-xs">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Về trang chủ
              </Link>

              <button
                type="button"
                onClick={handleStartGuest}
                className="text-amber-700 hover:text-amber-800 font-medium transition-colors"
              >
                Trải nghiệm với vai trò Khách &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
