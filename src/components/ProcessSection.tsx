import { ArrowRight, BookOpen, CheckCircle2, MousePointer2, UserRoundPlus } from 'lucide-react'

const steps = [
  { step: '01', icon: UserRoundPlus, title: 'Tạo tài khoản hoặc học thử', description: 'Đăng ký để đăng nhập, hoặc vào chế độ học thử để khám phá website.' },
  { step: '02', icon: MousePointer2, title: 'Chọn nội dung muốn học', description: 'Bắt đầu với ngữ pháp, 12 thì tiếng Anh hoặc thư viện từ vựng.' },
  { step: '03', icon: BookOpen, title: 'Học và thực hành', description: 'Đọc bài học, xem ví dụ và làm các bài tập có sẵn.' },
  { step: '04', icon: CheckCircle2, title: 'Xem lại tiến độ', description: 'Theo dõi trạng thái bài học trong không gian học tập của bạn.' },
]

export default function ProcessSection() {
  return (
    <section id="process" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">Quy trình học tập</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Bắt đầu dễ dàng trong 4 bước.</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">Chọn nội dung phù hợp và học theo nhịp độ của riêng bạn.</p>
        </div>
        <div className="relative">
          <div className="absolute left-6 top-7 bottom-7 w-px bg-blue-100 sm:hidden" />
          <div className="hidden lg:block absolute left-[12.5%] right-[12.5%] top-8 h-px bg-blue-100" />
          <div className="relative grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map(({ step, icon: Icon, title, description }) => (
              <article key={step} className="relative flex gap-4 sm:flex-col sm:items-center sm:text-center">
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-white text-blue-700 shadow-sm sm:mb-5 sm:h-16 sm:w-16"><Icon className="h-6 w-6" strokeWidth={1.8} /><span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">{step.slice(1)}</span></div>
                <div><p className="text-xs font-bold tracking-wide text-blue-700">BƯỚC {step}</p><h3 className="mt-1 text-base font-bold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{description}</p></div>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-10 flex justify-center"><a href="#learning-content" className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50">Khám phá nội dung học <ArrowRight className="h-4 w-4" /></a></div>
      </div>
    </section>
  )
}
