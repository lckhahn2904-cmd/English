import { Link, NavLink, Outlet } from 'react-router-dom'
import { ArrowLeft, BookOpen, LayoutDashboard, Library, MessageSquareText, ShieldCheck } from 'lucide-react'

const navItems = [
  { to: '/admin', label: 'Tổng quan', icon: LayoutDashboard, end: true },
  { to: '/admin/content', label: 'Kho nội dung', icon: Library },
  { to: '/admin/content/communication', label: 'Studio Giao tiếp', icon: MessageSquareText },
]

export default function AdminLayout() {
  return <div className="min-h-screen bg-slate-50 text-slate-900">
    <header className="border-b border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6"><Link to="/admin" className="inline-flex items-center gap-2 font-bold"><span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-600 text-white"><BookOpen className="h-5 w-5" /></span>EasyTalk <span className="text-blue-700">Admin</span></Link><Link to="/dashboard" className="inline-flex min-h-10 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-slate-600 hover:bg-slate-100"><ArrowLeft className="h-4 w-4" />Khu học tập</Link></div></header>
    <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:py-8">
      <aside className="space-y-4"><div className="rounded-2xl border border-slate-200 bg-white p-3"><p className="px-3 pb-2 pt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">QUẢN TRỊ</p><nav className="space-y-1">{navItems.map(({ to, label, icon: Icon, end }) => <NavLink key={to} to={to} end={end} className={({ isActive }) => `flex min-h-10 items-center gap-2 rounded-xl px-3 text-sm font-semibold ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}><Icon className="h-4 w-4" />{label}</NavLink>)}</nav></div><div className="rounded-2xl border border-amber-200 bg-amber-50 p-3 text-xs leading-5 text-amber-900"><ShieldCheck className="mb-1 h-4 w-4" />Trang này chỉ kiểm tra role trong Supabase app_metadata. Thao tác ghi sẽ chỉ bật sau khi có API và RLS phía máy chủ.</div></aside>
      <main className="min-w-0"><Outlet /></main>
    </div>
  </div>
}
