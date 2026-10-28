import DashboardStats from '../../components/dashboard/DashboardStats'
import CourseList from '../../components/dashboard/CourseList'

export default function DashboardHome() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6">
      {/* Left column: stats, greeting, goal */}
      <DashboardStats />
      {/* Right column: next lesson + courses */}
      <CourseList />
    </div>
  )
}
