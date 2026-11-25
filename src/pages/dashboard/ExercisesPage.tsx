import { useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, BookOpen, Brain, CheckCircle2, ClipboardList, HelpCircle, Layers3, MessageCircle, Sparkles } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import ExerciseRunner from '../../components/dashboard/ExerciseRunner'
import { guestCourses } from '../../data/guestData'
import { useGuest } from '../../context/GuestContext'
import {
  localExerciseCatalog,
  queryExerciseCatalog,
  type ExerciseCatalogItem,
  type ExerciseContentGroup,
} from '../../services/exerciseCatalog'

type PageView = 'home' | 'topics' | 'practice'
type CatalogGroup = { id: ExerciseContentGroup; title: string; description: string; icon: typeof Layers3 }

const groupDisplay: Record<ExerciseContentGroup, Omit<CatalogGroup, 'id'>> = {
  grammar: { title: 'Ngữ pháp', description: 'Luyện theo chủ điểm, từ loại, cấu trúc câu và các thì.', icon: Layers3 },
  communication: { title: 'Giao tiếp', description: 'Bài A0, tình huống hội thoại, transcript và nhận diện phát âm.', icon: MessageCircle },
  general: { title: 'Bài tập chung', description: 'Một số dạng bài tương tác đang có trong thư viện.', icon: BookOpen },
  vocabulary: { title: 'Từ vựng', description: 'Chưa có câu hỏi kiểm tra trong catalog.', icon: BookOpen },
}

const shuffle = <T,>(items: readonly T[]): T[] => {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function getGroupStats(groupId: ExerciseContentGroup, items: readonly ExerciseCatalogItem[]) {
  const groupItems = items.filter((item) => item.contentGroup === groupId)
  return {
    items: groupItems,
    topics: new Set(groupItems.map((item) => item.topicId)).size,
    auto: groupItems.filter((item) => item.scoring === 'automatic').length,
    activities: groupItems.filter((item) => item.scoring !== 'automatic').length,
  }
}

function getTopicStats(items: readonly ExerciseCatalogItem[]) {
  const topics = new Map<string, { id: string; title: string; questions: number; activities: number }>()
  for (const item of items) {
    const current = topics.get(item.topicId) ?? { id: item.topicId, title: item.topicTitle ?? item.topicId, questions: 0, activities: 0 }
    if (item.scoring === 'automatic') current.questions += 1
    else current.activities += 1
    topics.set(item.topicId, current)
  }
  return [...topics.values()].sort((a, b) => a.title.localeCompare(b.title, 'vi'))
}

function startSize(items: ExerciseCatalogItem[], size: string) {
  const ordered = shuffle(items)
  return size === 'all' ? ordered : ordered.slice(0, Math.min(Number(size), ordered.length))
}

export default function ExercisesPage() {
  const { completeLesson, quizScores, saveQuizResult } = useGuest()
  const [searchParams, setSearchParams] = useSearchParams()
  const initialTopic = searchParams.get('topic')
  const initialTopicItems = initialTopic ? queryExerciseCatalog({ topicIds: [initialTopic] }) : []
  const [view, setView] = useState<PageView>(() => initialTopicItems.length ? 'practice' : 'home')
  const [selectedGroup, setSelectedGroup] = useState<ExerciseContentGroup | null>(null)
  const [activeItems, setActiveItems] = useState<ExerciseCatalogItem[]>(() => initialTopicItems.length ? shuffle(initialTopicItems) : [])
  const [returnView, setReturnView] = useState<PageView>('home')
  const [sessionKey, setSessionKey] = useState(0)
  const [reviewGroup, setReviewGroup] = useState('')
  const [reviewTopic, setReviewTopic] = useState('')
  const [reviewDifficulty, setReviewDifficulty] = useState('')
  const [reviewSize, setReviewSize] = useState('10')

  const allGroups: CatalogGroup[] = useMemo(() => {
    const available = new Set(localExerciseCatalog.map((item) => item.contentGroup))
    return (['grammar', 'vocabulary', 'communication', 'general'] as ExerciseContentGroup[])
      .filter((id) => available.has(id))
      .map((id) => ({ id, ...groupDisplay[id] }))
  }, [])
  const selectedGroupItems = selectedGroup ? localExerciseCatalog.filter((item) => item.contentGroup === selectedGroup) : []
  const selectedTopics = getTopicStats(selectedGroupItems)

  const reviewBase = queryExerciseCatalog({
    scorableOnly: true,
    contentGroups: reviewGroup ? [reviewGroup as ExerciseContentGroup] : undefined,
    topicIds: reviewTopic ? [reviewTopic] : undefined,
  })
  const difficultyOptions = [...new Set(reviewBase.map((item) => item.difficulty).filter((value): value is string => Boolean(value)))].sort((a, b) => a.localeCompare(b, 'vi'))
  const reviewCandidates = reviewDifficulty ? reviewBase.filter((item) => item.difficulty === reviewDifficulty) : reviewBase
  const reviewTopics = getTopicStats(reviewBase)

  const saveCompletedLessonQuizzes = ({
    items,
    outcomes,
    choiceIndexes,
  }: {
    items: ExerciseCatalogItem[]
    outcomes: Record<string, boolean>
    choiceIndexes: Record<string, number>
  }) => {
    const guestQuestions = items.filter((item) => item.source.fileOrTable === 'src/data/guestData.ts')
    const lessonIds = [...new Set(guestQuestions.map((item) => item.sourceLessonId).filter((id): id is string => Boolean(id)))]
    let savedCount = 0

    for (const lessonId of lessonIds) {
      const sourceQuestions = localExerciseCatalog.filter((item) => item.source.fileOrTable === 'src/data/guestData.ts' && item.sourceLessonId === lessonId)
      const sessionQuestions = guestQuestions.filter((item) => item.sourceLessonId === lessonId)
      if (sourceQuestions.length === 0 || sessionQuestions.length !== sourceQuestions.length) continue
      if (sessionQuestions.some((item) => outcomes[item.id] === undefined || choiceIndexes[item.id] === undefined)) continue

      const answers: Record<number, number> = {}
      for (const item of sessionQuestions) {
        const questionNumber = Number(item.source.recordId.match(/:quiz:(\d+)$/)?.[1])
        if (!Number.isInteger(questionNumber)) continue
        answers[questionNumber] = choiceIndexes[item.id]
      }
      if (Object.keys(answers).length !== sourceQuestions.length) continue

      const score = sessionQuestions.filter((item) => outcomes[item.id]).length
      saveQuizResult(lessonId, score, sourceQuestions.length, answers)
      const lesson = guestCourses.flatMap((course) => course.lessons).find((entry) => entry.id === lessonId)
      completeLesson(lessonId, lesson?.xpReward)
      savedCount += 1
    }
    return savedCount
  }

  const launch = (items: ExerciseCatalogItem[], backTo: PageView, size = 'all') => {
    const session = startSize(items, size)
    if (!session.length) return
    setActiveItems(session)
    setReturnView(backTo)
    setSessionKey((key) => key + 1)
    setView('practice')
    if (searchParams.has('topic')) setSearchParams({}, { replace: true })
  }

  const leavePractice = () => {
    setView(returnView)
    if (searchParams.has('topic')) setSearchParams({}, { replace: true })
  }

  const restartPractice = () => {
    setActiveItems((items) => shuffle(items))
    setSessionKey((key) => key + 1)
  }

  const homeHeader = <header className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">Khu luyện tập</p>
      <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-gray-950 sm:text-3xl">Bài tập làm thêm</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">Ôn lại nội dung đã học và luyện theo từng chủ đề từ catalog bài tập hiện có.</p>
    </div>
    <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-800"><Sparkles className="h-3.5 w-3.5" />{localExerciseCatalog.length.toLocaleString('vi-VN')} câu hỏi và hoạt động</span>
  </header>

  if (view === 'practice') return <div>
    {homeHeader}
    <ExerciseRunner key={sessionKey} items={activeItems} onExit={leavePractice} onRestart={restartPractice} onComplete={saveCompletedLessonQuizzes} />
  </div>

  if (view === 'topics' && selectedGroup) {
    const display = groupDisplay[selectedGroup]
    return <div>
      {homeHeader}
      <button onClick={() => setView('home')} className="mb-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-gray-900"><ArrowLeft className="h-4 w-4" />Về trang bài tập</button>
      <section>
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div><p className="text-xs font-bold uppercase tracking-wide text-blue-700">Luyện theo nội dung</p><h2 className="mt-1 text-xl font-bold text-gray-900">{display.title}</h2><p className="mt-1 text-sm text-gray-600">Chọn một chủ đề để bắt đầu; câu hỏi và hoạt động được lấy trực tiếp từ nguồn.</p></div>
          <span className="text-xs text-gray-500">{selectedTopics.length} chủ đề</span>
        </div>
        {selectedTopics.length ? <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {selectedTopics.map((topic) => {
            const lessonIds = [...new Set(selectedGroupItems.filter((item) => item.topicId === topic.id && item.source.fileOrTable === 'src/data/guestData.ts').map((item) => item.sourceLessonId).filter((id): id is string => Boolean(id)))]
            const savedResults = lessonIds.flatMap((lessonId) => quizScores[lessonId] ? [{ lessonId, ...quizScores[lessonId] }] : [])
            return <article key={topic.id} className="flex min-h-40 flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-blue-200">
              <h3 className="font-semibold leading-6 text-gray-900">{topic.title}</h3>
              <p className="mt-2 text-xs text-gray-500">{topic.questions} câu có đáp án{topic.activities > 0 ? ` · ${topic.activities} hoạt động` : ''}</p>
              {savedResults.map((result) => <p key={result.lessonId} className="mt-2 text-xs font-semibold text-emerald-700">Quiz bài học: {result.score}/{result.total} ({result.percentage}%)</p>)}
              <button onClick={() => launch(selectedGroupItems.filter((item) => item.topicId === topic.id), 'topics')} className="mt-auto inline-flex min-h-9 items-center justify-center gap-2 self-start pt-3 text-sm font-semibold text-blue-700 hover:text-blue-900">Mở bài luyện <ArrowRight className="h-4 w-4" /></button>
            </article>
          })}
        </div> : <div className="rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center text-sm text-gray-600">Nhóm này chưa có chủ đề để luyện.</div>}
      </section>
    </div>
  }

  return <div>
    {homeHeader}
    {!localExerciseCatalog.length ? <section className="rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center"><h2 className="font-bold text-gray-900">Catalog chưa có nội dung</h2><p className="mt-2 text-sm text-gray-600">Chưa có câu hỏi hoặc hoạt động đã xác minh để hiển thị.</p></section> : <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
      <section className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-white p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white"><Brain className="h-5 w-5" /></span>
          <div><p className="text-xs font-bold uppercase tracking-wide text-blue-800">Ôn kiến thức đã học</p><h2 className="mt-1 text-lg font-bold text-gray-950">Tổng ôn kiến thức</h2><p className="mt-1 text-sm leading-6 text-gray-600">Trộn các câu có đáp án và kiểm tra được. Hoạt động nói, role-play và tự đánh giá không được đưa vào lượt trắc nghiệm này.</p></div>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <label className="text-xs font-semibold text-gray-600">Nhóm nội dung<select value={reviewGroup} onChange={(event) => { setReviewGroup(event.target.value); setReviewTopic(''); setReviewDifficulty('') }} className="mt-1.5 min-h-10 w-full rounded-lg border border-gray-200 bg-white px-2.5 text-sm font-normal text-gray-800"><option value="">Tất cả nhóm</option>{allGroups.filter((group) => getGroupStats(group.id, localExerciseCatalog).auto > 0).map((group) => <option key={group.id} value={group.id}>{group.title}</option>)}</select></label>
          <label className="text-xs font-semibold text-gray-600">Chủ đề<select value={reviewTopic} onChange={(event) => { setReviewTopic(event.target.value); setReviewDifficulty('') }} className="mt-1.5 min-h-10 w-full rounded-lg border border-gray-200 bg-white px-2.5 text-sm font-normal text-gray-800"><option value="">Tất cả chủ đề</option>{reviewTopics.map((topic) => <option key={topic.id} value={topic.id}>{topic.title}</option>)}</select></label>
          <label className="text-xs font-semibold text-gray-600">Mức độ<select value={reviewDifficulty} onChange={(event) => setReviewDifficulty(event.target.value)} className="mt-1.5 min-h-10 w-full rounded-lg border border-gray-200 bg-white px-2.5 text-sm font-normal text-gray-800"><option value="">Mọi mức độ</option>{difficultyOptions.map((difficulty) => <option key={difficulty} value={difficulty}>{difficulty}</option>)}</select></label>
          <label className="text-xs font-semibold text-gray-600">Số câu<select value={reviewSize} onChange={(event) => setReviewSize(event.target.value)} className="mt-1.5 min-h-10 w-full rounded-lg border border-gray-200 bg-white px-2.5 text-sm font-normal text-gray-800"><option value="10">10 câu</option><option value="20">20 câu</option><option value="40">40 câu</option><option value="all">Tất cả câu phù hợp</option></select></label>
        </div>
        <div className="mt-4 flex flex-col gap-3 border-t border-blue-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="inline-flex items-center gap-1.5 text-sm text-gray-600"><HelpCircle className="h-4 w-4 text-blue-700" /><strong className="text-gray-900">{reviewCandidates.length.toLocaleString('vi-VN')}</strong> câu có đáp án phù hợp</p>
          <button onClick={() => launch(reviewCandidates, 'home', reviewSize)} disabled={!reviewCandidates.length} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-gray-300"><ClipboardList className="h-4 w-4" />Bắt đầu tổng ôn <ArrowRight className="h-4 w-4" /></button>
        </div>
        {!reviewCandidates.length && <p className="mt-2 text-xs text-amber-800">Không có câu chấm tự động trong bộ lọc hiện tại.</p>}
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white"><BookOpen className="h-5 w-5" /></span>
          <div><p className="text-xs font-bold uppercase tracking-wide text-gray-500">Luyện có mục tiêu</p><h2 className="mt-1 text-lg font-bold text-gray-950">Luyện theo nội dung</h2><p className="mt-1 text-sm leading-6 text-gray-600">Chọn nhóm và mở danh sách các chủ đề có trong catalog.</p></div>
        </div>
        <div className="mt-4 divide-y divide-gray-100">
          {allGroups.map((group) => {
            const stats = getGroupStats(group.id, localExerciseCatalog)
            const Icon = group.icon
            return <article key={group.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-700"><Icon className="h-4.5 w-4.5" /></span>
              <div className="min-w-0 flex-1"><h3 className="text-sm font-semibold text-gray-900">{group.title}</h3><p className="mt-0.5 text-xs text-gray-500">{stats.topics} chủ đề · {stats.auto} câu có đáp án{stats.activities ? ` · ${stats.activities} hoạt động` : ''}</p></div>
              <button onClick={() => { setSelectedGroup(group.id); setView('topics') }} className="inline-flex min-h-9 shrink-0 items-center gap-1 rounded-lg px-2.5 text-xs font-bold text-blue-700 hover:bg-blue-50">Xem <ArrowRight className="h-3.5 w-3.5" /></button>
            </article>
          })}
          {!allGroups.length && <p className="py-4 text-sm text-gray-500">Chưa có nhóm nội dung nào sẵn sàng luyện.</p>}
        </div>
      </section>
    </div>}
    <p className="mt-5 flex items-start gap-2 text-xs leading-5 text-gray-500"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0" />Điểm tổng ôn thông thường chỉ hiển thị tại chỗ. Khi hoàn thành đủ các câu của quiz bài học mẫu, kết quả quiz và tiến độ bài học được lưu trong phiên. Bài transcript là đọc hiểu văn bản; catalog chưa có audio thật.</p>
  </div>
}
