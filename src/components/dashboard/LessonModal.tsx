import { useState } from 'react'
import {
  X,
  BookOpen,
  HelpCircle,
  Volume2,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  Sparkles,
  ChevronRight,
  Layers,
} from 'lucide-react'
import type { Lesson } from '../../data/guestData'
import { useGuest } from '../../context/GuestContext'

interface LessonModalProps {
  lesson: Lesson
  onClose: () => void
}

export default function LessonModal({ lesson, onClose }: LessonModalProps) {
  const {
    completedLessonIds,
    learnedVocabIds,
    quizScores,
    completeLesson,
    toggleVocabLearned,
    saveQuizResult,
  } = useGuest()

  const [activeTab, setActiveTab] = useState<'content' | 'vocab' | 'quiz'>('content')

  // Quiz state
  const existingQuiz = quizScores[lesson.id]
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>(
    existingQuiz ? existingQuiz.answers : {}
  )
  const [submittedQuiz, setSubmittedQuiz] = useState<boolean>(!!existingQuiz)
  const [quizScore, setQuizScore] = useState<number>(existingQuiz ? existingQuiz.score : 0)

  const isLessonCompleted = completedLessonIds.includes(lesson.id)

  // Speech synthesis for pronunciation
  const speakWord = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'en-US'
      utterance.rate = 0.9
      window.speechSynthesis.speak(utterance)
    }
  }

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    if (submittedQuiz) return
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }))
  }

  const handleSubmitQuiz = () => {
    let score = 0
    lesson.quiz.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score += 1
      }
    })
    setQuizScore(score)
    setSubmittedQuiz(true)
    saveQuizResult(lesson.id, score, lesson.quiz.length, selectedAnswers)
    completeLesson(lesson.id, lesson.xpReward)
  }

  const handleRetryQuiz = () => {
    setSelectedAnswers({})
    setSubmittedQuiz(false)
    setQuizScore(0)
  }

  const handleFinishLesson = () => {
    completeLesson(lesson.id, lesson.xpReward)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-gray-100 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-100 flex items-start justify-between bg-gray-50/70">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded-md">
                BÀI HỌC TRẢI NGHIỆM
              </span>
              <span className="text-xs text-gray-500">• {lesson.duration}</span>
              {isLessonCompleted && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Đã hoàn thành
                </span>
              )}
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">{lesson.title}</h2>
            <p className="text-xs text-gray-500 mt-0.5">{lesson.description}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
            aria-label="Đóng bài học"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-100 px-6 bg-white shrink-0">
          <button
            onClick={() => setActiveTab('content')}
            className={`flex items-center gap-2 py-3.5 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'content'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Nội dung bài học
          </button>
          <button
            onClick={() => setActiveTab('vocab')}
            className={`flex items-center gap-2 py-3.5 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-colors relative ${
              activeTab === 'vocab'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <Layers className="w-4 h-4" />
            Từ vựng ({lesson.vocabulary.length})
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2 py-3.5 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-colors relative ${
              activeTab === 'quiz'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            Quiz thực hành ({lesson.quiz.length})
            {existingQuiz && (
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            )}
          </button>
        </div>

        {/* Tab Content (Scrollable) */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* TAB 1: Content & Dialogue */}
          {activeTab === 'content' && (
            <div className="space-y-6">
              <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-4 text-xs sm:text-sm text-blue-900 leading-relaxed flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-blue-950">Mục tiêu bài học</p>
                  <p className="mt-0.5 text-blue-800">
                    Nghe và luyện tập hội thoại tương tác bên dưới. Nhấn vào biểu tượng loa để nghe phát âm từng câu tiếng Anh.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider text-xs text-gray-400">
                  Hội thoại mẫu (Interactive Dialogue)
                </h3>
                <div className="space-y-3">
                  {lesson.dialogue.map((line, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 hover:bg-gray-100/70 transition-colors rounded-2xl p-4 border border-gray-100 flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-gray-100 flex items-center justify-center text-lg shrink-0">
                        {line.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-gray-800">{line.speaker}</span>
                          <button
                            onClick={() => speakWord(line.en)}
                            title="Nghe câu này"
                            className="p-1 rounded-md text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-sm font-medium text-gray-900 mb-0.5">{line.en}</p>
                        <p className="text-xs text-gray-500 italic">{line.vi}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setActiveTab('vocab')}
                  className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors flex items-center gap-1.5"
                >
                  Học từ vựng bài này <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: Vocabulary */}
          {activeTab === 'vocab' && (
            <div className="space-y-4">
              <p className="text-xs text-gray-500">
                Nhấn vào nút <span className="font-semibold text-blue-600">Đã thuộc</span> để lưu tiến độ vào phiên học thử của bạn.
              </p>

              <div className="grid grid-cols-1 gap-3">
                {lesson.vocabulary.map((v) => {
                  const isLearned = learnedVocabIds.includes(v.id)
                  return (
                    <div
                      key={v.id}
                      className={`p-4 rounded-2xl border transition-all ${
                        isLearned
                          ? 'bg-emerald-50/50 border-emerald-200'
                          : 'bg-white border-gray-200/80 hover:border-blue-200'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-base font-bold text-gray-900">{v.word}</span>
                          <span className="text-xs font-mono text-gray-400">{v.ipa}</span>
                          <span className="text-[11px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                            {v.partOfSpeech}
                          </span>
                          <button
                            onClick={() => speakWord(v.word)}
                            title="Nghe phát âm"
                            className="p-1 rounded-md text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => toggleVocabLearned(v.id)}
                          className={`text-xs px-3 py-1.5 rounded-xl font-medium transition-colors flex items-center gap-1 ${
                            isLearned
                              ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                              : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {isLearned ? 'Đã thuộc (+5 XP)' : 'Đánh dấu đã thuộc'}
                        </button>
                      </div>

                      <p className="text-sm text-gray-800 font-medium mb-2">
                        Nghĩa tiếng Việt: <span className="text-blue-700">{v.vietnamese}</span>
                      </p>

                      <div className="bg-gray-50/80 rounded-xl p-2.5 text-xs">
                        <p className="text-gray-700 font-medium">
                          Ví dụ: <span className="text-gray-900">{v.exampleEn}</span>
                        </p>
                        <p className="text-gray-500 italic mt-0.5">{v.exampleVi}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="pt-2 flex justify-between items-center">
                <button
                  onClick={() => setActiveTab('content')}
                  className="px-4 py-2 text-xs font-medium text-gray-600 hover:text-gray-900"
                >
                  ← Xem lại hội thoại
                </button>
                <button
                  onClick={() => setActiveTab('quiz')}
                  className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors flex items-center gap-1.5"
                >
                  Làm Quiz kiểm tra <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: Interactive Quiz */}
          {activeTab === 'quiz' && (
            <div className="space-y-6">
              {/* Quiz Result Header if submitted */}
              {submittedQuiz && (
                <div
                  className={`p-4 rounded-2xl border flex items-center justify-between ${
                    quizScore === lesson.quiz.length
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-blue-50 border-blue-200 text-blue-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white ${
                        quizScore === lesson.quiz.length ? 'bg-emerald-600' : 'bg-blue-600'
                      }`}
                    >
                      {quizScore}/{lesson.quiz.length}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold">
                        {quizScore === lesson.quiz.length
                          ? '🎉 Xuất sắc! Bạn trả lời đúng tất cả câu hỏi.'
                          : '👏 Hoàn thành bài quiz!'}
                      </h4>
                      <p className="text-xs opacity-90 mt-0.5">
                        Điểm số: {Math.round((quizScore / lesson.quiz.length) * 100)}% • Đã cập nhật vào tiến độ phiên
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleRetryQuiz}
                    className="px-3 py-1.5 text-xs font-semibold bg-white border border-gray-200 hover:bg-gray-50 rounded-xl transition-colors flex items-center gap-1.5 shadow-2xs"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Làm lại
                  </button>
                </div>
              )}

              {/* Questions List */}
              <div className="space-y-6">
                {lesson.quiz.map((q, qIndex) => {
                  const userAnswer = selectedAnswers[q.id]
                  const isCorrect = submittedQuiz && userAnswer === q.correctIndex

                  return (
                    <div
                      key={q.id}
                      className="bg-white border border-gray-200/90 rounded-2xl p-5 space-y-3"
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-xs font-bold bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md mt-0.5">
                          Câu {qIndex + 1}
                        </span>
                        <p className="text-sm font-semibold text-gray-900 flex-1">{q.question}</p>
                      </div>

                      {/* Options */}
                      <div className="space-y-2 pt-1">
                        {q.options.map((opt, optIndex) => {
                          const isSelected = userAnswer === optIndex
                          let optionClass =
                            'border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-800'

                          if (submittedQuiz) {
                            if (optIndex === q.correctIndex) {
                              optionClass =
                                'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold'
                            } else if (isSelected && !isCorrect) {
                              optionClass =
                                'border-red-400 bg-red-50 text-red-900 line-through'
                            } else {
                              optionClass = 'border-gray-100 text-gray-400 opacity-60'
                            }
                          } else if (isSelected) {
                            optionClass = 'border-blue-600 bg-blue-50/70 text-blue-900 font-semibold'
                          }

                          return (
                            <button
                              key={optIndex}
                              onClick={() => handleSelectOption(q.id, optIndex)}
                              disabled={submittedQuiz}
                              className={`w-full text-left px-4 py-3 text-xs sm:text-sm rounded-xl border transition-all flex items-center justify-between ${optionClass}`}
                            >
                              <span>{opt}</span>
                              {submittedQuiz && optIndex === q.correctIndex && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              )}
                              {submittedQuiz && isSelected && !isCorrect && (
                                <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                              )}
                            </button>
                          )
                        })}
                      </div>

                      {/* Explanation when submitted */}
                      {submittedQuiz && (
                        <div className="mt-2 p-3 bg-gray-50 rounded-xl text-xs text-gray-600 leading-relaxed border border-gray-100">
                          <strong className="text-gray-900">Giải thích: </strong>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Submit Button */}
              {!submittedQuiz ? (
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={handleSubmitQuiz}
                    disabled={Object.keys(selectedAnswers).length < lesson.quiz.length}
                    className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-colors shadow-xs"
                  >
                    Nộp bài quiz & Hoàn thành
                  </button>
                </div>
              ) : (
                <div className="pt-2 flex justify-between items-center">
                  <button
                    onClick={() => setActiveTab('vocab')}
                    className="px-4 py-2 text-xs font-medium text-gray-600 hover:text-gray-900"
                  >
                    ← Ôn lại từ vựng
                  </button>
                  <button
                    onClick={handleFinishLesson}
                    className="px-6 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-xs flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" /> Đóng bài học & Lưu tiến độ
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer info notice */}
        <div className="px-6 py-3 border-t border-gray-100 bg-gray-50 flex items-center justify-between text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            Tiến độ chỉ lưu trong phiên hiện tại (không lưu vào bộ nhớ lâu dài)
          </span>
          <button
            onClick={onClose}
            className="text-xs font-medium text-gray-600 hover:text-gray-900"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  )
}
