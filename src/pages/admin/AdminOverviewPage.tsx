import { BookOpen, Database, FileQuestion, GraduationCap, Library, Users } from 'lucide-react'
import { guestCourses } from '../../data/guestData'
import { allA0Lessons } from '../../data/speakingCurriculum'
import { grammarTopics } from '../../data/grammarTopics'
import { interactiveExercises } from '../../data/interactiveExercises'
import { useVocabulary } from '../../context/VocabularyContext'
import { isSupabaseConfigured } from '../../lib/supabaseClient'

function Metric({ label, value, detail, icon: Icon, unavailable = false }: { label: string; value: string | number; detail: string; icon: typeof BookOpen; unavailable?: boolean }) {
  return <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><div className="flex items-start justify-between gap-3"><span className="text-xs font-semibold text-slate-500">{label}</span><span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-50 text-blue-700"><Icon className="h-4 w-4" /></span></div><p className={`mt-4 text-2xl font-bold ${unavailable ? 'text-slate-400' : 'text-slate-950'}`}>{value}</p><p className="mt-1 text-xs leading-5 text-slate-500">{detail}</p></article>
}

export default function AdminOverviewPage() {
  const { allWords, isLoading, error, source } = useVocabulary()
  const courseCount = guestCourses.length
  const lessonCount = guestCourses.reduce((count, course) => count + course.lessons.length, 0) + allA0Lessons.length
  const exerciseCount = interactiveExercises.length + guestCourses.reduce((count, course) => count + course.lessons.reduce((sum, lesson) => sum + lesson.quiz.length, 0), 0) + allA0Lessons.reduce((count, lesson) => count + lesson.exercises.length, 0)

  return <div className="space-y-6">
    <header><p className="text-xs font-bold uppercase tracking-wider text-blue-700">ADMIN OVERVIEW</p><h1 className="mt-1 text-2xl font-bold tracking-tight">Tổng quan nội dung</h1><p className="mt-1 text-sm text-slate-600">Các số liệu hiển thị được lấy từ nội dung hiện có trong ứng dụng.</p></header>
    <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3" aria-label="Chỉ số quản trị">
      <Metric label="Tài khoản" value="Chưa có dữ liệu" detail="Chưa có API quản trị để đọc danh sách tài khoản." icon={Users} unavailable />
      <Metric label="Người học hoạt động" value="Chưa có dữ liệu" detail="Tiến độ hiện chỉ ở bộ nhớ phiên, chưa có bảng phân tích." icon={Database} unavailable />
      <Metric label="Khóa học" value={courseCount} detail="Khóa giao tiếp đang được đóng gói trong source." icon={GraduationCap} />
      <Metric label="Bài học" value={lessonCount} detail="Gồm bài giao tiếp và giáo trình nói A0." icon={BookOpen} />
      <Metric label="Chủ đề ngữ pháp" value={grammarTopics.length} detail="Nội dung hiện đóng gói trong ứng dụng." icon={BookOpen} />
      <Metric label="Bài tập / câu hỏi" value={exerciseCount} detail="Quiz, bài luyện A0 và bài tập tương tác hiện có." icon={FileQuestion} />
      <Metric label="Từ vựng" value={isLoading ? 'Đang tải…' : error ? 'Không tải được' : allWords.length.toLocaleString('vi-VN')} detail={error ? 'Kiểm tra nguồn dữ liệu từ vựng để thử lại.' : `Nguồn hiện tại: ${source === 'github' ? 'từ xa' : source === 'local_fallback' ? 'bản dự phòng local' : 'chưa có'}.`} icon={Library} unavailable={Boolean(error)} />
    </section>
    <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5"><div className="flex items-start gap-3"><Database className="mt-0.5 h-5 w-5 shrink-0 text-amber-800" /><div><h2 className="font-bold text-amber-950">Supabase: {isSupabaseConfigured ? 'đã cấu hình Auth' : 'chưa cấu hình'}</h2><p className="mt-1 text-sm leading-6 text-amber-900">Repository có migration đề xuất cho Communication Content Studio, nhưng migration chưa được áp dụng lên project Supabase. Sau khi áp dụng, RLS chỉ cho Admin có claim app_metadata tin cậy ghi nội dung; public chỉ đọc bài đã xuất bản. Bảng tài khoản, analytics và audio Storage chưa được cấu hình; tiến độ học vẫn tách biệt.</p></div></div></section>
    {error && <div role="alert" className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800">Không tải được dữ liệu từ vựng: {error}</div>}
  </div>
}
