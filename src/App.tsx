import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Component, lazy, Suspense, type ReactNode } from 'react'
import { AuthProvider } from './context/AuthContext'
import { GuestProvider } from './context/GuestContext'
import { VocabularyProvider } from './context/VocabularyContext'
import ProtectedRoute from './components/ProtectedRoute'

// Layouts
import DashboardLayout from './layouts/DashboardLayout'

// Public pages
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import PlaceholderPage from './pages/PlaceholderPage'

// Dashboard pages
import DashboardHome from './pages/dashboard/DashboardHome'
import CoursesPage from './pages/dashboard/CoursesPage'
import VocabularyPage from './pages/dashboard/VocabularyPage'
import GrammarPage from './pages/dashboard/GrammarPage'
import GrammarTensePage from './pages/dashboard/GrammarTensePage'
import SpeakingPage from './pages/dashboard/SpeakingPage'
import ListeningPage from './pages/dashboard/ListeningPage'
import PronunciationPage from './pages/dashboard/PronunciationPage'
import CommunicationAssessmentPage from './pages/dashboard/CommunicationAssessmentPage'
import CommunicationAnalyticsPage from './pages/dashboard/CommunicationAnalyticsPage'
import SpeakingModulePage from './pages/dashboard/SpeakingModulePage'
import SpeakingLessonPage from './pages/dashboard/SpeakingLessonPage'
import ConversationPage from './pages/dashboard/ConversationPage'
import SettingsPage from './pages/dashboard/SettingsPage'
import VocabularyFlashcardPage from './pages/dashboard/VocabularyFlashcardPage'
import NotificationsPage from './pages/dashboard/NotificationsPage'
import AdminGuard from './components/admin/AdminGuard'
import AdminLayout from './layouts/AdminLayout'
import AdminOverviewPage from './pages/admin/AdminOverviewPage'
import AdminContentPage from './pages/admin/AdminContentPage'
import AdminCommunicationStudioPage from './pages/admin/AdminCommunicationStudioPage'

const ExercisesPage = lazy(() => import('./pages/dashboard/ExercisesPage'))

class ExerciseRouteBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <div className="mx-auto max-w-3xl rounded-xl border border-rose-200 bg-white p-6"><h2 className="font-bold text-gray-900">Không tải được khu bài tập</h2><p className="mt-1 text-sm text-gray-600">Đã xảy ra lỗi khi mở catalog. Hãy thử tải lại trang.</p><button onClick={() => window.location.reload()} className="mt-4 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white">Tải lại</button></div>
    }
    return this.props.children
  }
}

function App() {
  return (
    <AuthProvider>
      <GuestProvider>
        <VocabularyProvider>
          <BrowserRouter>
          <Routes>
            {/* ── Public routes ── */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* ── Protected Dashboard routes (Auth or Guest) ── */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<DashboardHome />} />
              <Route path="courses" element={<CoursesPage />} />
              <Route path="vocabulary" element={<VocabularyPage />} />
              <Route path="grammar" element={<GrammarPage />} />
              <Route path="grammar/:topicId" element={<GrammarTensePage />} />
              <Route path="speaking" element={<SpeakingPage />} />
              <Route path="speaking/listening" element={<ListeningPage />} />
              <Route path="speaking/listening/:episodeId" element={<ListeningPage />} />
              <Route path="speaking/pronunciation" element={<PronunciationPage />} />
              <Route path="communication-assessment" element={<CommunicationAssessmentPage />} />
              <Route path="communication-analytics" element={<CommunicationAnalyticsPage />} />
              <Route path="conversation" element={<ConversationPage />} />
              <Route path="speaking/module/:moduleId" element={<SpeakingModulePage />} />
              <Route path="speaking/lesson/:lessonId" element={<SpeakingLessonPage />} />
              <Route path="exercises" element={<ExerciseRouteBoundary><Suspense fallback={<div className="mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-600">Đang tải danh mục bài tập…</div>}><ExercisesPage /></Suspense></ExerciseRouteBoundary>} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="notifications" element={<NotificationsPage />} />
            </Route>

            {/* Isolated vocabulary study screen: deliberately outside DashboardLayout. */}
            <Route
              path="/dashboard/study"
              element={
                <ProtectedRoute>
                  <VocabularyFlashcardPage />
                </ProtectedRoute>
              }
            />

            {/* ── 404 fallback ── */}
            <Route path="/admin" element={<AdminGuard><AdminLayout /></AdminGuard>}>
              <Route index element={<AdminOverviewPage />} />
              <Route path="content" element={<AdminContentPage />} />
              <Route path="content/communication" element={<AdminCommunicationStudioPage />} />
            </Route>

            <Route
              path="*"
              element={
                <PlaceholderPage
                  title="Trang không tồn tại"
                  subtitle="Trang bạn tìm kiếm chưa được xây dựng hoặc không tồn tại."
                  backTo="/"
                />
              }
            />
          </Routes>
        </BrowserRouter>
        </VocabularyProvider>
      </GuestProvider>
    </AuthProvider>
  )
}

export default App
