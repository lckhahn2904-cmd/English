import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { AlertTriangle, ArrowDown, ArrowUp, BookOpen, Check, Eye, FilePlus2, LoaderCircle, Plus, Save, Send, Trash2, VolumeX, X } from 'lucide-react'
import { conversationScenarios, scenarioCategories, type ScenarioLevel } from '../../data/conversationScenarios'
import { isSupabaseConfigured } from '../../lib/supabaseClient'
import { changeCommunicationContentStatus, copyScenarioToDraft, createCommunicationDraft, createContentQuestion, createDialogueTurn, createVocabularyItem, deleteCommunicationDraft, loadCommunicationContent, saveCommunicationDraft, validateCommunicationContent, type CommunicationContentDocument, type CommunicationContentQuestion, type CommunicationContentStatus } from '../../services/communicationContentService'

type StatusFilter = 'all' | CommunicationContentStatus

export default function AdminCommunicationStudioPage() {
  const [documents, setDocuments] = useState<CommunicationContentDocument[]>([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState('')
  const [actionMessage, setActionMessage] = useState('')
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')
  const [categoryFilter, setCategoryFilter] = useState<'all' | (typeof scenarioCategories)[number]>('all')
  const [editing, setEditing] = useState<CommunicationContentDocument | null>(null)
  const [preview, setPreview] = useState<CommunicationContentDocument | null>(null)
  const [saving, setSaving] = useState(false)

  async function refreshDocuments() {
    setLoading(true)
    setLoadError('')
    try {
      setDocuments(await loadCommunicationContent())
    } catch (error) {
      setLoadError(error instanceof Error ? error.message : 'Không tải được kho nội dung.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { void refreshDocuments() }, [])

  const sourceEntries = useMemo(() => conversationScenarios.map((scenario) => ({
    id: `source:${scenario.id}`,
    title: scenario.title,
    category: scenario.category,
    level: scenario.level,
    status: 'published' as const,
    subtitle: `Nội dung đóng gói · ${scenario.category} · ${scenario.level}`,
    sourceScenario: scenario,
  })), [])

  const filteredSources = sourceEntries.filter((entry) => (statusFilter === 'all' || statusFilter === 'published')
    && (categoryFilter === 'all' || entry.category === categoryFilter)
    && `${entry.title} ${entry.category} ${entry.level}`.toLocaleLowerCase('vi').includes(query.trim().toLocaleLowerCase('vi')))
  const filteredDocuments = documents.filter((document) => (statusFilter === 'all' || document.status === statusFilter)
    && (categoryFilter === 'all' || document.category === categoryFilter)
    && `${document.title} ${document.description} ${document.category} ${document.level}`.toLocaleLowerCase('vi').includes(query.trim().toLocaleLowerCase('vi')))

  const openSource = (scenarioId: string) => {
    const scenario = conversationScenarios.find((item) => item.id === scenarioId)
    if (!scenario) return
    setEditing(null)
    setPreview({ ...copyScenarioToDraft(scenario), status: 'published' })
    setActionMessage('Đây là bản xem trước từ thư viện nguồn. Tạo bản nháp để chỉnh sửa; nội dung gốc không bị thay đổi.')
  }

  const openDocument = (document: CommunicationContentDocument) => {
    if (document.status === 'draft') {
      setEditing(structuredClone(document))
      setPreview(null)
    } else {
      setPreview(document)
      setEditing(null)
    }
    setActionMessage('')
  }

  const startNewDraft = () => {
    setPreview(null)
    setEditing(createCommunicationDraft())
    setActionMessage('Bản nháp mới đang được soạn. Lưu vào kho cần Supabase và migration Communication Studio.')
  }

  const updateDraft = (change: (document: CommunicationContentDocument) => CommunicationContentDocument) => {
    setEditing((document) => document ? change(document) : document)
  }

  const persistDraft = async () => {
    if (!editing) return
    setSaving(true)
    setActionMessage('')
    try {
      const saved = await saveCommunicationDraft(editing)
      setDocuments((current) => [saved, ...current.filter((item) => item.id !== saved.id)])
      setEditing(saved)
      setActionMessage('Đã lưu bản nháp vào Supabase.')
    } catch (error) {
      setActionMessage(error instanceof Error ? error.message : 'Không lưu được bản nháp.')
    } finally {
      setSaving(false)
    }
  }

  const publishDraft = async () => {
    if (!editing) return
    const issues = validateCommunicationContent(editing)
    if (issues.length) {
      setActionMessage(`Chưa thể xuất bản: ${issues.length} mục cần kiểm tra.`)
      return
    }
    if (!documents.some((document) => document.id === editing.id)) {
      setActionMessage('Hãy lưu bản nháp trước khi xuất bản.')
      return
    }
    setSaving(true)
    try {
      const published = await changeCommunicationContentStatus(editing.id, 'published')
      setDocuments((current) => current.map((item) => item.id === published.id ? published : item))
      setEditing(null)
      setPreview(published)
      setActionMessage('Đã xuất bản. Bài sẽ xuất hiện trong thư viện tình huống người học.')
    } catch (error) {
      setActionMessage(error instanceof Error ? error.message : 'Không xuất bản được nội dung.')
    } finally {
      setSaving(false)
    }
  }

  const unpublishDocument = async (document: CommunicationContentDocument) => {
    setSaving(true)
    try {
      const unpublished = await changeCommunicationContentStatus(document.id, 'unpublished')
      setDocuments((current) => current.map((item) => item.id === unpublished.id ? unpublished : item))
      setPreview(unpublished)
      setActionMessage('Đã gỡ khỏi thư viện người học. Nội dung vẫn được giữ trong kho Admin.')
    } catch (error) {
      setActionMessage(error instanceof Error ? error.message : 'Không gỡ xuất bản được.')
    } finally {
      setSaving(false)
    }
  }

  const deleteDraft = async (document: CommunicationContentDocument) => {
    if (!window.confirm(`Xóa bản nháp “${document.title || 'Chưa đặt tên'}”?`)) return
    setSaving(true)
    try {
      await deleteCommunicationDraft(document.id)
      setDocuments((current) => current.filter((item) => item.id !== document.id))
      setEditing(null)
      setActionMessage('Đã xóa bản nháp.')
    } catch (error) {
      setActionMessage(error instanceof Error ? error.message : 'Không xóa được bản nháp.')
    } finally {
      setSaving(false)
    }
  }

  const validationIssues = editing ? validateCommunicationContent(editing) : []

  return <div className="space-y-5">
    <header className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-wider text-blue-700">COMMUNICATION CONTENT STUDIO</p><h1 className="mt-1 text-2xl font-bold tracking-tight">Nội dung Giao tiếp</h1><p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">Quản lý bản nháp tình huống, hội thoại, từ vựng và câu hỏi. Nội dung nguồn hiện có được giữ nguyên; chỉnh sửa bắt đầu từ một bản nháp riêng.</p></div><button type="button" onClick={startNewDraft} className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-blue-600 px-4 text-sm font-bold text-white hover:bg-blue-700"><FilePlus2 className="h-4 w-4" />Tạo bài nháp</button></header>

    {!isSupabaseConfigured && <Notice tone="amber" title="Supabase chưa được cấu hình">Có thể xem nội dung nguồn, nhưng lưu bản nháp, xuất bản và gỡ xuất bản cần cấu hình Supabase.</Notice>}
    {isSupabaseConfigured && <Notice tone="blue" title="Bảo vệ nội dung">Admin được kiểm tra bằng claim tin cậy trong `app_metadata`; database migration bật RLS cho mọi thao tác. Audio Storage chưa được cấu hình nên bài không thể yêu cầu audio.</Notice>}
    {loadError && <div role="alert" className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs leading-5 text-amber-950"><AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" /><div><strong>Chưa tải được kho Supabase.</strong> {loadError}<p className="mt-1">Nếu bảng chưa tồn tại, cần áp dụng migration `supabase/migrations/20261125000100_communication_content.sql`. Bản nháp chưa lưu sẽ còn trong biểu mẫu hiện tại.</p><button type="button" onClick={() => void refreshDocuments()} className="mt-2 font-bold underline">Thử tải lại</button></div></div>}

    <div className="grid gap-4 xl:grid-cols-[minmax(280px,0.8fr)_minmax(0,1.6fr)]">
      <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm" aria-label="Danh sách nội dung"><h2 className="text-sm font-bold text-slate-900">Thư viện · {documents.length + sourceEntries.length}</h2>
        <label className="block"><span className="sr-only">Tìm bài học</span><input value={query} onChange={(event) => setQuery(event.target.value)} className="min-h-10 w-full rounded-lg border border-slate-200 px-3 text-xs" placeholder="Tìm tên bài hoặc chủ đề" /></label>
        <div className="grid grid-cols-2 gap-2"><label><span className="sr-only">Trạng thái</span><select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value as StatusFilter)} className="min-h-9 w-full rounded-lg border border-slate-200 bg-white px-2 text-xs"><option value="all">Mọi trạng thái</option><option value="draft">Draft</option><option value="published">Published</option><option value="unpublished">Unpublished</option></select></label><label><span className="sr-only">Danh mục</span><select value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value as typeof categoryFilter)} className="min-h-9 w-full rounded-lg border border-slate-200 bg-white px-2 text-xs"><option value="all">Mọi chủ đề</option>{scenarioCategories.map((category) => <option key={category} value={category}>{category}</option>)}</select></label></div>
        {loading && <p role="status" className="inline-flex items-center gap-2 text-xs text-slate-500"><LoaderCircle className="h-3.5 w-3.5 animate-spin" />Đang tải kho nội dung…</p>}
        <div className="max-h-[70vh] space-y-2 overflow-auto pr-1">{filteredDocuments.map((document) => <button type="button" key={document.id} onClick={() => openDocument(document)} className={`w-full rounded-xl border p-3 text-left ${editing?.id === document.id || preview?.id === document.id ? 'border-blue-300 bg-blue-50' : 'border-slate-200 hover:border-blue-200'}`}><div className="flex items-start justify-between gap-2"><span className="text-xs font-bold text-slate-900">{document.title || 'Chưa đặt tên'}</span><StatusBadge status={document.status} /></div><span className="mt-1 block text-[10px] text-slate-500">{document.category} · {document.level} · Cập nhật {new Date(document.updatedAt).toLocaleDateString('vi-VN')}</span></button>)}{filteredSources.map((entry) => <button type="button" key={entry.id} onClick={() => openSource(entry.sourceScenario.id)} className="w-full rounded-xl border border-slate-200 p-3 text-left hover:border-blue-200"><div className="flex items-start justify-between gap-2"><span className="text-xs font-bold text-slate-900">{entry.title}</span><StatusBadge status="published" source /></div><span className="mt-1 block text-[10px] text-slate-500">{entry.subtitle}</span></button>)}{!filteredSources.length && !filteredDocuments.length && <p className="rounded-xl border border-dashed border-slate-300 p-5 text-center text-xs text-slate-500">Không có nội dung phù hợp.</p>}</div>
      </section>

      <section className="min-w-0">{editing ? <Editor document={editing} update={updateDraft} issues={validationIssues} saving={saving} onSave={() => void persistDraft()} onPublish={() => void publishDraft()} onDelete={documents.some((item) => item.id === editing.id) ? () => void deleteDraft(editing) : undefined} onPreview={() => { setPreview(editing); setActionMessage('Preview dùng cùng cấu trúc dữ liệu của bài; nội dung này chưa được xuất bản.') }} /> : preview ? <Preview document={preview} onCreateDraft={preview.status === 'draft' ? undefined : () => { setEditing({ ...preview, id: crypto.randomUUID(), slug: `${preview.slug}-revision`, status: 'draft', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), publishedAt: null, createdBy: null }); setPreview(null); setActionMessage('Đã tạo bản nháp riêng từ nội dung đã chọn. Bài gốc chưa thay đổi.') }} onUnpublish={preview.status === 'published' && documents.some((item) => item.id === preview.id) ? () => void unpublishDocument(preview) : undefined} saving={saving} /> : <div className="grid min-h-64 place-items-center rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center"><div><BookOpen className="mx-auto h-8 w-8 text-slate-300" /><h2 className="mt-3 text-sm font-bold text-slate-700">Chọn nội dung hoặc tạo bài nháp</h2><p className="mt-1 max-w-sm text-xs leading-5 text-slate-500">Bài nguồn chỉ xem và sao chép thành bản nháp. Không chỉnh trực tiếp dữ liệu đang dùng bởi người học.</p></div></div>}
        {actionMessage && <p role="status" className="mt-3 rounded-xl border border-slate-200 bg-white p-3 text-xs leading-5 text-slate-700">{actionMessage}</p>}
      </section>
    </div>
  </div>
}

function Editor({ document, update, issues, saving, onSave, onPublish, onDelete, onPreview }: {
  document: CommunicationContentDocument
  update: (change: (document: CommunicationContentDocument) => CommunicationContentDocument) => void
  issues: ReturnType<typeof validateCommunicationContent>
  saving: boolean
  onSave: () => void
  onPublish: () => void
  onDelete?: () => void
  onPreview: () => void
}) {
  const listInput = (label: string, value: string[], onChange: (items: string[]) => void, placeholder: string) => <label className="block text-xs font-semibold text-slate-700">{label}<textarea value={value.join('\n')} onChange={(event) => onChange(event.target.value.split('\n'))} rows={3} className="mt-1.5 w-full rounded-lg border border-slate-200 p-2.5 text-xs font-normal" placeholder={placeholder} /></label>
  const updateQuestion = (index: number, change: (question: CommunicationContentQuestion) => CommunicationContentQuestion) => update((item) => ({ ...item, questions: item.questions.map((question, at) => at === index ? change(question) : question) }))
  return <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
    <div className="flex flex-wrap items-center justify-between gap-2"><div><span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold text-amber-900">DRAFT · bản nháp</span><h2 className="mt-2 text-lg font-bold text-slate-950">Biên tập bài giao tiếp</h2></div><button type="button" onClick={onPreview} className="inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-slate-200 px-3 text-xs font-bold text-slate-700"><Eye className="h-4 w-4" />Preview</button></div>
    <div className="grid gap-3 sm:grid-cols-2"><Field label="Tên bài học" value={document.title} onChange={(title) => update((item) => ({ ...item, title }))} /><Field label="Slug" value={document.slug} onChange={(slug) => update((item) => ({ ...item, slug }))} /><Field label="Mô tả" value={document.description} onChange={(description) => update((item) => ({ ...item, description }))} /><Field label="Mục tiêu giao tiếp" value={document.goal} onChange={(goal) => update((item) => ({ ...item, goal }))} /><label className="text-xs font-semibold text-slate-700">Chủ đề<select value={document.category} onChange={(event) => update((item) => ({ ...item, category: event.target.value as CommunicationContentDocument['category'] }))} className="mt-1.5 min-h-10 w-full rounded-lg border border-slate-200 bg-white px-2.5 text-xs">{scenarioCategories.map((category) => <option key={category}>{category}</option>)}</select></label><label className="text-xs font-semibold text-slate-700">Trình độ đề xuất<select value={document.level} onChange={(event) => update((item) => ({ ...item, level: event.target.value as ScenarioLevel }))} className="mt-1.5 min-h-10 w-full rounded-lg border border-slate-200 bg-white px-2.5 text-xs">{(['A0', 'A1', 'A2'] as const).map((level) => <option key={level}>{level}</option>)}</select></label><Field label="Vai trò người học" value={document.learnerRole} onChange={(learnerRole) => update((item) => ({ ...item, learnerRole }))} /><Field label="Vai trò đối thoại" value={document.aiRole} onChange={(aiRole) => update((item) => ({ ...item, aiRole }))} /><Field label="Bối cảnh" value={document.startingSituation} onChange={(startingSituation) => update((item) => ({ ...item, startingSituation }))} /><Field label="Câu mở đầu" value={document.openingQuestion} onChange={(openingQuestion) => update((item) => ({ ...item, openingQuestion }))} /></div>
    <section className="space-y-3 rounded-xl border border-slate-100 p-3"><div className="flex items-center justify-between gap-2"><div><h3 className="text-sm font-bold text-slate-900">Hội thoại / Transcript</h3><p className="text-[10px] text-slate-500">Thứ tự hiển thị theo danh sách bên dưới.</p></div><button type="button" onClick={() => update((item) => ({ ...item, dialogue: [...item.dialogue, createDialogueTurn()] }))} className="inline-flex min-h-8 items-center gap-1 rounded-lg border border-slate-200 px-2 text-[10px] font-bold"><Plus className="h-3.5 w-3.5" />Thêm lượt</button></div>{document.dialogue.map((turn, index) => <div key={turn.id} className="grid gap-2 rounded-lg bg-slate-50 p-3 sm:grid-cols-[100px_1fr_1fr_auto]"><Field label={`Người nói · ${index + 1}`} value={turn.speaker} onChange={(speaker) => update((item) => ({ ...item, dialogue: item.dialogue.map((line) => line.id === turn.id ? { ...line, speaker } : line) }))} /><Field label="English" value={turn.english} onChange={(english) => update((item) => ({ ...item, dialogue: item.dialogue.map((line) => line.id === turn.id ? { ...line, english } : line) }))} /><Field label="Tiếng Việt" value={turn.vietnamese} onChange={(vietnamese) => update((item) => ({ ...item, dialogue: item.dialogue.map((line) => line.id === turn.id ? { ...line, vietnamese } : line) }))} /><div className="flex items-end gap-1"><button type="button" disabled={index === 0} aria-label="Chuyển lượt thoại lên" onClick={() => update((item) => {const dialogue = [...item.dialogue];[dialogue[index - 1], dialogue[index]] = [dialogue[index], dialogue[index - 1]];return { ...item, dialogue }})} className="grid h-8 w-8 place-items-center rounded border border-slate-200 disabled:opacity-30"><ArrowUp className="h-3.5 w-3.5" /></button><button type="button" disabled={index === document.dialogue.length - 1} aria-label="Chuyển lượt thoại xuống" onClick={() => update((item) => {const dialogue = [...item.dialogue];[dialogue[index + 1], dialogue[index]] = [dialogue[index], dialogue[index + 1]];return { ...item, dialogue }})} className="grid h-8 w-8 place-items-center rounded border border-slate-200 disabled:opacity-30"><ArrowDown className="h-3.5 w-3.5" /></button><button type="button" aria-label="Xóa lượt thoại" onClick={() => update((item) => ({ ...item, dialogue: item.dialogue.filter((line) => line.id !== turn.id) }))} className="grid h-8 w-8 place-items-center rounded border border-rose-100 text-rose-700"><X className="h-3.5 w-3.5" /></button></div></div>)}</section>
    <section className="space-y-3 rounded-xl border border-slate-100 p-3"><div className="flex items-center justify-between"><div><h3 className="text-sm font-bold text-slate-900">Từ vựng và cụm từ</h3></div><button type="button" onClick={() => update((item) => ({ ...item, vocabulary: [...item.vocabulary, createVocabularyItem()] }))} className="inline-flex min-h-8 items-center gap-1 rounded-lg border border-slate-200 px-2 text-[10px] font-bold"><Plus className="h-3.5 w-3.5" />Thêm từ</button></div>{document.vocabulary.map((word) => <div key={word.id} className="grid gap-2 sm:grid-cols-2"><Field label="Từ/cụm từ" value={word.term} onChange={(term) => update((item) => ({ ...item, vocabulary: item.vocabulary.map((entry) => entry.id === word.id ? { ...entry, term } : entry) }))} /><div className="flex items-end gap-2"><Field label="Nghĩa" value={word.meaning} onChange={(meaning) => update((item) => ({ ...item, vocabulary: item.vocabulary.map((entry) => entry.id === word.id ? { ...entry, meaning } : entry) }))} /><button type="button" aria-label="Xóa từ vựng" onClick={() => update((item) => ({ ...item, vocabulary: item.vocabulary.filter((entry) => entry.id !== word.id) }))} className="mb-0.5 grid h-9 w-9 shrink-0 place-items-center rounded border border-rose-100 text-rose-700"><X className="h-3.5 w-3.5" /></button></div></div>)}</section>
    <div className="grid gap-3 sm:grid-cols-2">{listInput('Mẫu câu hữu ích · mỗi dòng một câu', document.expressions, (expressions) => update((item) => ({ ...item, expressions })), 'Could I have …, please?')}{listInput('Điều kiện tự kiểm tra hoàn thành · mỗi dòng một ý', document.completionCriteria, (completionCriteria) => update((item) => ({ ...item, completionCriteria })), 'Nêu yêu cầu và xác nhận lựa chọn.')}{listInput('Biến cố tùy chọn cho Challenge', document.unexpectedSituation ? [document.unexpectedSituation] : [], (lines) => update((item) => ({ ...item, unexpectedSituation: lines.join('\n') })), 'Chỉ dùng nếu tình huống có biến cố phù hợp.')}</div>
    <section className="space-y-3 rounded-xl border border-slate-100 p-3"><div className="flex items-center justify-between"><div><h3 className="text-sm font-bold text-slate-900">Câu hỏi / Bài tập</h3><p className="text-[10px] text-slate-500">Nếu có câu hỏi trắc nghiệm, cần chọn đáp án đúng.</p></div><button type="button" onClick={() => update((item) => ({ ...item, questions: [...item.questions, createContentQuestion()] }))} className="inline-flex min-h-8 items-center gap-1 rounded-lg border border-slate-200 px-2 text-[10px] font-bold"><Plus className="h-3.5 w-3.5" />Thêm câu</button></div>{document.questions.map((question, index) => <div key={question.id} className="space-y-2 rounded-lg bg-slate-50 p-3"><div className="flex items-start gap-2"><div className="flex-1"><Field label={`Câu hỏi ${index + 1}`} value={question.prompt} onChange={(prompt) => updateQuestion(index, (item) => ({ ...item, prompt }))} /></div><button type="button" aria-label="Xóa câu hỏi" onClick={() => update((item) => ({ ...item, questions: item.questions.filter((entry) => entry.id !== question.id) }))} className="mt-5 grid h-8 w-8 shrink-0 place-items-center rounded border border-rose-100 text-rose-700"><X className="h-3.5 w-3.5" /></button></div><label className="block text-[10px] font-semibold text-slate-600">Lựa chọn · mỗi dòng một đáp án<textarea value={question.options.join('\n')} onChange={(event) => updateQuestion(index, (item) => ({ ...item, options: event.target.value.split('\n'), correctIndex: Math.min(item.correctIndex, event.target.value.split('\n').length - 1) }))} rows={3} className="mt-1 w-full rounded-lg border border-slate-200 p-2 text-xs font-normal" /></label><div className="grid gap-2 sm:grid-cols-2"><label className="text-[10px] font-semibold text-slate-600">Đáp án đúng<select value={question.correctIndex} onChange={(event) => updateQuestion(index, (item) => ({ ...item, correctIndex: Number(event.target.value) }))} className="mt-1 min-h-9 w-full rounded border border-slate-200 bg-white px-2 text-xs">{question.options.map((option, optionIndex) => <option key={`${question.id}-${optionIndex}`} value={optionIndex}>{option.trim() || `Lựa chọn ${optionIndex + 1}`}</option>)}</select></label><Field label="Giải thích" value={question.explanation} onChange={(explanation) => updateQuestion(index, (item) => ({ ...item, explanation }))} /></div></div>)}</section>
    <section className="flex flex-col gap-2 rounded-xl border border-amber-200 bg-amber-50 p-3 sm:flex-row sm:items-center"><VolumeX className="h-4 w-4 shrink-0 text-amber-800" /><div className="flex-1"><p className="text-xs font-bold text-amber-950">Audio/Storage chưa được cấu hình</p><p className="mt-0.5 text-[10px] leading-4 text-amber-900">Không có upload hoặc nghe thử; không nhập URL audio tùy ý. Có thể để bài không yêu cầu audio.</p></div><label className="flex items-center gap-2 text-[10px] font-semibold text-amber-950"><input type="checkbox" checked={document.audioRequired} onChange={(event) => update((item) => ({ ...item, audioRequired: event.target.checked }))} />Bài bắt buộc có audio</label></section>
    {issues.length > 0 && <details className="rounded-xl border border-amber-200 bg-amber-50 p-3"><summary className="cursor-pointer text-xs font-bold text-amber-950">Kiểm tra nội dung · {issues.length} mục cần xem trước khi xuất bản</summary><ul className="mt-2 space-y-1">{issues.map((issue, index) => <li key={`${issue.field}:${index}`} className="text-[11px] leading-5 text-amber-900">• {issue.message}</li>)}</ul></details>}
    <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-3"><button type="button" disabled={saving || !isSupabaseConfigured} onClick={onSave} className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-blue-600 px-3 text-xs font-bold text-white disabled:bg-slate-300"><Save className="h-4 w-4" />{saving ? 'Đang lưu…' : 'Lưu Draft'}</button><button type="button" disabled={saving || !isSupabaseConfigured || issues.length > 0} title={issues.length ? 'Sửa các mục trong danh sách kiểm tra trước.' : !isSupabaseConfigured ? 'Cần Supabase và RLS.' : 'Lưu bản nháp trước khi xuất bản.'} onClick={onPublish} className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-emerald-600 px-3 text-xs font-bold text-white disabled:cursor-not-allowed disabled:bg-slate-300"><Send className="h-4 w-4" />Xuất bản</button>{onDelete && <button type="button" disabled={saving} onClick={onDelete} className="ml-auto inline-flex min-h-10 items-center gap-2 rounded-lg border border-rose-200 px-3 text-xs font-bold text-rose-700 disabled:opacity-50"><Trash2 className="h-4 w-4" />Xóa Draft</button>}</div>
  </div>
}

function Preview({ document, onCreateDraft, onUnpublish, saving }: { document: CommunicationContentDocument; onCreateDraft?: () => void; onUnpublish?: () => void; saving: boolean }) {
  return <article className="space-y-4 rounded-2xl border border-blue-200 bg-white p-5 shadow-sm"><div className="flex flex-wrap items-start justify-between gap-3"><div><StatusBadge status={document.status} source={!document.createdBy} /><h2 className="mt-2 text-xl font-bold text-slate-950">{document.title || 'Chưa đặt tên'}</h2><p className="mt-1 text-xs text-slate-500">{document.category} · {document.level} · {document.description}</p></div><div className="flex flex-wrap gap-2">{onCreateDraft && <button type="button" onClick={onCreateDraft} className="inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-blue-200 px-3 text-xs font-bold text-blue-700"><FilePlus2 className="h-4 w-4" />Tạo Draft từ bài này</button>}{onUnpublish && <button type="button" disabled={saving} onClick={onUnpublish} className="inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-amber-200 px-3 text-xs font-bold text-amber-900 disabled:opacity-50"><X className="h-4 w-4" />Unpublish</button>}</div></div>
    <div className="rounded-xl bg-slate-50 p-4"><p className="text-[10px] font-bold uppercase text-slate-500">Mục tiêu</p><p className="mt-1 text-sm text-slate-800">{document.goal}</p><p className="mt-3 text-[10px] font-bold uppercase text-slate-500">Bối cảnh · vai trò</p><p className="mt-1 text-xs leading-5 text-slate-700">{document.startingSituation}<br />Người học: {document.learnerRole} · Đối thoại: {document.aiRole}</p><p className="mt-3 text-[10px] font-bold uppercase text-slate-500">Câu mở đầu</p><p className="mt-1 text-sm font-semibold text-blue-900">{document.openingQuestion}</p></div>
    <section><h3 className="text-sm font-bold text-slate-900">Hội thoại · transcript</h3>{document.dialogue.length ? <ol className="mt-2 space-y-2">{document.dialogue.map((turn, index) => <li key={turn.id} className="rounded-xl border border-slate-100 p-3"><p className="text-[10px] font-bold uppercase text-indigo-700">{index + 1}. {turn.speaker || 'Người nói'}</p><p className="mt-1 text-sm text-slate-900">{turn.english || 'Chưa nhập câu tiếng Anh.'}</p>{turn.vietnamese && <p className="mt-1 text-xs text-slate-600">{turn.vietnamese}</p>}</li>)}</ol> : <p className="mt-2 text-xs text-slate-500">Chưa có lượt thoại.</p>}</section>
    {document.vocabulary.length > 0 && <section><h3 className="text-sm font-bold text-slate-900">Từ vựng</h3><div className="mt-2 flex flex-wrap gap-2">{document.vocabulary.map((item) => <span key={item.id} className="rounded-full bg-blue-50 px-3 py-1.5 text-xs text-blue-900">{item.term}{item.meaning && ` · ${item.meaning}`}</span>)}</div></section>}
    {document.expressions.length > 0 && <section><h3 className="text-sm font-bold text-slate-900">Mẫu câu</h3><ul className="mt-2 space-y-1">{document.expressions.filter(Boolean).map((item, index) => <li key={`${index}-${item}`} className="text-xs text-slate-700">{item}</li>)}</ul></section>}
    {document.questions.length > 0 && <section><h3 className="text-sm font-bold text-slate-900">Câu hỏi · preview admin</h3><ul className="mt-2 space-y-2">{document.questions.map((question) => <li key={question.id} className="rounded-xl bg-slate-50 p-3"><p className="text-xs font-semibold text-slate-800">{question.prompt}</p><p className="mt-1 text-[10px] leading-4 text-slate-600">{question.options.map((option, index) => `${index === question.correctIndex ? '✓ ' : ''}${option}`).join(' · ')}</p><p className="mt-1 text-[10px] text-slate-500">{question.explanation}</p></li>)}</ul></section>}
    <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-5 text-amber-950"><VolumeX className="mr-1 inline h-4 w-4" />Không có audio mẫu được liên kết. Preview này dành cho bản nháp/kho Admin; nội dung người học chỉ nhận các mục Published từ Supabase.</div>
    {document.completionCriteria.length > 0 && <p className="text-[10px] text-slate-500">Tự kiểm tra: {document.completionCriteria.join(' · ')}</p>}
  </article>
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return <label className="block text-xs font-semibold text-slate-700">{label}<input value={value} onChange={(event) => onChange(event.target.value)} className="mt-1.5 min-h-9 w-full rounded-lg border border-slate-200 px-2.5 text-xs font-normal" /></label>
}

function StatusBadge({ status, source = false }: { status: CommunicationContentStatus; source?: boolean }) {
  const style = status === 'published' ? 'bg-emerald-50 text-emerald-800' : status === 'draft' ? 'bg-amber-50 text-amber-900' : 'bg-slate-100 text-slate-700'
  const label = source ? 'Published · source' : status === 'published' ? 'Published' : status === 'draft' ? 'Draft' : 'Unpublished'
  return <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[9px] font-bold ${style}`}>{status === 'published' && <Check className="h-3 w-3" />}{label}</span>
}

function Notice({ tone, title, children }: { tone: 'amber' | 'blue'; title: string; children: ReactNode }) {
  const style = tone === 'amber' ? 'border-amber-200 bg-amber-50 text-amber-950' : 'border-blue-100 bg-blue-50 text-blue-950'
  return <div className={`rounded-xl border p-3 text-xs leading-5 ${style}`}><strong>{title}</strong><p className="mt-0.5">{children}</p></div>
}
