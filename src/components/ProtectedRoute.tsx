import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useGuest } from '../context/GuestContext'
import { BookOpen } from 'lucide-react'

interface ProtectedRouteProps {
  children: ReactNode
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth()
  const { isGuest } = useGuest()
  const location = useLocation()

  // 1. Loading state during session restoration
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-md animate-pulse mb-4">
          <BookOpen className="w-6 h-6 text-white" />
        </div>
        <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mb-3" />
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Đang khôi phục phiên học...
        </p>
      </div>
    )
  }

  // 2. Either an authenticated user OR active guest mode can access the dashboard
  if (isAuthenticated || isGuest) {
    return <>{children}</>
  }

  // 3. Unauthenticated and NOT a guest -> Redirect to Login page
  return <Navigate to="/login" state={{ from: location }} replace />
}
