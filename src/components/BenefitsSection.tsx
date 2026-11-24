import { BookOpenCheck, Layers3, ListChecks, TrendingUp } from 'lucide-react'

const benefits = [
  { icon: Layers3, title: 'Học theo lộ trình', description: 'Nội dung ngữ pháp được chia thành các danh mục, giúp bạn chọn đúng phần cần học.', color: 'text-blue-700', bg: 'bg-blue-50' },
  { icon: BookOpenCheck, title: 'Kiến thức dễ tiếp cận', description: 'Bài học trình bày lý thuyết, công thức và ví dụ để bạn theo dõi từng chủ đề.', color: 'text-indigo-700', bg: 'bg-indigo-50' },
  { icon: ListChecks, title: 'Luyện tập chủ động', description: 'Củng cố kiến thức với bài tập ngữ pháp và hoạt động học từ vựng.', color: 'text-emerald-700', bg: 'bg-emerald-50' },
  { icon: TrendingUp, title: 'Theo dõi nội dung đã học', description: 'Không gian học tập hiển thị trạng thái bài hoàn thành trong phiên hiện tại.', color: 'text-violet-700', bg: 'bg-violet-50' },
]

export default function BenefitsSection() {
  return (
    <section id="benefits" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">Vì sao chọn EasyTalk?</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Học có phương pháp. Tiến bộ có định hướng.</h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">Tập trung vào những gì bạn cần học và cách bạn sử dụng tiếng Anh.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, description, color, bg }) => (
            <article key={title} className="group rounded-2xl border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/60 sm:p-6">
              <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${bg}`}><Icon className={`h-5 w-5 ${color}`} strokeWidth={2} /></div>
              <h3 className="text-base font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
