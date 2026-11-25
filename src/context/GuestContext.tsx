import { createContext, useContext, useState, useMemo, useCallback, useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { useAuth } from './AuthContext'
import { applyLearningActivity, awardDailyGoalCompletion, getBadges, getDailyGoalProgress, getLearningStreak, getPersonalizedChallenge, localDateKey, type DailyLearningGoal, type LearningActivity, type XpTransaction } from '../services/gamificationService'
import { defaultReminderPreferences, isReminderDue, makeNotification, type LearningNotification, type ReminderPreferences } from '../services/notificationService'
import { allA0Lessons } from '../data/speakingCurriculum'

export interface QuizScore {
  score: number
  total: number
  percentage: number
  answers: Record<number, number>
  attempts: number
  history: QuizAttempt[]
}

export interface QuizAttempt {
  score: number
  total: number
  percentage: number
  answers: Record<number, number>
  completedAt: string
}

export type CommunicationPathGoal = 'general' | 'daily-life' | 'travel' | 'workplace' | 'confidence'
export type CommunicationPathPace = 'light' | 'steady'

export interface CommunicationPathPreferences {
  goal: CommunicationPathGoal
  pace: CommunicationPathPace
}

export interface LearningEvidence {
  id: string
  activityId: string
  activityType: 'speaking-lesson-check' | 'speaking-guided-practice'
  lessonId: string
  knowledgeIds: string[]
  outcome: 'met' | 'needs-support' | 'self-reported-practice'
  observedAt: string
}

export interface GuestState {
  isGuest: boolean
  completedLessonIds: string[]
  learnedVocabIds: string[]
  quizScores: Record<string, QuizScore>
  sessionXp: number
  activeSpeakingLessonId: string | null
  learningEvidence: LearningEvidence[]
  learningActivities: LearningActivity[]
  xpTransactions: XpTransaction[]
  dailyGoal: DailyLearningGoal
  dailyGoalCompletionDates: string[]
  notifications: LearningNotification[]
  handledNotificationIds: string[]
  reminderPreferences: ReminderPreferences
  communicationPathPreferences: CommunicationPathPreferences
}

export interface GuestContextType extends GuestState {
  completeLesson: (lessonId: string, xpReward?: number) => void
  markLessonCompleted: (lessonId: string) => void
  toggleVocabLearned: (vocabId: string) => void
  saveQuizResult: (lessonId: string, score: number, total: number, answers: Record<number, number>) => void
  setActiveSpeakingLesson: (lessonId: string | null) => void
  recordLearningEvidence: (evidence: Omit<LearningEvidence, 'id' | 'observedAt'>) => void
  setDailyGoal: (goal: DailyLearningGoal) => void
  markNotificationRead: (id: string) => void
  markAllNotificationsRead: () => void
  deleteNotification: (id: string) => void
  updateReminderPreferences: (preferences: ReminderPreferences) => void
  updateCommunicationPathPreferences: (preferences: Partial<CommunicationPathPreferences>) => void
  resetGuestProgress: () => void
  enterGuestMode: () => void
  exitGuestMode: () => void
}

const initialGuestState: GuestState = {
  isGuest: false,
  completedLessonIds: [],
  learnedVocabIds: [],
  quizScores: {},
  sessionXp: 0,
  activeSpeakingLessonId: null,
  learningEvidence: [],
  learningActivities: [],
  xpTransactions: [],
  dailyGoal: { type: 'activities', target: 1 },
  dailyGoalCompletionDates: [],
  notifications: [],
  handledNotificationIds: [],
  reminderPreferences: defaultReminderPreferences,
  communicationPathPreferences: { goal: 'general', pace: 'steady' },
}

const GuestContext = createContext<GuestContextType | undefined>(undefined)

export function GuestProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  // CRITICAL REQUIREMENT:
  // All progress is stored ONLY in-memory in React state.
  // NO localStorage, NO sessionStorage, NO cookies, NO IndexedDB.
  // Reloading the page automatically resets all state to initial values.
  const [state, setState] = useState<GuestState>(() => {
    const isGuestUrl =
      typeof window !== 'undefined' &&
      new URLSearchParams(window.location.search).get('guest') === 'true'
    return {
      ...initialGuestState,
      isGuest: isGuestUrl,
    }
  })
  const scope = user?.id ?? (state.isGuest ? 'guest' : 'anonymous')
  const scopeRef = useRef(scope)
  const skipDerivedNotificationsRef = useRef(false)

  useEffect(() => {
    if (scopeRef.current === scope) return
    scopeRef.current = scope
    skipDerivedNotificationsRef.current = true
    setState({ ...initialGuestState, isGuest: scope === 'guest' })
  }, [scope, user])

  useEffect(() => {
    if (skipDerivedNotificationsRef.current) return
    const candidates: LearningNotification[] = []
    for (const transaction of state.xpTransactions) {
      candidates.push(makeNotification({ id: `xp:${transaction.sourceId}`, type: 'achievement', title: `Bạn nhận ${transaction.points} XP`, message: transaction.reason, href: '/dashboard' }, new Date(transaction.createdAt)))
    }
    for (const activity of state.learningActivities.filter((item) => item.type === 'lesson')) {
      candidates.push(makeNotification({ id: `lesson:${activity.sourceId}`, type: 'lesson', title: 'Bài học đã hoàn thành', message: 'Tiến độ bài học vừa được ghi nhận.', href: '/dashboard/courses' }, new Date(activity.createdAt)))
    }
    for (const badge of getBadges(state.learningActivities, getLearningStreak(state.learningActivities)).filter((item) => item.unlocked)) {
      candidates.push(makeNotification({ id: `badge:${badge.id}`, type: 'achievement', title: `Huy hiệu mới: ${badge.name}`, message: badge.description, href: '/dashboard' }, badge.unlockedAt ? new Date(badge.unlockedAt) : new Date()))
    }
    if (state.dailyGoalCompletionDates.includes(localDateKey(new Date()))) {
      candidates.push(makeNotification({ id: `goal:${localDateKey(new Date())}`, type: 'goal', title: 'Đã hoàn thành mục tiêu hôm nay', message: 'Bạn đã đạt mục tiêu học tập trong ngày. Làm tốt lắm!', href: '/dashboard' }))
    }
    const knowledgeIds = [...new Set(state.learningEvidence.flatMap((item) => item.knowledgeIds))]
    for (const knowledgeId of knowledgeIds) {
      const matching = state.learningEvidence.filter((item) => item.knowledgeIds.includes(knowledgeId) && item.outcome !== 'self-reported-practice')
      const failures = matching.filter((item) => item.outcome === 'needs-support')
      const latestSuccess = matching.filter((item) => item.outcome === 'met').sort((a, b) => b.observedAt.localeCompare(a.observedAt))[0]
      const latestFailure = failures.sort((a, b) => b.observedAt.localeCompare(a.observedAt))[0]
      if (failures.length >= 2 && latestSuccess && latestFailure && latestSuccess.observedAt > latestFailure.observedAt) {
        const lessonId = state.learningEvidence.find((item) => item.knowledgeIds.includes(knowledgeId))?.lessonId
        candidates.push(makeNotification({ id: `challenge:review:${knowledgeId}:completed`, type: 'challenge', title: 'Thử thách ôn tập đã hoàn thành', message: 'Bạn đã làm tốt ở lượt kiểm tra gần đây. Kiến thức này đã được ghi nhận là đạt.', href: lessonId ? `/dashboard/speaking/lesson/${lessonId}` : '/dashboard/speaking' }, new Date(latestSuccess.observedAt)))
      }
    }
    const seen = new Set(state.handledNotificationIds)
    const additions = candidates.filter((item) => !seen.has(item.id))
    if (additions.length) setState((prev) => ({ ...prev, notifications: [...prev.notifications, ...additions].slice(-100), handledNotificationIds: [...prev.handledNotificationIds, ...additions.map((item) => item.id)] }))
  }, [state.xpTransactions, state.learningActivities, state.dailyGoalCompletionDates, state.learningEvidence, state.handledNotificationIds])

  useEffect(() => {
    if (skipDerivedNotificationsRef.current) return
    const checkReminder = () => {
      const now = new Date()
      const prefs = state.reminderPreferences
      if (!isReminderDue(prefs, now)) return
      const day = localDateKey(now)
      const additions: LearningNotification[] = []
      const goalDone = getDailyGoalProgress(state.learningActivities, state.dailyGoal, now).completed
      let nearDeadlineChallenge = null as ReturnType<typeof getPersonalizedChallenge>
      if (prefs.includeChallenge) {
        const challenge = getPersonalizedChallenge(state.learningEvidence, allA0Lessons, now)
        if (challenge?.status === 'active' && new Date(challenge.dueAt).getTime() - now.getTime() <= 48 * 60 * 60 * 1000) nearDeadlineChallenge = challenge
      }
      if (nearDeadlineChallenge) additions.push(makeNotification({ id: `reminder:challenge:${nearDeadlineChallenge.id}:${day}`, type: 'challenge', title: 'Thử thách ôn tập sắp đến hạn', message: 'Bạn có thể tiếp tục ôn phần kiến thức đã được ghi nhận cần luyện thêm.', href: `/dashboard/speaking/lesson/${nearDeadlineChallenge.lessonId}` }, now))
      else if (prefs.includeLesson && state.activeSpeakingLessonId) additions.push(makeNotification({ id: `reminder:lesson:${day}`, type: 'lesson', title: 'Tiếp tục bài đang học', message: 'Bài luyện nói của bạn vẫn sẵn sàng để tiếp tục.', href: `/dashboard/speaking/lesson/${state.activeSpeakingLessonId}` }, now))
      else if (prefs.includeGoal && !goalDone) additions.push(makeNotification({ id: `reminder:goal:${day}`, type: 'reminder', title: 'Một lời nhắc học nhẹ nhàng', message: 'Nếu thuận tiện, bạn có thể dành vài phút cho mục tiêu hôm nay.', href: '/dashboard' }, now))
      if (!additions.length) return
      if (prefs.pushEnabled && 'Notification' in window && Notification.permission === 'granted') {
        for (const item of additions) if (!state.handledNotificationIds.includes(item.id)) new Notification(item.title, { body: item.message, tag: item.id })
      }
      setState((prev) => {
        const existing = new Set(prev.handledNotificationIds)
        const fresh = additions.filter((item) => !existing.has(item.id))
        return fresh.length ? { ...prev, notifications: [...prev.notifications, ...fresh].slice(-100), handledNotificationIds: [...prev.handledNotificationIds, ...fresh.map((item) => item.id)] } : prev
      })
    }
    const timer = window.setInterval(checkReminder, 30_000)
    checkReminder()
    return () => window.clearInterval(timer)
  }, [state.reminderPreferences, state.learningActivities, state.dailyGoal, state.activeSpeakingLessonId, state.learningEvidence, state.handledNotificationIds])

  useEffect(() => {
    if (skipDerivedNotificationsRef.current) skipDerivedNotificationsRef.current = false
  }, [state])

  const enterGuestMode = () => {
    setState((prev) => ({ ...prev, isGuest: true }))
  }

  const completeLesson = (lessonId: string, xpReward = 30) => {
    setState((prev) => {
      if (prev.completedLessonIds.includes(lessonId)) {
        return prev
      }
      const next = {
        ...prev,
        completedLessonIds: [...prev.completedLessonIds, lessonId],
      }
      return applyLearningActivity(next, { sourceId: `lesson-completed:${lessonId}`, type: 'lesson', points: xpReward, reason: 'Hoàn thành bài học' })
    })
  }

  const markLessonCompleted = (lessonId: string) => {
    setState((prev) => {
      if (prev.completedLessonIds.includes(lessonId)) return prev
      const next = { ...prev, completedLessonIds: [...prev.completedLessonIds, lessonId] }
      return applyLearningActivity(next, { sourceId: `lesson-completed:${lessonId}`, type: 'lesson', points: 15, reason: 'Hoàn thành bài flashcard' })
    })
  }

  const setActiveSpeakingLesson = useCallback((lessonId: string | null) => {
    setState((prev) => prev.activeSpeakingLessonId === lessonId ? prev : { ...prev, activeSpeakingLessonId: lessonId })
  }, [])

  const recordLearningEvidence = useCallback((evidence: Omit<LearningEvidence, 'id' | 'observedAt'>) => {
    setState((prev) => {
      const now = new Date()
      const record: LearningEvidence = {
        ...evidence,
        id: `${evidence.activityId}:${now.getTime()}:${prev.learningEvidence.length}`,
        observedAt: now.toISOString(),
      }
      const next = { ...prev, learningEvidence: [...prev.learningEvidence, record].slice(-300) }
      const day = localDateKey(now)
      const activitySource = evidence.activityType === 'speaking-guided-practice'
        ? `speaking-practice:${evidence.lessonId}:${day}`
        : `speaking-check:${evidence.activityId}`
      return applyLearningActivity(next, { sourceId: activitySource, type: 'speaking', points: 5, reason: 'Hoàn thành lượt luyện nói', knowledgeIds: evidence.knowledgeIds })
    })
  }, [])

  const setDailyGoal = useCallback((goal: DailyLearningGoal) => {
    const limits: Record<DailyLearningGoal['type'], { min: number; max: number }> = {
      activities: { min: 1, max: 4 },
      lessons: { min: 1, max: 5 },
      vocabulary: { min: 5, max: 20 },
    }
    const limit = limits[goal.type]
    const target = Math.max(limit.min, Math.min(limit.max, Math.round(goal.target)))
    setState((prev) => awardDailyGoalCompletion({ ...prev, dailyGoal: { type: goal.type, target } }))
  }, [])

  const markNotificationRead = useCallback((id: string) => setState((prev) => ({ ...prev, notifications: prev.notifications.map((item) => item.id === id ? { ...item, read: true } : item) })), [])
  const markAllNotificationsRead = useCallback(() => setState((prev) => ({ ...prev, notifications: prev.notifications.map((item) => ({ ...item, read: true })) })), [])
  const deleteNotification = useCallback((id: string) => setState((prev) => ({ ...prev, notifications: prev.notifications.filter((item) => item.id !== id), handledNotificationIds: prev.handledNotificationIds.includes(id) ? prev.handledNotificationIds : [...prev.handledNotificationIds, id] })), [])
  const updateReminderPreferences = useCallback((preferences: ReminderPreferences) => setState((prev) => ({ ...prev, reminderPreferences: { ...preferences, days: [...new Set(preferences.days)].filter((day) => day >= 0 && day <= 6) } })), [])
  const updateCommunicationPathPreferences = useCallback((preferences: Partial<CommunicationPathPreferences>) => setState((prev) => ({
    ...prev,
    communicationPathPreferences: { ...prev.communicationPathPreferences, ...preferences },
  })), [])

  const toggleVocabLearned = (vocabId: string) => {
    setState((prev) => {
      const alreadyLearned = prev.learnedVocabIds.includes(vocabId)
      const next = {
        ...prev,
        learnedVocabIds: alreadyLearned
          ? prev.learnedVocabIds.filter((id) => id !== vocabId)
          : [...prev.learnedVocabIds, vocabId],
      }
      if (alreadyLearned) return next
      return applyLearningActivity(next, { sourceId: `vocabulary-learned:${vocabId}`, type: 'vocabulary', points: 5, reason: 'Đánh dấu đã học từ vựng' })
    })
  }

  const saveQuizResult = (
    lessonId: string,
    score: number,
    total: number,
    answers: Record<number, number>
  ) => {
    setState((prev) => {
      const percentage = Math.round((score / total) * 100)
      const isFirstPass = !prev.quizScores[lessonId]
      const xpEarned = isFirstPass ? score * 10 : 0
      const attempt: QuizAttempt = { score, total, percentage, answers, completedAt: new Date().toISOString() }
      const next = {
        ...prev,
        quizScores: {
          ...prev.quizScores,
          [lessonId]: {
            score, total, percentage, answers,
            attempts: (prev.quizScores[lessonId]?.attempts ?? 0) + 1,
            history: [...(prev.quizScores[lessonId]?.history ?? []), attempt].slice(-20),
          },
        },
      }
      return applyLearningActivity(next, { sourceId: `quiz-completed:${lessonId}`, type: 'quiz', points: xpEarned, reason: 'Hoàn thành bài quiz' })
    })
  }

  const resetGuestProgress = () => {
    setState((prev) => ({
      ...initialGuestState,
      isGuest: prev.isGuest,
    }))
  }

  const exitGuestMode = () => {
    setState(initialGuestState)
  }

  const value = useMemo(
    () => ({
      ...state,
      completeLesson,
      markLessonCompleted,
      toggleVocabLearned,
      saveQuizResult,
      setActiveSpeakingLesson,
      recordLearningEvidence,
      setDailyGoal,
      markNotificationRead,
      markAllNotificationsRead,
      deleteNotification,
      updateReminderPreferences,
      updateCommunicationPathPreferences,
      resetGuestProgress,
      enterGuestMode,
      exitGuestMode,
    }),
    [state, recordLearningEvidence, setDailyGoal, setActiveSpeakingLesson, markNotificationRead, markAllNotificationsRead, deleteNotification, updateReminderPreferences, updateCommunicationPathPreferences]
  )

  return <GuestContext.Provider value={value}>{children}</GuestContext.Provider>
}

export function useGuest(): GuestContextType {
  const context = useContext(GuestContext)
  if (!context) {
    throw new Error('useGuest must be used within a GuestProvider')
  }
  return context
}
