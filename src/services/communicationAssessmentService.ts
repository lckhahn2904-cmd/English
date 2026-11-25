import type { QuizScore } from '../context/GuestContext'
import { allA0Lessons } from '../data/speakingCurriculum'
import { conversationScenarios } from '../data/conversationScenarios'
import { listeningEpisodes } from './listeningService'
import { minimalPairSpecs, pronunciationKnowledgeQuestions } from './pronunciationService'

export type CommunicationAssessmentType = 'listening' | 'speaking' | 'pronunciation' | 'situational'

export const communicationAssessmentTypes: { id: CommunicationAssessmentType; title: string; description: string }[] = [
  { id: 'listening', title: 'Listening & comprehension', description: 'Quiz hiểu transcript. Chưa có audio, nên đây chưa phải bài đo nghe âm thanh.' },
  { id: 'speaking', title: 'Speaking', description: 'Nhiệm vụ nói và rubric tự kiểm tra; chưa có chấm giọng nói tự động.' },
  { id: 'pronunciation', title: 'Pronunciation', description: 'Nhận diện IPA trên màn hình; không đánh giá âm thanh hoặc accent.' },
  { id: 'situational', title: 'Situational communication', description: 'Chuẩn bị hội thoại theo tình huống; AI chưa kết nối nên chưa có kết quả chấm.' },
]

export const objectiveListeningAssessments = listeningEpisodes.filter((episode) => episode.questions.length > 0)
export const guidedSpeakingAssessments = allA0Lessons.map((lesson) => ({
  id: lesson.id,
  code: lesson.code,
  title: lesson.title,
  objective: lesson.assessment.task,
  criteria: lesson.assessment.criteria,
  level: 'A0' as const,
}))

export const pronunciationAssessmentCount = pronunciationKnowledgeQuestions.size + minimalPairSpecs.length
export const situationalAssessmentCount = conversationScenarios.length

export interface CommunicationAssessmentHistoryEntry {
  id: string
  quizId: string
  type: 'listening' | 'pronunciation'
  title: string
  score: number
  total: number
  percentage: number
  completedAt: string
  attemptNumber: number
  previousPercentage?: number
  href: string
}

export interface AssessmentPracticeSuggestion {
  id: string
  title: string
  reason: string
  href: string
}

export function getAssessmentPracticeSuggestions(quizScores: Record<string, QuizScore>): AssessmentPracticeSuggestion[] {
  return Object.entries(quizScores).flatMap(([quizId, saved]) => {
    if (saved.percentage >= 100) return []
    if (quizId.startsWith('listening:')) {
      const episodeId = quizId.slice('listening:'.length)
      const episode = objectiveListeningAssessments.find((item) => item.id === episodeId)
      return [{ id: `review:${quizId}`, title: episode?.title ?? 'Transcript comprehension', reason: 'Lượt gần nhất còn câu trả lời cần xem lại; bạn có thể thử lại cùng bài.', href: `/dashboard/speaking/listening/${episodeId}` }]
    }
    if (quizId.startsWith('pronunciation:')) {
      return [{ id: `review:${quizId}`, title: 'Nhận diện IPA', reason: 'Lượt gần nhất còn nội dung IPA cần xem lại; đây không phải nhận xét về giọng nói.', href: '/dashboard/speaking/pronunciation' }]
    }
    return []
  })
}

export function getCommunicationAssessmentHistory(quizScores: Record<string, QuizScore>): CommunicationAssessmentHistoryEntry[] {
  const history: CommunicationAssessmentHistoryEntry[] = []
  for (const [quizId, saved] of Object.entries(quizScores)) {
    const type = quizId.startsWith('listening:') ? 'listening' : quizId.startsWith('pronunciation:') ? 'pronunciation' : null
    if (!type) continue
    const records = saved.history ?? []
    const episodeId = type === 'listening' ? quizId.slice('listening:'.length) : ''
    const episode = objectiveListeningAssessments.find((item) => item.id === episodeId)
    const pronunciationTitle = quizId.startsWith('pronunciation:lesson:')
      ? `IPA · ${quizId.slice('pronunciation:lesson:'.length).toUpperCase()}`
      : `Minimal pair · ${quizId.slice('pronunciation:pair:'.length).replaceAll('-', ' / ')}`
    records.forEach((attempt, index) => history.push({
      id: `${quizId}:${attempt.completedAt}:${index}`,
      quizId,
      type,
      title: type === 'listening' ? episode?.title ?? 'Transcript comprehension' : pronunciationTitle,
      score: attempt.score,
      total: attempt.total,
      percentage: attempt.percentage,
      completedAt: attempt.completedAt,
      attemptNumber: index + 1,
      previousPercentage: index > 0 ? records[index - 1].percentage : undefined,
      href: type === 'listening' ? `/dashboard/speaking/listening/${episodeId}` : '/dashboard/speaking/pronunciation',
    }))
  }
  return history.sort((left, right) => right.completedAt.localeCompare(left.completedAt))
}
