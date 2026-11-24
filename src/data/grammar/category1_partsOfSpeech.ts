import type { GrammarLessonDetail } from './types'
import { cat1Part1Lessons } from './cat1/part1'
import { cat1Part2Lessons } from './cat1/part2'
import { cat1Part3Lessons } from './cat1/part3'

export const category1Lessons: GrammarLessonDetail[] = [
  ...cat1Part1Lessons,
  ...cat1Part2Lessons,
  ...cat1Part3Lessons,
]
