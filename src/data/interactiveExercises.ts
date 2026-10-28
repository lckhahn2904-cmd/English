interface ExerciseBase {
  id: string
  prompt: string
  explanation: string
  correctAnswers: string[]
}

export interface MultipleChoiceExercise extends ExerciseBase {
  type: 'multiple-choice'
  choices: string[]
}

export interface FillBlankExercise extends ExerciseBase {
  type: 'fill-blank'
  hint: string
}

export interface WordOrderExercise extends ExerciseBase {
  type: 'word-order'
  tokens: string[]
}

export interface CorrectMistakeExercise extends ExerciseBase {
  type: 'correct-mistake'
  hint: string
}

export type InteractiveExercise = MultipleChoiceExercise | FillBlankExercise | WordOrderExercise | CorrectMistakeExercise

export const interactiveExercises: InteractiveExercise[] = [
  {
    id: 'present-simple-choice', type: 'multiple-choice',
    prompt: 'Chọn động từ đúng: “Mina ___ to work by bus every day.”',
    choices: ['go', 'goes', 'is go', 'going'], correctAnswers: ['goes'],
    explanation: 'Mina là chủ ngữ ngôi thứ ba số ít; hiện tại đơn thêm -es vào go.',
  },
  {
    id: 'present-perfect-fill', type: 'fill-blank',
    prompt: 'Điền một từ: “I have lived here ___ 2020.”', hint: 'Dùng giới từ chỉ mốc thời gian bắt đầu.',
    correctAnswers: ['since'], explanation: 'Since đi với mốc bắt đầu (2020); for đi với một khoảng thời gian.',
  },
  {
    id: 'sentence-order', type: 'word-order',
    prompt: 'Sắp xếp các từ thành câu đúng.', tokens: ['before bed', 'often', 'She', 'reads'],
    correctAnswers: ['She often reads before bed.'],
    explanation: 'Trạng từ tần suất thường đứng trước động từ thường: She often reads…',
  },
  {
    id: 'subject-verb-correction', type: 'correct-mistake',
    prompt: 'Tìm và sửa lỗi trong câu: “They was at home yesterday.”', hint: 'Chú ý chủ ngữ số nhiều và động từ be ở quá khứ.',
    correctAnswers: ['They were at home yesterday.'],
    explanation: 'Với they ở quá khứ, dùng were thay cho was.',
  },
]

export const exerciseTypeLabels: Record<InteractiveExercise['type'], string> = {
  'multiple-choice': 'Trắc nghiệm',
  'fill-blank': 'Điền từ',
  'word-order': 'Sắp xếp câu',
  'correct-mistake': 'Sửa lỗi sai',
}
