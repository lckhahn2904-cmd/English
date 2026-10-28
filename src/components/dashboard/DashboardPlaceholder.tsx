import type { LucideIcon } from 'lucide-react'

interface DashboardPlaceholderProps {
  icon: LucideIcon
  title: string
  description: string
  badge?: string
}

export default function DashboardPlaceholder({ icon: Icon, title, description, badge }: DashboardPlaceholderProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
        <Icon className="w-8 h-8 text-blue-600" strokeWidth={1.5} />
      </div>
      <h1 className="text-xl font-bold text-gray-900 mb-2">{title}</h1>
      <p className="text-sm text-gray-500 max-w-sm leading-relaxed mb-4">{description}</p>
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-full">
          🚧 {badge}
        </span>
      )}
    </div>
  )
}
