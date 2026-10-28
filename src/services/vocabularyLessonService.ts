import type { NormalizedGroup, NormalizedVocabItem } from '../types/vocabulary'

export const WORDS_PER_VOCABULARY_LESSON = 20

export interface VocabularyLesson {
  id: string
  number: number
  words: NormalizedVocabItem[]
}

export function clampVocabularyWordIndex(index: number, wordCount: number): number {
  if (!Number.isInteger(index) || wordCount <= 0) return 0
  return Math.max(0, Math.min(index, wordCount - 1))
}

export function createVocabularyLessons(
  group: NormalizedGroup,
  wordsPerLesson = WORDS_PER_VOCABULARY_LESSON
): VocabularyLesson[] {
  if (!Number.isInteger(wordsPerLesson) || wordsPerLesson < 1) {
    throw new Error('wordsPerLesson must be a positive integer.')
  }

  const lessons: VocabularyLesson[] = []
  for (let offset = 0; offset < group.vocabulary.length; offset += wordsPerLesson) {
    const number = Math.floor(offset / wordsPerLesson) + 1
    lessons.push({
      id: `vocabulary-${group.id}-lesson-${number}`,
      number,
      words: group.vocabulary.slice(offset, offset + wordsPerLesson),
    })
  }
  return lessons
}
