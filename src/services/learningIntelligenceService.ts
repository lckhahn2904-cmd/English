import type { A0KnowledgeUnit } from '../data/a0KnowledgeMap'
import { A0_KNOWLEDGE_UNITS } from '../data/a0KnowledgeMap'
import { allA0Lessons, type A0Lesson } from '../data/speakingCurriculum'
import type { LearningEvidence } from '../context/GuestContext'

export type KnowledgeLearningStatus = 'not-started' | 'introduced' | 'practicing' | 'needs-review' | 'improving' | 'mastered'
export type KnowledgeType = 'vocabulary' | 'grammar' | 'sentence-pattern' | 'pronunciation' | 'listening' | 'speaking-function' | 'conversation-skill'
export type RecommendationKind = 'review-knowledge' | 'continue-lesson' | 'next-lesson'

export interface KnowledgeProgress {
  knowledgeId: string
  name: string
  type: KnowledgeType
  relatedLesson: string
  cefrLevel: 'A0'
  prerequisites: string[]
  status: KnowledgeLearningStatus
  practiceHistory: { activityType: LearningEvidence['activityType']; activityId: string; observedAt: string }[]
  lastPracticed: string | null
  performanceEvidence: { activityId: string; outcome: 'met' | 'needs-support'; observedAt: string }[]
}

export interface LearningRecommendation {
  id: string
  kind: RecommendationKind
  activity: string
  lessonId?: string
  knowledgeId?: string
  reason: string
  priority: 'high' | 'normal'
}

export interface LearningContext {
  currentCefrLevel: 'A0'
  currentModule: string | null
  currentLesson: { id: string; code: string; title: string } | null
  completedLessons: string[]
  learnedVocabulary: string[]
  learnedGrammar: string[]
  knowledgeNeedingReview: string[]
  commonMistakes: string[]
  recentLearningActivities: { kind: string; lessonId: string; at: string }[]
  recommendedPractice: Pick<LearningRecommendation, 'activity' | 'reason' | 'priority'>[]
  supportLevel: 'full' | 'guided' | 'limited'
}

export interface LearningIntelligenceSnapshot {
  completedLessonCount: number
  totalLessons: number
  activeLesson: A0Lesson | null
  knowledge: KnowledgeProgress[]
  evidenceCount: number
  practiceRecordCount: number
  masteredKnowledgeCount: number
  needsReviewKnowledgeCount: number
  recommendations: LearningRecommendation[]
  insight: string
  context: LearningContext
}

export interface SnapshotInput {
  completedLessonIds: string[]
  activeSpeakingLessonId: string | null
  learningEvidence: LearningEvidence[]
  learnedVocabulary: string[]
  lessons?: A0Lesson[]
  knowledgeUnits?: A0KnowledgeUnit[]
}

function latestPerActivity(records: LearningEvidence[]): LearningEvidence[] {
  const latest = new Map<string, LearningEvidence>()
  for (const record of records) {
    if (record.outcome === 'self-reported-practice') continue
    const key = `${record.knowledgeIds.join(',')}|${record.activityId}`
    const prior = latest.get(key)
    if (!prior || prior.observedAt < record.observedAt) latest.set(key, record)
  }
  return [...latest.values()].sort((a, b) => a.observedAt.localeCompare(b.observedAt))
}

function getKnowledgeStatus(unit: A0KnowledgeUnit, evidence: LearningEvidence[], introduced: boolean): KnowledgeLearningStatus {
  const observed = latestPerActivity(evidence.filter((record) => record.knowledgeIds.includes(unit.id)))
  const recent = observed.slice(-3)
  const allRecentMet = recent.length === 3 && recent.every((record) => record.outcome === 'met')
  const lastTwo = observed.slice(-2)
  if (allRecentMet && new Set(recent.map((record) => record.activityType)).size >= 2) return 'mastered'
  if (lastTwo.length === 2 && lastTwo.every((record) => record.outcome === 'needs-support')) return 'needs-review'
  if (lastTwo.length === 2 && lastTwo.every((record) => record.outcome === 'met') && observed.some((record) => record.outcome === 'needs-support')) return 'improving'
  if (evidence.length > 0) return 'practicing'
  return introduced ? 'introduced' : 'not-started'
}

function createKnowledgeProgress(input: SnapshotInput, lessons: A0Lesson[], units: A0KnowledgeUnit[]): KnowledgeProgress[] {
  const completed = new Set(input.completedLessonIds)
  return units.map((unit) => {
    const introductionLesson = lessons.find((lesson) => lesson.code === unit.introducedIn)
    const evidence = input.learningEvidence.filter((record) => record.knowledgeIds.includes(unit.id))
    const observed = latestPerActivity(evidence)
    const relevantAll = evidence.slice().sort((a, b) => a.observedAt.localeCompare(b.observedAt))
    const introduced = Boolean(introductionLesson && completed.has(`speaking-${introductionLesson.id}`))
    return {
      knowledgeId: unit.id,
      name: unit.title,
      type: unit.area === 'conversation' ? (unit.id === 'first-conversation' ? 'conversation-skill' : 'speaking-function') : unit.area,
      relatedLesson: unit.introducedIn,
      cefrLevel: 'A0',
      prerequisites: unit.buildsOn,
      status: getKnowledgeStatus(unit, evidence, introduced),
      practiceHistory: relevantAll.map((record) => ({ activityType: record.activityType, activityId: record.activityId, observedAt: record.observedAt })),
      lastPracticed: relevantAll.at(-1)?.observedAt ?? null,
      performanceEvidence: observed.map((record) => ({ activityId: record.activityId, outcome: record.outcome as 'met' | 'needs-support', observedAt: record.observedAt })),
    }
  })
}

function createRecommendations(input: SnapshotInput, lessons: A0Lesson[], knowledge: KnowledgeProgress[]): LearningRecommendation[] {
  const recommendations: LearningRecommendation[] = []
  const needsReview = knowledge
    .filter((item) => item.status === 'needs-review')
    .sort((a, b) => b.performanceEvidence.filter((evidence) => evidence.outcome === 'needs-support').length - a.performanceEvidence.filter((evidence) => evidence.outcome === 'needs-support').length)

  for (const item of needsReview.slice(0, 2)) {
    const failureCount = item.performanceEvidence.filter((evidence) => evidence.outcome === 'needs-support').length
    recommendations.push({
      id: `review-${item.knowledgeId}`,
      kind: 'review-knowledge',
      activity: `Ôn tập: ${item.name}`,
      lessonId: lessons.find((lesson) => lesson.code === item.relatedLesson)?.id,
      knowledgeId: item.knowledgeId,
      reason: `Có ${failureCount} kết quả cần hỗ trợ ở các hoạt động đánh giá khác nhau.`,
      priority: 'high',
    })
  }

  const completed = new Set(input.completedLessonIds)
  const active = lessons.find((lesson) => lesson.id === input.activeSpeakingLessonId && !completed.has(`speaking-${lesson.id}`))
  const next = active ?? lessons.find((lesson) => !completed.has(`speaking-${lesson.id}`))
  if (next) {
    recommendations.push({
      id: `lesson-${next.id}`,
      kind: active ? 'continue-lesson' : 'next-lesson',
      activity: `${active ? 'Tiếp tục' : 'Bắt đầu'} ${next.code} · ${next.title}`,
      lessonId: next.id,
      reason: active ? 'Bài học này đang được ghi nhận là bài đang học trong phiên.' : 'Đây là bài A0 tiếp theo chưa được ghi nhận hoàn thành; lộ trình không khóa các bài khác.',
      priority: active ? 'high' : 'normal',
    })
  }
  return recommendations
}

function createInsight(knowledge: KnowledgeProgress[], completedCount: number, evidenceCount: number, practiceRecordCount: number): string {
  const needsReview = knowledge.find((item) => item.status === 'needs-review')
  const improving = knowledge.find((item) => item.status === 'improving')
  const mastered = knowledge.find((item) => item.status === 'mastered')
  if (needsReview) {
    const failures = needsReview.performanceEvidence.filter((item) => item.outcome === 'needs-support').length
    return `Có ${failures} kết quả cần hỗ trợ ở các hoạt động khác nhau về “${needsReview.name}”. Hãy thử bài ôn được đề xuất.`
  }
  if (improving) return `Các kết quả gần đây về “${improving.name}” tốt hơn các lần trước. Tiếp tục luyện ở một hoạt động khác để xác nhận.`
  if (mastered) return `Bạn đã có kết quả ổn định ở nhiều hoạt động về “${mastered.name}”. Kiến thức này vẫn có thể được ôn lại trong ngữ cảnh mới.`
  if (evidenceCount === 0 && practiceRecordCount > 0) return `Đã ghi nhận ${practiceRecordCount} lượt tự luyện. Chưa có đủ kết quả đánh giá để nhận xét mức độ sử dụng kiến thức.`
  if (evidenceCount === 0) return 'Bạn cần luyện tập thêm để hệ thống có thể đánh giá tiến độ. Hoàn thành bài học được ghi nhận riêng, không đồng nghĩa với thành thạo kiến thức.'
  return `Đã ghi nhận ${evidenceCount} lượt kiểm tra và ${completedCount} bài hoàn thành. Cần thêm kết quả ở các hoạt động khác nhau để nhận xét đáng tin cậy hơn.`
}

export function buildLearningContext(snapshot: Omit<LearningIntelligenceSnapshot, 'context'>, input: SnapshotInput, lessons: A0Lesson[] = allA0Lessons, currentLessonOverride?: A0Lesson | null): LearningContext {
  const activeLesson = currentLessonOverride === undefined ? snapshot.activeLesson : currentLessonOverride
  const needsReview = snapshot.knowledge.filter((item) => item.status === 'needs-review')
  const recent = input.learningEvidence.slice().sort((a, b) => b.observedAt.localeCompare(a.observedAt)).slice(0, 5)
  const lessonKnowledgeIds = activeLesson?.knowledge.introduces ?? []
  const currentKnowledge = snapshot.knowledge.filter((item) => lessonKnowledgeIds.includes(item.knowledgeId))
  const supportLevel = currentKnowledge.some((item) => item.status === 'needs-review')
    ? 'full'
    : currentKnowledge.length > 0 && currentKnowledge.every((item) => item.status === 'mastered')
      ? 'limited'
      : currentKnowledge.some((item) => item.status === 'improving')
        ? 'guided'
        : 'full'
  const completedCodes = input.completedLessonIds.flatMap((id) => lessons.find((lesson) => id === `speaking-${lesson.id}`)?.code ?? [])
  const scopedLessons = lessons.filter((lesson) => completedCodes.includes(lesson.code) || lesson.id === activeLesson?.id)
  const scopedCodes = new Set(scopedLessons.map((lesson) => lesson.code))
  const curriculumVocabulary = scopedLessons.flatMap((lesson) => [
    ...lesson.vocabulary.map((item) => item.word),
    ...(lesson.alphabet ?? []).map((item) => `${item.letter} (${item.letterName})`),
  ])
  return {
    currentCefrLevel: 'A0',
    currentModule: activeLesson?.module_id ?? null,
    currentLesson: activeLesson ? { id: activeLesson.id, code: activeLesson.code, title: activeLesson.title } : null,
    completedLessons: input.completedLessonIds.flatMap((id) => lessons.find((lesson) => id === `speaking-${lesson.id}`)?.code ?? []).slice(0, 32),
    learnedVocabulary: [...new Set([...curriculumVocabulary, ...input.learnedVocabulary])].slice(0, 40),
    learnedGrammar: A0_KNOWLEDGE_UNITS.filter((unit) => unit.area === 'grammar' && scopedCodes.has(unit.introducedIn)).map((item) => item.title).slice(0, 12),
    knowledgeNeedingReview: needsReview.map((item) => item.name).slice(0, 8),
    commonMistakes: [],
    recentLearningActivities: recent.map((record) => ({ kind: record.activityType, lessonId: record.lessonId, at: record.observedAt })),
    recommendedPractice: snapshot.recommendations.slice(0, 3).map(({ activity, reason, priority }) => ({ activity, reason, priority })),
    supportLevel,
  }
}

export function buildLearningIntelligence(input: SnapshotInput): LearningIntelligenceSnapshot {
  const lessons = input.lessons ?? allA0Lessons
  const knowledge = createKnowledgeProgress(input, lessons, input.knowledgeUnits ?? A0_KNOWLEDGE_UNITS)
  const completed = new Set(input.completedLessonIds)
  const completedLessonCount = lessons.filter((lesson) => completed.has(`speaking-${lesson.id}`)).length
  const activeLesson = lessons.find((lesson) => lesson.id === input.activeSpeakingLessonId && !completed.has(`speaking-${lesson.id}`)) ?? null
  const evidenceCount = input.learningEvidence.filter((record) => record.outcome !== 'self-reported-practice').length
  const practiceRecordCount = input.learningEvidence.length
  const recommendations = createRecommendations(input, lessons, knowledge)
  const partial = {
    completedLessonCount,
    totalLessons: lessons.length,
    activeLesson,
    knowledge,
    evidenceCount,
    practiceRecordCount,
    masteredKnowledgeCount: knowledge.filter((item) => item.status === 'mastered').length,
    needsReviewKnowledgeCount: knowledge.filter((item) => item.status === 'needs-review').length,
    recommendations,
    insight: createInsight(knowledge, completedLessonCount, evidenceCount, practiceRecordCount),
  }
  return { ...partial, context: buildLearningContext(partial, input, lessons) }
}
