import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { hasTrustedAdminRole } from '../../services/adminAuthorization'

export default function AdminGuard({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading, user } = useAuth()
  const location = useLocation()
  if (isLoading) return <div className="grid min-h-screen place-items-center bg-slate-50"><p className="text-sm text-slate-600">Đang kiểm tra quyền truy cập…</p></div>
  if (!isAuthenticated) return <Navigate to="/login" state={{ from: location }} replace />
  if (!hasTrustedAdminRole(user?.app_metadata as Record<string, unknown> | undefined)) return <Navigate to="/dashboard" replace />
  return <>{children}</>
}
