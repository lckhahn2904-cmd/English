import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Flame,
  GraduationCap,
  RefreshCw,
  Sparkles,
  Target,
  Trophy,
  UserRound,
} from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useGuest } from '../../context/GuestContext'
import { useVocabulary } from '../../context/VocabularyContext'
import { guestCourses } from '../../data/guestData'
import { allA0Lessons } from '../../data/speakingCurriculum'
import { buildLearningIntelligence } from '../../services/learningIntelligenceService'
import MotivationDashboardSection from '../../components/dashboard/MotivationDashboardSection'
import { createVocabularyLessons } from '../../services/vocabularyLessonService'

type VocabularyLessonItem = {
  id: string
  groupId: string
  groupName: string
  number: number
  wordIds: string[]
}

function getTimeGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (!parts.length) return 'ET'
  return parts.length === 1
    ? parts[0].slice(0, 2).toUpperCase()
    : `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
}

function StatCard({
  icon: Icon,
  label,
  value,
  detail,
  tone,
}: {
  icon: typeof BookOpen
  label: string
  value: string | number
  detail: string
  tone: string
}) {
  return (
    <article className="min-w-0 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${tone}`}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <span className="truncate text-xs font-medium text-gray-500">{label}</span>
      </div>
      <p className="mt-4 text-2xl font-bold tracking-tight text-gray-900">{value}</p>
      <p className="mt-1 text-xs leading-5 text-gray-500">{detail}</p>
    </article>
  )
}

export default function DashboardHome() {
  const { user, isAuthenticated } = useAuth()
  const { isGuest, completedLessonIds, learnedVocabIds, quizScores, activeSpeakingLessonId, learningEvidence } = useGuest()
  const { groups, allWords, isLoading, error, refetch } = useVocabulary()
  const isGuestMode = !isAuthenticated && isGuest

  const name = isGuestMode
    ? 'bạn'
    : user?.user_metadata?.full_name || user?.user_metadata?.name || 'bạn'
  const avatarUrl = user?.user_metadata?.avatar_url || user?.user_metadata?.picture

  const vocabularyLessons = useMemo<VocabularyLessonItem[]>(() => groups.flatMap((group) =>
    createVocabularyLessons(group).map((lesson) => ({
      id: lesson.id,
      groupId: group.id,
      groupName: group.name,
      number: lesson.number,
      wordIds: lesson.words.map((word) => word.id),
    }))
  ), [groups])

  const learningSnapshot = useMemo(() => {
    const completedIds = new Set(completedLessonIds)
    const learnedIds = new Set(learnedVocabIds)
    const vocabularyProgress = vocabularyLessons.map((lesson) => ({
      ...lesson,
      learnedCount: lesson.wordIds.filter((id) => learnedIds.has(id)).length,
      completed: completedIds.has(lesson.id),
    }))
    const communicationLessons = guestCourses.flatMap((course) => course.lessons)
    const knownLessonIds = new Set([
      ...vocabularyProgress.map((lesson) => lesson.id),
      ...communicationLessons.map((lesson) => lesson.id),
    ])
    const completed = [...knownLessonIds].filter((id) => completedIds.has(id)).length
    const inProgress = vocabularyProgress.filter((lesson) =>
      !lesson.completed && lesson.learnedCount > 0
    ).length
    const total = knownLessonIds.size

    return {
      completed,
      inProgress,
      notRecorded: Math.max(0, total - completed - inProgress),
      total,
      percent: total ? Math.round((completed / total) * 100) : 0,
      vocabularyProgress,
    }
  }, [completedLessonIds, learnedVocabIds, vocabularyLessons])

  const nextVocabularyLesson = useMemo(() => {
    const learnedIds = new Set(learnedVocabIds)
    const incomplete = learningSnapshot.vocabularyProgress.filter((lesson) => !lesson.completed)
    const partiallyLearned = incomplete
      .filter((lesson) => lesson.learnedCount > 0)
      .sort((a, b) => b.learnedCount / b.wordIds.length - a.learnedCount / a.wordIds.length)
    const lesson = partiallyLearned[0] ?? incomplete[0]
    if (!lesson) return null

    const firstUnlearnedIndex = lesson.wordIds.findIndex((id) => !learnedIds.has(id))
    const wordNumber = firstUnlearnedIndex >= 0 ? firstUnlearnedIndex + 1 : 1
    const href = `/dashboard/study?${new URLSearchParams({
      course: lesson.groupId,
      lesson: String(lesson.number),
      word: String(wordNumber),
    })}`

    return {
      ...lesson,
      href,
      isInProgress: lesson.learnedCount > 0,
      wordNumber,
    }
  }, [learnedVocabIds, learningSnapshot.vocabularyProgress])

  const completedQuizCount = Object.keys(quizScores).length
  const intelligence = useMemo(() => buildLearningIntelligence({
    completedLessonIds,
    activeSpeakingLessonId,
    learningEvidence,
    learnedVocabulary: allWords.filter((word) => learnedVocabIds.includes(word.id)).map((word) => word.word),
    lessons: allA0Lessons,
  }), [activeSpeakingLessonId, allWords, completedLessonIds, learnedVocabIds, learningEvidence])
  const stats = [
    {
      icon: Trophy,
      label: 'Bài học hoàn thành',
      value: isLoading ? '…' : learningSnapshot.completed,
      detail: 'Được ghi nhận trong phiên hiện tại',
      tone: 'bg-emerald-50 text-emerald-700',
    },
    {
      icon: Clock3,
      label: 'Thời gian học',
      value: '—',
      detail: 'Hệ thống chưa ghi nhận thời lượng',
      tone: 'bg-blue-50 text-blue-700',
    },
    {
      icon: Flame,
      label: 'Chuỗi ngày học',
      value: '—',
      detail: 'Chưa có lịch sử theo ngày',
      tone: 'bg-orange-50 text-orange-700',
    },
    {
      icon: Target,
      label: 'Mục tiêu tuần',
      value: 'Chưa đặt',
      detail: 'Hồ sơ chưa có mục tiêu học tập',
      tone: 'bg-violet-50 text-violet-700',
    },
  ]

  return (
    <div className="space-y-6 sm:space-y-7">
      <header className="flex flex-col gap-4 rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50 p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-7">
        <div className="flex min-w-0 items-center gap-4">
          {avatarUrl ? (
            <img src={avatarUrl} alt="Ảnh đại diện" className="h-14 w-14 shrink-0 rounded-2xl object-cover ring-4 ring-white shadow-sm" referrerPolicy="no-referrer" />
          ) : (
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 text-lg font-bold text-white shadow-sm">
              {getInitials(name)}
            </div>
          )}
          <div className="min-w-0">
            <p className="text-sm font-semibold text-blue-700">{getTimeGreeting()} <span aria-hidden="true">👋</span></p>
            <h1 className="mt-1 truncate text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{name}</h1>
            <p className="mt-1 text-sm text-gray-600">Chào mừng bạn quay lại EasyTalk English.</p>
          </div>
        </div>
        <Link to="/dashboard/settings" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
          <UserRound className="h-4 w-4" aria-hidden="true" /> Hồ sơ của tôi
        </Link>
      </header>

      {isGuestMode && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900" role="status">
          Tiến độ khách chỉ được giữ trong phiên hiện tại và sẽ mất khi tải lại trang.
        </div>
      )}

      <section aria-label="Thống kê học tập" className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((stat) => <StatCard key={stat.label} {...stat} />)}
      </section>

      <section className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
        <article className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-violet-700">Tổng quan</p>
              <h2 className="mt-1 text-lg font-bold text-gray-900">Tiến độ học tập</h2>
            </div>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">Trong phiên này</span>
          </div>

          {isLoading ? (
            <p className="mt-6 text-sm text-gray-500" role="status">Đang tổng hợp tiến độ học tập…</p>
          ) : error ? (
            <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4" role="alert">
              <p className="text-sm font-semibold text-amber-950">Chưa thể tải đầy đủ tiến độ từ vựng.</p>
              <p className="mt-1 text-xs leading-5 text-amber-900">Các thống kê sẽ đầy đủ hơn khi dữ liệu khóa học tải thành công.</p>
              <button onClick={() => refetch(true)} className="mt-3 inline-flex min-h-10 items-center gap-2 rounded-lg bg-amber-700 px-3 py-2 text-xs font-semibold text-white hover:bg-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600">
                <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" /> Tải lại dữ liệu
              </button>
            </div>
          ) : learningSnapshot.total === 0 ? (
            <div className="mt-5 rounded-xl border border-dashed border-gray-200 bg-gray-50 p-5 text-sm text-gray-600" role="status">
              Chưa có khóa học để tổng hợp tiến độ. Hãy mở khu vực khóa học để bắt đầu.
            </div>
          ) : (
            <>
              <div className="mt-6 flex items-end justify-between gap-3">
                <div>
                  <p className="text-3xl font-bold tracking-tight text-gray-900">{learningSnapshot.percent}%</p>
                  <p className="mt-1 text-xs text-gray-500">{learningSnapshot.completed} / {learningSnapshot.total} bài hoàn thành</p>
                </div>
                <GraduationCap className="mb-1 h-7 w-7 text-violet-500" aria-hidden="true" />
              </div>
              <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-gray-100" role="progressbar" aria-label="Tiến độ hoàn thành khóa học trong phiên" aria-valuemin={0} aria-valuemax={100} aria-valuenow={learningSnapshot.percent}>
                <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500 transition-all" style={{ width: `${learningSnapshot.percent}%` }} />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                <ProgressStatus label="Hoàn thành" value={learningSnapshot.completed} tone="bg-emerald-500" />
                <ProgressStatus label="Đang học" value={learningSnapshot.inProgress} tone="bg-blue-500" />
                <ProgressStatus label="Chưa ghi nhận" value={learningSnapshot.notRecorded} tone="bg-gray-300" />
              </div>
              <p className="mt-4 border-t border-gray-100 pt-3 text-xs leading-5 text-gray-500">
                Tiến độ dựa trên bài đã hoàn thành và từ vựng đã đánh dấu. Ứng dụng chưa lưu lượt mở bài vào lịch sử.
              </p>
            </>
          )}
        </article>

        <article className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6" aria-labelledby="weekly-activity-title">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-blue-700">7 ngày gần nhất</p>
              <h2 id="weekly-activity-title" className="mt-1 text-lg font-bold text-gray-900">Hoạt động học tập</h2>
            </div>
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-5 flex min-h-40 flex-col items-center justify-center rounded-xl border border-dashed border-gray-200 bg-gray-50/70 px-5 py-6 text-center" role="status">
            <CalendarDays className="h-7 w-7 text-gray-300" aria-hidden="true" />
            <p className="mt-3 text-sm font-semibold text-gray-700">Chưa có dữ liệu hoạt động theo ngày</p>
            <p className="mt-1 max-w-xs text-xs leading-5 text-gray-500">Hệ thống chưa lưu thời điểm hoàn thành bài hoặc thời gian học nên chưa thể lập biểu đồ tuần.</p>
          </div>
        </article>
      </section>

      <section className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)]">
        <ContinueLearning
          isLoading={isLoading}
          error={error}
          onRetry={() => refetch(true)}
          lesson={nextVocabularyLesson}
          vocabularyLessonCount={vocabularyLessons.length}
        />

        <article className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-blue-50 p-5 shadow-sm sm:p-6">
          <div className="flex items-center gap-2 text-violet-700">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-wide">Gợi ý học tập</p>
          </div>
          <h2 className="mt-3 text-lg font-bold text-gray-900">
            {nextVocabularyLesson?.isInProgress ? 'Hoàn thành bài đang học' : 'Chọn bài tiếp theo trong lộ trình'}
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            {nextVocabularyLesson?.isInProgress
              ? `Bạn đã đánh dấu ${nextVocabularyLesson.learnedCount}/${nextVocabularyLesson.wordIds.length} từ ở ${nextVocabularyLesson.groupName} · Bài ${nextVocabularyLesson.number}.`
              : nextVocabularyLesson
                ? 'Bắt đầu bài từ vựng tiếp theo. Tiến độ sẽ cập nhật khi bạn đánh dấu từ đã thuộc.'
                : learningSnapshot.completed > 0
                  ? 'Bạn đã hoàn thành các bài từ vựng hiện có. Hãy chọn một chủ đề ngữ pháp hoặc bài luyện tập để tiếp tục.'
                  : 'Bắt đầu với một bài từ vựng hoặc khám phá lộ trình ngữ pháp của EasyTalk English.'}
          </p>
          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            {nextVocabularyLesson && (
              <Link to={nextVocabularyLesson.href} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                {nextVocabularyLesson.isInProgress ? 'Tiếp tục học' : 'Bắt đầu bài học'} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            )}
            <Link to="/dashboard/grammar" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-violet-200 bg-white px-4 py-2.5 text-sm font-semibold text-violet-700 transition hover:bg-violet-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500">
              Mở lộ trình ngữ pháp <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </article>
      </section>

      <MotivationDashboardSection />

      <section className="rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm sm:p-6" aria-labelledby="learning-intelligence-title">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div><p className="text-xs font-bold uppercase tracking-wide text-indigo-700">Learning Intelligence · A0</p><h2 id="learning-intelligence-title" className="mt-1 text-lg font-bold text-gray-900">Học tập theo tiến độ thực tế</h2><p className="mt-1 text-xs leading-5 text-gray-500">Bài hoàn thành và kiến thức thành thạo được theo dõi riêng.</p></div>
          <Link to="/dashboard/speaking" className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-indigo-200 px-3 text-xs font-semibold text-indigo-700 hover:bg-indigo-50">Mở lộ trình A0 <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-xl bg-slate-50 p-3"><p className="text-[11px] text-slate-500">Bài A0 hoàn thành</p><p className="mt-1 text-xl font-bold text-slate-900">{intelligence.completedLessonCount}<span className="text-sm font-medium text-slate-400">/{intelligence.totalLessons}</span></p></div>
          <div className="rounded-xl bg-slate-50 p-3"><p className="text-[11px] text-slate-500">Đơn vị kiến thức đã gặp</p><p className="mt-1 text-xl font-bold text-slate-900">{intelligence.knowledge.filter((item) => item.status !== 'not-started').length}</p></div>
          <div className="rounded-xl bg-slate-50 p-3"><p className="text-[11px] text-slate-500">Lượt kiểm tra kiến thức</p><p className="mt-1 text-xl font-bold text-slate-900">{intelligence.evidenceCount}</p></div>
          <div className="rounded-xl bg-slate-50 p-3"><p className="text-[11px] text-slate-500">Cần ôn (đủ bằng chứng)</p><p className="mt-1 text-xl font-bold text-slate-900">{intelligence.needsReviewKnowledgeCount}</p></div>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-xl border border-blue-100 bg-blue-50/50 p-4"><div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-blue-700" /><h3 className="text-sm font-bold text-slate-900">Đề xuất tiếp theo</h3></div>
            {intelligence.recommendations.length > 0 ? <ul className="mt-3 space-y-2">{intelligence.recommendations.slice(0, 3).map((recommendation) => <li key={recommendation.id} className="rounded-lg bg-white p-3"><p className="text-sm font-semibold text-slate-900">{recommendation.activity}</p><p className="mt-1 text-xs leading-5 text-slate-600">Lý do: {recommendation.reason}</p>{recommendation.lessonId && <Link to={`/dashboard/speaking/lesson/${recommendation.lessonId}`} className="mt-2 inline-flex min-h-8 items-center gap-1 text-xs font-semibold text-blue-700 hover:underline">Mở bài luyện <ArrowRight className="h-3 w-3" /></Link>}</li>)}</ul> : <p className="mt-3 rounded-lg bg-white p-3 text-xs leading-5 text-slate-600">Chưa có đề xuất cá nhân hóa dựa trên bằng chứng. Bạn vẫn có thể chọn bất kỳ bài A0 nào.</p>}
          </article>
          <article className="rounded-xl border border-slate-200 p-4"><h3 className="text-sm font-bold text-slate-900">Learning insight</h3><p className="mt-2 text-sm leading-6 text-slate-700">{intelligence.insight}</p><p className="mt-2 text-[11px] leading-5 text-slate-500">Thành thạo: {intelligence.masteredKnowledgeCount}. Chỉ được ghi nhận sau kết quả ổn định qua nhiều hoạt động khác nhau; hoàn thành bài học không tự đánh dấu thành thạo.</p>
            <div className="mt-3 border-t border-slate-100 pt-3"><h4 className="text-xs font-bold text-slate-700">Hoạt động gần đây trong phiên</h4>{learningEvidence.length === 0 ? <p className="mt-1 text-xs leading-5 text-slate-500">Chưa có lượt luyện A0 được ghi nhận trong phiên này.</p> : <ul className="mt-2 space-y-1.5">{learningEvidence.slice(-4).reverse().map((record) => <li key={record.id} className="flex flex-wrap justify-between gap-2 text-xs text-slate-600"><span>{record.activityType === 'speaking-lesson-check' ? 'Kiểm tra bài học' : 'Tự luyện nói'} · {allA0Lessons.find((lesson) => lesson.id === record.lessonId)?.code ?? record.lessonId}{record.outcome === 'self-reported-practice' ? ' · tự ghi nhận' : record.outcome === 'met' ? ' · đạt câu hỏi' : ' · cần hỗ trợ'}</span><time dateTime={record.observedAt}>{new Date(record.observedAt).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}</time></li>)}</ul>}</div>
          </article>
        </div>
        <p className="mt-3 text-[11px] leading-5 text-slate-500">Nguồn dữ liệu: tiến độ và lượt luyện A0 trong bộ nhớ phiên, cùng từ vựng bạn đã đánh dấu. Không lưu thời lượng hoặc lịch sử hội thoại; dữ liệu này chưa đồng bộ Supabase và sẽ mất khi tải lại.</p>
      </section>

      <p className="text-center text-xs leading-5 text-gray-400">
        {isGuestMode
          ? `Bạn đã làm ${completedQuizCount} bài quiz trong phiên này. Dữ liệu khách không được lưu khi tải lại trang.`
          : `Bạn đã làm ${completedQuizCount} bài quiz trong phiên này. Tiến độ hiện chưa được đồng bộ vào Supabase.`}
      </p>
    </div>
  )
}

function ProgressStatus({ label, value, tone }: { label: string; value: number; tone: string }) {
  return (
    <div className="rounded-xl bg-gray-50 px-3 py-3">
      <div className="flex items-center gap-1.5">
        <span className={`h-2 w-2 shrink-0 rounded-full ${tone}`} aria-hidden="true" />
        <p className="truncate text-[11px] font-medium text-gray-500">{label}</p>
      </div>
      <p className="mt-2 text-lg font-bold text-gray-900">{value}</p>
    </div>
  )
}

function ContinueLearning({
  isLoading,
  error,
  onRetry,
  lesson,
  vocabularyLessonCount,
}: {
  isLoading: boolean
  error: string | null
  onRetry: () => void
  lesson: (VocabularyLessonItem & { learnedCount: number; completed: boolean; href: string; isInProgress: boolean; wordNumber: number }) | null
  vocabularyLessonCount: number
}) {
  return (
    <article className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">Học tiếp</p>
          <h2 className="mt-1 text-lg font-bold text-gray-900">Tiếp tục học tập</h2>
        </div>
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
          <BookOpen className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>

      {isLoading ? (
        <p className="mt-5 text-sm text-gray-500" role="status">Đang tìm bài học…</p>
      ) : error ? (
        <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4" role="alert">
          <p className="text-sm text-red-800">Không tải được khóa học để xác định bài tiếp theo.</p>
          <button onClick={onRetry} className="mt-3 inline-flex min-h-10 items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-xs font-semibold text-white hover:bg-red-700">
            <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" /> Thử tải lại
          </button>
        </div>
      ) : lesson ? (
        <div className="mt-5 rounded-xl border border-emerald-100 bg-emerald-50/50 p-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-emerald-800">{lesson.groupName}</span>
            <span className="text-xs text-gray-500">Bài {lesson.number}</span>
          </div>
          <h3 className="mt-3 text-base font-bold text-gray-900">
            {lesson.isInProgress ? 'Bài học đang học' : 'Bài học tiếp theo'}
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            {lesson.isInProgress
              ? `Đã đánh dấu ${lesson.learnedCount}/${lesson.wordIds.length} từ đã thuộc.`
              : `${lesson.wordIds.length} từ trong bài học này.`}
          </p>
          <Link to={lesson.href} className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
            {lesson.isInProgress ? 'Tiếp tục từ vựng' : 'Bắt đầu bài học'} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      ) : vocabularyLessonCount > 0 ? (
        <div className="mt-5 rounded-xl border border-emerald-100 bg-emerald-50/50 p-4" role="status">
          <div className="flex items-center gap-2 text-emerald-800"><CheckCircle2 className="h-5 w-5" aria-hidden="true" /><p className="text-sm font-semibold">Bạn đã hoàn thành các bài từ vựng hiện có.</p></div>
          <Link to="/dashboard/exercises" className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-white px-4 py-2.5 text-sm font-semibold text-emerald-800 hover:bg-emerald-50">Mở bài luyện tập <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      ) : (
        <div className="mt-5 rounded-xl border border-dashed border-gray-200 bg-gray-50 p-4" role="status">
          <p className="text-sm font-semibold text-gray-800">Chưa có bài học từ vựng để tiếp tục.</p>
          <p className="mt-1 text-xs leading-5 text-gray-500">Bạn có thể bắt đầu từ lộ trình ngữ pháp hoặc xem các bài luyện tập.</p>
          <Link to="/dashboard/grammar" className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">Khám phá ngữ pháp <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      )}
    </article>
  )
}
