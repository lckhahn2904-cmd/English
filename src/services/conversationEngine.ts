import type { A0AIContext } from '../data/a0KnowledgeMap'
import { buildA0AIContext } from '../data/a0KnowledgeMap'
import type { A0Lesson } from '../data/speakingCurriculum'
import type { ConversationMode, CorrectionMode, ConversationScenario, DifficultyMode } from '../data/conversationScenarios'
import type { LearningContext } from './learningIntelligenceService'

export type ConversationLevel = 'A0' | 'A1' | 'A2' | 'B1' | 'B1+' | 'B2'
export type ChatRole = 'user' | 'assistant'

export interface ConversationMessage {
  id: string
  role: ChatRole
  content: string
  createdAt: string
}

export interface ConversationTurnCorrection {
  original: string
  corrected: string
  reasonVi: string
  naturalAlternative?: string
}

export interface ConversationSummary {
  overview: string
  topicsDiscussed: string[]
  vocabularyUsed: string[]
  usefulExpressions: string[]
  corrections: ConversationTurnCorrection[]
  strengths: string[]
  areasToImprove: string[]
  suggestedPractice: string[]
  recommendedLessonCode?: string
}

export interface ConversationRequest {
  sessionId: string
  mode: ConversationMode
  level: ConversationLevel
  correctionMode: CorrectionMode
  difficultyMode: DifficultyMode
  topic: string
  scenario: Pick<ConversationScenario, 'id' | 'title' | 'category' | 'level' | 'startingSituation' | 'goal' | 'aiRole' | 'learnerRole' | 'unexpectedSituation' | 'vocabulary' | 'expressions' | 'completionCriteria'> | null
  learningContext: LearningContext
  curriculumContext: A0AIContext
  messages: ConversationMessage[]
  contextSummary: string
  providerInstructions: string[]
  turnNumber: number
}

export interface ConversationResponse {
  message: string
  correction?: ConversationTurnCorrection
  contextSummary?: string
  sessionSummary?: ConversationSummary
}

/** Provider adapters must be implemented on an authenticated backend, not with browser secrets. */
export interface ConversationProviderAdapter {
  respond(request: ConversationRequest, signal?: AbortSignal): Promise<ConversationResponse>
  summarize?(request: ConversationRequest, signal?: AbortSignal): Promise<ConversationSummary>
}

export interface LevelProfile {
  level: ConversationLevel
  sentenceComplexity: string
  vocabularyRange: string
  grammarRange: string
  abstraction: string
  interaction: string
  contentReady: boolean
}

export const conversationLevelProfiles: LevelProfile[] = [
  { level: 'A0', sentenceComplexity: 'Một câu ngắn mỗi lượt', vocabularyRange: 'Từ vựng của bài A0 hiện tại và các bài đã học', grammarRange: 'Mẫu câu đã giới thiệu trong giáo trình A0', abstraction: 'Bản thân và tình huống quen thuộc', interaction: 'Một câu hỏi liên quan mỗi lượt, có thể hỗ trợ tiếng Việt', contentReady: true },
  { level: 'A1', sentenceComplexity: 'Câu đơn và nối câu cơ bản', vocabularyRange: 'Chủ đề quen thuộc hằng ngày', grammarRange: 'Các cấu trúc trình độ A1', abstraction: 'Thông tin cá nhân và nhu cầu gần gũi', interaction: 'Hội thoại ngắn có gợi ý', contentReady: false },
  { level: 'A2', sentenceComplexity: 'Câu đơn mở rộng và câu nối đơn giản', vocabularyRange: 'Sinh hoạt và trải nghiệm quen thuộc', grammarRange: 'Cấu trúc A2 phù hợp', abstraction: 'Giải thích ngắn về thời gian, lý do và địa điểm', interaction: 'Nhiều lượt có câu hỏi tiếp nối', contentReady: false },
  { level: 'B1', sentenceComplexity: 'Câu ghép và giải thích ý kiến', vocabularyRange: 'Chủ đề thường gặp, có thêm từ trừu tượng', grammarRange: 'Cấu trúc B1 phù hợp', abstraction: 'Kinh nghiệm, kế hoạch và quan điểm', interaction: 'Thảo luận theo ngữ cảnh', contentReady: false },
  { level: 'B1+', sentenceComplexity: 'Câu đa dạng, diễn đạt nhiều khía cạnh', vocabularyRange: 'Mở rộng theo chủ đề', grammarRange: 'Cấu trúc chuyển tiếp B1 đến B2', abstraction: 'So sánh và cân nhắc lựa chọn', interaction: 'Giảm dần gợi ý', contentReady: false },
  { level: 'B2', sentenceComplexity: 'Diễn đạt linh hoạt và lập luận', vocabularyRange: 'Chủ đề rộng, gồm từ trừu tượng', grammarRange: 'Cấu trúc B2 phù hợp', abstraction: 'Ý tưởng, lập luận và phản biện', interaction: 'Hội thoại tự nhiên dài hơn', contentReady: false },
]

export class ConversationContextManager {
  private readonly historyWindow: number

  constructor(historyWindow = 12) {
    this.historyWindow = historyWindow
  }

  buildRequest(input: {
    sessionId: string
    mode: ConversationMode
    level: ConversationLevel
    correctionMode: CorrectionMode
    difficultyMode?: DifficultyMode
    topic: string
    scenario: ConversationScenario | null
    lesson: A0Lesson
    lessons: A0Lesson[]
    completedLessonIds: string[]
    messages: ConversationMessage[]
    contextSummary?: string
    learningContext: LearningContext
  }): ConversationRequest {
    const learningContext = buildA0AIContext(input.lesson, input.lessons, input.completedLessonIds)
    const profile = new ConversationLevelAdapter().getProfile(input.level)
    const roleInstructions = new ConversationRolePlayManager().getInstructions(input.mode, input.scenario)
    return {
      sessionId: input.sessionId,
      mode: input.mode,
      level: input.level,
      correctionMode: input.correctionMode,
      difficultyMode: input.difficultyMode ?? 'standard',
      topic: input.topic.trim().slice(0, 120),
      scenario: input.scenario ? {
        id: input.scenario.id,
        title: input.scenario.title,
        category: input.scenario.category,
        level: input.scenario.level,
        startingSituation: input.scenario.startingSituation,
        goal: input.scenario.goal,
        aiRole: input.scenario.aiRole,
        learnerRole: input.scenario.learnerRole,
        unexpectedSituation: input.scenario.unexpectedSituation,
        vocabulary: input.scenario.vocabulary,
        expressions: input.scenario.expressions,
        completionCriteria: input.scenario.completionCriteria,
      } : null,
      learningContext: input.learningContext,
      curriculumContext: learningContext,
      messages: input.messages.slice(-this.historyWindow),
      contextSummary: (input.contextSummary ?? '').slice(0, 1200),
      providerInstructions: [
      ...roleInstructions,
        ...new ConversationCorrectionEngine().getInstructions(input.correctionMode),
        difficultyInstructions(input.difficultyMode ?? 'standard'),
        `Adapt sentence length, vocabulary (${profile.vocabularyRange}), grammar (${profile.grammarRange}), and abstraction (${profile.abstraction}) to ${profile.level}.`,
        ...(!profile.contentReady ? ['This level has no validated course curriculum in the app. Use the selected scenario vocabulary and expressions as the supplied practice content, keep language accessible, and do not claim that the suggested level was assessed.'] : []),
        `Stay within the learningContext learned vocabulary, grammar, and current lesson. Do not use a knowledgeNeedingReview item as a mastered skill. Explain any necessary missing prerequisite briefly in Vietnamese before using it.`,
        `Use the prior messages and contextSummary to continue the conversation. Do not ask again for information the learner has just provided, repeat an earlier question without a reason, or change the selected topic.`,
        profile.level === 'A0' ? 'Ask only one short question in each reply. Use simple, familiar language and supportive feedback.' : 'Ask one clear follow-up question at a time unless the learner requests otherwise.',
      ],
      turnNumber: input.messages.filter((message) => message.role === 'user').length + 1,
    }
  }
}

export function difficultyInstructions(mode: DifficultyMode): string {
  if (mode === 'guided') return 'Offer a short optional sentence starter or vocabulary hint when the learner hesitates. Never answer the whole role-play turn for them.'
  if (mode === 'challenge') return 'Give fewer hints and use at most one gentle, scenario-appropriate follow-up twist. Keep the language at the selected level and let the learner ask for support.'
  return 'Keep the conversation natural and at the selected level. Hints are available only when the learner asks for one.'
}

export class ConversationRolePlayManager {
  getInstructions(mode: ConversationMode, scenario: ConversationScenario | null): string[] {
    if (mode === 'role-play' && scenario) {
      return [
        `Remain in the role of ${scenario.aiRole} throughout this role-play. The learner is ${scenario.learnerRole}.`,
        `Keep the situation fixed: ${scenario.startingSituation}. Goal: ${scenario.goal}. Do not switch roles or scenario unless the learner asks.`,
        ...(scenario.unexpectedSituation ? [`Only after the learner has had a fair chance to address the main goal, introduce this optional complication naturally: ${scenario.unexpectedSituation}. Accept reasonable alternative responses.`] : []),
      ]
    }
    if (mode === 'free-talk') return ['Let the learner guide the free talk topic. Ask what they want to discuss if no topic is supplied, then follow their lead.']
    return ['Keep the conversation within the selected topic and its communication goal. Use the previous user message to choose a relevant next turn.']
  }
}

export class ConversationLevelAdapter {
  getProfile(level: ConversationLevel): LevelProfile {
    return conversationLevelProfiles.find((profile) => profile.level === level) ?? conversationLevelProfiles[0]
  }

  isAvailable(level: ConversationLevel): boolean {
    return this.getProfile(level).contentReady
  }
}

export class ConversationCorrectionEngine {
  getInstructions(mode: CorrectionMode): string[] {
    return [correctionInstructions(mode)]
  }
}

export function findTopicFromHistory(messages: ConversationMessage[], term: string): string | null {
  const normalizedTerm = term.trim().toLocaleLowerCase()
  if (!normalizedTerm) return null
  const mention = [...messages].reverse().find((message) => message.role === 'user' && message.content.toLocaleLowerCase().includes(normalizedTerm))
  return mention ? normalizedTerm : null
}

export function correctionInstructions(mode: CorrectionMode): string {
  if (mode === 'each-turn') return 'After each learner turn, gently correct only useful errors. Show original, corrected sentence, a short Vietnamese reason, and an optional natural alternative. Keep the conversation going.'
  if (mode === 'end-review') return 'Do not interrupt the conversation to correct. Collect evidence-based corrections for the end-of-session review.'
  return 'Keep the conversation natural. Do not interrupt for minor errors; correct only when it helps understanding or the lesson goal.'
}

export function prepareSessionSummary(summary: ConversationSummary | undefined): ConversationSummary | null {
  if (!summary) return null
  return {
    ...summary,
    vocabularyUsed: [...new Set(summary.vocabularyUsed)],
    usefulExpressions: [...new Set(summary.usefulExpressions)],
    corrections: summary.corrections.filter((item) => item.original.trim() && item.corrected.trim() && item.reasonVi.trim()),
    recommendedLessonCode: summary.recommendedLessonCode,
  }
}

export class ConversationSessionEvaluator {
  prepare(summary: ConversationSummary | undefined): ConversationSummary | null {
    return prepareSessionSummary(summary)
  }
}
