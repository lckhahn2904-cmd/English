import { ClipboardList, Target, Zap, Trophy } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: ClipboardList,
    title: 'Kiểm tra trình độ',
    description: 'Bài kiểm tra đầu vào 10 phút giúp EasyTalk hiểu chính xác trình độ hiện tại và xây dựng lộ trình phù hợp chỉ cho bạn.',
  },
  {
    step: '02',
    icon: Target,
    title: 'Đặt mục tiêu',
    description: 'Chọn mục tiêu học tập: giao tiếp hàng ngày, thuyết trình công việc, luyện thi IELTS/TOEIC hay du lịch nước ngoài.',
  },
  {
    step: '03',
    icon: Zap,
    title: 'Học theo lộ trình AI',
    description: 'AI tự động điều chỉnh nội dung, độ khó và tốc độ học dựa trên kết quả thực tế của bạn mỗi ngày.',
  },
  {
    step: '04',
    icon: Trophy,
    title: 'Đạt mục tiêu',
    description: 'Theo dõi tiến độ, hoàn thành thử thách và nhận chứng chỉ khi đạt được mục tiêu đã đề ra.',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Quy trình học tập
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Bắt đầu dễ dàng trong 4 bước
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Không cần kinh nghiệm trước. Chỉ cần bắt đầu — chúng tôi sẽ hướng dẫn từng bước.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gray-200 z-0" style={{ left: '12.5%', right: '12.5%' }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map(({ step, icon: Icon, title, description }) => (
              <div key={step} className="flex flex-col items-center text-center">
                {/* Step number + icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-white border-2 border-blue-100 flex items-center justify-center shadow-sm">
                    <Icon className="w-8 h-8 text-blue-600" strokeWidth={1.5} />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                    {step.charAt(1)}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-14 text-center">
          <p className="text-sm text-gray-400">
            Trung bình học viên EasyTalk đạt mục tiêu trong{' '}
            <span className="font-semibold text-gray-700">60–90 ngày</span>{' '}
            với 20 phút học mỗi ngày.
          </p>
        </div>
      </div>
    </section>
  )
}
