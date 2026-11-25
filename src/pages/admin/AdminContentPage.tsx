import { useMemo, useState } from 'react'
import { Eye, Search } from 'lucide-react'
import { guestCourses } from '../../data/guestData'
import { allA0Lessons } from '../../data/speakingCurriculum'
import { grammarTopics } from '../../data/grammarTopics'
import { interactiveExercises } from '../../data/interactiveExercises'
import { useVocabulary } from '../../context/VocabularyContext'

type ContentKind = 'all' | 'course' | 'lesson' | 'grammar' | 'exercise' | 'vocabulary'
type CatalogEntry = { id: string; kind: Exclude<ContentKind, 'all'>; title: string; subtitle: string; detail: string }
const kindLabels: Record<Exclude<ContentKind, 'all'>, string> = { course: 'Khóa học', lesson: 'Bài học', grammar: 'Ngữ pháp', exercise: 'Bài tập', vocabulary: 'Từ vựng' }

export default function AdminContentPage() {
  const { allWords, isLoading, error } = useVocabulary()
  const [kind, setKind] = useState<ContentKind>('all')
  const [query, setQuery] = useState('')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const entries = useMemo<CatalogEntry[]>(() => [
    ...guestCourses.flatMap((course) => [
      { id: course.id, kind: 'course' as const, title: course.title, subtitle: `${course.level} · ${course.lessons.length} bài`, detail: `${course.description}\n\nTrạng thái: nội dung đóng gói cùng ứng dụng.` },
      ...course.lessons.map((lesson) => ({ id: lesson.id, kind: 'lesson' as const, title: lesson.title, subtitle: `Bài học · ${lesson.duration}`, detail: `${lesson.description}\n\nHội thoại: ${lesson.dialogue.length} lượt\nTừ vựng trong bài: ${lesson.vocabulary.length}\nCâu hỏi quiz: ${lesson.quiz.length}` })),
    ]),
    ...allA0Lessons.map((lesson) => ({ id: lesson.id, kind: 'lesson' as const, title: lesson.title, subtitle: `Speaking ${lesson.code} · A0`, detail: `${lesson.introduction}\n\nMục tiêu: ${lesson.objectives.join(' · ')}\nBài tập: ${lesson.exercises.length}` })),
    ...grammarTopics.map((topic) => ({ id: topic.id, kind: 'grammar' as const, title: topic.title, subtitle: `${topic.section} · ${topic.level}`, detail: `${topic.summary}\n\n${topic.explanation}\n\nCông thức: ${topic.structure}\nVí dụ: ${topic.examples.map((item) => `${item.english} — ${item.vietnamese}`).join('\n')}` })),
    ...interactiveExercises.map((exercise) => ({ id: exercise.id, kind: 'exercise' as const, title: exercise.prompt, subtitle: `Bài tập · ${exercise.type}`, detail: `${'choices' in exercise ? `Lựa chọn: ${exercise.choices.join(' · ')}\n` : ''}Đáp án: ${exercise.correctAnswers.join(' / ')}\nGiải thích: ${exercise.explanation}` })),
    ...allWords.map((word) => ({ id: word.id, kind: 'vocabulary' as const, title: word.word, subtitle: `${word.groupName} · ${word.type}`, detail: `IPA: ${word.ipa || 'Chưa có'}\nNghĩa: ${word.vietnamese || word.definition || 'Chưa có'}\nVí dụ: ${word.example || 'Chưa có'}` })),
  ], [allWords])
  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('vi')
    return entries.filter((entry) => (kind === 'all' || entry.kind === kind) && (!normalizedQuery || `${entry.title} ${entry.subtitle} ${entry.detail}`.toLocaleLowerCase('vi').includes(normalizedQuery)))
  }, [entries, kind, query])
  const visible = filtered.slice(0, 40)
  const selected = entries.find((entry) => entry.id === selectedId)

  return <div className="space-y-5">
    <header><p className="text-xs font-bold uppercase tracking-wider text-blue-700">CONTENT CATALOG</p><h1 className="mt-1 text-2xl font-bold tracking-tight">Kho nội dung</h1><p className="mt-1 text-sm text-slate-600">Tra cứu và xem trước dữ liệu thực đang được ứng dụng sử dụng.</p></header>
    <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-950">Chế độ chỉ xem: nội dung hiện nằm trong source/data và từ điển tải theo cấu hình hiện tại. Không thể tạo, sửa, xóa, lưu nháp hay xuất bản cho đến khi có kho nội dung phía server và RLS.</div>
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm" aria-label="Tìm nội dung">
      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_190px]"><label className="relative"><span className="sr-only">Tìm nội dung</span><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Tìm theo tên hoặc nội dung…" className="min-h-11 w-full rounded-xl border border-slate-200 pl-9 pr-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" /></label><label><span className="sr-only">Loại nội dung</span><select value={kind} onChange={(event) => setKind(event.target.value as ContentKind)} className="min-h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm"><option value="all">Tất cả nội dung</option>{Object.entries(kindLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label></div>
      {isLoading && kind !== 'course' && kind !== 'lesson' && kind !== 'grammar' && kind !== 'exercise' && <p className="mt-4 text-xs text-slate-500">Đang tải từ vựng…</p>}
      {error && kind === 'vocabulary' && <p role="alert" className="mt-4 text-xs text-rose-700">Không tải được thư viện từ vựng: {error}</p>}
      <p className="mt-3 text-xs text-slate-500">{filtered.length.toLocaleString('vi-VN')} mục phù hợp{filtered.length > 40 ? ' · đang hiển thị 40 mục đầu, hãy tìm kiếm để thu hẹp kết quả' : ''}</p>
      <div className="mt-3 grid gap-2 md:grid-cols-2">{visible.map((entry) => <button type="button" key={`${entry.kind}:${entry.id}`} onClick={() => setSelectedId(entry.id)} className={`min-w-0 rounded-xl border p-3 text-left transition ${selectedId === entry.id ? 'border-blue-300 bg-blue-50' : 'border-slate-200 hover:border-blue-200 hover:bg-slate-50'}`}><span className="flex items-start justify-between gap-2"><span className="line-clamp-2 text-sm font-semibold text-slate-900">{entry.title}</span><span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">{kindLabels[entry.kind]}</span></span><span className="mt-1 block truncate text-xs text-slate-500">{entry.subtitle}</span></button>)}</div>
      {!visible.length && <p className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500">Không có nội dung phù hợp.</p>}
    </section>
    {selected && <section className="rounded-2xl border border-blue-200 bg-white p-5 shadow-sm" aria-live="polite"><div className="flex items-start gap-3"><Eye className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" /><div className="min-w-0"><p className="text-[10px] font-bold uppercase tracking-wide text-blue-700">Xem trước · {kindLabels[selected.kind]}</p><h2 className="mt-1 break-words text-lg font-bold text-slate-950">{selected.title}</h2><p className="mt-1 text-xs text-slate-500">{selected.subtitle}</p><pre className="mt-4 whitespace-pre-wrap break-words font-sans text-sm leading-6 text-slate-700">{selected.detail}</pre></div></div></section>}
  </div>
}
