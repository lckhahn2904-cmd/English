import { Link } from 'react-router-dom'
import { Info, UserPlus, Sparkles, RotateCcw } from 'lucide-react'
import { useGuest } from '../../context/GuestContext'
import { useAuth } from '../../context/AuthContext'

export default function GuestBanner() {
  const { isGuest, completedLessonIds, learnedVocabIds, sessionXp, resetGuestProgress } = useGuest()
  const { isAuthenticated } = useAuth()

  // Hide banner completely if user is authenticated or not in guest mode
  if (isAuthenticated || !isGuest) return null

  return (
    <div className="mb-6 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border border-amber-200/80 rounded-2xl p-4 sm:p-5 shadow-xs">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Left message */}
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider bg-amber-100 px-2 py-0.5 rounded-full">
                Chế độ trải nghiệm
              </span>
              <span className="text-xs text-amber-700 font-medium flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Phiên học thử miễn phí
              </span>
            </div>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-medium">
              Bạn đang trải nghiệm với tư cách <strong className="font-semibold text-amber-950">Khách</strong>.
              Tiến độ học chỉ được lưu tạm trong phiên này và{' '}
              <span className="underline decoration-amber-400 font-semibold text-amber-950">
                sẽ mất khi tải lại trang
              </span>.
            </p>
            {/* Session mini progress stats */}
            {(completedLessonIds.length > 0 || learnedVocabIds.length > 0) && (
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-amber-800">
                <span>
                  Đã hoàn thành: <strong>{completedLessonIds.length}</strong> bài học
                </span>
                <span>•</span>
                <span>
                  Từ vựng đã thuộc: <strong>{learnedVocabIds.length}</strong> từ
                </span>
                <span>•</span>
                <span>
                  XP tích lũy: <strong>+{sessionXp} XP</strong>
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 self-stretch md:self-auto shrink-0 justify-end">
          {(completedLessonIds.length > 0 || learnedVocabIds.length > 0) && (
            <button
              onClick={resetGuestProgress}
              title="Đặt lại tiến độ phiên"
              className="px-3 py-2 text-xs font-medium text-amber-800 hover:text-amber-900 bg-white hover:bg-amber-100/60 border border-amber-200 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Đặt lại
            </button>
          )}

          <Link
            to="/register"
            id="guest-banner-save-progress"
            className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs transition-colors"
          >
            <UserPlus className="w-4 h-4" />
            Đăng ký để lưu tiến độ
          </Link>
        </div>
      </div>
    </div>
  )
}
