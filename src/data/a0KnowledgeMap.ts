import type { A0Lesson } from './speakingCurriculum'

export interface A0LessonKnowledge {
  introduces: string[]
  buildsOn: string[]
  reinforces: string[]
}

export interface A0KnowledgeUnit {
  id: string
  title: string
  area: 'pronunciation' | 'vocabulary' | 'grammar' | 'conversation'
  introducedIn: string
  buildsOn: string[]
  reinforcedIn: string[]
}

const lessonKnowledge: Record<string, A0LessonKnowledge> = {
  A001: { introduces: ['alphabet'], buildsOn: [], reinforces: ['A002', 'A008', 'A026'] },
  A002: { introduces: ['vowels-consonants'], buildsOn: ['alphabet'], reinforces: ['A003', 'A004', 'A005', 'A008'] },
  A003: { introduces: ['monophthongs'], buildsOn: ['vowels-consonants'], reinforces: ['A008'] },
  A004: { introduces: ['diphthongs'], buildsOn: ['vowels-consonants'], reinforces: ['A008'] },
  A005: { introduces: ['consonants'], buildsOn: ['vowels-consonants'], reinforces: ['A006', 'A008'] },
  A006: { introduces: ['final-sounds'], buildsOn: ['consonants'], reinforces: ['A008', 'A019'] },
  A007: { introduces: ['word-stress'], buildsOn: ['alphabet'], reinforces: ['A008', 'A026'] },
  A008: { introduces: ['pronunciation-routine'], buildsOn: ['alphabet', 'vowels-consonants', 'monophthongs', 'diphthongs', 'consonants', 'final-sounds', 'word-stress'], reinforces: ['A026', 'A032'] },
  A009: { introduces: ['numbers'], buildsOn: ['alphabet'], reinforces: ['A012', 'A028'] },
  A010: { introduces: ['colors'], buildsOn: [], reinforces: ['A015'] },
  A011: { introduces: ['days-months'], buildsOn: ['numbers'], reinforces: ['A012'] },
  A012: { introduces: ['time'], buildsOn: ['numbers', 'days-months'], reinforces: ['A025'] },
  A013: { introduces: ['family'], buildsOn: [], reinforces: ['A021', 'A026'] },
  A014: { introduces: ['people'], buildsOn: ['family'], reinforces: ['A017', 'A018', 'A026'] },
  A015: { introduces: ['common-objects'], buildsOn: ['colors'], reinforces: ['A019', 'A020'] },
  A016: { introduces: ['basic-places'], buildsOn: ['common-objects'], reinforces: ['A022', 'A026', 'A029'] },
  A017: { introduces: ['personal-pronouns'], buildsOn: ['people'], reinforces: ['A018', 'A021', 'A022', 'A024', 'A026'] },
  A018: { introduces: ['verb-to-be'], buildsOn: ['personal-pronouns'], reinforces: ['A019', 'A022', 'A023', 'A024', 'A026', 'A028', 'A029'] },
  A019: { introduces: ['singular-plural'], buildsOn: ['common-objects', 'numbers'], reinforces: ['A020', 'A022'] },
  A020: { introduces: ['articles'], buildsOn: ['singular-plural', 'common-objects'], reinforces: ['A022'] },
  A021: { introduces: ['possessives'], buildsOn: ['personal-pronouns', 'family'], reinforces: ['A026'] },
  A022: { introduces: ['affirmative-sentences'], buildsOn: ['personal-pronouns', 'verb-to-be', 'singular-plural', 'articles', 'basic-places'], reinforces: ['A023', 'A024', 'A026', 'A029'] },
  A023: { introduces: ['negative-sentences'], buildsOn: ['affirmative-sentences', 'verb-to-be'], reinforces: ['A024'] },
  A024: { introduces: ['yes-no-wh-questions'], buildsOn: ['affirmative-sentences', 'negative-sentences', 'verb-to-be', 'personal-pronouns'], reinforces: ['A027', 'A028', 'A029', 'A031', 'A032'] },
  A025: { introduces: ['greetings'], buildsOn: ['time'], reinforces: ['A026', 'A032'] },
  A026: { introduces: ['self-introduction'], buildsOn: ['greetings', 'personal-pronouns', 'verb-to-be', 'possessives', 'family', 'people', 'basic-places'], reinforces: ['A027', 'A029', 'A032'] },
  A027: { introduces: ['asking-names'], buildsOn: ['greetings', 'yes-no-wh-questions', 'self-introduction'], reinforces: ['A031', 'A032'] },
  A028: { introduces: ['asking-age'], buildsOn: ['numbers', 'yes-no-wh-questions', 'verb-to-be'], reinforces: ['A031', 'A032'] },
  A029: { introduces: ['asking-origin'], buildsOn: ['basic-places', 'yes-no-wh-questions', 'verb-to-be'], reinforces: ['A031', 'A032'] },
  A030: { introduces: ['courtesy-phrases'], buildsOn: ['greetings'], reinforces: ['A032'] },
  A031: { introduces: ['basic-question-sequence'], buildsOn: ['asking-names', 'asking-age', 'asking-origin', 'yes-no-wh-questions'], reinforces: ['A032'] },
  A032: { introduces: ['first-conversation'], buildsOn: ['greetings', 'self-introduction', 'asking-names', 'asking-age', 'asking-origin', 'courtesy-phrases'], reinforces: [] },
}

export const A0_KNOWLEDGE_UNITS: A0KnowledgeUnit[] = [
  { id: 'alphabet', title: 'Tên và thứ tự 26 chữ cái', area: 'pronunciation', introducedIn: 'A001', buildsOn: [], reinforcedIn: ['A002', 'A008', 'A026'] },
  { id: 'vowels-consonants', title: 'Nguyên âm và phụ âm', area: 'pronunciation', introducedIn: 'A002', buildsOn: ['alphabet'], reinforcedIn: ['A003', 'A004', 'A005', 'A008'] },
  { id: 'monophthongs', title: 'Nguyên âm đơn và cặp âm dễ nhầm', area: 'pronunciation', introducedIn: 'A003', buildsOn: ['vowels-consonants'], reinforcedIn: ['A008'] },
  { id: 'diphthongs', title: 'Nguyên âm đôi', area: 'pronunciation', introducedIn: 'A004', buildsOn: ['vowels-consonants'], reinforcedIn: ['A008'] },
  { id: 'consonants', title: 'Một số phụ âm đầu, hữu thanh và vô thanh', area: 'pronunciation', introducedIn: 'A005', buildsOn: ['vowels-consonants'], reinforcedIn: ['A006', 'A008'] },
  { id: 'final-sounds', title: 'Phụ âm cuối', area: 'pronunciation', introducedIn: 'A006', buildsOn: ['consonants'], reinforcedIn: ['A008', 'A019'] },
  { id: 'word-stress', title: 'Trọng âm từ cơ bản', area: 'pronunciation', introducedIn: 'A007', buildsOn: ['alphabet'], reinforcedIn: ['A008', 'A026'] },
  { id: 'pronunciation-routine', title: 'Quy trình nghe hướng dẫn, luyện chậm, tự kiểm tra', area: 'pronunciation', introducedIn: 'A008', buildsOn: ['alphabet', 'vowels-consonants', 'monophthongs', 'diphthongs', 'consonants', 'final-sounds', 'word-stress'], reinforcedIn: ['A026', 'A032'] },
  { id: 'numbers', title: 'Số đếm cơ bản', area: 'vocabulary', introducedIn: 'A009', buildsOn: ['alphabet'], reinforcedIn: ['A012', 'A028'] },
  { id: 'colors', title: 'Màu sắc thông dụng', area: 'vocabulary', introducedIn: 'A010', buildsOn: [], reinforcedIn: ['A015'] },
  { id: 'days-months', title: 'Ngày trong tuần và tháng', area: 'vocabulary', introducedIn: 'A011', buildsOn: ['numbers'], reinforcedIn: ['A012'] },
  { id: 'time', title: 'Hỏi và nói giờ cơ bản', area: 'vocabulary', introducedIn: 'A012', buildsOn: ['numbers', 'days-months'], reinforcedIn: ['A025'] },
  { id: 'family', title: 'Từ vựng gia đình', area: 'vocabulary', introducedIn: 'A013', buildsOn: [], reinforcedIn: ['A021', 'A026'] },
  { id: 'people', title: 'Từ vựng về người và mô tả cơ bản', area: 'vocabulary', introducedIn: 'A014', buildsOn: ['family'], reinforcedIn: ['A017', 'A018', 'A026'] },
  { id: 'common-objects', title: 'Đồ vật thường gặp', area: 'vocabulary', introducedIn: 'A015', buildsOn: ['colors'], reinforcedIn: ['A019', 'A020'] },
  { id: 'basic-places', title: 'Địa điểm cơ bản', area: 'vocabulary', introducedIn: 'A016', buildsOn: ['common-objects'], reinforcedIn: ['A022', 'A026', 'A029'] },
  { id: 'personal-pronouns', title: 'Đại từ nhân xưng làm chủ ngữ', area: 'grammar', introducedIn: 'A017', buildsOn: ['people'], reinforcedIn: ['A018', 'A021', 'A022', 'A024', 'A026'] },
  { id: 'verb-to-be', title: 'Am, is, are theo chủ ngữ', area: 'grammar', introducedIn: 'A018', buildsOn: ['personal-pronouns'], reinforcedIn: ['A019', 'A022', 'A023', 'A024', 'A026', 'A028', 'A029'] },
  { id: 'singular-plural', title: 'Danh từ số ít và số nhiều thường gặp', area: 'grammar', introducedIn: 'A019', buildsOn: ['common-objects', 'numbers'], reinforcedIn: ['A020', 'A022'] },
  { id: 'articles', title: 'A, an và the trong cụm danh từ đơn giản', area: 'grammar', introducedIn: 'A020', buildsOn: ['singular-plural', 'common-objects'], reinforcedIn: ['A022'] },
  { id: 'possessives', title: 'Tính từ sở hữu', area: 'grammar', introducedIn: 'A021', buildsOn: ['personal-pronouns', 'family'], reinforcedIn: ['A026'] },
  { id: 'affirmative-sentences', title: 'Câu khẳng định với to be', area: 'grammar', introducedIn: 'A022', buildsOn: ['personal-pronouns', 'verb-to-be', 'singular-plural', 'articles', 'basic-places'], reinforcedIn: ['A023', 'A024', 'A026', 'A029'] },
  { id: 'negative-sentences', title: 'Câu phủ định với to be', area: 'grammar', introducedIn: 'A023', buildsOn: ['affirmative-sentences', 'verb-to-be'], reinforcedIn: ['A024'] },
  { id: 'yes-no-wh-questions', title: 'Câu hỏi Yes/No và Wh- với to be', area: 'grammar', introducedIn: 'A024', buildsOn: ['affirmative-sentences', 'negative-sentences', 'verb-to-be', 'personal-pronouns'], reinforcedIn: ['A027', 'A028', 'A029', 'A031', 'A032'] },
  { id: 'greetings', title: 'Lời chào theo thời điểm và tình huống', area: 'conversation', introducedIn: 'A025', buildsOn: ['time'], reinforcedIn: ['A026', 'A032'] },
  { id: 'self-introduction', title: 'Giới thiệu thông tin cá nhân ngắn', area: 'conversation', introducedIn: 'A026', buildsOn: ['greetings', 'personal-pronouns', 'verb-to-be', 'possessives', 'family', 'people', 'basic-places'], reinforcedIn: ['A027', 'A029', 'A032'] },
  { id: 'asking-names', title: 'Hỏi và trả lời tên', area: 'conversation', introducedIn: 'A027', buildsOn: ['greetings', 'yes-no-wh-questions', 'self-introduction'], reinforcedIn: ['A031', 'A032'] },
  { id: 'asking-age', title: 'Hỏi và trả lời tuổi bằng to be', area: 'conversation', introducedIn: 'A028', buildsOn: ['numbers', 'yes-no-wh-questions', 'verb-to-be'], reinforcedIn: ['A031', 'A032'] },
  { id: 'asking-origin', title: 'Hỏi và trả lời nơi đến từ', area: 'conversation', introducedIn: 'A029', buildsOn: ['basic-places', 'yes-no-wh-questions', 'verb-to-be'], reinforcedIn: ['A031', 'A032'] },
  { id: 'courtesy-phrases', title: 'Cảm ơn, xin lỗi và đáp lời', area: 'conversation', introducedIn: 'A030', buildsOn: ['greetings'], reinforcedIn: ['A032'] },
  { id: 'basic-question-sequence', title: 'Chuỗi câu hỏi làm quen cơ bản', area: 'conversation', introducedIn: 'A031', buildsOn: ['asking-names', 'asking-age', 'asking-origin', 'yes-no-wh-questions'], reinforcedIn: ['A032'] },
  { id: 'first-conversation', title: 'Hội thoại làm quen đầu tiên', area: 'conversation', introducedIn: 'A032', buildsOn: ['greetings', 'self-introduction', 'asking-names', 'asking-age', 'asking-origin', 'courtesy-phrases'], reinforcedIn: [] },
]

export function getA0LessonKnowledge(code: string): A0LessonKnowledge {
  return lessonKnowledge[code] ?? { introduces: [], buildsOn: [], reinforces: [] }
}

export interface A0AIContext {
  level: 'A0'
  currentLesson: { id: string; code: string; title: string; moduleId: string }
  supportMode: 'Full Support'
  completedLessonCodes: string[]
  allowedKnowledge: string[]
  restrictedKnowledge: string[]
  missingPrerequisites: string[]
  learnedVocabulary: string[]
  learnedGrammar: string[]
  learnedSentencePatterns: string[]
  knownCommonErrors: string[]
  practiceHistory: string[]
  supportSequence: string[]
  conversationRules: string[]
}

export function buildA0AIContext(currentLesson: A0Lesson, allLessons: A0Lesson[], completedLessonIds: string[]): A0AIContext {
  const completedIds = new Set(completedLessonIds.map((id) => id.replace(/^speaking-/, '').toLowerCase()))
  const completed = allLessons.filter((lesson) => completedIds.has(lesson.id))
  const allowedCodes = new Set([...completed.map((lesson) => lesson.code), currentLesson.code])
  const allowedKnowledgeIds = new Set(A0_KNOWLEDGE_UNITS.filter((unit) => allowedCodes.has(unit.introducedIn)).map((unit) => unit.id))
  const allowedLessons = [...completed, currentLesson]
  const allVocabulary = allowedLessons.flatMap((lesson) => [
    ...lesson.vocabulary.map((item) => item.word),
    ...(lesson.alphabet ?? []).map((item) => `${item.letter} (${item.letterName})`),
  ])
  const allPatterns = allowedLessons.flatMap((lesson) => lesson.sentence_patterns.map((item) => item.formula))
  const moduleForCurrent = currentLesson.module_id

  return {
    level: 'A0',
    currentLesson: { id: currentLesson.id, code: currentLesson.code, title: currentLesson.title, moduleId: moduleForCurrent },
    supportMode: 'Full Support',
    completedLessonCodes: completed.map((lesson) => lesson.code),
    allowedKnowledge: A0_KNOWLEDGE_UNITS.filter((unit) => allowedKnowledgeIds.has(unit.id)).map((unit) => unit.title),
    restrictedKnowledge: A0_KNOWLEDGE_UNITS.filter((unit) => !allowedKnowledgeIds.has(unit.id)).map((unit) => unit.title),
    missingPrerequisites: currentLesson.knowledge.buildsOn
      .filter((unitId) => !allowedKnowledgeIds.has(unitId))
      .map((unitId) => A0_KNOWLEDGE_UNITS.find((unit) => unit.id === unitId)?.title ?? unitId),
    learnedVocabulary: [...new Set(allVocabulary)],
    learnedGrammar: A0_KNOWLEDGE_UNITS.filter((unit) => unit.area === 'grammar' && allowedKnowledgeIds.has(unit.id)).map((unit) => unit.title),
    learnedSentencePatterns: [...new Set(allPatterns)],
    knownCommonErrors: [],
    practiceHistory: completed.map((lesson) => lesson.code),
    supportSequence: ['Diễn đạt lại câu hỏi ngắn hơn', 'Đưa từ khóa', 'Gợi ý mẫu câu đã học', 'Đưa một ví dụ ngắn', 'Mời người học tự trả lời lại'],
    conversationRules: [
      'Chỉ dùng từ vựng và mẫu câu trong allowedKnowledge hoặc nội dung bài hiện tại.',
      'Nếu người học chưa hoàn thành kiến thức nền cần thiết, giải thích ngắn kiến thức đó bằng tiếng Việt trước khi hỏi; không giả định họ đã biết.',
      'Dùng câu hỏi ngắn, từ thông dụng, tốc độ chậm; có thể giải thích bằng tiếng Việt.',
      'Không đưa cấu trúc ở restrictedKnowledge vào câu hỏi hoặc câu trả lời mẫu.',
      'Không sửa liên tục lỗi nhỏ; sau lượt nói, ưu tiên một nhận xét hữu ích và khích lệ.',
      'Không tự kết luận hoặc nâng cấp CEFR từ một vài câu trả lời.',
    ],
  }
}
