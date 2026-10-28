import { useState } from 'react'
import {
  Play,
  CheckCircle2,
  Clock,
} from 'lucide-react'
import { Navigate, useSearchParams } from 'react-router-dom'
import { guestCourses, type Lesson } from '../../data/guestData'
import { useGuest } from '../../context/GuestContext'
import LessonModal from '../../components/dashboard/LessonModal'
import VocabularyCourseFlow from '../../components/dashboard/VocabularyCourseFlow'

export default function CoursesPage() {
  const [courseParams] = useSearchParams()
  const { completedLessonIds, quizScores } = useGuest()
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null)
  const courseFlowKey = `${courseParams.get('course') ?? ''}:${courseParams.get('lesson') ?? ''}`

  if (courseParams.has('lesson')) {
    const studyParams = new URLSearchParams(courseParams)
    return <Navigate to={`/dashboard/study?${studyParams.toString()}`} replace />
  }

  return (
    <div>
      <VocabularyCourseFlow key={courseFlowKey} />
      {/* Interactive Dialogue Practice Lessons */}
      <div className="space-y-4">
        <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wider flex items-center gap-2">
          <Play className="w-4 h-4 text-emerald-600" />
          Bài tập thực hành giao tiếp tương tác
        </h2>

        <div className="space-y-4">
          {guestCourses.map((course) => {
            const completedCount = course.lessons.filter((l) =>
              completedLessonIds.includes(l.id)
            ).length
            const progressPercent = Math.round((completedCount / course.lessons.length) * 100)

            return (
              <div
                key={course.id}
                className="bg-white rounded-3xl border border-gray-200/80 p-5 sm:p-6 shadow-2xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{course.icon}</span>
                    <div>
                      <h3 className="font-bold text-base text-gray-900">{course.title}</h3>
                      <p className="text-xs text-gray-500">{course.description}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full self-start sm:self-auto">
                    {completedCount}/{course.lessons.length} bài hoàn thành ({progressPercent}%)
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {course.lessons.map((lesson) => {
                    const isCompleted = completedLessonIds.includes(lesson.id)
                    const quizResult = quizScores[lesson.id]

                    return (
                      <div
                        key={lesson.id}
                        onClick={() => setActiveLesson(lesson)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between hover:shadow-xs ${
                          isCompleted
                            ? 'bg-emerald-50/40 border-emerald-200 hover:border-emerald-300'
                            : 'bg-gray-50/60 border-gray-200/70 hover:border-blue-300 hover:bg-white'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-gray-900">{lesson.title}</span>
                            {isCompleted ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            ) : (
                              <span className="w-2 h-2 rounded-full bg-blue-500" />
                            )}
                          </div>
                          <p className="text-xs text-gray-500 line-clamp-2 mb-3">
                            {lesson.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-[11px] text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {lesson.duration}
                          </span>
                          <span className="font-semibold text-blue-600">
                            {isCompleted ? (quizResult ? `Điểm: ${quizResult.percentage}%` : 'Đã học') : `+${lesson.xpReward} XP`}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Lesson Modal for interactive study */}
      {activeLesson && (
        <LessonModal lesson={activeLesson} onClose={() => setActiveLesson(null)} />
      )}

    </div>
  )
}
