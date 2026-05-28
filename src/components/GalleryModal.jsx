import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronDown, ChevronUp, Calendar } from 'lucide-react'
import ImageCarousel from './ImageCarousel'
import renderContent from '../utils/renderContent'

const themeColors = {
  '夏校/冬校': 'bg-tertiary/10 text-tertiary border-tertiary/30',
  '志愿者/公益': 'bg-quaternary/10 text-quaternary border-quaternary/30',
}

export default function GalleryModal({ activity, onClose }) {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!activity) return null

  const themeColor = themeColors[activity.theme] || 'bg-muted text-muted-fg border-border'

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-fg/60 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal content */}
        <motion.div
          className="relative w-full max-w-3xl mx-4 my-8 sm:my-16 bg-card rounded-3xl border-2 border-fg shadow-card overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-card border-2 border-fg rounded-full flex items-center justify-center shadow-pop hover:bg-secondary hover:text-white transition-colors"
            aria-label="关闭"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Carousel */}
          <div className="p-4 sm:p-6">
            <ImageCarousel photos={activity.photos} />
          </div>

          {/* Article content */}
          <div className="px-6 sm:px-8 pb-6 sm:pb-8">
            {/* Header */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${themeColor}`}>
                {activity.theme}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-muted-fg">
                <Calendar className="w-4 h-4" />
                {activity.date}
              </span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-fg mb-4">
              {activity.title}
            </h2>

            {/* Summary always visible */}
            <p className="text-muted-fg leading-relaxed mb-4">
              {activity.summary}
            </p>

            {/* Expandable content */}
            {activity.content && (
              <div>
                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="prose-custom space-y-4 border-t-2 border-dashed border-border pt-6 mt-2">
                        {renderContent(activity.content)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => setExpanded(!expanded)}
                  className="inline-flex items-center gap-2 text-accent font-bold text-sm mt-2 hover:underline"
                >
                  {expanded ? (
                    <>收起 <ChevronUp className="w-4 h-4" /></>
                  ) : (
                    <>展开全文 <ChevronDown className="w-4 h-4" /></>
                  )}
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
