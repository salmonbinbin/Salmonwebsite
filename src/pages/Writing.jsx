import { useState } from 'react'
import { Search } from 'lucide-react'
import WritingCard from '../components/WritingCard'
import SectionWrapper from '../components/SectionWrapper'
import writingsData from '../data/writings.json'

const allTags = ['All', ...new Set(writingsData.flatMap(w => w.tags))]

export default function Writing() {
  const [activeTag, setActiveTag] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = writingsData.filter(w => {
    const matchTag = activeTag === 'All' || w.tags.includes(activeTag)
    const matchSearch = search === '' || w.title.toLowerCase().includes(search.toLowerCase())
    return matchTag && matchSearch
  })

  return (
    <div className="pt-28 pb-10">
      <SectionWrapper>
        <div className="text-center mb-10 space-y-3">
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-fg">Writing</h1>
          <p className="text-muted-fg text-lg max-w-xl mx-auto">Thoughts on tech, product, and the craft of building things.</p>
        </div>

        <div className="max-w-xl mx-auto mb-10 space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-fg w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-card border-2 border-[#CBD5E1] rounded-lg text-fg placeholder-[#94A3B8] input-focus-shadow transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full border-2 border-fg font-bold text-sm transition-all ${
                  activeTag === tag
                    ? 'bg-fg text-white shadow-pop'
                    : 'bg-card text-fg hover:bg-muted shadow-pop'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-5">
          {filtered.length > 0 ? (
            filtered.map(w => <WritingCard key={w.id} article={w} />)
          ) : (
            <div className="text-center py-12 bg-muted rounded-2xl border-2 border-fg border-dashed">
              <p className="font-heading font-bold text-xl text-muted-fg">No articles found</p>
            </div>
          )}
        </div>
      </SectionWrapper>
    </div>
  )
}
