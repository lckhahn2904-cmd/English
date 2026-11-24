import { Navigate, useSearchParams } from 'react-router-dom'
import VocabularyCourseFlow from '../../components/dashboard/VocabularyCourseFlow'

export default function CoursesPage() {
  const [courseParams] = useSearchParams()
  const courseFlowKey = `${courseParams.get('course') ?? ''}:${courseParams.get('lesson') ?? ''}`

  if (courseParams.has('lesson')) {
    const studyParams = new URLSearchParams(courseParams)
    return <Navigate to={`/dashboard/study?${studyParams.toString()}`} replace />
  }

  return (
    <div>
      <VocabularyCourseFlow key={courseFlowKey} />
    </div>
  )
}
