import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import ExercisesPage from './pages/dashboard/ExercisesPage'
import SettingsPage from './pages/dashboard/SettingsPage'
import VocabularyFlashcardPage from './pages/dashboard/VocabularyFlashcardPage'

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
              <Route path="exercises" element={<ExercisesPage />} />
              <Route path="settings" element={<SettingsPage />} />
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
