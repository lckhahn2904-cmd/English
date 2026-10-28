import { Globe, HardDrive, RefreshCw } from 'lucide-react'
import { useVocabulary } from '../../context/VocabularyContext'

export default function DataSourceBadge() {
  const { source, isFallback, isLoading, warning, refetch, totalRecords } = useVocabulary()

  if (isLoading) {
    return (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
        <RefreshCw className="w-3 h-3 animate-spin text-blue-600" />
        <span>Đang kết nối dữ liệu từ vựng...</span>
      </div>
    )
  }

  if (isFallback) {
    return (
      <div className="flex flex-wrap items-center gap-2">
        <div
          title={warning || 'Đang sử dụng bản dự phòng cục bộ src/data/easytalk-vocabulary.json'}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-300 shadow-2xs"
        >
          <HardDrive className="w-3.5 h-3.5 text-amber-600" />
          <span>Dữ liệu dự phòng cục bộ ({totalRecords.toLocaleString()} từ)</span>
        </div>

        <button
          onClick={() => refetch(true)}
          className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-blue-700 bg-white hover:bg-blue-50 border border-blue-200 rounded-lg transition-colors cursor-pointer"
          title="Thử kết nối lại với GitHub Raw"
        >
          <RefreshCw className="w-3 h-3" />
          <span>Tải lại từ GitHub</span>
        </button>
      </div>
    )
  }

  if (source === 'github') {
    return (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs">
        <Globe className="w-3.5 h-3.5 text-emerald-600" />
        <span>Dữ liệu trực tuyến từ GitHub ({totalRecords.toLocaleString()} từ)</span>
      </div>
    )
  }

  return null
}
