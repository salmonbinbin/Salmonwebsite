import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Camera } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import galleryData from '../data/gallery.json'
import renderContent from '../utils/renderContent'

const themeColors = {
  '夏校/冬校': 'bg-tertiary/10 text-tertiary border-tertiary/30',
  '志愿者/公益': 'bg-quaternary/10 text-quaternary border-quaternary/30',
}

export default function GalleryDetail() {
  const { id } = useParams()
  const activity = galleryData.find(a => a.id === id)

  if (!activity) {
    return (
      <div className="pt-28 pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center py-16">
            <h1 className="font-heading font-extrabold text-3xl text-fg mb-4">活动未找到</h1>
            <p className="text-muted-fg mb-8">没有找到这段经历，可能链接有误。</p>
            <Link to="/gallery">
              <Button variant="primary">返回照片墙</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const themeColor = themeColors[activity.theme] || 'bg-muted text-muted-fg border-border'

  return (
    <div className="pt-28 pb-10">
      <div className="max-w-6xl mx-auto px-6">

        {/* Back */}
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 text-muted-fg hover:text-accent transition-colors mb-10 font-semibold text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          照片墙
        </Link>

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${themeColor}`}>
              {activity.theme}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-fg">
              <Calendar className="w-4 h-4" />
              {activity.date}
            </span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-fg mb-4">
            {activity.title}
          </h1>
          <p className="text-muted-fg text-lg leading-relaxed">
            {activity.summary}
          </p>
        </div>

        {/* Photo Masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 mb-16">
          {activity.photos.map((photo, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <div className="bg-card rounded-2xl border-2 border-fg overflow-hidden shadow-card">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Article */}
        {activity.content && (
          <motion.article
            className="max-w-3xl mx-auto bg-card rounded-3xl border-2 border-fg p-8 sm:p-10 shadow-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6 pb-6 border-b-2 border-dashed border-border">
              <Camera className="w-5 h-5 text-accent" />
              <h2 className="font-heading font-extrabold text-xl text-fg">我的故事</h2>
            </div>
            <div className="prose-custom space-y-4 text-lg">
              {renderContent(activity.content)}
            </div>
          </motion.article>
        )}

        {/* Back button at bottom */}
        <div className="flex justify-center mt-10">
          <Link to="/gallery">
            <Button variant="outline" size="lg">
              <ArrowLeft className="w-5 h-5" />
              返回照片墙
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
