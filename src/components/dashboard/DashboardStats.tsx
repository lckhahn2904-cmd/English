import { BookOpen, Clock3, Sparkles, Trophy } from 'lucide-react'
import type { ElementType } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useGuest } from '../../context/GuestContext'

function StatCard({
  icon: Icon,
  value,
  label,
  color,
}: {
  icon: ElementType
  value: string | number
  label: string
  color: string
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-2xs">
      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${color}`}>
        <Icon className="h-5 w-5" strokeWidth={2} />
      </div>
      <div>
        <p className="text-xl font-bold leading-none text-gray-900">{value}</p>
        <p className="mt-1 text-xs text-gray-500">{label}</p>
      </div>
    </div>
  )
}

function GreetingBanner() {
  const { isGuest } = useGuest()
  const { user, isAuthenticated } = useAuth()
  const isGuestMode = !isAuthenticated && isGuest
  const name = user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email?.split('@')[0] || 'học viên'

  return (
    <div className="relative mb-6 overflow-hidden rounded-2xl bg-blue-600 p-6 text-white sm:p-8">
      <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-blue-500/40" aria-hidden="true" />
      <div className="absolute -bottom-8 -right-16 h-48 w-48 rounded-full bg-blue-500/20" aria-hidden="true" />
      <div className="relative">
        <p className="mb-1 text-sm font-medium text-blue-100">Chào mừng 👋</p>
        <h1 className="mb-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
          {isGuestMode ? 'bạn (Khách trải nghiệm)' : name}!
        </h1>
        <p className="max-w-md text-sm leading-relaxed text-blue-100">
          {isGuestMode
            ? 'Bạn có thể học từ vựng và luyện tập trong phiên này. Tiến độ Guest chỉ tồn tại trong bộ nhớ.'
            : 'Chào mừng bạn trở lại với EasyTalk. Hoạt động dưới đây chỉ phản ánh phiên hiện tại.'}
        </p>
      </div>
    </div>
  )
}

export default function DashboardStats() {
  const { isGuest, completedLessonIds, learnedVocabIds, quizScores, sessionXp } = useGuest()
  const { isAuthenticated } = useAuth()
  const isGuestMode = !isAuthenticated && isGuest

  const stats = [
    { icon: Sparkles, value: `${sessionXp} XP`, label: 'XP trong phiên', color: 'bg-amber-50 text-amber-500' },
    { icon: BookOpen, value: learnedVocabIds.length, label: 'Từ đã thuộc trong phiên', color: 'bg-blue-50 text-blue-600' },
    { icon: Trophy, value: completedLessonIds.length, label: 'Bài hoàn thành trong phiên', color: 'bg-emerald-50 text-emerald-600' },
    { icon: Clock3, value: Object.keys(quizScores).length, label: 'Quiz đã làm trong phiên', color: 'bg-purple-50 text-purple-600' },
  ]

  return (
    <div className="space-y-4">
      <GreetingBanner />
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((stat) => <StatCard key={stat.label} {...stat} />)}
      </div>
      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
        <div className="flex items-start gap-2">
          <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
          <p className="text-xs leading-relaxed text-blue-800">
            {isGuestMode
              ? 'Tiến độ Guest chỉ được giữ trong bộ nhớ phiên và sẽ mất khi tải lại hoặc rời phiên.'
              : 'Chưa có cơ chế lưu tiến độ tài khoản vào Supabase. Các số liệu này chỉ tồn tại trong phiên hiện tại và không được đồng bộ.'}
          </p>
        </div>
      </div>
    </div>
  )
}
