import type { A0AIContext } from '../data/a0KnowledgeMap'
import type { A0Lesson } from '../data/speakingCurriculum'
import type { LearningContext } from './learningIntelligenceService'

/** Provider contracts for a future server-side integration. No provider is selected. */
export interface SpeakingMessage {
  role: 'learner' | 'coach'
  text: string
  createdAt: string
}

export interface SpeakingAssessment {
  taskCompletion?: 'needs-practice' | 'met'
  grammar?: 'needs-practice' | 'met'
  vocabulary?: 'needs-practice' | 'met'
  fluency?: 'not-assessed'
  pronunciation?: 'not-supported'
  comprehensibility?: 'self-reflection-only'
}

export interface SpeakingSessionRecord {
  userId: string
  lessonId: string
  sessionId: string
  messages: SpeakingMessage[]
  assessment: SpeakingAssessment
  createdAt: string
}

export interface SpeakingProviderRequest {
  lesson: A0Lesson
  context: LearningContext
  curriculumContext: A0AIContext
  supportLevel: 'full' | 'guided' | 'limited' | 'independent'
  messages: SpeakingMessage[]
}

/** Implementations must call an authenticated backend; never place provider secrets in Vite. */
export interface SpeakingLanguageModelAdapter {
  respond(request: SpeakingProviderRequest, signal?: AbortSignal): Promise<{
    message: string
    assessment?: SpeakingAssessment
  }>
}

export interface SpeechToTextAdapter {
  transcribe(audio: Blob, signal?: AbortSignal): Promise<{ text: string }>
}

export interface TextToSpeechAdapter {
  speak(text: string, signal?: AbortSignal): Promise<void>
}

export interface PronunciationAssessmentAdapter {
  assess(audio: Blob, referenceText: string, signal?: AbortSignal): Promise<{
    feedback: string
  }>
}
