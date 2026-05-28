import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ImageCarousel({ photos, initialIndex = 0 }) {
  const [current, setCurrent] = useState(initialIndex)

  const prev = useCallback(() => {
    setCurrent(c => (c === 0 ? photos.length - 1 : c - 1))
  }, [photos.length])

  const next = useCallback(() => {
    setCurrent(c => (c === photos.length - 1 ? 0 : c + 1))
  }, [photos.length])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [prev, next])

  if (!photos.length) return null

  return (
    <div className="relative">
      {/* Main image */}
      <div className="w-full aspect-[4/3] bg-muted rounded-xl border-2 border-fg overflow-hidden">
        <img
          src={photos[current].src}
          alt={photos[current].alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Arrows */}
      {photos.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-card border-2 border-fg rounded-full flex items-center justify-center shadow-pop hover:bg-accent hover:text-white transition-colors"
            aria-label="上一张"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-card border-2 border-fg rounded-full flex items-center justify-center shadow-pop hover:bg-accent hover:text-white transition-colors"
            aria-label="下一张"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Dots */}
      {photos.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full border-2 border-fg transition-colors ${
                i === current ? 'bg-accent' : 'bg-muted hover:bg-border'
              }`}
              aria-label={`第 ${i + 1} 张`}
            />
          ))}
        </div>
      )}

      {/* Counter */}
      <div className="text-center mt-2 text-sm text-muted-fg font-medium">
        {current + 1} / {photos.length}
      </div>
    </div>
  )
}
