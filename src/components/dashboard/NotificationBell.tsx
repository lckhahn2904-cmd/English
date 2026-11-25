import { Bell } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useGuest } from '../../context/GuestContext'

export default function NotificationBell() {
  const { notifications } = useGuest()
  const unread = notifications.filter((item) => !item.read).length
  return <Link to="/dashboard/notifications" aria-label={`Thông báo, ${unread} chưa đọc`} className="relative ml-auto inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
    <Bell className="h-5 w-5" />
    {unread > 0 && <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-600 px-1 text-[10px] font-bold text-white">{unread > 99 ? '99+' : unread}</span>}
  </Link>
}
