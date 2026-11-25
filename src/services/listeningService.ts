import { guestCourses } from '../data/guestData'
import { allA0Lessons } from '../data/speakingCurriculum'

export type ListeningLevel = 'Beginner' | 'Elementary' | 'Intermediate' | 'Upper-Intermediate' | 'Advanced'
export interface ListeningQuestion {
  id: string
  prompt: string
  options: string[]
  correctIndex: number
  explanation: string
}
export interface ListeningEpisode {
  id: string
  title: string
  topic: string
  level: ListeningLevel
  levelNote: string
  objective: string
  durationSeconds: number | null
  transcript: { speaker: string; text: string }[]
  audioSrc: string | null
  audioStatus: 'unavailable'
  questions: ListeningQuestion[]
  vocabulary: { word: string; meaning: string }[]
}

const stopWords = new Set(['the', 'and', 'you', 'are', 'is', 'am', 'i', 'a', 'an', 'to', 'in', 'it', 'my', 'this', 'that', 'we', 'he', 'she', 'they', 'of', 'for', 'on', 'from', 'with', 'please', 'one', 'two'])
const normalize = (value: string) => value.toLocaleLowerCase('en').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\p{L}\p{N}]+/gu, ' ').trim().replace(/\s+/g, ' ')
const appearsIn = (phrase: string, text: string) => ` ${normalize(text)} `.includes(` ${normalize(phrase)} `)

function makeA0Questions(lesson: (typeof allA0Lessons)[number]): ListeningQuestion[] {
  const script = lesson.listening.script
  const spokenTerms = lesson.vocabulary.map((item) => item.word).filter((word) => normalize(word).length > 2 && appearsIn(word, script))
  const tokens = [...new Set(normalize(script).split(' ').filter((word) => word.length > 2 && !stopWords.has(word)))]
  const answerWord = spokenTerms[0] ?? tokens[0]
  const otherSpokenTerms = [...new Set(allA0Lessons.flatMap((item) => item.vocabulary.map((word) => word.word)).filter((word) => normalize(word).length > 2 && appearsIn(word, script) && normalize(word) !== normalize(answerWord ?? '')))]
  const candidateTerms = [...new Set(allA0Lessons.flatMap((item) => item.vocabulary.map((word) => word.word)).filter((word) => normalize(word).length > 2 && !appearsIn(word, script)))]
  const distractors = candidateTerms.slice((lesson.order * 3) % Math.max(1, candidateTerms.length - 2), (lesson.order * 3) % Math.max(1, candidateTerms.length - 2) + 3)
  const questions: ListeningQuestion[] = []
  if (answerWord && distractors.length >= 2) {
    const options = [answerWord, ...distractors.slice(0, 3)]
    const correctIndex = lesson.order % options.length
    ;[options[0], options[correctIndex]] = [options[correctIndex], options[0]]
    questions.push({ id: `${lesson.id}-word`, prompt: 'Which word appears in the transcript?', options, correctIndex, explanation: `“${answerWord}” appears in the lesson transcript.` })
  }
  const secondWord = otherSpokenTerms[0] ?? tokens.find((token) => token !== normalize(answerWord ?? ''))
  if (secondWord) {
    const options = [lesson.title, 'A different everyday topic', 'A grammar rule unrelated to this lesson']
    const correctIndex = (lesson.order + 1) % options.length
    ;[options[0], options[correctIndex]] = [options[correctIndex], options[0]]
    questions.push({ id: `${lesson.id}-topic`, prompt: 'Which lesson topic best matches the transcript?', options, correctIndex, explanation: `${lesson.title} matches the words and examples in this transcript.` })
  }
  return questions
}

export const listeningEpisodes: ListeningEpisode[] = [
  ...allA0Lessons.filter((lesson) => lesson.listening.script.trim()).map((lesson) => ({
    id: `a0-${lesson.id}`,
    title: lesson.title,
    topic: lesson.module_id,
    level: 'Beginner' as const,
    levelNote: 'A0 foundation · not a CEFR placement result',
    objective: lesson.listening.purpose,
    durationSeconds: null,
    transcript: [{ speaker: 'Transcript', text: lesson.listening.script }],
    audioSrc: null,
    audioStatus: 'unavailable' as const,
    questions: makeA0Questions(lesson),
    vocabulary: lesson.vocabulary.map((item) => ({ word: item.word, meaning: item.meaning })),
  })),
  ...guestCourses.flatMap((course) => course.lessons.map((lesson) => ({
    id: `course-${lesson.id}`,
    title: lesson.title,
    topic: course.title,
    level: 'Elementary' as const,
    levelNote: course.level,
    objective: lesson.description,
    durationSeconds: null,
    transcript: lesson.dialogue.map((line) => ({ speaker: line.speaker, text: line.en })),
    audioSrc: null,
    audioStatus: 'unavailable' as const,
    questions: lesson.quiz.map((question) => ({ id: String(question.id), prompt: question.question, options: question.options, correctIndex: question.correctIndex, explanation: question.explanation })),
    vocabulary: lesson.vocabulary.map((item) => ({ word: item.word, meaning: item.vietnamese })),
  }))),
]

export function getListeningEpisode(id: string): ListeningEpisode | undefined {
  return listeningEpisodes.find((episode) => episode.id === id)
}

export function getAvailableListeningLevels(): ListeningLevel[] {
  return [...new Set(listeningEpisodes.filter((episode) => episode.questions.length > 0).map((episode) => episode.level))]
}
