import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, BookOpen, ChartNoAxesColumnIncreasing, Clock3, Headphones, Mic2, Target } from 'lucide-react'
import { useGuest } from '../../context/GuestContext'
import { allA0Lessons } from '../../data/speakingCurriculum'
import { listeningEpisodes } from '../../services/listeningService'

type HistoryRow = { id: string; title: string; kind: string; date: string; score?: number; href: string; topic: string }

function Metric({ label, value, detail, icon: Icon }: { label: string; value: string | number; detail: string; icon: typeof BookOpen }) {
  return <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"><div className="flex items-center justify-between"><p className="text-xs font-semibold text-slate-500">{label}</p><Icon className="h-4 w-4 text-blue-600" /></div><p className="mt-3 text-2xl font-bold text-slate-900">{value}</p><p className="mt-1 text-xs leading-5 text-slate-500">{detail}</p></article>
}

export default function CommunicationAnalyticsPage() {
  const { completedLessonIds, activeSpeakingLessonId, quizScores, learningEvidence, learningActivities } = useGuest()
  const [topicFilter, setTopicFilter] = useState('all')
  const lessonById = useMemo(() => new Map(allA0Lessons.map((lesson) => [lesson.id, lesson])), [])
  const completed = allA0Lessons.filter((lesson) => completedLessonIds.includes(`speaking-${lesson.id}`)).length
  const activeLesson = allA0Lessons.find((lesson) => lesson.id === activeSpeakingLessonId && !completedLessonIds.includes(`speaking-${lesson.id}`))

  const rows = useMemo<HistoryRow[]>(() => {
    const quizRows: HistoryRow[] = Object.entries(quizScores).flatMap(([quizId, saved]) => {
      const type = quizId.startsWith('listening:') ? 'Listening · transcript'
        : quizId.startsWith('pronunciation:') ? 'Pronunciation · nhận diện IPA'
          : quizId.startsWith('communication-content:') ? 'Conversation · bài đã xuất bản' : null
      if (!type) return []
      const episodeId = quizId.startsWith('listening:') ? quizId.slice('listening:'.length) : ''
      const episode = listeningEpisodes.find((item) => item.id === episodeId)
      const contentScenarioId = quizId.startsWith('communication-content:') ? quizId.slice('communication-content:'.length) : ''
      const title = episode?.title ?? (quizId.startsWith('pronunciation:lesson:') ? `Bài IPA ${quizId.slice('pronunciation:lesson:'.length).toUpperCase()}`
        : quizId.startsWith('pronunciation:pair:') ? `Cặp âm ${quizId.slice('pronunciation:pair:'.length).replaceAll('-', ' / ')}` : 'Bài hội thoại đã xuất bản')
      const href = episode ? `/dashboard/speaking/listening/${episode.id}`
        : contentScenarioId ? `/dashboard/conversation?scenario=${encodeURIComponent(contentScenarioId)}` : '/dashboard/speaking/pronunciation'
      return (saved.history ?? []).map((attempt, index) => ({ id: `${quizId}-${index}`, title, kind: type, date: attempt.completedAt, score: attempt.percentage, href, topic: episode?.topic ?? (quizId.startsWith('pronunciation:') ? 'Phát âm' : contentScenarioId ? 'Hội thoại' : 'Khác') }))
    })
    const speakingRows = learningEvidence.map((record) => {
      const lesson = lessonById.get(record.lessonId)
      return { id: record.id, title: lesson?.title ?? 'Lượt luyện nói', kind: record.activityType === 'speaking-lesson-check' ? 'Speaking · tự kiểm tra' : 'Speaking · tự luyện', date: record.observedAt, href: lesson ? `/dashboard/speaking/lesson/${lesson.id}` : '/dashboard/speaking', topic: lesson?.title_vi ?? 'Luyện nói' }
    })
    const completionRows: HistoryRow[] = learningActivities.flatMap((activity) => {
      const prefix = 'lesson-completed:speaking-'
      if (activity.type !== 'lesson' || !activity.sourceId.startsWith(prefix)) return []
      const lesson = lessonById.get(activity.sourceId.slice('lesson-completed:'.length + 'speaking-'.length))
      if (!lesson) return []
      return [{ id: activity.id, title: lesson.title, kind: 'Bài giao tiếp · hoàn thành', date: activity.createdAt, href: `/dashboard/speaking/lesson/${lesson.id}`, topic: lesson.title_vi }]
    })
    return [...quizRows, ...speakingRows, ...completionRows].sort((a, b) => b.date.localeCompare(a.date))
  }, [learningActivities, learningEvidence, lessonById, quizScores])
  const scored = rows.filter((row) => row.score !== undefined)
  const attempts = scored.length
  const average = attempts ? Math.round(scored.reduce((sum, row) => sum + (row.score ?? 0), 0) / attempts) : null
  const latest = scored[0]?.score
  const topics = [...new Set(rows.map((row) => row.topic))]
  const visibleRows = rows.filter((row) => topicFilter === 'all' || row.topic === topicFilter)
  const trend = scored.slice().reverse().slice(-12)
  const points = trend.map((row, index) => `${trend.length < 2 ? 50 : 12 + (index / (trend.length - 1)) * 76},${88 - (row.score ?? 0) * 0.72}`).join(' ')

  return <div className="space-y-6">
    <header className="flex flex-wrap items-start justify-between gap-3"><div><Link to="/dashboard/speaking" className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:underline"><ArrowLeft className="h-3.5 w-3.5" /> Khu vực Giao tiếp</Link><h1 className="mt-2 text-2xl font-bold text-slate-900">Tiến độ giao tiếp</h1><p className="mt-1 text-sm text-slate-600">Tổng hợp từ hoạt động đã ghi nhận trong phiên hiện tại.</p></div><span className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800">Chưa đồng bộ Supabase</span></header>

    <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      <Metric label="Bài giao tiếp hoàn thành" value={`${completed}/${allA0Lessons.length}`} detail={`${allA0Lessons.length ? Math.round(completed / allA0Lessons.length * 100) : 0}% lộ trình A0`} icon={BookOpen} />
      <Metric label="Bài đang học" value={activeLesson ? 1 : 0} detail={activeLesson?.title ?? 'Chưa có bài đang học được ghi nhận'} icon={Clock3} />
      <Metric label="Lượt có điểm" value={attempts} detail="Quiz transcript, IPA và hội thoại" icon={Target} />
      <Metric label="Điểm trung bình" value={average === null ? '—' : `${average}%`} detail={latest === undefined ? 'Chưa có kết quả quiz' : `Gần nhất: ${latest}%`} icon={ChartNoAxesColumnIncreasing} />
    </section>

    <section className="grid gap-4 lg:grid-cols-2">
      <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-start gap-3"><span className="rounded-xl bg-blue-50 p-2 text-blue-700"><ChartNoAxesColumnIncreasing className="h-5 w-5" /></span><div><h2 className="font-bold text-slate-900">Kết quả quiz theo thời gian</h2><p className="text-xs text-slate-500">Điểm phần trăm · tối đa 12 lượt gần nhất</p></div></div>
        {trend.length < 2 ? <p className="mt-5 rounded-xl border border-dashed border-slate-200 p-5 text-sm leading-6 text-slate-600">{trend.length === 0 ? 'Chưa có kết quả để vẽ biểu đồ. Hãy thử một bài quiz giao tiếp có lưu điểm.' : 'Cần ít nhất hai lượt có điểm để xem xu hướng.'}</p> : <div className="mt-5"><svg viewBox="0 0 100 100" role="img" aria-label="Biểu đồ điểm quiz theo thời gian" className="h-44 w-full overflow-visible"><line x1="10" y1="16" x2="10" y2="88" stroke="#cbd5e1" /><line x1="10" y1="88" x2="92" y2="88" stroke="#cbd5e1" /><text x="0" y="20" fontSize="4" fill="#64748b">100%</text><text x="3" y="88" fontSize="4" fill="#64748b">0%</text><polyline points={points} fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />{trend.map((row, index) => <circle key={row.id} cx={trend.length < 2 ? 50 : 12 + (index / (trend.length - 1)) * 76} cy={88 - (row.score ?? 0) * 0.72} r="1.8" fill="#2563eb"><title>{new Date(row.date).toLocaleString('vi-VN')} · {row.score}%</title></circle>)}</svg><div className="flex justify-between text-[11px] text-slate-500"><span>{new Date(trend[0].date).toLocaleDateString('vi-VN')}</span><span>{new Date(trend[trend.length - 1].date).toLocaleDateString('vi-VN')}</span></div></div>}</article>
      <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-center gap-3"><span className="rounded-xl bg-violet-50 p-2 text-violet-700"><Mic2 className="h-5 w-5" /></span><div><h2 className="font-bold text-slate-900">Dữ liệu theo kỹ năng</h2><p className="text-xs text-slate-500">Chỉ đánh giá phần có kết quả được lưu</p></div></div><div className="mt-4 divide-y divide-slate-100">{[{ name: 'Listening', count: scored.filter((row) => row.kind.startsWith('Listening')).length, note: 'Quiz đọc hiểu transcript; chưa đo nghe audio.' }, { name: 'Pronunciation', count: scored.filter((row) => row.kind.startsWith('Pronunciation')).length, note: 'Nhận diện IPA; không đánh giá giọng nói.' }, { name: 'Speaking', count: learningEvidence.length, note: 'Có lượt tự luyện/tự kiểm tra, chưa có điểm đánh giá tự động.' }, { name: 'Conversation', count: scored.filter((row) => row.kind.startsWith('Conversation')).length, note: 'Điểm quiz từ nội dung hội thoại đã xuất bản; chưa lưu phiên role-play.' }].map((item) => <div key={item.name} className="flex items-start justify-between gap-3 py-3"><div><p className="text-sm font-semibold text-slate-800">{item.name}</p><p className="mt-0.5 text-xs leading-5 text-slate-500">{item.note}</p></div><span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">{item.count} lượt</span></div>)}</div><Link to="/dashboard/communication-assessment" className="mt-2 inline-flex min-h-10 items-center gap-2 rounded-lg bg-blue-600 px-3 text-xs font-semibold text-white hover:bg-blue-700"><Headphones className="h-4 w-4" /> Bắt đầu bài đánh giá</Link></article>
    </section>

    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex flex-wrap items-center justify-between gap-3"><div><h2 className="font-bold text-slate-900">Lịch sử hoạt động</h2><p className="mt-1 text-xs text-slate-500">Gồm quiz, lượt luyện và bài hoàn thành có dấu thời gian thực tế.</p></div><label className="text-xs font-medium text-slate-600">Chủ đề <select value={topicFilter} onChange={(event) => setTopicFilter(event.target.value)} className="ml-2 min-h-9 rounded-lg border border-slate-200 bg-white px-2 text-xs"><option value="all">Tất cả</option>{topics.map((topic) => <option key={topic} value={topic}>{topic}</option>)}</select></label></div>
      {visibleRows.length === 0 ? <div className="mt-4 rounded-xl border border-dashed border-slate-200 px-4 py-8 text-center"><p className="text-sm font-semibold text-slate-800">Chưa có lịch sử luyện tập trong phiên này</p><p className="mt-1 text-xs leading-5 text-slate-500">Bắt đầu từ bài đánh giá giao tiếp; kết quả sẽ hiện ở đây cho đến khi tải lại trang.</p><Link to="/dashboard/communication-assessment" className="mt-3 inline-flex min-h-10 items-center rounded-lg bg-blue-600 px-3 text-xs font-semibold text-white">Chọn bài luyện</Link></div> : <div className="mt-4 divide-y divide-slate-100">{visibleRows.map((row) => <Link key={row.id} to={row.href} className="flex flex-wrap items-center justify-between gap-2 py-3 hover:bg-slate-50"><span className="min-w-0"><span className="block truncate text-sm font-semibold text-slate-800">{row.title}</span><span className="mt-1 block text-xs text-slate-500">{row.kind} · {row.topic}</span></span><span className="flex items-center gap-3 text-xs text-slate-500"><time dateTime={row.date}>{new Date(row.date).toLocaleString('vi-VN')}</time>{row.score !== undefined && <strong className="text-slate-800">{row.score}%</strong>}</span></Link>)}</div>}
    </section>
    <p className="text-center text-xs leading-5 text-slate-400">Dữ liệu học tập hiện chỉ nằm trong bộ nhớ phiên, không lưu bền vững và không được ghi vào Supabase. Thời lượng học, lịch sử hội thoại, từ vựng và kết quả tự động về nói/phát âm chưa có nguồn dữ liệu phân tích.</p>
  </div>
}
