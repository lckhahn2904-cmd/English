import type { GrammarLessonDetail } from './types';
import { category1Lessons } from './category1_partsOfSpeech';
import { category2Lessons } from './category2_sentenceStructures';
import { category4Lessons } from './category4_clauses';
import { category5Lessons } from './category5_specialSentences';
import { category6Lessons } from './category6_extendedGrammar';

export type * from './types';
export { category1Lessons } from './category1_partsOfSpeech';
export { category2Lessons } from './category2_sentenceStructures';
export { category4Lessons } from './category4_clauses';
export { category5Lessons } from './category5_specialSentences';
export { category6Lessons } from './category6_extendedGrammar';

/**
 * 30 new standardized grammar lessons across 5 categories
 * (Category 3 - 12 Tenses is managed separately to preserve 100% of existing data and progress)
 */
export const allGrammarLessons: GrammarLessonDetail[] = [
  ...category1Lessons,
  ...category2Lessons,
  ...category4Lessons,
  ...category5Lessons,
  ...category6Lessons
];

export const grammarLessonsMap = new Map<string, GrammarLessonDetail>(
  allGrammarLessons.map(lesson => [lesson.id, lesson])
);

export function getGrammarLesson(id: string): GrammarLessonDetail | undefined {
  return grammarLessonsMap.get(id);
}

export function getGrammarLessonsByCategory(category: string): GrammarLessonDetail[] {
  return allGrammarLessons.filter(lesson => lesson.category === category);
}
