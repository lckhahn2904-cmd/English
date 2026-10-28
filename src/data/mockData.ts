// Mock user data — Giai đoạn 3 sẽ thay bằng Supabase Auth

export const mockUser = {
  id: 'user-001',
  name: 'Nguyễn Minh Khoa',
  email: 'minhkhoa@example.com',
  avatar: null,
  level: 'Intermediate',
  joinedAt: '2024-09-01',
}

export const mockStats = {
  streakDays: 14,
  totalWords: 842,
  weeklyGoalMinutes: 30,       // phút/ngày
  todayMinutes: 18,             // đã học hôm nay
  totalLessonsCompleted: 47,
  currentXP: 3260,
  weekProgress: [60, 100, 45, 100, 100, 80, 60], // % mỗi ngày trong tuần (CN-T7)
}

export const mockCourses = [
  {
    id: 'course-1',
    title: 'Giao tiếp hàng ngày',
    description: 'Các tình huống giao tiếp phổ biến trong cuộc sống',
    icon: '💬',
    progress: 68,
    totalLessons: 24,
    completedLessons: 16,
    level: 'Beginner',
    color: 'blue',
    lastStudied: '2 giờ trước',
  },
  {
    id: 'course-2',
    title: 'Tiếng Anh công sở',
    description: 'Email, họp nhóm và thuyết trình chuyên nghiệp',
    icon: '💼',
    progress: 35,
    totalLessons: 20,
    completedLessons: 7,
    level: 'Intermediate',
    color: 'purple',
    lastStudied: 'Hôm qua',
  },
  {
    id: 'course-3',
    title: 'Từ vựng IELTS',
    description: 'Bộ từ vựng học thuật thiết yếu cho kỳ thi IELTS',
    icon: '📚',
    progress: 12,
    totalLessons: 30,
    completedLessons: 4,
    level: 'Advanced',
    color: 'emerald',
    lastStudied: '3 ngày trước',
  },
]

export const mockNextLesson = {
  courseTitle: 'Giao tiếp hàng ngày',
  lessonTitle: 'Bài 17: Đặt lịch hẹn qua điện thoại',
  duration: '15 phút',
  type: 'Hội thoại + Luyện nghe',
  xpReward: 50,
}

export const mockTodayGoal = {
  targetMinutes: 30,
  completedMinutes: 18,
  targetWords: 10,
  learnedWords: 6,
  targetLessons: 2,
  completedLessons: 1,
}

export const mockVocabCategories = [
  { id: 'v1', name: 'Giao tiếp cơ bản', count: 245, learned: 198 },
  { id: 'v2', name: 'Công việc & Kinh doanh', count: 180, learned: 122 },
  { id: 'v3', name: 'Du lịch & Địa điểm', count: 160, learned: 98 },
  { id: 'v4', name: 'Học thuật (IELTS)', count: 210, learned: 64 },
  { id: 'v5', name: 'Cảm xúc & Mô tả', count: 130, learned: 95 },
  { id: 'v6', name: 'Thời sự & Xã hội', count: 140, learned: 65 },
]

export const mockGrammarTopics = [
  { id: 'g1', name: 'Thì hiện tại đơn', status: 'completed', level: 'A1' },
  { id: 'g2', name: 'Thì hiện tại tiếp diễn', status: 'completed', level: 'A1' },
  { id: 'g3', name: 'Thì quá khứ đơn', status: 'completed', level: 'A2' },
  { id: 'g4', name: 'Thì hiện tại hoàn thành', status: 'in-progress', level: 'B1' },
  { id: 'g5', name: 'Câu điều kiện loại 1 & 2', status: 'locked', level: 'B1' },
  { id: 'g6', name: 'Câu bị động', status: 'locked', level: 'B2' },
]
