import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Camera, Images, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import galleryData from '../data/gallery.json'

const themeIcons = {
  '夏校/冬校': '🏫',
  '志愿者/公益': '🤝',
}

const themeColors = {
  '夏校/冬校': 'bg-tertiary',
  '志愿者/公益': 'bg-quaternary',
}

export default function Gallery() {
  const totalPhotos = useMemo(() => galleryData.reduce((sum, a) => sum + a.photos.length, 0), [])

  return (
    <SectionWrapper>
      {/* Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-quaternary/10 text-quaternary border-2 border-quaternary/30 px-4 py-1.5 rounded-full text-sm font-bold mb-6"
        >
          <Camera className="w-4 h-4" />
          记录每一刻
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-heading font-extrabold text-4xl sm:text-5xl text-fg mb-4"
        >
          照片墙
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-muted-fg text-lg max-w-2xl mx-auto"
        >
          记录每一段值得回味的经历
        </motion.p>
      </div>

      {/* Activity list */}
      <div className="max-w-5xl mx-auto space-y-8">
        {galleryData.map((activity, i) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Link
              to={`/gallery/${activity.id}`}
              className="block group"
            >
              <div className="bg-card rounded-3xl border-2 border-fg overflow-hidden shadow-card hover:shadow-pop transition-all">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Photo */}
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <img
                      src={activity.photos[activity.coverIndex || 0].src}
                      alt={activity.photos[activity.coverIndex || 0].alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-fg/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className={`text-xs font-bold px-3 py-1.5 rounded-full text-white ${themeColors[activity.theme] || 'bg-muted-fg'}`}>
                        {themeIcons[activity.theme]} {activity.theme}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-fg/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      <Images className="w-3.5 h-3.5" />
                      {activity.photos.length} 张照片
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="text-sm text-muted-fg font-medium mb-2">
                      {activity.date}
                    </div>
                    <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-fg mb-3 group-hover:text-accent transition-colors leading-tight">
                      {activity.title}
                    </h2>
                    <p className="text-muted-fg leading-relaxed mb-4">
                      {activity.summary}
                    </p>
                    <div className="inline-flex items-center gap-2 text-accent font-bold text-sm">
                      查看完整故事
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

    </SectionWrapper>
  )
}
