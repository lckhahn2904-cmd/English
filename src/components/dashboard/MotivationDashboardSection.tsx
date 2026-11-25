import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowRight, Award, CalendarDays, CheckCircle2, Flame, Target, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useGuest } from '../../context/GuestContext'
import { allA0Lessons } from '../../data/speakingCurriculum'
import { getBadges, getDailyGoalProgress, getLearningCalendar, getLearningStreak, getPersonalizedChallenge, getXpLevel, localDateKey } from '../../services/gamificationService'

const goalNames = { activities: 'Hoạt động học', lessons: 'Bài học hoàn thành', vocabulary: 'Từ vựng đánh dấu đã học' }

export default function MotivationDashboardSection() {
  const { sessionXp, xpTransactions, learningActivities, dailyGoal, setDailyGoal, dailyGoalCompletionDates, learningEvidence } = useGuest()
  const [unlockedToast, setUnlockedToast] = useState<string | null>(null)
  const previousBadges = useRef(new Set<string>())
  const streak = useMemo(() => getLearningStreak(learningActivities), [learningActivities])
  const level = useMemo(() => getXpLevel(sessionXp), [sessionXp])
  const goalProgress = useMemo(() => getDailyGoalProgress(learningActivities, dailyGoal), [dailyGoal, learningActivities])
  const calendar = useMemo(() => getLearningCalendar(learningActivities, new Date(), 28), [learningActivities])
  const badges = useMemo(() => getBadges(learningActivities, streak), [learningActivities, streak])
  const challenge = useMemo(() => getPersonalizedChallenge(learningEvidence, allA0Lessons), [learningEvidence])
  const goalChoices = dailyGoal.type === 'activities' ? [1, 2, 3, 4] : dailyGoal.type === 'lessons' ? [1, 2, 3, 4, 5] : [5, 10, 20]
  const todayKey = localDateKey(new Date())
  const alreadyCelebratedGoal = dailyGoalCompletionDates.includes(todayKey)
  const recentXp = xpTransactions.slice(-4).reverse()

  useEffect(() => {
    const unlocked = badges.filter((badge) => badge.unlocked)
    const newlyUnlocked = unlocked.find((badge) => !previousBadges.current.has(badge.id))
    if (newlyUnlocked) setUnlockedToast(`${newlyUnlocked.name} · ${newlyUnlocked.description}`)
    previousBadges.current = new Set(unlocked.map((badge) => badge.id))
  }, [badges])

  const changeGoalType = (type: typeof dailyGoal.type) => {
    const target = type === 'activities' ? 1 : type === 'lessons' ? 1 : 10
    setDailyGoal({ type, target })
  }

  return (
    <section className="rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50/70 via-white to-white p-5 shadow-sm sm:p-6" aria-labelledby="motivation-heading">
      <div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-wider text-amber-700">Learning Motivation</p><h2 id="motivation-heading" className="mt-1 text-lg font-bold text-slate-950">Mục tiêu và động lực học</h2><p className="mt-1 text-xs leading-5 text-slate-600">Chỉ ghi nhận hoạt động đã thực hiện trong phiên này.</p></div><span className="rounded-full border border-amber-200 bg-white px-3 py-1 text-[11px] font-semibold text-amber-900">Phiên hiện tại</span></div>

      {unlockedToast && <div role="status" className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-900"><Award className="h-4 w-4 shrink-0" />Vừa mở khóa: {unlockedToast}</div>}

      <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-[0.8fr_1.2fr]">
        <article className="rounded-xl border border-amber-100 bg-white p-4"><div className="flex items-center gap-2"><Zap className="h-4 w-4 text-amber-600" /><h3 className="text-sm font-bold text-slate-900">XP & cấp độ</h3></div><div className="mt-3 flex items-end justify-between gap-3"><p className="text-3xl font-extrabold text-slate-950">{sessionXp}<span className="ml-1 text-sm font-bold text-amber-700">XP</span></p><span className="rounded-lg bg-amber-50 px-2.5 py-1.5 text-xs font-bold text-amber-900">Level {level.level}</span></div><div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100" role="progressbar" aria-label="Tiến độ lên cấp tiếp theo" aria-valuemin={0} aria-valuemax={100} aria-valuenow={level.xpInLevel}><div className="h-full rounded-full bg-amber-400 transition-all" style={{ width: `${level.xpInLevel}%` }} /></div><p className="mt-1.5 text-[10px] text-slate-500">{level.xpInLevel}/100 XP đến cấp tiếp theo · tối đa 100 XP/ngày</p><div className="mt-3 border-t border-slate-100 pt-2"><p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">XP gần đây</p>{recentXp.length ? <ul className="mt-1 space-y-1">{recentXp.map((transaction) => <li key={transaction.id} className="flex justify-between gap-2 text-[11px] text-slate-600"><span className="truncate">{transaction.reason}</span><strong className="shrink-0 text-amber-700">+{transaction.points}</strong></li>)}</ul> : <p className="mt-1 text-[11px] text-slate-500">Chưa có XP trong phiên này.</p>}</div></article>

        <article className="rounded-xl border border-slate-200 bg-white p-4"><div className="flex flex-wrap items-center justify-between gap-2"><div className="flex items-center gap-2"><Target className="h-4 w-4 text-blue-600" /><h3 className="text-sm font-bold text-slate-900">Mục tiêu hôm nay</h3></div><div className="flex gap-2"><label className="sr-only" htmlFor="daily-goal-type">Loại mục tiêu</label><select id="daily-goal-type" value={dailyGoal.type} onChange={(event) => changeGoalType(event.target.value as typeof dailyGoal.type)} className="min-h-9 rounded-lg border border-slate-200 bg-white px-2 text-[11px] font-semibold text-slate-700">{Object.entries(goalNames).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select><label className="sr-only" htmlFor="daily-goal-target">Số lượng mục tiêu</label><select id="daily-goal-target" value={dailyGoal.target} onChange={(event) => setDailyGoal({ ...dailyGoal, target: Number(event.target.value) })} className="min-h-9 rounded-lg border border-slate-200 bg-white px-2 text-[11px] font-semibold text-slate-700">{goalChoices.map((target) => <option key={target} value={target}>{target}</option>)}</select></div></div><p className="mt-3 text-sm text-slate-700">{goalProgress.progress} / {dailyGoal.target} {dailyGoal.type === 'activities' ? 'loại hoạt động' : dailyGoal.type === 'lessons' ? 'bài học' : 'từ đã đánh dấu'}</p><div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-blue-500 transition-all" style={{ width: `${Math.min(100, Math.round((goalProgress.progress / dailyGoal.target) * 100))}%` }} /></div>{goalProgress.completed ? <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700"><CheckCircle2 className="h-4 w-4" />{alreadyCelebratedGoal ? 'Bạn đã hoàn thành mục tiêu hôm nay. Tốt lắm!' : 'Đã đạt mục tiêu hôm nay!'}</p> : <p className="mt-2 text-[11px] leading-5 text-slate-500">Chỉ tính bài hoàn thành, quiz đã nộp, từ mới đánh dấu và lượt luyện nói. Đổi mục tiêu bất cứ lúc nào.</p>}</article>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-xl border border-slate-200 bg-white p-4"><div className="flex items-center justify-between gap-3"><div className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-indigo-600" /><h3 className="text-sm font-bold text-slate-900">Streak & lịch học</h3></div><span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2.5 py-1 text-xs font-bold text-orange-800"><Flame className="h-3.5 w-3.5" />{streak} {streak === 1 ? 'ngày' : 'ngày liên tiếp'}</span></div><div className="mt-3 grid grid-cols-7 gap-1.5 sm:gap-2" aria-label="Lịch hoạt động học tập trong 28 ngày gần nhất">{calendar.map((day) => <div key={day.key} title={`${day.key}${day.hasActivity ? ' · Có hoạt động học' : ' · Chưa ghi nhận hoạt động'}`} aria-label={`${day.key}: ${day.hasActivity ? 'đã học' : day.isToday ? 'hôm nay, chưa học' : 'chưa học'}`} className={`flex aspect-square min-w-0 items-center justify-center rounded-lg border text-[9px] font-semibold sm:text-[10px] ${day.hasActivity ? 'border-emerald-300 bg-emerald-100 text-emerald-900' : day.isToday ? 'border-blue-300 bg-blue-50 text-blue-800' : 'border-slate-100 bg-slate-50 text-slate-400'}`}>{day.date.getDate()}</div>)}</div><div className="mt-2 flex items-center gap-3 text-[10px] text-slate-500"><span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-emerald-200" />Có hoạt động</span><span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-sm border border-blue-300 bg-blue-50" />Hôm nay</span></div></article>

        <article className="rounded-xl border border-slate-200 bg-white p-4"><div className="flex items-center gap-2"><Award className="h-4 w-4 text-violet-600" /><h3 className="text-sm font-bold text-slate-900">Huy hiệu</h3></div><div className="mt-3 grid grid-cols-1 gap-2">{badges.map((badge) => <div key={badge.id} className={`flex items-center gap-2 rounded-lg border p-2 ${badge.unlocked ? 'border-violet-200 bg-violet-50/70' : 'border-slate-100 bg-slate-50'}`}><span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-base ${badge.unlocked ? 'bg-white' : 'grayscale opacity-40'}`}>{badge.icon}</span><div className="min-w-0 flex-1"><p className={`text-xs font-bold ${badge.unlocked ? 'text-violet-950' : 'text-slate-500'}`}>{badge.name}</p><p className="text-[10px] leading-4 text-slate-500">{badge.description}</p></div><span className={`shrink-0 text-[9px] font-bold uppercase ${badge.unlocked ? 'text-emerald-700' : 'text-slate-400'}`}>{badge.unlocked ? 'Mở khóa' : 'Chưa đạt'}</span></div>)}</div></article>
      </div>

      {challenge && <article className="mt-3 rounded-xl border border-indigo-100 bg-indigo-50/60 p-4"><div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-[10px] font-bold uppercase tracking-wide text-indigo-700">Thử thách cá nhân · 7 ngày</p><h3 className="mt-1 text-sm font-bold text-slate-900">{challenge.title}</h3><p className="mt-1 text-xs leading-5 text-slate-600">{challenge.reason}</p><p className="mt-1 text-[10px] text-slate-500">Hạn: {new Date(challenge.dueAt).toLocaleDateString('vi-VN')}</p></div><div className="text-right"><span className="text-xs font-bold text-indigo-800">{challenge.progress}/{challenge.target}</span><p className="text-[10px] text-slate-500">{challenge.status === 'completed' ? 'Hoàn thành' : challenge.status === 'expired' ? 'Đã hết hạn' : 'Đang thực hiện'}</p>{challenge.status === 'active' && <Link to={`/dashboard/speaking/lesson/${challenge.lessonId}`} className="mt-1 inline-flex min-h-8 items-center gap-1 text-xs font-semibold text-indigo-700 hover:underline">Bắt đầu ôn <ArrowRight className="h-3 w-3" /></Link>}</div></div></article>}
      {!challenge && learningEvidence.length === 0 && <p className="mt-3 rounded-xl border border-dashed border-slate-200 px-4 py-3 text-xs leading-5 text-slate-500">Thử thách cá nhân sẽ xuất hiện khi có dữ liệu lặp lại cần ôn. Chưa đủ bằng chứng để tạo thử thách phù hợp.</p>}

      <p className="mt-3 text-[10px] leading-5 text-slate-500">XP, streak, mục tiêu và huy hiệu trong bản này chỉ lưu trong bộ nhớ phiên, theo ngày địa phương của thiết bị. Tải lại trang hoặc đổi tài khoản sẽ đặt lại; cần lưu trữ an toàn phía máy chủ để giữ lịch sử qua các phiên.</p>
    </section>
  )
}
