import type { CommunicationPathGoal } from '../context/GuestContext'
import { conversationScenarios, type ScenarioCategory } from '../data/conversationScenarios'
import { allA0Lessons, type A0Lesson } from '../data/speakingCurriculum'

export interface CommunicationLearningStageDefinition {
  id: string
  title: string
  goal: string
  lessonCodes: string[]
  scenarioIds: string[]
  focusGoals: CommunicationPathGoal[]
}

export const communicationLearningStages: CommunicationLearningStageDefinition[] = [
  {
    id: 'communication-basics', title: 'Communication Basics',
    goal: 'Làm quen với âm, từ, cấu trúc nền tảng và câu hỏi ngắn.',
    lessonCodes: ['A001', 'A002', 'A003', 'A004', 'A005', 'A006', 'A007', 'A008', 'A017', 'A018', 'A019', 'A020'],
    scenarioIds: ['introductions', 'greetings', 'meet-a-classmate'], focusGoals: ['general', 'confidence'],
  },
  {
    id: 'everyday-communication', title: 'Everyday Communication',
    goal: 'Dùng từ vựng đời thường, mô tả người/vật/nơi và trao đổi thông tin quen thuộc.',
    lessonCodes: ['A009', 'A010', 'A011', 'A012', 'A013', 'A014', 'A015', 'A016', 'A021', 'A022', 'A023', 'A024'],
    scenarioIds: ['family', 'things-around-me', 'asking-the-time', 'ask-for-help', 'hobbies', 'make-plans', 'cafe-order'], focusGoals: ['general', 'daily-life'],
  },
  {
    id: 'practical-conversations', title: 'Practical Conversations',
    goal: 'Thực hành hội thoại đầu tiên và chuẩn bị cho các tình huống thực tế.',
    lessonCodes: ['A025', 'A026', 'A027', 'A028', 'A029', 'A030', 'A031', 'A032'],
    scenarioIds: ['airport-check-in', 'hotel-check-in', 'directions', 'taxi', 'schedule-meeting', 'leave-message', 'online-meeting'], focusGoals: ['general', 'daily-life', 'travel', 'confidence'],
  },
  {
    id: 'workplace-communication', title: 'Workplace Communication',
    goal: 'Xem trước hội thoại công việc: làm quen, làm rõ nhiệm vụ và cập nhật tiến độ.',
    lessonCodes: [], scenarioIds: ['work-introduction', 'task-clarification', 'project-update'], focusGoals: ['workplace'],
  },
  {
    id: 'confident-communication', title: 'Confident Communication',
    goal: 'Mở rộng sang phỏng vấn và xử lý câu hỏi phát sinh theo cách riêng.',
    lessonCodes: [], scenarioIds: ['interview-intro', 'interview-strength'], focusGoals: ['confidence'],
  },
]

export interface CommunicationLearningStage extends CommunicationLearningStageDefinition {
  lessons: A0Lesson[]
  scenarios: typeof conversationScenarios
  completedLessonCount: number
  trackedLessonCount: number
  progressPercentage: number | null
  status: 'complete' | 'in-progress' | 'up-next' | 'practice-preview'
}

export interface CommunicationLearningPathSnapshot {
  stages: CommunicationLearningStage[]
  completedLessonCount: number
  totalTrackedLessons: number
  overallPercentage: number
  currentStageId: string | null
  nextLesson: A0Lesson | null
}

export function buildCommunicationLearningPath(completedLessonIds: string[], activeLessonId: string | null): CommunicationLearningPathSnapshot {
  const completed = new Set(completedLessonIds)
  const stagesWithLessons = communicationLearningStages.filter((stage) => stage.lessonCodes.length > 0)
  const activeLesson = allA0Lessons.find((lesson) => lesson.id === activeLessonId && !completed.has(`speaking-${lesson.id}`))
  const activeStage = activeLesson && stagesWithLessons.find((stage) => stage.lessonCodes.includes(activeLesson.code))
  let currentStageId: string | null = activeStage?.id ?? null
  if (!currentStageId) {
    for (const stage of stagesWithLessons) {
      const stageLessons = allA0Lessons.filter((lesson) => stage.lessonCodes.includes(lesson.code))
      if (stageLessons.some((lesson) => !completed.has(`speaking-${lesson.id}`))) {
        currentStageId = stage.id
        break
      }
    }
  }

  const stages = communicationLearningStages.map((stage): CommunicationLearningStage => {
    const lessons = allA0Lessons.filter((lesson) => stage.lessonCodes.includes(lesson.code))
    const scenarios = conversationScenarios.filter((scenario) => stage.scenarioIds.includes(scenario.id))
    const completedLessonCount = lessons.filter((lesson) => completed.has(`speaking-${lesson.id}`)).length
    const trackedLessonCount = lessons.length
    const status = trackedLessonCount === 0
      ? 'practice-preview'
      : completedLessonCount === trackedLessonCount
        ? 'complete'
        : currentStageId === stage.id
          ? 'in-progress'
          : 'up-next'
    return {
      ...stage,
      lessons,
      scenarios,
      completedLessonCount,
      trackedLessonCount,
      progressPercentage: trackedLessonCount ? Math.round((completedLessonCount / trackedLessonCount) * 100) : null,
      status,
    }
  })
  const trackedLessons = stagesWithLessons.flatMap((stage) => allA0Lessons.filter((lesson) => stage.lessonCodes.includes(lesson.code)))
  const completedLessonCount = trackedLessons.filter((lesson) => completed.has(`speaking-${lesson.id}`)).length
  const active = trackedLessons.find((lesson) => lesson.id === activeLessonId && !completed.has(`speaking-${lesson.id}`))
  const next = active ?? trackedLessons.find((lesson) => !completed.has(`speaking-${lesson.id}`)) ?? null
  return {
    stages,
    completedLessonCount,
    totalTrackedLessons: trackedLessons.length,
    overallPercentage: trackedLessons.length ? Math.round((completedLessonCount / trackedLessons.length) * 100) : 0,
    currentStageId,
    nextLesson: next,
  }
}

export function getLearningGoalLabel(goal: CommunicationPathGoal): string {
  const labels: Record<CommunicationPathGoal, string> = {
    general: 'Giao tiếp tổng quát',
    'daily-life': 'Đời sống hằng ngày',
    travel: 'Du lịch',
    workplace: 'Công việc',
    confidence: 'Tự tin trò chuyện',
  }
  return labels[goal]
}

export function getScenarioCategoryLabel(category: ScenarioCategory): string {
  return category
}
