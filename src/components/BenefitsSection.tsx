import { Brain, MessageCircle, TrendingUp, Clock, Award, Headphones } from 'lucide-react'

const benefits = [
  {
    icon: Brain,
    title: 'AI cá nhân hóa',
    description: 'Hệ thống AI phân tích điểm yếu và tự động điều chỉnh nội dung học phù hợp với từng học viên.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: MessageCircle,
    title: 'Giao tiếp thực tế',
    description: 'Hàng trăm tình huống giao tiếp được mô phỏng từ cuộc sống hàng ngày — công việc, du lịch, xã giao.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: TrendingUp,
    title: 'Tiến bộ rõ ràng',
    description: 'Dashboard theo dõi tiến độ chi tiết. Nhìn thấy sự tiến bộ của mình mỗi ngày tạo động lực học tập.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: Clock,
    title: 'Học bất cứ lúc nào',
    description: 'Chỉ cần 15–30 phút mỗi ngày. Học trên điện thoại, máy tính bảng hay laptop — ở bất cứ đâu.',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
  {
    icon: Award,
    title: 'Chứng chỉ hoàn thành',
    description: 'Nhận chứng nhận khi hoàn thành các khóa học. Chứng chỉ được công nhận bởi nhiều doanh nghiệp.',
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
  },
  {
    icon: Headphones,
    title: 'Hỗ trợ 24/7',
    description: 'Trợ lý AI và cộng đồng học viên sôi động luôn sẵn sàng giải đáp mọi câu hỏi của bạn.',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
  },
]

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Tại sao chọn EasyTalk?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Học thông minh hơn, không chỉ học nhiều hơn
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Chúng tôi thiết kế từng tính năng để tối ưu hóa thời gian học và hiệu quả ghi nhớ của bạn.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, title, description, color, bg }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 bg-white hover:shadow-md transition-all duration-200"
            >
              <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                <Icon className={`w-5.5 h-5.5 ${color}`} strokeWidth={2} />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
