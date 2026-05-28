# Gallery Photo Wall Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a photo gallery page with masonry layout, theme filtering, and modal with image carousel + expandable article.

**Architecture:** Static JSON-driven gallery page following existing patterns. Photos stored in `public/gallery/`, data in `src/data/gallery.json`. Four new components: `ImageCarousel`, `GalleryModal`, `PhotoCard`, `Gallery`. Reuses `renderContent` utility extracted from `WritingDetail`.

**Tech Stack:** React 19, Tailwind CSS 4, Framer Motion, Lucide React

---

## File Structure

| File | Action | Responsibility |
|------|--------|----------------|
| `public/gallery/*` | Create | Migrated & renamed activity photos |
| `src/data/gallery.json` | Create | Activity data (themes, photos, articles) |
| `src/utils/renderContent.jsx` | Create | Shared markdown-like content renderer |
| `src/pages/WritingDetail.jsx` | Modify | Import renderContent from utils |
| `src/components/ImageCarousel.jsx` | Create | Photo carousel with arrows + dots |
| `src/components/GalleryModal.jsx` | Create | Modal overlay with carousel + article |
| `src/components/PhotoCard.jsx` | Create | Masonry card with stacked photos |
| `src/pages/Gallery.jsx` | Create | Gallery page with filtering + masonry |
| `src/App.jsx` | Modify | Add /gallery route |
| `src/components/Navbar.jsx` | Modify | Add 照片墙 nav link |

---

### Task 1: Migrate Photos to public/gallery/

**Files:**
- Create: `public/gallery/` (directory with renamed photos)

- [ ] **Step 1: Create gallery directory and copy photos**

```bash
mkdir -p /Users/salmon/Desktop/Salmon-website/public/gallery

# Hangzhou summer school (14 photos)
src_dir="/Users/salmon/Desktop/pthoto/25Hangzhou summer school"
i=1; for f in "$src_dir"/*; do cp "$f" "/Users/salmon/Desktop/Salmon-website/public/gallery/hangzhou-summer-$i.jpg"; i=$((i+1)); done

# Minxin summer school (12 photos)
src_dir="/Users/salmon/Desktop/pthoto/25minxin sumer school"
i=1; for f in "$src_dir"/*; do cp "$f" "/Users/salmon/Desktop/Salmon-website/public/gallery/minxin-summer-$i.jpg"; i=$((i+1)); done

# Minxin + Sanya winter school (36 photos)
src_dir="/Users/salmon/Desktop/pthoto/26minxin and sanya winter school"
i=1; for f in "$src_dir"/*; do cp "$f" "/Users/salmon/Desktop/Salmon-website/public/gallery/minxin-sanya-winter-$i.jpg"; i=$((i+1)); done

# Volunteer and friends (20 photos)
src_dir="/Users/salmon/Desktop/pthoto/volunteer and friends"
i=1; for f in "$src_dir"/*; do cp "$f" "/Users/salmon/Desktop/Salmon-website/public/gallery/volunteer-$i.jpg"; i=$((i+1)); done
```

- [ ] **Step 2: Verify photo count**

```bash
ls /Users/salmon/Desktop/Salmon-website/public/gallery/ | wc -l
```

Expected: 82 files

- [ ] **Step 3: Commit**

```bash
git add public/gallery/
git commit -m "feat: add gallery photos from activity experiences"
```

---

### Task 2: Create gallery.json Data File

**Files:**
- Create: `src/data/gallery.json`

- [ ] **Step 1: Write gallery.json**

Create `src/data/gallery.json` with this content (photos selected as representative samples from each set):

```json
[
  {
    "id": "hangzhou-summer-2025",
    "theme": "夏校/冬校",
    "title": "2025 杭州云谷夏校",
    "date": "2025-07",
    "summary": "在杭州云谷学校参与教学实践与文化交流，体验不一样的教育理念。",
    "content": "## 云谷夏校体验\n\n2025年夏天，我有幸参加了杭州云谷学校的夏校项目。在这里，我不仅体验了创新的教育模式，还结识了来自各地志同道合的朋友。\n\n## 教学实践\n\n作为夏校的一员，我参与了多项教学实践活动，深入了解了云谷学校**以学生为中心**的教育理念。这种注重批判性思维和创造力培养的方式，让我对教育有了全新的认识。\n\n## 文化交流\n\n除了学术内容，夏校还安排了丰富的文化交流活动。我们一起探索杭州的历史文化，在西湖边畅谈理想，在实践中学习，在交流中成长。",
    "coverIndex": 0,
    "photos": [
      { "src": "/gallery/hangzhou-summer-1.jpg", "alt": "杭州云谷夏校" },
      { "src": "/gallery/hangzhou-summer-2.jpg", "alt": "校园活动" },
      { "src": "/gallery/hangzhou-summer-3.jpg", "alt": "小组讨论" },
      { "src": "/gallery/hangzhou-summer-4.jpg", "alt": "文化交流" },
      { "src": "/gallery/hangzhou-summer-5.jpg", "alt": "合影留念" }
    ]
  },
  {
    "id": "minxin-summer-2025",
    "theme": "夏校/冬校",
    "title": "2025 广州民心港人子弟学校夏校",
    "date": "2025-08",
    "summary": "在广州民心港人子弟学校担任夏校活动参与者，体验港式教育环境。",
    "content": "## 民心夏校\n\n2025年暑期，我参加了广州民心港人子弟学校的夏校项目。这是一次独特的跨文化教育体验，让我深入了解了港式教育的特点与魅力。\n\n## 跨文化体验\n\n在民心夏校，我与来自不同背景的同学一起学习和生活。**粤语与普通话的交融**、中西文化的碰撞，让我对多元文化有了更深的理解和包容。\n\n## 成长与收获\n\n这段经历不仅拓宽了我的视野，也让我学会了在多元环境中沟通协作。每一次讨论、每一场活动都是宝贵的成长机会。",
    "coverIndex": 0,
    "photos": [
      { "src": "/gallery/minxin-summer-1.jpg", "alt": "民心夏校" },
      { "src": "/gallery/minxin-summer-2.jpg", "alt": "课堂活动" },
      { "src": "/gallery/minxin-summer-3.jpg", "alt": "团队协作" },
      { "src": "/gallery/minxin-summer-4.jpg", "alt": "校园风景" }
    ]
  },
  {
    "id": "minxin-sanya-winter-2026",
    "theme": "夏校/冬校",
    "title": "2026 民心+三亚冬校",
    "date": "2026-01",
    "summary": "先后参与民心港人子弟学校冬校和三亚未来领导力学校冬校，担任后勤老师。",
    "content": "## 双城冬校之旅\n\n2026年冬天，我开启了一段特别的旅程——先后参加了广州民心港人子弟学校冬校和三亚未来领导力学校冬校，身份从参与者转变为**后勤老师**。\n\n## 民心冬校：角色转变\n\n再次来到民心，但这次我的身份不同了。作为后勤老师，我需要协调各项事务，确保活动顺利进行。从参与者到组织者，这个转变让我学会了**换位思考**和**全局统筹**。\n\n## 三亚未来领导力学校\n\n三亚的冬校聚焦领导力培养。在碧海蓝天的环境中，我们通过团队挑战、户外拓展等活动，探索领导力的本质。这次经历让我认识到，真正的领导力不是指挥他人，而是**激发团队的潜能**。\n\n## 收获\n\n两段冬校经历，两种不同的角色，让我对教育和领导力有了更立体的理解。",
    "coverIndex": 0,
    "photos": [
      { "src": "/gallery/minxin-sanya-winter-1.jpg", "alt": "冬校活动" },
      { "src": "/gallery/minxin-sanya-winter-2.jpg", "alt": "团队挑战" },
      { "src": "/gallery/minxin-sanya-winter-3.jpg", "alt": "三亚校园" },
      { "src": "/gallery/minxin-sanya-winter-4.jpg", "alt": "合影" },
      { "src": "/gallery/minxin-sanya-winter-5.jpg", "alt": "户外活动" },
      { "src": "/gallery/minxin-sanya-winter-6.jpg", "alt": "课堂互动" }
    ]
  },
  {
    "id": "volunteer-chaoyang",
    "theme": "志愿者/公益",
    "title": "朝阳行动·星火计划",
    "date": "2024-07",
    "summary": "共青团新会区义工联朝阳行动项目组执行骨干，参与策划宣传活动。",
    "content": "## 朝阳行动\n\n作为共青团新会区委员会义工联合会朝阳行动项目组的执行骨干，我深度参与了2024、2025年江门市新会区**朝阳行动星火计划**和**青春赋能计划**等多项公益活动的策划与执行。\n\n## 内容创作\n\n在项目中，我负责宣传内容的产出。撰写了**公众号推文10余篇**，制作了若干短视频，累计阅读量和点赞量**超过1万**。通过内容创作，我学会了如何用故事打动人，如何用数据驱动内容策略。\n\n## 团队协作\n\n作为执行骨干，我需要与团队成员密切配合，协调各方资源。这段经历让我深刻理解了**项目管理**和**跨部门协作**的重要性，也锻炼了我的沟通能力和执行力。\n\n## 社会价值\n\n最让我有成就感的，是看到这些活动真正帮助到了需要的人。每一次志愿服务都是一次双向的成长。",
    "coverIndex": 0,
    "photos": [
      { "src": "/gallery/volunteer-1.jpg", "alt": "朝阳行动" },
      { "src": "/gallery/volunteer-2.jpg", "alt": "志愿活动" },
      { "src": "/gallery/volunteer-3.jpg", "alt": "团队合影" },
      { "src": "/gallery/volunteer-4.jpg", "alt": "活动现场" },
      { "src": "/gallery/volunteer-5.jpg", "alt": "宣传工作" }
    ]
  }
]
```

- [ ] **Step 2: Commit**

```bash
git add src/data/gallery.json
git commit -m "feat: add gallery data with activities and photo references"
```

---

### Task 3: Extract renderContent Utility

**Files:**
- Create: `src/utils/renderContent.jsx`
- Modify: `src/pages/WritingDetail.jsx`

- [ ] **Step 1: Create the utility file**

Create `src/utils/renderContent.jsx`:

```jsx
export default function renderContent(text) {
  return text.split('\n\n').map((block, i) => {
    if (block.startsWith('## ')) {
      return <h2 key={i} className="font-heading font-bold text-2xl text-fg mt-10 mb-4">{block.replace('## ', '')}</h2>
    }
    const parts = block.split(/(\*\*.*?\*\*)/g)
    return (
      <p key={i} className="text-muted-fg leading-relaxed">
        {parts.map((seg, j) => {
          if (seg.startsWith('**') && seg.endsWith('**')) {
            return <span key={j} className="text-accent font-medium">{seg.slice(2, -2)}</span>
          }
          return seg
        })}
      </p>
    )
  })
}
```

- [ ] **Step 2: Update WritingDetail.jsx to use the utility**

Replace lines 1-32 of `src/pages/WritingDetail.jsx` with:

```jsx
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import Button from '../components/Button'
import writingsData from '../data/writings.json'
import renderContent from '../utils/renderContent'

const tagColors = {
  '前端': 'bg-accent/10 text-accent border-accent/30',
  '产品': 'bg-secondary/10 text-secondary border-secondary/30',
  '数据': 'bg-tertiary/10 text-tertiary border-tertiary/30',
  'AI': 'bg-quaternary/10 text-quaternary border-quaternary/30',
  '内容': 'bg-accent/10 text-accent border-accent/30',
}
```

(Remove the inline `renderContent` function definition from lines 14-32, keep everything else unchanged.)

- [ ] **Step 3: Verify dev server still works**

```bash
cd /Users/salmon/Desktop/Salmon-website && npm run dev -- --host &
sleep 3
curl -s http://localhost:5173/writing | head -5
```

- [ ] **Step 4: Commit**

```bash
git add src/utils/renderContent.jsx src/pages/WritingDetail.jsx
git commit -m "refactor: extract renderContent to shared utility"
```

---

### Task 4: Create ImageCarousel Component

**Files:**
- Create: `src/components/ImageCarousel.jsx`

- [ ] **Step 1: Write ImageCarousel component**

Create `src/components/ImageCarousel.jsx`:

```jsx
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ImageCarousel.jsx
git commit -m "feat: add ImageCarousel component with arrows and dots"
```

---

### Task 5: Create GalleryModal Component

**Files:**
- Create: `src/components/GalleryModal.jsx`

- [ ] **Step 1: Write GalleryModal component**

Create `src/components/GalleryModal.jsx`:

```jsx
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/GalleryModal.jsx
git commit -m "feat: add GalleryModal with carousel and expandable article"
```

---

### Task 6: Create PhotoCard Component

**Files:**
- Create: `src/components/PhotoCard.jsx`

- [ ] **Step 1: Write PhotoCard component**

Create `src/components/PhotoCard.jsx`:

```jsx
const themeColors = {
  '夏校/冬校': { pill: 'bg-tertiary/10 text-tertiary border-tertiary/30', shadow: 'shadow-card-amber' },
  '志愿者/公益': { pill: 'bg-quaternary/10 text-quaternary border-quaternary/30', shadow: 'shadow-card-emerald' },
}

export default function PhotoCard({ activity, onClick }) {
  const cover = activity.photos[activity.coverIndex || 0]
  const peek1 = activity.photos[(activity.coverIndex || 0) + 1]
  const peek2 = activity.photos[(activity.coverIndex || 0) + 2]
  const colors = themeColors[activity.theme] || { pill: 'bg-muted text-muted-fg border-border', shadow: 'shadow-card' }

  return (
    <div
      className="break-inside-avoid mb-5 cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative">
        {/* Peek photos behind */}
        {peek1 && (
          <div
            className="absolute top-2 left-2 right-[-4px] h-full rounded-2xl border-2 border-fg overflow-hidden"
            style={{ zIndex: 1 }}
          >
            <img src={peek1.src} alt="" className="w-full h-full object-cover opacity-50" />
          </div>
        )}
        {peek2 && (
          <div
            className="absolute top-4 left-4 right-[-8px] h-full rounded-2xl border-2 border-fg overflow-hidden"
            style={{ zIndex: 0 }}
          >
            <img src={peek2.src} alt="" className="w-full h-full object-cover opacity-25" />
          </div>
        )}

        {/* Main cover photo */}
        <div
          className={`relative bg-card rounded-2xl border-2 border-fg overflow-hidden ${colors.shadow} transition-all group-hover:shadow-pop`}
          style={{ zIndex: 2 }}
        >
          <img
            src={cover.src}
            alt={cover.alt}
            className="w-full h-auto block"
          />
        </div>
      </div>

      {/* Info below */}
      <div className="mt-3 space-y-1.5">
        <h3 className="font-heading font-bold text-lg text-fg group-hover:text-accent transition-colors">
          {activity.title}
        </h3>
        <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${colors.pill}`}>
          {activity.theme}
        </span>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/PhotoCard.jsx
git commit -m "feat: add PhotoCard with stacked photo effect"
```

---

### Task 7: Create Gallery Page

**Files:**
- Create: `src/pages/Gallery.jsx`

- [ ] **Step 1: Write Gallery page component**

Create `src/pages/Gallery.jsx`:

```jsx
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
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/Gallery.jsx
git commit -m "feat: add Gallery page with masonry layout and theme filtering"
```

---

### Task 8: Wire Up Routing and Navigation

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/components/Navbar.jsx`

- [ ] **Step 1: Update App.jsx**

Replace the imports and routes in `src/App.jsx`:

```jsx
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Writing from './pages/Writing'
import WritingDetail from './pages/WritingDetail'
import Gallery from './pages/Gallery'
import About from './pages/About'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/writing/:id" element={<WritingDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 2: Update Navbar.jsx**

Add the gallery link to the `links` array in `src/components/Navbar.jsx` (line 6-10):

```jsx
const links = [
  { to: '/', label: '首页' },
  { to: '/projects', label: '项目' },
  { to: '/writing', label: '文章' },
  { to: '/gallery', label: '照片墙' },
  { to: '/about', label: '关于' },
]
```

- [ ] **Step 3: Test the app**

Run `npm run dev` and verify:
- `/gallery` loads correctly
- Navbar shows "照片墙" link with active state
- Theme filtering works
- Clicking a card opens the modal
- Modal carousel and expand/collapse work
- ESC and backdrop click close the modal

- [ ] **Step 4: Commit**

```bash
git add src/App.jsx src/components/Navbar.jsx
git commit -m "feat: add gallery route and nav link"
```

---

### Task 9: Final Verification

- [ ] **Step 1: Run dev server and test all flows**

```bash
cd /Users/salmon/Desktop/Salmon-website && npm run dev
```

Manual test checklist:
- [ ] Home page loads without errors
- [ ] Navbar shows 照片墙 link
- [ ] `/gallery` page shows masonry layout with photos
- [ ] Theme filter pills work (全部, 夏校/冬校, 志愿者/公益)
- [ ] Photo cards show stacked photo effect
- [ ] Clicking a card opens GalleryModal
- [ ] Image carousel arrows work
- [ ] Keyboard arrow keys navigate carousel
- [ ] Dots indicator works
- [ ] "展开全文" expands article content
- [ ] "收起" collapses article content
- [ ] ESC closes modal
- [ ] Backdrop click closes modal
- [ ] Responsive: mobile (1 col), tablet (2 col), desktop (3 col)
- [ ] Other pages (Writing, Projects) still work correctly

- [ ] **Step 2: Commit any final fixes**

```bash
git add -A
git commit -m "fix: polish gallery photo wall based on testing"
```
