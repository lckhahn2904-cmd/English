import { useState } from 'react'
import { ClipboardList, CheckCircle2, Play, Sparkles, HelpCircle } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { guestCourses, type Lesson } from '../../data/guestData'
import { useGuest } from '../../context/GuestContext'
import LessonModal from '../../components/dashboard/LessonModal'
import InteractiveExerciseBlock from '../../components/dashboard/InteractiveExerciseBlock'
import { grammarTopics } from '../../data/grammarTopics'

export default function ExercisesPage() {
  const { quizScores } = useGuest()
  const [searchParams] = useSearchParams()
  const grammarTopic = grammarTopics.find((topic) => topic.id === searchParams.get('topic'))
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null)

  const allLessons = guestCourses.flatMap((c) => c.lessons)

  return (
    <div>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
            <ClipboardList className="w-6 h-6 text-blue-600" />
            Bài tập & Quiz trải nghiệm
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Làm bài trắc nghiệm nhanh, chấm điểm tức thì và kiểm tra kiến thức của phiên học thử
          </p>
        </div>

        <span className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full flex items-center gap-1 self-start sm:self-auto">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          {allLessons.length} bài quiz có sẵn
        </span>
      </div>

      <div className="mb-8 space-y-3">
        <div>
          <h2 className="text-base font-bold text-gray-900">Bài luyện tập tương tác mẫu</h2>
          <p className="mt-1 text-xs leading-5 text-gray-500">Có trắc nghiệm, điền từ, sắp xếp câu và sửa lỗi. Đáp án chỉ hiện sau khi bạn kiểm tra; kết quả mẫu chỉ ở trong phiên hiện tại.</p>
        </div>
        <InteractiveExerciseBlock key={grammarTopic?.id ?? 'general'} topicName={grammarTopic?.title} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {allLessons.map((lesson) => {
          const quizResult = quizScores[lesson.id]
          const isDone = !!quizResult
          const parentCourse = guestCourses.find((c) => c.id === lesson.courseId)

          return (
            <div
              key={lesson.id}
              className={`bg-white rounded-3xl p-5 border transition-all flex flex-col justify-between ${
                isDone
                  ? 'border-emerald-300 ring-2 ring-emerald-500/10 shadow-xs'
                  : 'border-gray-200/80 shadow-2xs hover:border-blue-300'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md">
                    {parentCourse?.title}
                  </span>
                  {isDone ? (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      {quizResult.score}/{quizResult.total} ({quizResult.percentage}%)
                    </span>
                  ) : (
                    <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md">
                      Chưa làm
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-base text-gray-900 mb-1">{lesson.title}</h3>
                <p className="text-xs text-gray-500 mb-3">{lesson.description}</p>

                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <HelpCircle className="w-3.5 h-3.5 text-gray-400" />
                  <span>{lesson.quiz.length} câu hỏi trắc nghiệm</span>
                  <span>•</span>
                  <span>+{lesson.xpReward} XP thưởng</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] text-gray-400">
                  {isDone ? 'Điểm đã lưu vào phiên' : 'Chưa lưu điểm'}
                </span>
                <button
                  onClick={() => setSelectedLesson(lesson)}
                  className={`px-4 py-2 text-xs font-semibold rounded-xl transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer ${
                    isDone
                      ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  {isDone ? 'Làm lại quiz' : 'Bắt đầu làm quiz'}
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {selectedLesson && (
        <LessonModal lesson={selectedLesson} onClose={() => setSelectedLesson(null)} />
      )}
    </div>
  )
}
