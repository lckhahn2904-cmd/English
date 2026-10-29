import type { InteractiveExercise } from './interactiveExercises'
import lessonMarkdown from '../../docs/ngu-phap-12-thi.md?raw'

export type TensePracticeExercise = InteractiveExercise & {
  translation: string
  level: 'Cơ bản' | 'Trung bình' | 'Nâng cao'
}

const sectionNumbers: Record<string, number> = {
  'present-simple': 1,
  'present-continuous': 2,
  'present-perfect': 3,
  'present-perfect-continuous': 4,
  'past-simple': 5,
  'past-continuous': 6,
  'past-perfect': 7,
  'past-perfect-continuous': 8,
  'future-simple': 9,
  'future-continuous': 10,
  'future-perfect': 11,
  'future-perfect-continuous': 12,
}

function field(questionBlock: string, label: string) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const value = questionBlock.match(new RegExp(`^- ${escaped}:\\s*(.+)$`, 'm'))?.[1]?.trim()
  return value?.replace(/\.$/, '') ?? ''
}

function parseChoices(value: string) {
  return value.split(/;\s*/).map((option) => option.replace(/^[A-D]\)\s*/, '').replace(/\.$/, '').trim()).filter(Boolean)
}

function parseQuestion(questionBlock: string, level: TensePracticeExercise['level']): TensePracticeExercise | null {
  const heading = questionBlock.match(/^\*\*Câu (\d+)\. \[([^\]]+)\]\*\*\s*(.+)$/m)
  if (!heading) return null

  const exerciseType = field(questionBlock, 'Dạng bài')
  const choices = parseChoices(field(questionBlock, 'Phương án'))
  const answerLine = field(questionBlock, 'Đáp án')
  const correctAnswers = answerLine.split(/\s+\/\s+/).map((answer) => answer.trim()).filter(Boolean)
  const explanation = field(questionBlock, 'Giải thích')
  const translation = field(questionBlock, 'Dịch nghĩa')
  if (!correctAnswers.length || !explanation || !translation) return null

  const prompt = heading[3].trim()
  const type: InteractiveExercise['type'] = exerciseType === 'Trắc nghiệm'
    ? 'multiple-choice'
    : exerciseType === 'Sửa lỗi sai'
      ? 'correct-mistake'
      : 'fill-blank'

  if (type === 'multiple-choice' && choices.length < 2) return null

  const base = {
    id: heading[2],
    prompt,
    correctAnswers,
    explanation,
    translation,
    level,
  }

  if (type === 'multiple-choice') return { ...base, type, choices }
  if (type === 'correct-mistake') return { ...base, type, hint: 'Viết lại toàn bộ câu sau khi sửa lỗi.' }
  return { ...base, type, hint: `Câu ${heading[1]} · ${level}` }
}

function extractTenseSection(tenseId: string) {
  const number = sectionNumbers[tenseId]
  if (!number) return ''

  const heading = new RegExp(`^# ${number}\\.`, 'm').exec(lessonMarkdown)
  if (!heading) return ''
  const nextHeading = /^# /m.exec(lessonMarkdown.slice(heading.index + heading[0].length))
  const end = nextHeading ? heading.index + heading[0].length + nextHeading.index : lessonMarkdown.length
  return lessonMarkdown.slice(heading.index, end)
}

export function getTwelveTensePractice(tenseId: string): TensePracticeExercise[] {
  const section = extractTenseSection(tenseId)
  const heading = '### Bài tập thực hành — 30 câu'
  const practiceStart = section.indexOf(heading)
  if (practiceStart < 0) return []

  const practice = section.slice(practiceStart + heading.length)
  const parts = [...practice.matchAll(/^#### Phần [ABC] — (Cơ bản|Trung bình|Nâng cao)/gm)]
  const exercises: TensePracticeExercise[] = []

  for (let partIndex = 0; partIndex < parts.length; partIndex += 1) {
    const part = parts[partIndex]
    const start = part.index ?? 0
    const end = parts[partIndex + 1]?.index ?? practice.length
    const level = part[1] as TensePracticeExercise['level']
    const partText = practice.slice(start, end)
    const questions = [...partText.matchAll(/^\*\*Câu \d+\. \[[^\]]+\]\*\*.*$/gm)]

    for (let questionIndex = 0; questionIndex < questions.length; questionIndex += 1) {
      const question = questions[questionIndex]
      const questionStart = question.index ?? 0
      const questionEnd = questions[questionIndex + 1]?.index ?? partText.length
      const parsed = parseQuestion(partText.slice(questionStart, questionEnd), level)
      if (parsed) exercises.push(parsed)
    }
  }

  return exercises.sort((left, right) => {
    const leftNumber = Number(left.id.match(/-(\d+)$/)?.[1] ?? 0)
    const rightNumber = Number(right.id.match(/-(\d+)$/)?.[1] ?? 0)
    return leftNumber - rightNumber
  })
}

export const TWELVE_TENSE_PRACTICE_COUNTS = Object.keys(sectionNumbers).map((id) => ({
  id,
  count: getTwelveTensePractice(id).length,
}))
