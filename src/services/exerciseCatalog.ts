import { allGrammarLessons } from '../data/grammar'
import { interactiveExercises, type InteractiveExercise } from '../data/interactiveExercises'
import { getTwelveTensePractice } from '../data/twelveTensePractice'
import { grammarTopics } from '../data/grammarTopics'
import { allA0Lessons } from '../data/speakingCurriculum'
import { conversationScenarios } from '../data/conversationScenarios'
import { guestCourses } from '../data/guestData'
import { listeningEpisodes } from './listeningService'
import { minimalPairSpecs, pronunciationKnowledgeQuestions } from './pronunciationService'
import { loadPublishedCommunicationContent } from './communicationContentService'
import { getTenseSupplementPracticeRecords } from '../components/dashboard/TenseSupplementLesson'

export type ExerciseContentGroup = 'grammar' | 'vocabulary' | 'communication' | 'general'
export type ExercisePracticeKind =
  | 'question'
  | 'guided-output'
  | 'self-assessment'
  | 'role-play'
  | 'transcript-comprehension'
  | 'audio-listening'
  | 'short-answer'
export type ExerciseQuestionType =
  | 'multiple-choice'
  | 'fill-blank'
  | 'word-order'
  | 'correct-mistake'
  | 'sentence-construction'
  | 'guided-output'
  | 'self-assessment'
  | 'role-play'
  | 'transcript-comprehension'
  | 'audio-listening'
  | 'short-answer'

export interface ExerciseCatalogItem {
  /** Namespaced and stable while its source ID remains stable. */
  id: string
  contentGroup: ExerciseContentGroup
  topicId: string
  topicTitle?: string
  sourceLessonId?: string
  questionType: ExerciseQuestionType
  practiceKind: ExercisePracticeKind
  scoring: 'automatic' | 'self-check' | 'none'
  prompt: string
  choices?: string[]
  tokens?: string[]
  context?: string
  answers?: string[]
  correctIndex?: number
  explanation?: string
  difficulty?: string
  selfCheck?: string[]
  source: {
    fileOrTable: string
    recordId: string
  }
}

export interface ExerciseCatalogFilter {
  contentGroups?: ExerciseContentGroup[]
  topicIds?: string[]
  practiceKinds?: ExercisePracticeKind[]
  scorableOnly?: boolean
}

const topicTitleById = new Map(grammarTopics.map((topic) => [topic.id, topic.title]))

function grammarType(type: InteractiveExercise['type']): ExerciseQuestionType {
  return type
}

function mapInteractiveExercise(
  exercise: InteractiveExercise,
  context: { id: string; contentGroup: ExerciseContentGroup; topicId: string; topicTitle?: string; sourceLessonId?: string; difficulty?: string; file: string },
): ExerciseCatalogItem {
  const choices = 'choices' in exercise ? exercise.choices : undefined
  return {
    id: context.id,
    contentGroup: context.contentGroup,
    topicId: context.topicId,
    topicTitle: context.topicTitle,
    sourceLessonId: context.sourceLessonId,
    questionType: grammarType(exercise.type),
    practiceKind: 'question',
    scoring: 'automatic',
    prompt: exercise.prompt,
    choices,
    tokens: exercise.type === 'word-order' ? exercise.tokens : undefined,
    answers: exercise.correctAnswers,
    explanation: exercise.explanation,
    difficulty: context.difficulty ?? ('level' in exercise ? exercise.level : undefined),
    source: { fileOrTable: context.file, recordId: exercise.id },
  }
}

function buildLocalCatalog(): ExerciseCatalogItem[] {
  const items: ExerciseCatalogItem[] = []

  for (const lesson of allGrammarLessons) {
    for (const exercise of lesson.exercises) {
      items.push(mapInteractiveExercise(exercise, {
        id: `grammar:${lesson.id}:${exercise.id}`,
        contentGroup: 'grammar',
        topicId: lesson.id,
        topicTitle: lesson.vietnameseTitle || lesson.title,
        sourceLessonId: lesson.id,
        difficulty: lesson.level,
        file: 'src/data/grammar',
      }))
    }
  }

  for (const topic of grammarTopics.filter((item) => item.section === '12 thì tiếng Anh')) {
    for (const exercise of getTwelveTensePractice(topic.id)) {
      items.push(mapInteractiveExercise(exercise, {
        id: `grammar:${topic.id}:${exercise.id}`,
        contentGroup: 'grammar',
        topicId: topic.id,
        topicTitle: topic.title,
        sourceLessonId: topic.id,
        file: 'docs/ngu-phap-12-thi.md',
      }))
    }
  }

  for (const topicId of ['be-going-to', 'tense-contrasts', 'mixed-tense-practice']) {
    const topicTitle = topicTitleById.get(topicId) ?? topicId
    for (const record of getTenseSupplementPracticeRecords(topicId)) {
      const questionType: ExerciseQuestionType = record.choices.length > 1
        ? 'multiple-choice'
        : /sửa lỗi/i.test(record.groupTitle)
          ? 'correct-mistake'
          : /giải thích/i.test(record.groupTitle)
            ? 'short-answer'
            : 'fill-blank'
      const choiceAnswer = record.answer.match(/^([A-D])\s*[)–—-]/)?.[1]
      const correctIndex = choiceAnswer
        ? record.choices.findIndex((_, index) => String.fromCharCode(65 + index) === choiceAnswer)
        : -1
      items.push({
        id: `grammar:${topicId}:group-${record.groupIndex + 1}-question-${record.questionIndex + 1}`,
        contentGroup: 'grammar',
        topicId,
        topicTitle,
        sourceLessonId: topicId,
        questionType,
        practiceKind: 'question',
        scoring: 'automatic',
        prompt: record.prompt,
        choices: record.choices.length > 1 ? record.choices : undefined,
        answers: correctIndex >= 0 ? [record.choices[correctIndex]] : [record.answer],
        correctIndex: correctIndex >= 0 ? correctIndex : undefined,
        explanation: record.reason,
        source: {
          fileOrTable: 'src/components/dashboard/TenseSupplementLesson.tsx',
          recordId: `${topicId}:group-${record.groupIndex + 1}:question-${record.questionIndex + 1}`,
        },
      })
    }
  }

  for (const exercise of interactiveExercises) {
    items.push(mapInteractiveExercise(exercise, {
      id: `general:interactive:${exercise.id}`,
      contentGroup: 'general',
      topicId: 'interactive-exercises',
      topicTitle: 'Bài tập tương tác tổng hợp',
      file: 'src/data/interactiveExercises.ts',
    }))
  }

  for (const lesson of allA0Lessons) {
    const topicId = lesson.knowledge.introduces[0] ?? lesson.module_id
    for (const exercise of lesson.exercises) {
      if (exercise.type === 'multiple-choice') {
        items.push({
          id: `communication:${lesson.id}:${exercise.id}`,
          contentGroup: 'communication',
          topicId,
          topicTitle: lesson.title,
          sourceLessonId: lesson.id,
          difficulty: lesson.level,
          questionType: 'multiple-choice',
          practiceKind: 'question',
          scoring: 'automatic',
          prompt: exercise.prompt,
          choices: exercise.options,
          answers: exercise.answerIndex === undefined || !exercise.options
            ? exercise.answer === undefined ? undefined : [exercise.answer]
            : [exercise.options[exercise.answerIndex]],
          correctIndex: exercise.answerIndex,
          explanation: exercise.explanation,
          source: { fileOrTable: 'src/data/speakingCurriculum.ts', recordId: exercise.id },
        })
      } else {
        items.push({
          id: `communication:${lesson.id}:${exercise.id}`,
          contentGroup: 'communication',
          topicId,
          topicTitle: lesson.title,
          sourceLessonId: lesson.id,
          difficulty: lesson.level,
          questionType: 'guided-output',
          practiceKind: 'guided-output',
          scoring: 'self-check',
          prompt: exercise.prompt,
          answers: exercise.modelAnswer ? [exercise.modelAnswer] : undefined,
          explanation: exercise.explanation,
          selfCheck: exercise.selfCheck,
          source: { fileOrTable: 'src/data/speakingCurriculum.ts', recordId: exercise.id },
        })
      }
    }

    items.push({
      id: `communication:${lesson.id}:assessment`,
      contentGroup: 'communication',
      topicId,
      topicTitle: lesson.title,
      sourceLessonId: lesson.id,
      difficulty: lesson.level,
      questionType: 'self-assessment',
      practiceKind: 'self-assessment',
      scoring: 'self-check',
      prompt: lesson.assessment.task,
      selfCheck: lesson.assessment.criteria,
      explanation: lesson.assessment.limitation,
      source: { fileOrTable: 'src/data/speakingCurriculum.ts', recordId: `${lesson.id}:assessment` },
    })
  }

  for (const scenario of conversationScenarios) {
    items.push({
      id: `communication:scenario:${scenario.id}`,
      contentGroup: 'communication',
      topicId: scenario.category.toLocaleLowerCase().replaceAll(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
      topicTitle: scenario.category,
      sourceLessonId: scenario.lessonCode,
      difficulty: scenario.level,
      questionType: 'role-play',
      practiceKind: 'role-play',
      scoring: 'none',
      prompt: scenario.openingQuestion,
      selfCheck: scenario.completionCriteria,
      source: { fileOrTable: 'src/data/conversationScenarios.ts', recordId: scenario.id },
    })
    for (const question of scenario.authoredQuestions ?? []) {
      items.push({
        id: `communication:scenario:${scenario.id}:${question.id}`,
        contentGroup: 'communication',
        topicId: scenario.category.toLocaleLowerCase().replaceAll(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
        topicTitle: scenario.category,
        sourceLessonId: scenario.lessonCode,
        difficulty: scenario.level,
        questionType: 'multiple-choice',
        practiceKind: 'question',
        scoring: 'automatic',
        prompt: question.prompt,
        choices: question.options,
        correctIndex: question.correctIndex,
        answers: [question.options[question.correctIndex]],
        explanation: question.explanation,
        source: { fileOrTable: 'src/data/conversationScenarios.ts', recordId: question.id },
      })
    }
  }

  for (const course of guestCourses) {
    for (const lesson of course.lessons) {
      for (const question of lesson.quiz) {
        items.push({
          id: `communication:${lesson.id}:quiz:${question.id}`,
          contentGroup: 'communication',
          topicId: course.id,
          topicTitle: course.title,
          sourceLessonId: lesson.id,
          questionType: 'multiple-choice',
          practiceKind: 'question',
          scoring: 'automatic',
          prompt: question.question,
          choices: question.options,
          correctIndex: question.correctIndex,
          answers: [question.options[question.correctIndex]],
          explanation: question.explanation,
          difficulty: course.level,
          source: { fileOrTable: 'src/data/guestData.ts', recordId: `${lesson.id}:quiz:${question.id}` },
        })
      }
    }
  }

  // Audio is not integrated. Keep A0 transcript questions available as reading practice;
  // omit course episodes because they repeat the guest-course quiz questions above.
  for (const episode of listeningEpisodes.filter((item) => item.id.startsWith('a0-'))) {
    const lessonId = episode.id.slice(3)
    for (const question of episode.questions) {
      items.push({
        id: `communication:transcript:${question.id}`,
        contentGroup: 'communication',
        topicId: episode.topic,
        topicTitle: episode.title,
        sourceLessonId: lessonId,
        difficulty: episode.level,
        questionType: 'transcript-comprehension',
        practiceKind: 'transcript-comprehension',
        scoring: 'automatic',
        prompt: question.prompt,
        context: episode.transcript.map((line) => `${line.speaker}: ${line.text}`).join('\n'),
        choices: question.options,
        correctIndex: question.correctIndex,
        answers: [question.options[question.correctIndex]],
        explanation: question.explanation,
      source: { fileOrTable: 'src/services/listeningService.ts', recordId: question.id },
      })
    }
  }

  for (const [lessonId, question] of pronunciationKnowledgeQuestions) {
    items.push({
      id: `communication:pronunciation:${question.id}`,
      contentGroup: 'communication',
      topicId: 'pronunciation-ipa',
      topicTitle: 'Nhận diện IPA',
      sourceLessonId: lessonId,
      difficulty: 'A0',
      questionType: 'multiple-choice',
      practiceKind: 'question',
      scoring: 'automatic',
      prompt: question.prompt,
      choices: question.options,
      correctIndex: question.correctIndex,
      answers: [question.options[question.correctIndex]],
      explanation: question.explanation,
      source: { fileOrTable: 'src/services/pronunciationService.ts', recordId: question.id },
    })
  }

  for (const pair of minimalPairSpecs) {
    items.push({
      id: `communication:pronunciation:${pair.id}`,
      contentGroup: 'communication',
      topicId: 'pronunciation-minimal-pairs',
      topicTitle: 'Cặp âm tối thiểu',
      questionType: 'multiple-choice',
      practiceKind: 'question',
      scoring: 'automatic',
      prompt: pair.question,
      choices: [pair.first, pair.second],
      answers: [pair.target],
      explanation: pair.note,
      source: { fileOrTable: 'src/services/pronunciationService.ts', recordId: pair.id },
    })
  }

  return items
}

/** Read-only local catalog; questions retain source IDs and source text. */
export const localExerciseCatalog = buildLocalCatalog()

export function queryExerciseCatalog(
  filter: ExerciseCatalogFilter = {},
  items: readonly ExerciseCatalogItem[] = localExerciseCatalog,
): ExerciseCatalogItem[] {
  return items.filter((item) =>
    (!filter.contentGroups?.length || filter.contentGroups.includes(item.contentGroup)) &&
    (!filter.topicIds?.length || filter.topicIds.includes(item.topicId)) &&
    (!filter.practiceKinds?.length || filter.practiceKinds.includes(item.practiceKind)) &&
    (!filter.scorableOnly || item.scoring === 'automatic'),
  )
}

/** Published Supabase lessons are read-only additions; failures leave local data usable. */
export async function loadExerciseCatalog(includePublishedSupabase = false): Promise<ExerciseCatalogItem[]> {
  if (!includePublishedSupabase) return [...localExerciseCatalog]

  const published = await loadPublishedCommunicationContent()
  const remoteItems: ExerciseCatalogItem[] = published.flatMap((lesson) => {
    const topicId = lesson.category.toLocaleLowerCase().replaceAll(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    const activity: ExerciseCatalogItem = {
      id: `supabase:${lesson.id}:role-play`,
      contentGroup: 'communication',
      topicId,
      topicTitle: lesson.category,
      sourceLessonId: lesson.id,
      difficulty: lesson.level,
      questionType: 'role-play',
      practiceKind: 'role-play',
      scoring: 'none',
      prompt: lesson.openingQuestion,
      selfCheck: lesson.completionCriteria,
      source: { fileOrTable: 'public.communication_lessons', recordId: lesson.slug },
    }
    const questions = lesson.questions.map((question): ExerciseCatalogItem => ({
      id: `supabase:${lesson.id}:${question.id}`,
      contentGroup: 'communication',
      topicId,
      topicTitle: lesson.title,
      sourceLessonId: lesson.id,
      difficulty: lesson.level,
      questionType: 'multiple-choice',
      practiceKind: 'question',
      scoring: 'automatic',
      prompt: question.prompt,
      choices: question.options,
      correctIndex: question.correctIndex,
      answers: [question.options[question.correctIndex]],
      explanation: question.explanation,
      source: { fileOrTable: 'public.communication_lessons', recordId: `${lesson.slug}:${question.id}` },
    }))
    return [activity, ...questions]
  })
  return [...localExerciseCatalog, ...remoteItems]
}

export function auditExerciseCatalog(items: readonly ExerciseCatalogItem[] = localExerciseCatalog) {
  const idCounts = new Map<string, number>()
  const promptCounts = new Map<string, number>()
  const missing = { topicId: 0, sourceRecordId: 0, automaticAnswer: 0 }
  for (const item of items) {
    idCounts.set(item.id, (idCounts.get(item.id) ?? 0) + 1)
    const normalizedPrompt = item.prompt.trim().toLocaleLowerCase().replace(/\s+/g, ' ')
    promptCounts.set(normalizedPrompt, (promptCounts.get(normalizedPrompt) ?? 0) + 1)
    if (!item.topicId) missing.topicId += 1
    if (!item.source.recordId) missing.sourceRecordId += 1
    if (item.scoring === 'automatic' && !(item.answers?.length)) missing.automaticAnswer += 1
  }
  return {
    total: items.length,
    automatic: items.filter((item) => item.scoring === 'automatic').length,
    practiceOnly: items.filter((item) => item.scoring !== 'automatic').length,
    duplicateIds: [...idCounts].filter(([, count]) => count > 1).map(([id]) => id),
    duplicatePrompts: [...promptCounts].filter(([, count]) => count > 1).length,
    missing,
    byGroup: Object.fromEntries(
      [...new Set(items.map((item) => item.contentGroup))].map((group) => [group, items.filter((item) => item.contentGroup === group).length]),
    ),
    byType: Object.fromEntries(
      [...new Set(items.map((item) => item.questionType))].map((type) => [type, items.filter((item) => item.questionType === type).length]),
    ),
  }
}

export const exerciseCatalogTopicTitles = topicTitleById
