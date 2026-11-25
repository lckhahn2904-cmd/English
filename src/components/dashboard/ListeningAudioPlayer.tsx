import { useRef, useState } from 'react'
import { Pause, Play, RotateCcw } from 'lucide-react'

function clock(seconds: number) {
  if (!Number.isFinite(seconds)) return '0:00'
  return `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`
}

export default function ListeningAudioPlayer({ src, title }: { src: string; title: string }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [loading, setLoading] = useState(true)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [error, setError] = useState(false)
  const toggle = async () => {
    const audio = audioRef.current
    if (!audio || error) return
    if (audio.paused) { try { await audio.play(); setPlaying(true) } catch { setError(true); setPlaying(false) } }
    else { audio.pause(); setPlaying(false) }
  }
  const replay = () => { const audio = audioRef.current; if (audio) { audio.currentTime = 0; setCurrentTime(0); void audio.play().then(() => setPlaying(true)).catch(() => setError(true)) } }
  const seek = (value: number) => { if (audioRef.current) { audioRef.current.currentTime = value; setCurrentTime(value) } }
  return <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm" aria-label="Audio player">
    <audio ref={audioRef} src={src} preload="metadata" onLoadedMetadata={(event) => { setDuration(event.currentTarget.duration); setLoading(false) }} onCanPlay={() => setLoading(false)} onWaiting={() => setLoading(true)} onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)} onEnded={() => setPlaying(false)} onError={() => { setError(true); setLoading(false); setPlaying(false) }} />
    <h2 className="text-sm font-bold text-slate-900">Nghe: {title}</h2>
    {error ? <p role="alert" className="mt-2 text-sm text-rose-700">Không thể tải hoặc phát file audio này.</p> : <><div className="mt-3 flex flex-wrap items-center gap-2"><button type="button" onClick={toggle} disabled={loading} aria-label={playing ? 'Tạm dừng' : 'Phát'} className="grid h-10 w-10 place-items-center rounded-full bg-blue-600 text-white disabled:bg-slate-300">{playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}</button><button type="button" onClick={replay} disabled={loading} className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-slate-200 px-3 text-xs font-semibold text-slate-700 disabled:text-slate-400"><RotateCcw className="h-3.5 w-3.5" />Nghe lại</button><label className="ml-auto flex items-center gap-2 text-xs text-slate-600">Tốc độ<select aria-label="Tốc độ phát" disabled={loading} defaultValue="1" onChange={(event) => { if (audioRef.current) audioRef.current.playbackRate = Number(event.target.value) }} className="min-h-9 rounded-lg border border-slate-200 bg-white px-2"><option value="0.75">0.75×</option><option value="1">1×</option><option value="1.25">1.25×</option><option value="1.5">1.5×</option></select></label></div><div className="mt-3 flex items-center gap-2 text-[10px] text-slate-500"><span>{clock(currentTime)}</span><input type="range" min={0} max={duration || 0} step="0.1" value={Math.min(currentTime, duration || 0)} disabled={!duration || loading} onChange={(event) => seek(Number(event.target.value))} aria-label="Tiến trình audio" className="min-w-0 flex-1 accent-blue-600" /><span>{clock(duration)}</span></div>{loading && <p className="mt-2 text-xs text-slate-500">Đang tải audio…</p>}</>}
  </section>
}
