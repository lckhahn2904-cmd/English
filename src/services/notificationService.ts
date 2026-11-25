export type LearningNotificationType = 'reminder' | 'lesson' | 'goal' | 'achievement' | 'challenge'

export interface LearningNotification {
  id: string
  type: LearningNotificationType
  title: string
  message: string
  createdAt: string
  href: string
  read: boolean
}

export interface ReminderPreferences {
  enabled: boolean
  time: string
  days: number[]
  includeGoal: boolean
  includeLesson: boolean
  includeChallenge: boolean
  pushEnabled: boolean
}

export const defaultReminderPreferences: ReminderPreferences = {
  enabled: false,
  time: '19:00',
  days: [1, 2, 3, 4, 5, 6, 0],
  includeGoal: true,
  includeLesson: true,
  includeChallenge: true,
  pushEnabled: false,
}

export function isReminderDue(preferences: ReminderPreferences, now = new Date()): boolean {
  if (!preferences.enabled || !preferences.days.includes(now.getDay())) return false
  const [hour, minute] = preferences.time.split(':').map(Number)
  return now.getHours() === hour && now.getMinutes() === minute
}

export function makeNotification(input: Omit<LearningNotification, 'createdAt' | 'read'>, now = new Date()): LearningNotification {
  return { ...input, createdAt: now.toISOString(), read: false }
}
