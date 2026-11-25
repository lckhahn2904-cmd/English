import type { ConversationScenario, ScenarioCategory, ScenarioLevel } from '../data/conversationScenarios'
import { supabase } from '../lib/supabaseClient'

export type CommunicationContentStatus = 'draft' | 'published' | 'unpublished'

export interface CommunicationDialogueTurn {
  id: string
  speaker: string
  english: string
  vietnamese: string
}

export interface CommunicationContentVocabulary {
  id: string
  term: string
  meaning: string
}

export interface CommunicationContentQuestion {
  id: string
  prompt: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface CommunicationContentDocument {
  id: string
  slug: string
  title: string
  category: ScenarioCategory
  level: ScenarioLevel
  description: string
  goal: string
  learnerRole: string
  aiRole: string
  startingSituation: string
  openingQuestion: string
  vocabulary: CommunicationContentVocabulary[]
  expressions: string[]
  completionCriteria: string[]
  dialogue: CommunicationDialogueTurn[]
  questions: CommunicationContentQuestion[]
  unexpectedSituation: string
  audioRequired: boolean
  audioPath: string | null
  transcriptRequired: boolean
  status: CommunicationContentStatus
  createdAt: string
  updatedAt: string
  publishedAt: string | null
  createdBy: string | null
}

interface CommunicationContentRow {
  id: string
  slug: string
  lesson_data: Omit<CommunicationContentDocument, 'id' | 'slug' | 'status' | 'createdAt' | 'updatedAt' | 'publishedAt' | 'createdBy'>
  status: CommunicationContentStatus
  created_at: string
  updated_at: string
  published_at: string | null
  created_by: string | null
}

export interface ContentValidationIssue {
  field: string
  message: string
}

const makeId = () => crypto.randomUUID()
const emptyId = () => ''

export function createCommunicationDraft(): CommunicationContentDocument {
  const now = new Date().toISOString()
  return {
    id: makeId(), slug: '', title: '', category: 'Daily Life', level: 'A0', description: '', goal: '', learnerRole: 'A learner', aiRole: 'A conversation partner',
    startingSituation: '', openingQuestion: '', vocabulary: [], expressions: [], completionCriteria: [], dialogue: [{ id: makeId(), speaker: 'Partner', english: '', vietnamese: '' }],
    questions: [], unexpectedSituation: '', audioRequired: false, audioPath: null, transcriptRequired: true, status: 'draft', createdAt: now, updatedAt: now, publishedAt: null, createdBy: null,
  }
}

export function copyScenarioToDraft(scenario: ConversationScenario): CommunicationContentDocument {
  const document = createCommunicationDraft()
  return {
    ...document,
    slug: `${scenario.id}-${document.id.slice(0, 8)}`,
    title: scenario.title,
    category: scenario.category,
    level: scenario.level,
    description: scenario.description,
    goal: scenario.goal,
    learnerRole: scenario.learnerRole,
    aiRole: scenario.aiRole,
    startingSituation: scenario.startingSituation,
    openingQuestion: scenario.openingQuestion,
    vocabulary: scenario.vocabulary.map((term) => ({ id: makeId(), term, meaning: '' })),
    expressions: [...scenario.expressions],
    completionCriteria: [...scenario.completionCriteria],
    unexpectedSituation: scenario.unexpectedSituation ?? '',
    dialogue: [{ id: makeId(), speaker: scenario.aiRole, english: scenario.openingQuestion, vietnamese: '' }],
  }
}

export function validateCommunicationContent(document: CommunicationContentDocument): ContentValidationIssue[] {
  const issues: ContentValidationIssue[] = []
  if (!document.title.trim()) issues.push({ field: 'title', message: 'Nhập tên bài học.' })
  if (!document.description.trim()) issues.push({ field: 'description', message: 'Nhập mô tả ngắn.' })
  if (!document.goal.trim()) issues.push({ field: 'goal', message: 'Nhập mục tiêu giao tiếp.' })
  if (!document.learnerRole.trim() || !document.aiRole.trim()) issues.push({ field: 'roles', message: 'Nhập vai trò của người học và bạn hội thoại.' })
  if (!document.startingSituation.trim() || !document.openingQuestion.trim()) issues.push({ field: 'situation', message: 'Nhập bối cảnh và câu mở đầu.' })
  if (document.dialogue.length === 0) issues.push({ field: 'dialogue', message: 'Thêm ít nhất một lượt hội thoại.' })
  document.dialogue.forEach((turn, index) => {
    if (!turn.speaker.trim() || !turn.english.trim()) issues.push({ field: `dialogue-${index}`, message: `Lượt thoại ${index + 1} cần có người nói và câu tiếng Anh.` })
    if (document.transcriptRequired && !turn.vietnamese.trim()) issues.push({ field: `dialogue-${index}-translation`, message: `Lượt thoại ${index + 1} cần có bản dịch tiếng Việt.` })
  })
  document.questions.forEach((question, index) => {
    if (!question.prompt.trim()) issues.push({ field: `question-${index}`, message: `Câu hỏi ${index + 1} chưa có nội dung.` })
    if (question.options.length < 2 || question.options.some((option) => !option.trim())) issues.push({ field: `question-${index}-options`, message: `Câu hỏi ${index + 1} cần ít nhất hai lựa chọn không trống.` })
    if (!Number.isInteger(question.correctIndex) || question.correctIndex < 0 || question.correctIndex >= question.options.length) issues.push({ field: `question-${index}-answer`, message: `Chọn đáp án đúng cho câu hỏi ${index + 1}.` })
  })
  if (document.audioRequired && !document.audioPath) issues.push({ field: 'audio', message: 'Bài yêu cầu audio nhưng chưa có audio trong Storage.' })
  if (document.audioPath) issues.push({ field: 'audio', message: 'Quy trình kiểm tra và liên kết Storage chưa được bật; không thể xuất bản audio ở thời điểm này.' })
  return issues
}

function toDocument(row: CommunicationContentRow): CommunicationContentDocument {
  return {
    ...row.lesson_data,
    id: row.id,
    slug: row.slug,
    status: row.status,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    publishedAt: row.published_at,
    createdBy: row.created_by,
  }
}

function toRow(document: CommunicationContentDocument, createdBy: string | null): Omit<CommunicationContentRow, 'created_at' | 'updated_at' | 'published_at' | 'created_by'> & { created_by: string | null } {
  const { id, slug, status, createdAt: _createdAt, updatedAt: _updatedAt, publishedAt: _publishedAt, createdBy: _createdBy, ...lessonData } = document
  return { id, slug: slug || id, status, lesson_data: lessonData, created_by: createdBy }
}

export async function loadCommunicationContent(): Promise<CommunicationContentDocument[]> {
  if (!supabase) throw new Error('Supabase chưa được cấu hình.')
  const { data, error } = await supabase.from('communication_lessons').select('*').order('updated_at', { ascending: false }).returns<CommunicationContentRow[]>()
  if (error) throw new Error(error.message)
  return (data ?? []).map(toDocument)
}

export async function loadPublishedCommunicationContent(): Promise<CommunicationContentDocument[]> {
  if (!supabase) return []
  const { data, error } = await supabase.from('communication_lessons').select('*').eq('status', 'published').order('updated_at', { ascending: false }).returns<CommunicationContentRow[]>()
  if (error) throw new Error(error.message)
  return (data ?? []).map(toDocument)
}

export async function saveCommunicationDraft(document: CommunicationContentDocument): Promise<CommunicationContentDocument> {
  if (!supabase) throw new Error('Supabase chưa được cấu hình.')
  const { data: { user }, error: userError } = await supabase.auth.getUser()
  if (userError || !user) throw new Error('Phiên đăng nhập Admin không còn hợp lệ. Hãy đăng nhập lại.')
  const now = new Date().toISOString()
  const row = toRow({ ...document, status: document.status === 'unpublished' ? 'unpublished' : 'draft', updatedAt: now }, user.id)
  if (document.createdBy) {
    const { data, error } = await supabase.from('communication_lessons').update({ slug: row.slug, lesson_data: row.lesson_data, status: row.status, updated_by: user.id }).eq('id', document.id).select('*').single()
    if (error) throw new Error(error.message)
    if (!data) throw new Error('Không nhận được dữ liệu bài học sau khi lưu.')
    return toDocument(data as unknown as CommunicationContentRow)
  }
  const { data, error } = await supabase.from('communication_lessons').insert({ ...row, updated_by: user.id }).select('*').single()
  if (error) throw new Error(error.message)
  if (!data) throw new Error('Không nhận được dữ liệu bài học sau khi lưu.')
  return toDocument(data as unknown as CommunicationContentRow)
}

export async function changeCommunicationContentStatus(id: string, status: 'published' | 'unpublished'): Promise<CommunicationContentDocument> {
  if (!supabase) throw new Error('Supabase chưa được cấu hình.')
  const { data: { user }, error: userError } = await supabase.auth.getUser()
  if (userError || !user) throw new Error('Phiên đăng nhập Admin không còn hợp lệ. Hãy đăng nhập lại.')
  const { data, error } = await supabase.from('communication_lessons').update({ status, updated_by: user.id }).eq('id', id).select('*').single()
  if (error) throw new Error(error.message)
  if (!data) throw new Error('Không nhận được dữ liệu bài học sau khi cập nhật.')
  return toDocument(data as unknown as CommunicationContentRow)
}

export async function deleteCommunicationDraft(id: string): Promise<void> {
  if (!supabase) throw new Error('Supabase chưa được cấu hình.')
  const { error } = await supabase.from('communication_lessons').delete().eq('id', id).eq('status', 'draft')
  if (error) throw new Error(error.message)
}

export function toPublishedScenario(document: CommunicationContentDocument): ConversationScenario {
  return {
    id: `content-${document.id}`,
    mode: 'role-play',
    category: document.category,
    title: document.title,
    description: document.description,
    level: document.level,
    goal: document.goal,
    aiRole: document.aiRole,
    learnerRole: document.learnerRole,
    startingSituation: document.startingSituation,
    openingQuestion: document.openingQuestion,
    vocabulary: document.vocabulary.map((item) => item.term).filter(Boolean),
    expressions: document.expressions,
    completionCriteria: document.completionCriteria,
    unexpectedSituation: document.unexpectedSituation || undefined,
    authoredDialogue: document.dialogue.map((turn) => ({ speaker: turn.speaker, english: turn.english, vietnamese: turn.vietnamese })),
    authoredQuestions: document.questions,
  }
}

export function createDialogueTurn(speaker = '', english = '', vietnamese = ''): CommunicationDialogueTurn {
  return { id: makeId(), speaker, english, vietnamese }
}

export function createVocabularyItem(term = '', meaning = ''): CommunicationContentVocabulary {
  return { id: makeId(), term, meaning }
}

export function createContentQuestion(): CommunicationContentQuestion {
  return { id: makeId(), prompt: '', options: [emptyId(), emptyId()], correctIndex: 0, explanation: '' }
}
