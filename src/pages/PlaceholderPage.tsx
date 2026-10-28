import { Link } from 'react-router-dom'
import { BookOpen, ArrowLeft } from 'lucide-react'

interface PlaceholderPageProps {
  title: string
  subtitle: string
  backTo?: string
}

export default function PlaceholderPage({ title, subtitle, backTo = '/' }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <BookOpen className="w-7 h-7 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-gray-500 mb-8 leading-relaxed">{subtitle}</p>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-full">
          🚧 Đang phát triển — Giai đoạn 2
        </div>
        <br />
        <Link
          to={backTo}
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors mt-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Quay về trang chủ
        </Link>
      </div>
    </div>
  )
}
