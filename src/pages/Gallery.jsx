import { useState, useMemo } from 'react'
import { Camera } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import PhotoCard from '../components/PhotoCard'
import GalleryModal from '../components/GalleryModal'
import galleryData from '../data/gallery.json'

const themes = ['全部', '夏校/冬校', '志愿者/公益']

export default function Gallery() {
  const [activeTheme, setActiveTheme] = useState('全部')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(() => {
    if (activeTheme === '全部') return galleryData
    return galleryData.filter(a => a.theme === activeTheme)
  }, [activeTheme])

  const grouped = useMemo(() => {
    const groups = {}
    filtered.forEach(a => {
      if (!groups[a.theme]) groups[a.theme] = []
      groups[a.theme].push(a)
    })
    return groups
  }, [filtered])

  return (
    <SectionWrapper>
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-quaternary/10 text-quaternary border-2 border-quaternary/30 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
          <Camera className="w-4 h-4" />
          记录每一刻
        </div>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-fg mb-4">
          照片墙
        </h1>
        <p className="text-muted-fg text-lg max-w-2xl mx-auto">
          记录每一段值得回味的经历
        </p>
      </div>

      {/* Theme filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {themes.map(theme => (
          <button
            key={theme}
            onClick={() => setActiveTheme(theme)}
            className={`px-5 py-2 rounded-full border-2 border-fg font-bold text-sm transition-all ${
              activeTheme === theme
                ? 'bg-fg text-white shadow-pop'
                : 'bg-card text-fg hover:bg-muted'
            }`}
          >
            {theme}
          </button>
        ))}
      </div>

      {/* Masonry by theme */}
      {Object.entries(grouped).map(([theme, activities]) => (
        <div key={theme} className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-heading font-extrabold text-2xl text-fg whitespace-nowrap">
              {theme}
            </h2>
            <div className="flex-1 h-0.5 bg-border" />
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
            {activities.map(activity => (
              <PhotoCard
                key={activity.id}
                activity={activity}
                onClick={() => setSelected(activity)}
              />
            ))}
          </div>
        </div>
      ))}

      {filtered.length === 0 && (
        <div className="text-center py-16 border-2 border-dashed border-border rounded-2xl">
          <Camera className="w-10 h-10 text-muted-fg mx-auto mb-4" />
          <p className="text-muted-fg font-medium">暂无该主题的照片</p>
        </div>
      )}

      {/* Modal */}
      {selected && (
        <GalleryModal activity={selected} onClose={() => setSelected(null)} />
      )}
    </SectionWrapper>
  )
}
