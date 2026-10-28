import { createContext, useContext, useState, useMemo } from 'react'
import type { ReactNode } from 'react'

export interface QuizScore {
  score: number
  total: number
  percentage: number
  answers: Record<number, number>
}

export interface GuestState {
  isGuest: boolean
  completedLessonIds: string[]
  learnedVocabIds: string[]
  quizScores: Record<string, QuizScore>
  sessionXp: number
}

export interface GuestContextType extends GuestState {
  completeLesson: (lessonId: string, xpReward?: number) => void
  markLessonCompleted: (lessonId: string) => void
  toggleVocabLearned: (vocabId: string) => void
  saveQuizResult: (lessonId: string, score: number, total: number, answers: Record<number, number>) => void
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
}

const GuestContext = createContext<GuestContextType | undefined>(undefined)

export function GuestProvider({ children }: { children: ReactNode }) {
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

  const enterGuestMode = () => {
    setState((prev) => ({ ...prev, isGuest: true }))
  }

  const completeLesson = (lessonId: string, xpReward = 30) => {
    setState((prev) => {
      if (prev.completedLessonIds.includes(lessonId)) {
        return prev
      }
      return {
        ...prev,
        completedLessonIds: [...prev.completedLessonIds, lessonId],
        sessionXp: prev.sessionXp + xpReward,
      }
    })
  }

  const markLessonCompleted = (lessonId: string) => {
    setState((prev) => {
      if (prev.completedLessonIds.includes(lessonId)) return prev
      return { ...prev, completedLessonIds: [...prev.completedLessonIds, lessonId] }
    })
  }

  const toggleVocabLearned = (vocabId: string) => {
    setState((prev) => {
      const alreadyLearned = prev.learnedVocabIds.includes(vocabId)
      return {
        ...prev,
        learnedVocabIds: alreadyLearned
          ? prev.learnedVocabIds.filter((id) => id !== vocabId)
          : [...prev.learnedVocabIds, vocabId],
        sessionXp: alreadyLearned ? Math.max(0, prev.sessionXp - 5) : prev.sessionXp + 5,
      }
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

      return {
        ...prev,
        quizScores: {
          ...prev.quizScores,
          [lessonId]: { score, total, percentage, answers },
        },
        sessionXp: prev.sessionXp + xpEarned,
      }
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
      resetGuestProgress,
      enterGuestMode,
      exitGuestMode,
    }),
    [state]
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
