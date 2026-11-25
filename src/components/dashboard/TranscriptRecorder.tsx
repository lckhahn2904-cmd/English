import { useEffect, useRef, useState } from 'react'
import { Mic, Square } from 'lucide-react'

interface TranscriptRecorderProps {
  heading?: string
  prompt?: string
  guidance?: string
}

export default function TranscriptRecorder({ heading = 'Tự ghi âm để nghe lại (không bắt buộc)', prompt, guidance = 'Đọc một câu trong transcript rồi nghe lại giọng của chính bạn.' }: TranscriptRecorderProps) {
  const [recording, setRecording] = useState(false)
  const [message, setMessage] = useState('')
  const [recordingUrl, setRecordingUrl] = useState<string | null>(null)
  const recorderRef = useRef<MediaRecorder | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const chunksRef = useRef<BlobPart[]>([])

  useEffect(() => () => {
    if (recorderRef.current && recorderRef.current.state !== 'inactive') recorderRef.current.stop()
    streamRef.current?.getTracks().forEach((track) => track.stop())
    if (recordingUrl) URL.revokeObjectURL(recordingUrl)
  }, [recordingUrl])

  const startRecording = async () => {
    setMessage('')
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
      setMessage('Trình duyệt này chưa hỗ trợ ghi âm. Bạn vẫn có thể tự đọc transcript.')
      return
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      streamRef.current = stream
      chunksRef.current = []
      const recorder = new MediaRecorder(stream)
      recorderRef.current = recorder
      recorder.ondataavailable = (event) => { if (event.data.size) chunksRef.current.push(event.data) }
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: recorder.mimeType || 'audio/webm' })
        if (blob.size) setRecordingUrl(URL.createObjectURL(blob))
        stream.getTracks().forEach((track) => track.stop())
        streamRef.current = null
        setRecording(false)
      }
      recorder.start()
      setRecording(true)
      setMessage('Đang ghi trên thiết bị này. Bấm dừng để nghe lại bản ghi của bạn.')
    } catch {
      setMessage('Không thể truy cập microphone. Hãy kiểm tra quyền trong trình duyệt; bạn không cần bật mic để học.')
    }
  }

  const stopRecording = () => {
    if (recorderRef.current?.state === 'recording') recorderRef.current.stop()
  }

  return <section className="rounded-xl border border-slate-200 bg-slate-50 p-4" aria-labelledby="transcript-recording-heading"><h3 id="transcript-recording-heading" className="text-sm font-bold text-slate-900">{heading}</h3><p className="mt-1 text-xs leading-5 text-slate-600">{guidance} Bản ghi chỉ giữ tạm trong trang này; không gửi đi và không có chấm điểm phát âm.</p>{prompt && <p className="mt-3 rounded-lg bg-white p-3 text-sm font-semibold leading-6 text-slate-900">{prompt}</p>}<div className="mt-3 flex flex-wrap items-center gap-3">{recording ? <button type="button" onClick={stopRecording} className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-rose-600 px-3 text-xs font-semibold text-white"><Square className="h-4 w-4" />Dừng ghi âm</button> : <button type="button" onClick={startRecording} className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700"><Mic className="h-4 w-4" />Bắt đầu ghi âm</button>}{recordingUrl && <audio controls preload="none" src={recordingUrl} aria-label="Nghe lại bản ghi của bạn" />}</div>{message && <p role="status" className="mt-2 text-xs leading-5 text-slate-600">{message}</p>}</section>
}
