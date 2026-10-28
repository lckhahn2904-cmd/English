import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  BookOpen,
  ArrowLeft,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  AlertCircle,
  MailCheck,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Clock,
  Info,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useGuest } from '../context/GuestContext'

export default function RegisterPage() {
  const navigate = useNavigate()
  const { signUp, isAuthenticated, isSupabaseConfigured } = useAuth()
  const { completedLessonIds, learnedVocabIds, sessionXp, enterGuestMode } = useGuest()

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isRateLimited, setIsRateLimited] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Synchronous lock to prevent any race conditions or accidental double-clicking
  const isSubmittingRef = useRef(false)

  // Success state: 'confirmed' (session ready) or 'needs_confirmation' (email confirmation required)
  const [registrationState, setRegistrationState] = useState<
    'idle' | 'confirmed' | 'needs_confirmation'
  >('idle')

  // Redirect if already authenticated
  if (isAuthenticated) {
    navigate('/dashboard', { replace: true })
    return null
  }

  const validateForm = (): boolean => {
    if (!fullName.trim()) {
      setErrorMessage('Vui lòng nhập họ và tên của bạn.')
      setIsRateLimited(false)
      return false
    }
    if (!email.trim()) {
      setErrorMessage('Vui lòng nhập địa chỉ email.')
      setIsRateLimited(false)
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      setErrorMessage('Định dạng email không hợp lệ. Ví dụ: user@example.com')
      setIsRateLimited(false)
      return false
    }
    if (!password) {
      setErrorMessage('Vui lòng nhập mật khẩu.')
      setIsRateLimited(false)
      return false
    }
    if (password.length < 6) {
      setErrorMessage('Mật khẩu phải có độ dài tối thiểu 6 ký tự.')
      setIsRateLimited(false)
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // 1. Guard against double-submitting while request is in flight
    if (isSubmittingRef.current || isSubmitting) {
      return
    }

    setErrorMessage(null)
    setIsRateLimited(false)

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
      const { user, session, error } = await signUp(email, password, fullName)

      if (error) {
        const errorMsg = ((error as any)?.message || '').toLowerCase()
        const errorCode = ((error as any)?.code || '').toLowerCase()
        const errorStatus = (error as any)?.status

        // Phân biệt chính xác lỗi Rate Limit từ Supabase Auth
        if (
          errorStatus === 429 ||
          errorCode.includes('over_email_send_rate_limit') ||
          errorCode.includes('rate_limit') ||
          errorMsg.includes('rate limit') ||
          errorMsg.includes('over_email_send_rate_limit') ||
          errorMsg.includes('too many requests')
        ) {
          setIsRateLimited(true)
          setErrorMessage(
            'Hệ thống đã đạt giới hạn số lượng email gửi đi từ máy chủ Supabase trong giờ này. Vui lòng đợi một khoảng thời gian (khoảng 15-60 phút) trước khi thử lại.'
          )
        } else if (
          errorMsg.includes('user already registered') ||
          errorMsg.includes('already exists') ||
          errorMsg.includes('email address is already in use')
        ) {
          setErrorMessage('Email này đã được sử dụng. Vui lòng đăng nhập hoặc dùng email khác.')
        } else if (
          errorMsg.includes('email address') &&
          (errorMsg.includes('invalid') || errorMsg.includes('not authorized'))
        ) {
          setErrorMessage(
            'Địa chỉ email không hợp lệ hoặc tên miền không được máy chủ chấp nhận. Vui lòng sử dụng địa chỉ email thông dụng (ví dụ: Gmail, Outlook...).'
          )
        } else if (errorMsg.includes('password')) {
          setErrorMessage('Mật khẩu không đạt tiêu chuẩn. Vui lòng chọn mật khẩu tối thiểu 6 ký tự.')
        } else if (
          errorMsg.includes('failed to fetch') ||
          errorMsg.includes('network') ||
          errorMsg.includes('connection')
        ) {
          setErrorMessage(
            'Không thể kết nối đến máy chủ Supabase. Vui lòng kiểm tra lại kết nối mạng của bạn.'
          )
        } else {
          setErrorMessage(
            error.message || 'Đăng ký không thành công. Vui lòng kiểm tra lại thông tin và thử lại.'
          )
        }
        return
      }

      // Check if user was returned with empty identities (Supabase obfuscation for existing email with email confirm)
      if (user && Array.isArray(user.identities) && user.identities.length === 0) {
        setErrorMessage('Email này đã được đăng ký tài khoản. Vui lòng chuyển sang trang Đăng nhập.')
        return
      }

      if (session) {
        // Immediate session: email confirmation is disabled in Supabase project
        setRegistrationState('confirmed')
        setTimeout(() => {
          navigate('/dashboard')
        }, 1500)
      } else if (user) {
        // Email confirmation is enabled in Supabase project
        setRegistrationState('needs_confirmation')
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
          Đăng ký tài khoản
        </h2>
        <p className="mt-2 text-center text-sm text-gray-500">
          Mở khóa lộ trình học tiếng Anh toàn diện và lưu trữ tài khoản của bạn
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
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

        {/* Guest Progress Preview Card */}
        {(completedLessonIds.length > 0 || learnedVocabIds.length > 0) &&
          registrationState === 'idle' && (
            <div className="mb-6 bg-blue-50/80 border border-blue-200/80 rounded-2xl p-4 text-xs sm:text-sm text-blue-900">
              <div className="flex items-center gap-2 font-bold mb-1 text-blue-950">
                <Sparkles className="w-4 h-4 text-blue-600" />
                Bạn vừa hoàn thành một số hoạt động trong phiên học thử:
              </div>
              <div className="grid grid-cols-3 gap-2 mt-2 pt-2 border-t border-blue-200/60 text-center font-medium">
                <div className="bg-white/80 rounded-lg p-2">
                  <span className="block text-base font-bold text-blue-700">
                    {completedLessonIds.length}
                  </span>
                  <span className="text-[11px] text-gray-500">Bài học</span>
                </div>
                <div className="bg-white/80 rounded-lg p-2">
                  <span className="block text-base font-bold text-blue-700">
                    {learnedVocabIds.length}
                  </span>
                  <span className="text-[11px] text-gray-500">Từ vựng</span>
                </div>
                <div className="bg-white/80 rounded-lg p-2">
                  <span className="block text-base font-bold text-blue-700">+{sessionXp}</span>
                  <span className="text-[11px] text-gray-500">XP</span>
                </div>
              </div>
            </div>
          )}

        <div className="bg-white py-8 px-6 shadow-sm border border-gray-100 rounded-3xl sm:px-10">
          {/* Case 1: Email confirmation required */}
          {registrationState === 'needs_confirmation' && (
            <div className="py-4 space-y-4 text-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-xs">
                <MailCheck className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">Xác nhận địa chỉ email của bạn</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
                  Chúng tôi đã gửi email kích hoạt tới{' '}
                  <strong className="text-gray-900 font-semibold">{email}</strong>. Vui lòng mở hộp thư
                  (kể cả thư mục Spam / Rác) và nhấp vào liên kết để kích hoạt tài khoản.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
                <Link
                  to="/login"
                  id="confirmed-goto-login-btn"
                  className="w-full flex justify-center py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs"
                >
                  Đến trang Đăng nhập
                </Link>

                <button
                  type="button"
                  onClick={() => setRegistrationState('idle')}
                  className="text-xs text-gray-500 hover:text-gray-700 font-medium py-1"
                >
                  Dùng email khác hoặc quay lại form
                </button>
              </div>
            </div>
          )}

          {/* Case 2: Direct session confirmed */}
          {registrationState === 'confirmed' && (
            <div className="text-center py-6 space-y-3">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Tạo tài khoản thành công!</h3>
              <p className="text-xs text-gray-500">
                Đang chuyển hướng bạn đến Không gian học tập EasyTalk...
              </p>
            </div>
          )}

          {/* Case 3: Registration Form */}
          {registrationState === 'idle' && (
            <>
              {/* Error Alert Display */}
              {errorMessage && (
                <div
                  className={`mb-5 p-4 rounded-2xl border text-xs sm:text-sm ${
                    isRateLimited
                      ? 'bg-amber-50/90 border-amber-200 text-amber-900'
                      : 'bg-red-50 border-red-200 text-red-700'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    {isRateLimited ? (
                      <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    )}
                    <div className="space-y-1.5 flex-1">
                      <p className="font-semibold">
                        {isRateLimited ? 'Đã đạt giới hạn gửi email của Supabase' : 'Lỗi đăng ký'}
                      </p>
                      <p className="leading-relaxed">{errorMessage}</p>

                      {isRateLimited && (
                        <div className="pt-2 mt-2 border-t border-amber-200/80 text-[11px] text-amber-800 space-y-1">
                          <p className="flex items-center gap-1 font-semibold text-amber-950">
                            <Info className="w-3.5 h-3.5 text-amber-600" />
                            Ghi chú giải quyết:
                          </p>
                          <ul className="list-disc pl-4 space-y-0.5">
                            <li>
                              Dịch vụ gửi email mặc định của Supabase giới hạn 3–4 email/giờ cho mỗi project.
                            </li>
                            <li>
                              Hãy chờ hết khoảng thời gian giới hạn hoặc đăng nhập vào Supabase Dashboard để cấu hình Custom SMTP (SendGrid, Resend, Mailgun...) hoặc tắt tạm tính năng "Confirm email".
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="register-name"
                    className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1"
                  >
                    Họ và tên
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="register-name"
                      type="text"
                      required
                      disabled={isSubmitting}
                      placeholder="Nguyễn Văn A"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="register-email"
                    className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1"
                  >
                    Địa chỉ Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="register-email"
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
                    htmlFor="register-password"
                    className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1"
                  >
                    Mật khẩu
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <Lock className="w-4 h-4" />
                    </div>
                    <input
                      id="register-password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      required
                      disabled={isSubmitting}
                      placeholder="Tối thiểu 6 ký tự"
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
                  <p className="mt-1 text-[11px] text-gray-400">Mật khẩu có ít nhất 6 ký tự</p>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    id="register-submit-btn"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-xs text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Đang tạo tài khoản...</span>
                      </>
                    ) : (
                      <span>Tạo tài khoản miễn phí</span>
                    )}
                  </button>
                </div>
              </form>

              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between text-xs">
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleStartGuest}
                  className="inline-flex items-center gap-1.5 text-gray-600 hover:text-gray-900 font-medium transition-colors disabled:opacity-50"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Tiếp tục học thử
                </button>

                <Link
                  to="/login"
                  id="register-login-link"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Đã có tài khoản? Đăng nhập ngay
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
