import type { LearningEvidence } from '../context/GuestContext'
import { A0_KNOWLEDGE_UNITS } from '../data/a0KnowledgeMap'

export type LearningActivityType = 'lesson' | 'quiz' | 'vocabulary' | 'speaking'
export type DailyGoalType = 'activities' | 'lessons' | 'vocabulary'

export interface LearningActivity {
  id: string
  sourceId: string
  type: LearningActivityType
  createdAt: string
  knowledgeIds?: string[]
}

export interface XpTransaction {
  id: string
  sourceId: string
  points: number
  reason: string
  createdAt: string
}

export interface DailyLearningGoal {
  type: DailyGoalType
  target: number
}

export interface DailyGoalProgress {
  goal: DailyLearningGoal
  progress: number
  completed: boolean
}

export interface GamificationLedgerState {
  sessionXp: number
  learningActivities: LearningActivity[]
  xpTransactions: XpTransaction[]
  dailyGoal: DailyLearningGoal
  dailyGoalCompletionDates: string[]
}

export interface LearningActivityInput {
  sourceId: string
  type: LearningActivityType
  points: number
  reason: string
  knowledgeIds?: string[]
}

export interface BadgeDefinition {
  id: string
  name: string
  description: string
  icon: string
  unlocked: boolean
  unlockedAt: string | null
}

export interface PersonalizedChallenge {
  id: string
  title: string
  reason: string
  lessonId: string
  knowledgeId: string
  target: 1
  progress: 0 | 1
  dueAt: string
  status: 'active' | 'completed' | 'expired'
}

export function localDateKey(value: Date | string): string {
  const date = typeof value === 'string' ? new Date(value) : value
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

function eventsForDay(activities: LearningActivity[], dateKey: string): LearningActivity[] {
  return activities.filter((activity) => localDateKey(activity.createdAt) === dateKey)
}

export function getDailyGoalProgress(activities: LearningActivity[], goal: DailyLearningGoal, now = new Date()): DailyGoalProgress {
  const today = eventsForDay(activities, localDateKey(now))
  let progress = 0
  if (goal.type === 'activities') progress = new Set(today.map((item) => item.type)).size
  if (goal.type === 'lessons') progress = new Set(today.filter((item) => item.type === 'lesson').map((item) => item.sourceId)).size
  if (goal.type === 'vocabulary') progress = new Set(today.filter((item) => item.type === 'vocabulary').map((item) => item.sourceId)).size
  return { goal, progress: Math.min(progress, goal.target), completed: progress >= goal.target }
}

export function getLearningStreak(activities: LearningActivity[], now = new Date()): number {
  const days = new Set(activities.map((item) => localDateKey(item.createdAt)))
  const cursor = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const todayKey = localDateKey(cursor)
  const latest = days.has(todayKey) ? cursor : new Date(cursor.getFullYear(), cursor.getMonth(), cursor.getDate() - 1)
  if (!days.has(localDateKey(latest))) return 0
  let streak = 0
  while (days.has(localDateKey(latest))) {
    streak += 1
    latest.setDate(latest.getDate() - 1)
  }
  return streak
}

export function getLearningCalendar(activities: LearningActivity[], now = new Date(), days = 28) {
  const activeDays = new Set(activities.map((item) => localDateKey(item.createdAt)))
  return Array.from({ length: days }, (_, index) => {
    const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - (days - index - 1))
    const key = localDateKey(date)
    return { key, date, hasActivity: activeDays.has(key), isToday: key === localDateKey(now) }
  })
}

export function getXpLevel(totalXp: number) {
  const safeXp = Math.max(0, totalXp)
  const xpInLevel = safeXp % 100
  return { level: Math.floor(safeXp / 100) + 1, xpInLevel, xpToNextLevel: 100 - xpInLevel }
}

export function getBadges(activities: LearningActivity[], streak: number): BadgeDefinition[] {
  const lessons = activities.filter((item) => item.type === 'lesson').sort((a, b) => a.createdAt.localeCompare(b.createdAt))
  const vocabulary = activities.filter((item) => item.type === 'vocabulary').sort((a, b) => a.createdAt.localeCompare(b.createdAt))
  return [
    { id: 'first-lesson', name: 'First Lesson', description: 'Hoàn thành bài học đầu tiên.', icon: '🎓', unlocked: lessons.length > 0, unlockedAt: lessons[0]?.createdAt ?? null },
    { id: 'vocabulary-starter', name: 'Vocabulary Starter', description: 'Đánh dấu đã học 50 từ khác nhau.', icon: '📚', unlocked: vocabulary.length >= 50, unlockedAt: vocabulary[49]?.createdAt ?? null },
    { id: 'seven-day-learner', name: '7-Day Learner', description: 'Học liên tục trong 7 ngày.', icon: '🔥', unlocked: streak >= 7, unlockedAt: null },
  ]
}

export function getPersonalizedChallenge(evidence: LearningEvidence[], lessons: { id: string; code: string; knowledge: { introduces: string[] } }[], now = new Date()): PersonalizedChallenge | null {
  const knowledgeIds = [...new Set(evidence.flatMap((record) => record.knowledgeIds))]
  for (const knowledgeId of knowledgeIds) {
    const records = evidence
      .filter((record) => record.knowledgeIds.includes(knowledgeId) && record.outcome !== 'self-reported-practice')
      .sort((a, b) => a.observedAt.localeCompare(b.observedAt))
    const independent = new Map<string, LearningEvidence>()
    for (const record of records) independent.set(record.activityId, record)
    const uniqueRecords = [...independent.values()]
    const failures = uniqueRecords.filter((record) => record.outcome === 'needs-support')
    if (failures.length < 2) continue
    const trigger = failures.at(-1)!
    const due = new Date(trigger.observedAt)
    due.setDate(due.getDate() + 7)
    const succeededAfter = uniqueRecords.some((record) => record.outcome === 'met' && record.observedAt > trigger.observedAt)
    const lesson = lessons.find((item) => item.code === 'A018' && item.knowledge.introduces.includes(knowledgeId))
      ?? lessons.find((item) => item.knowledge.introduces.includes(knowledgeId))
    if (!lesson) continue
    const knowledgeName = A0_KNOWLEDGE_UNITS.find((item) => item.id === knowledgeId)?.title ?? knowledgeId
    const status = succeededAfter ? 'completed' : now > due ? 'expired' : 'active'
    return {
      id: `review-${knowledgeId}`,
      title: `Ôn lại ${knowledgeName}`,
      reason: 'Lỗi tương tự xuất hiện ở nhiều hoạt động; hãy thử lại bài liên quan.',
      lessonId: lesson.id,
      knowledgeId,
      target: 1,
      progress: succeededAfter ? 1 : 0,
      dueAt: due.toISOString(),
      status,
    }
  }
  return null
}

export function getDailyXpTotal(transactions: XpTransaction[], now = new Date()) {
  const today = localDateKey(now)
  return transactions.filter((transaction) => localDateKey(transaction.createdAt) === today).reduce((total, transaction) => total + transaction.points, 0)
}

export function awardDailyGoalCompletion<T extends GamificationLedgerState>(state: T, now = new Date()): T {
  const day = localDateKey(now)
  if (!getDailyGoalProgress(state.learningActivities, state.dailyGoal, now).completed || state.dailyGoalCompletionDates.includes(day)) return state
  const remaining = Math.max(0, 100 - getDailyXpTotal(state.xpTransactions, now))
  const bonus = Math.min(10, remaining)
  const sourceId = `daily-goal:${day}`
  const transaction: XpTransaction | null = bonus > 0
    ? { id: `xp:${sourceId}`, sourceId, points: bonus, reason: 'Hoàn thành mục tiêu học tập hôm nay', createdAt: now.toISOString() }
    : null
  return {
    ...state,
    dailyGoalCompletionDates: [...state.dailyGoalCompletionDates, day],
    xpTransactions: transaction ? [...state.xpTransactions, transaction] : state.xpTransactions,
    sessionXp: state.sessionXp + (transaction?.points ?? 0),
  } as T
}

export function applyLearningActivity<T extends GamificationLedgerState>(state: T, input: LearningActivityInput, now = new Date()): T {
  if (state.learningActivities.some((event) => event.sourceId === input.sourceId)) return state
  const createdAt = now.toISOString()
  const activity: LearningActivity = {
    id: input.sourceId,
    sourceId: input.sourceId,
    type: input.type,
    createdAt,
    ...(input.knowledgeIds?.length ? { knowledgeIds: input.knowledgeIds } : {}),
  }
  const next = { ...state, learningActivities: [...state.learningActivities, activity] }
  const dailyRemaining = Math.max(0, 100 - getDailyXpTotal(state.xpTransactions, now))
  const awarded = Math.min(Math.max(0, input.points), dailyRemaining)
  const nextTransactions = awarded > 0
    ? [...state.xpTransactions, { id: `xp:${input.sourceId}`, sourceId: input.sourceId, points: awarded, reason: input.reason, createdAt }]
    : state.xpTransactions
  const stateWithActivity = { ...next, xpTransactions: nextTransactions, sessionXp: state.sessionXp + awarded }
  return awardDailyGoalCompletion(stateWithActivity as T, now)
}
