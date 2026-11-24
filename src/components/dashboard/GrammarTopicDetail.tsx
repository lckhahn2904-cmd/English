import {
  ArrowLeft,
  BookOpen,
  ClipboardList,
  Lightbulb,
  CheckCircle2,
  AlertTriangle,
  Layers,
  ArrowLeftRight,
  MessageCircle,
  BookmarkCheck,
  FileText
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { grammarFolders, grammarTopics, type GrammarTopic } from '../../data/grammarTopics'
import { getGrammarLesson } from '../../data/grammar/index'
import type { GrammarFormulaItem } from '../../data/grammar/types'
import InteractiveExerciseBlock from './InteractiveExerciseBlock'

const formulaTextClass = 'break-words font-mono text-[17px] leading-[1.8] text-blue-950 italic'

/* ───────── Helper: Smart rendering for formula strings ───────── */
function renderFormulaContent(text: string) {
  // Split on explicit \n characters (literal newlines in the string)
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean)

  if (lines.length === 1) {
    // Single line — check if it contains · separators for sub-items
    const parts = text.split('·').map(p => p.trim()).filter(Boolean)
    if (parts.length > 1) {
      return (
        <div className="space-y-1.5">
          {parts.map((part, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
              <span className={formulaTextClass}>{part}</span>
            </div>
          ))}
        </div>
      )
    }
    // Simple single-line formula
    return <p className={formulaTextClass}>{text}</p>
  }

  // Multiple lines — render each as a structured block
  return (
    <div className="space-y-2">
      {lines.map((line, i) => {
        // Check if line starts with a number pattern like "1." or "Bước 1:" or "Cách 1:"
        const isNumbered = /^(\d+[\.\):]|Bước\s+\d+|Cách\s+\d+)/i.test(line)
        // Check if line is a label/header (ends with colon followed by formula content, or is standalone label)
        const labelMatch = line.match(/^([A-ZĐ\u00C0-\u024F][^:]{0,60}):\s*(.+)$/u)

        if (labelMatch && labelMatch[2]) {
          const label = labelMatch[1].trim()
          const content = labelMatch[2].trim()
          // Further split content by · if applicable
          const subParts = content.split('·').map(p => p.trim()).filter(Boolean)
          return (
            <div key={i} className="rounded-lg border border-purple-100 bg-white/60 px-3.5 py-2.5">
              <span className="mb-1 inline-block rounded bg-purple-100 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-purple-700">
                {label}
              </span>
              {subParts.length > 1 ? (
                <div className="mt-1 space-y-1">
                  {subParts.map((sp, si) => (
                    <div key={si} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-300" />
                      <span className={formulaTextClass}>{sp}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className={`mt-0.5 ${formulaTextClass}`}>{content}</p>
              )}
            </div>
          )
        }

        if (isNumbered) {
          return (
            <div key={i} className="flex items-start gap-2 rounded-lg border border-purple-50 bg-white/40 px-3 py-2">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-200 text-[11px] font-bold text-purple-800">
                {(line.match(/\d+/) || [i + 1])[0]}
              </span>
              <span className={formulaTextClass}>{line.replace(/^(\d+[\.\):]?\s*)/, '')}</span>
            </div>
          )
        }

        // Check for · separators within this line
        const dotParts = line.split('·').map(p => p.trim()).filter(Boolean)
        if (dotParts.length > 1) {
          return (
            <div key={i} className="space-y-1">
              {dotParts.map((dp, di) => (
                <div key={di} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                  <span className={formulaTextClass}>{dp}</span>
                </div>
              ))}
            </div>
          )
        }

        // Default: render as a standalone line
        return (
          <p key={i} className={formulaTextClass}>{line}</p>
        )
      })}
    </div>
  )
}

/* ───────── Sub-component: Single Formula Card ───────── */
function FormulaCard({ formula, index }: { formula: GrammarFormulaItem; index: number }) {
  const accents = [
    'border-blue-200 bg-gradient-to-br from-blue-50/70 to-white',
    'border-rose-200 bg-gradient-to-br from-rose-50/60 to-white',
    'border-emerald-200 bg-gradient-to-br from-emerald-50/60 to-white'
  ]
  const labelColors = ['text-blue-900', 'text-rose-900', 'text-emerald-900']
  const badgeColors = ['bg-blue-600', 'bg-rose-600', 'bg-emerald-600']

  return (
    <div className={`rounded-xl border p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5 ${accents[index % accents.length]}`}>
      <div className="mb-3 flex items-center gap-2">
        <span className={`flex h-6 w-6 items-center justify-center rounded-md text-xs font-bold text-white ${badgeColors[index % badgeColors.length]}`}>
          {index + 1}
        </span>
        <h4 className={`text-sm font-bold sm:text-base ${labelColors[index % labelColors.length]}`}>{formula.title}</h4>
      </div>

      <div className="rounded-lg border border-blue-100 bg-white/70 p-3 sm:p-4">
        {renderFormulaContent(formula.formula)}
      </div>

      {formula.note && (
        <div className="mt-3 flex items-start gap-2 rounded-lg border border-blue-100 bg-blue-50/50 px-3 py-2">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
          <p className="text-xs leading-5 text-blue-900 sm:text-sm">
            {formula.note}
          </p>
        </div>
      )}
    </div>
  )
}

interface GrammarTopicDetailProps {
  topic: GrammarTopic
  folderTitle: string
  onClose: () => void
}

export default function GrammarTopicDetail({ topic, folderTitle, onClose }: GrammarTopicDetailProps) {
  const lesson = getGrammarLesson(topic.id)
  const folder = grammarFolders.find((item) => item.title === folderTitle)
  const folderTopics = folder?.items.flatMap((item) => {
    const relatedTopic = item.topicId && grammarTopics.find((candidate) => candidate.id === item.topicId)
    return relatedTopic ? [{ ...relatedTopic, displayTitle: item.title }] : []
  }) ?? []
  const topicPosition = folderTopics.findIndex((item) => item.id === topic.id)
  const relatedTopics = topicPosition < 0
    ? []
    : [folderTopics[topicPosition - 1], folderTopics[topicPosition + 1]].filter(Boolean)

  return (
    <article className="mb-10 space-y-6">
      {/* Top Navigation & Breadcrumb Header */}
      <header className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <button
              onClick={onClose}
              className="mb-3 inline-flex min-h-9 items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold text-blue-700 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <ArrowLeft className="h-4 w-4" /> Quay lại danh mục {folderTitle}
            </button>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-violet-50 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-violet-700">
                {folderTitle}
              </span>
              <span className="rounded-md bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-700">
                Trình độ: {lesson?.level || topic.level}
              </span>
            </div>
            <h1 className="mt-2 text-2xl font-black text-gray-900 sm:text-3xl">
              {lesson ? `${lesson.title} – ${lesson.vietnameseTitle}` : topic.title}
            </h1>
            <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
              {lesson?.summary || topic.summary}
            </p>
          </div>

          <a
            href="#interactive-exercises"
            className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <ClipboardList className="h-4 w-4" /> Làm bài tập (20 câu)
          </a>
        </div>
      </header>

      {lesson ? (
        <>
          {/* 1. TỔNG QUAN & BẢN CHẤT */}
          <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                <BookOpen className="h-4 w-4" />
              </span>
              1. Tổng quan & Bản chất
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">
              {lesson.overview}
            </p>
          </section>

          {/* 2. KIẾN THỨC NỀN TẢNG */}
          <section className="rounded-2xl border border-amber-100 bg-amber-50/40 p-5 shadow-sm sm:p-6">
            <h2 className="flex items-center gap-2.5 text-base font-bold text-amber-950 sm:text-lg">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100 text-amber-800">
                <Lightbulb className="h-4 w-4" />
              </span>
              2. Kiến thức nền tảng
            </h2>
            <div className="mt-3 text-sm leading-relaxed text-amber-900 sm:text-base">
              {lesson.foundation}
            </div>
          </section>

          {/* 3. PHÂN LOẠI CHI TIẾT */}
          {lesson.classification.length > 0 && (
            <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
                  <Layers className="h-4 w-4" />
                </span>
                3. Phân loại
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                {lesson.classification.map((item, idx) => (
                  <div key={idx} className="rounded-xl border border-gray-200 bg-gray-50/60 p-4 transition hover:border-indigo-200">
                    <h3 className="font-bold text-indigo-950">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-gray-700">{item.description}</p>
                    {item.items && item.items.length > 0 && (
                      <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-gray-600">
                        {item.items.map((sub, sIdx) => (
                          <li key={sIdx}>{sub}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 4. CÔNG THỨC & CẤU TRÚC */}
          {lesson.formulas.length > 0 && (
            <section className="overflow-hidden rounded-2xl border-2 border-blue-200 bg-white shadow-sm">
              <div className="border-b border-blue-100 bg-gradient-to-r from-blue-50 to-sky-50 px-5 py-4 sm:px-6 sm:py-5">
                <h2 className="flex items-center gap-3 text-lg font-extrabold text-blue-900 sm:text-xl">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                    <FileText className="h-5 w-5" />
                  </span>
                  4. Công thức & Cấu trúc
                </h2>
                <p className="mt-1.5 pl-12 text-xs text-blue-700 sm:text-sm">
                  Các công thức, quy tắc và cấu trúc ngữ pháp trọng tâm của bài học
                </p>
              </div>

              <div className="space-y-4 p-5 sm:p-6">
                {lesson.formulas.map((form, idx) => (
                  <FormulaCard key={idx} formula={form} index={idx} />
                ))}
              </div>
            </section>
          )}

          {/* 5. CÁCH SỬ DỤNG VÀ NGỮ CẢNH */}
          {lesson.usage.length > 0 && (
            <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                5. Cách sử dụng & Ngữ cảnh
              </h2>
              <div className="mt-4 space-y-4">
                {lesson.usage.map((u, idx) => (
                  <div key={idx} className="rounded-xl border border-gray-100 bg-gray-50/50 p-4">
                    <h3 className="font-bold text-gray-900">{u.context}</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-700">{u.explanation}</p>
                    {u.example && (
                      <div className="mt-2.5 rounded-lg border border-emerald-100 bg-emerald-50/70 p-3 text-sm">
                        <p className="font-semibold text-emerald-950">{u.example.english}</p>
                        <p className="mt-0.5 text-xs text-emerald-800">{u.example.vietnamese}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 6. VÍ DỤ MINH HỌA SONG NGỮ */}
          {lesson.examples.length > 0 && (
            <section className="rounded-2xl border border-blue-100 bg-blue-50/30 p-5 shadow-sm sm:p-6">
              <h2 className="flex items-center gap-2.5 text-base font-bold text-blue-950 sm:text-lg">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <BookOpen className="h-4 w-4" />
                </span>
                6. Ví dụ minh họa song ngữ
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {lesson.examples.map((ex, idx) => (
                  <div key={idx} className="rounded-xl border border-blue-100 bg-white p-3.5 shadow-xs">
                    <p className="font-semibold text-gray-900">{ex.english}</p>
                    <p className="mt-1 text-xs text-gray-600">{ex.vietnamese}</p>
                    {ex.note && (
                      <p className="mt-1 text-[11px] font-medium text-blue-600">
                        💡 {ex.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 7. LƯU Ý QUAN TRỌNG & NGOẠI LỆ */}
          {lesson.importantNotes.length > 0 && (
            <section className="rounded-2xl border border-rose-200 bg-rose-50/40 p-5 shadow-sm sm:p-6">
              <h2 className="flex items-center gap-2.5 text-base font-bold text-rose-950 sm:text-lg">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-rose-100 text-rose-700">
                  <AlertTriangle className="h-4 w-4" />
                </span>
                7. Lưu ý quan trọng & Ngoại lệ
              </h2>
              <ul className="mt-3 space-y-2 pl-2">
                {lesson.importantNotes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-rose-900">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 8. SO SÁNH VÀ PHÂN BIỆT */}
          {lesson.comparison && lesson.comparison.points.length > 0 && (
            <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-100 text-teal-700">
                  <ArrowLeftRight className="h-4 w-4" />
                </span>
                8. So sánh & Phân biệt: {lesson.comparison.title}
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {lesson.comparison.points.map((pt, idx) => (
                  <div key={idx} className="rounded-xl border border-gray-200 bg-gray-50/50 p-4">
                    <h3 className="font-bold text-teal-900">{pt.concept}</h3>
                    <p className="mt-1.5 text-sm text-gray-700">{pt.difference}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 9. ỨNG DỤNG GIAO TIẾP THỰC TẾ */}
          {lesson.communicationApp && (
            <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="flex items-center gap-2.5 text-base font-bold text-gray-900 sm:text-lg">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
                  <MessageCircle className="h-4 w-4" />
                </span>
                9. Ứng dụng giao tiếp: {lesson.communicationApp.situation}
              </h2>
              <div className="mt-4 space-y-3">
                {lesson.communicationApp.dialogueOrSentences.map((line, idx) => (
                  <div key={idx} className="flex flex-col rounded-xl border border-sky-100 bg-sky-50/40 p-3 sm:flex-row sm:items-start sm:gap-3">
                    {line.speaker && (
                      <span className="shrink-0 font-bold text-sky-900 sm:w-28">
                        {line.speaker}:
                      </span>
                    )}
                    <div className="text-sm">
                      <p className="font-semibold text-gray-900">{line.text}</p>
                      <p className="text-xs text-gray-600">{line.translation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 10. TỔNG KẾT GHI NHỚ */}
          {lesson.summaryPoints.length > 0 && (
            <section className="rounded-2xl border border-emerald-200 bg-emerald-50/30 p-5 shadow-sm sm:p-6">
              <h2 className="flex items-center gap-2.5 text-base font-bold text-emerald-950 sm:text-lg">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                  <BookmarkCheck className="h-4 w-4" />
                </span>
                10. Tổng kết ghi nhớ
              </h2>
              <div className="mt-3 space-y-2">
                {lesson.summaryPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-emerald-950">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 11. BÀI TẬP THỰC HÀNH TƯƠNG TÁC (20 CÂU MỚI) */}
          <div id="interactive-exercises" className="pt-2">
            <InteractiveExerciseBlock
              topicName={lesson.vietnameseTitle || lesson.title}
              exercises={lesson.exercises}
            />
          </div>
        </>
      ) : (
        /* Fallback for basic topic if lesson detail not present */
        <>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <section className="rounded-xl bg-violet-50/70 p-4">
              <h3 className="flex items-center gap-2 text-sm font-bold text-gray-900">
                <BookOpen className="h-4 w-4 text-violet-600" /> Cấu trúc
              </h3>
              <p className={`mt-2 whitespace-pre-line ${formulaTextClass}`}>
                {topic.structure}
              </p>
            </section>
            <section className="rounded-xl border border-gray-100 p-4">
              <h3 className="text-sm font-bold text-gray-900">Cách dùng</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-5 text-gray-600">
                {topic.usage.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          <section className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-4">
            <h3 className="text-sm font-bold text-emerald-950">Ví dụ</h3>
            <div className="mt-2 space-y-3">
              {topic.examples.map((example) => (
                <div key={example.english} className="text-sm">
                  <p className="font-semibold text-gray-900">{example.english}</p>
                  <p className="mt-0.5 text-gray-600">{example.vietnamese}</p>
                </div>
              ))}
            </div>
          </section>

          <div id="interactive-exercises" className="pt-2">
            <InteractiveExerciseBlock topicName={topic.title} />
          </div>
        </>
      )}

      {relatedTopics.length > 0 && (
        <nav aria-label="Chủ đề liên quan" className="rounded-2xl border border-blue-100 bg-blue-50/50 p-4 sm:p-5">
          <h2 className="text-sm font-bold text-blue-950">Tiếp tục lộ trình</h2>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row">
            {relatedTopics.map((relatedTopic) => (
              <Link
                key={relatedTopic.id}
                to={`/dashboard/grammar/${encodeURIComponent(relatedTopic.id)}`}
                className="inline-flex min-h-10 items-center justify-between gap-3 rounded-xl border border-blue-100 bg-white px-3 py-2 text-sm font-semibold text-blue-800 hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <span>{relatedTopic.displayTitle}</span>
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </nav>
      )}

      {/* Bottom Navigation Bar */}
      <footer className="mt-8 flex flex-col items-center justify-between gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:flex-row">
        <button
          onClick={onClose}
          className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Quay lại danh mục {folderTitle}
        </button>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xs font-semibold text-gray-500 hover:text-blue-600 transition-colors"
        >
          ↑ Về đầu trang bài học
        </button>
      </footer>
    </article>
  )
}
