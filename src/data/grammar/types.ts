import type { InteractiveExercise } from '../interactiveExercises'

export interface GrammarClassificationItem {
  title: string
  description: string
  items?: string[]
}
export interface GrammarFormulaItem {
  title: string
  formula: string
  note?: string
}

export interface GrammarUsageItem {
  context: string
  explanation: string
  example: {
    english: string
    vietnamese: string
  }
}

export interface GrammarExampleItem {
  english: string
  vietnamese: string
  note?: string
}

export interface GrammarComparisonPoint {
  concept: string
  difference: string
}

export interface GrammarDialogueItem {
  speaker?: string
  text: string
  translation: string
}

export interface GrammarCommunicationApp {
  situation: string
  dialogueOrSentences: GrammarDialogueItem[]
}

export interface GrammarLessonDetail {
  id: string
  title: string
  vietnameseTitle: string
  category: string
  categoryId: string
  level: string
  summary: string
  // 1. Tổng quan
  overview: string
  // 2. Kiến thức nền tảng
  foundation: string
  // 3. Phân loại
  classification: GrammarClassificationItem[]
  // 4. Công thức và cấu trúc
  formulas: GrammarFormulaItem[]
  // 5. Cách sử dụng
  usage: GrammarUsageItem[]
  // 6. Ví dụ minh họa
  examples: GrammarExampleItem[]
  // 7. Lưu ý quan trọng & ngoại lệ
  importantNotes: string[]
  // 8. So sánh và phân biệt
  comparison: {
    title: string
    points: GrammarComparisonPoint[]
  }
  // 9. Ứng dụng giao tiếp
  communicationApp: GrammarCommunicationApp
  // 10. Tổng kết
  summaryPoints: string[]
  // 11. Bài tập thực hành (20 câu mới độc lập)
  exercises: InteractiveExercise[]
}
