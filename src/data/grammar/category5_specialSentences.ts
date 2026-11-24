import type { GrammarLessonDetail } from './types'
import { cat5Part1Lessons } from './cat5/part1'
import { cat5Part2Lessons } from './cat5/part2'

export const category5Lessons: GrammarLessonDetail[] = [
  ...cat5Part1Lessons,
  ...cat5Part2Lessons,
]
