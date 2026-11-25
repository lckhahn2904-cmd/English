import { allA0Lessons, getA0PronunciationReference } from '../data/speakingCurriculum'

export type PronunciationCategory = 'sounds' | 'word-stress' | 'integrated'

export interface IpaKnowledgeQuestion {
  id: string
  prompt: string
  options: string[]
  correctIndex: number
  explanation: string
}

export const pronunciationLessons = allA0Lessons.map((lesson) => ({
  id: lesson.id,
  code: lesson.code,
  order: lesson.order,
  title: lesson.title,
  titleVi: lesson.title_vi,
  objective: lesson.objectives[0] ?? lesson.pronunciation.focus,
  category: (lesson.code === 'A007' ? 'word-stress' : lesson.code === 'A008' ? 'integrated' : 'sounds') as PronunciationCategory,
  focus: lesson.pronunciation.focus,
  explanation: lesson.pronunciation.explanation,
  examples: lesson.pronunciation.examples,
  commonConfusions: lesson.pronunciation.commonConfusions,
  practice: lesson.pronunciation.practice,
  vocabulary: lesson.vocabulary,
  script: lesson.listening.script,
}))

const pairWords = ['ship', 'sheep', 'bad', 'bed', 'pin', 'bin', 'ten', 'den', 'sip', 'zip']
const wordBank = [...new Map([
  ...allA0Lessons.flatMap((lesson) => lesson.vocabulary).filter((item) => item.ipa),
  ...pairWords.flatMap((word) => {
    const reference = getA0PronunciationReference(word)
    return reference ? [reference] : []
  }),
].map((item) => [item.word.toLocaleLowerCase(), item])).values()]

export const minimalPairSpecs = [
  { id: 'ship-sheep', first: 'ship', second: 'sheep', focus: '/ɪ/ vs /iː/', target: 'sheep', question: 'Which word has the long vowel /iː/ in the stored IPA?', note: 'A003 contrasts the short vowel in “ship” with the long vowel in “sheep”.' },
  { id: 'bad-bed', first: 'bad', second: 'bed', focus: '/æ/ vs /ɛ/', target: 'bad', question: 'Which word has /æ/ in the stored IPA?', note: 'A003 includes “bad” and “bed” as a vowel contrast.' },
  { id: 'pin-bin', first: 'pin', second: 'bin', focus: '/p/ vs /b/', target: 'pin', question: 'Which word begins with the voiceless /p/ in the stored IPA?', note: 'A005 contrasts the initial voiceless /p/ and voiced /b/.' },
  { id: 'ten-den', first: 'ten', second: 'den', focus: '/t/ vs /d/', target: 'ten', question: 'Which word begins with the voiceless /t/ in the stored IPA?', note: 'A005 contrasts the initial voiceless /t/ and voiced /d/.' },
  { id: 'sip-zip', first: 'sip', second: 'zip', focus: '/s/ vs /z/', target: 'sip', question: 'Which word begins with the voiceless /s/ in the stored IPA?', note: 'A005 contrasts the initial voiceless /s/ and voiced /z/.' },
].flatMap((pair) => {
  const first = wordBank.find((item) => item.word.toLocaleLowerCase() === pair.first)
  const second = wordBank.find((item) => item.word.toLocaleLowerCase() === pair.second)
  return first && second ? [{ ...pair, firstIpa: first.ipa, secondIpa: second.ipa }] : []
})

function buildIpaQuestion(lesson: (typeof pronunciationLessons)[number]): IpaKnowledgeQuestion | null {
  const curriculumLesson = allA0Lessons.find((item) => item.id === lesson.id)!
  const alphabetWord = curriculumLesson.alphabet?.[0]
  const target = lesson.vocabulary.find((item) => item.ipa) ?? (alphabetWord ? { word: `letter ${alphabetWord.letter}`, ipa: alphabetWord.ipa } : undefined)
  if (!target) return null
  const alternatives = wordBank.filter((item) => item.word.toLocaleLowerCase() !== target.word.toLocaleLowerCase() && item.ipa !== target.ipa)
  const distractors = [...new Map(alternatives.map((item) => [item.ipa, item.ipa])).values()].slice((lesson.order * 7) % Math.max(1, alternatives.length - 2), (lesson.order * 7) % Math.max(1, alternatives.length - 2) + 3)
  if (distractors.length < 2) return null
  const options = [target.ipa, ...distractors]
  const correctIndex = lesson.order % options.length
  ;[options[0], options[correctIndex]] = [options[correctIndex], options[0]]
  return {
    id: `${lesson.id}-ipa-check`,
    prompt: `Which IPA transcription is listed for “${target.word}”?`,
    options,
    correctIndex,
    explanation: `The curriculum lists ${target.ipa} for “${target.word}”. This checks IPA knowledge only; it does not assess your spoken pronunciation.`,
  }
}

export const pronunciationKnowledgeQuestions = new Map(
  pronunciationLessons.flatMap((lesson) => {
    const question = buildIpaQuestion(lesson)
    return question ? [[lesson.id, question] as const] : []
  })
)

const sourceText = allA0Lessons.flatMap((lesson) => [
  lesson.listening.script,
  lesson.introduction,
  ...lesson.explanations.map((item) => item.text),
  ...lesson.sentence_patterns.map((pattern) => pattern.example),
  ...lesson.pronunciation.practice,
]).join(' ').replace(/[’‘]/g, "'")

const contractionCandidates = [
  { contracted: "I'm", full: 'I am' },
  { contracted: "You're", full: 'You are' },
  { contracted: "isn't", full: 'is not' },
  { contracted: "aren't", full: 'are not' },
].filter(({ contracted, full }) => {
  const escaped = contracted.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return new RegExp(`\\b${escaped}\\b`, 'i').test(sourceText) && new RegExp(`\\b${full.replace(' ', '\\s+')}\\b`, 'i').test(sourceText)
})

export const connectedSpeechExamples = contractionCandidates

export function getPronunciationCategories() {
  return [
    { id: 'sounds' as const, label: 'English sounds' },
    { id: 'word-stress' as const, label: 'Word stress' },
    { id: 'integrated' as const, label: 'Practice & review' },
  ]
}
