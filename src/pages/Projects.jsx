import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import SectionWrapper from '../components/SectionWrapper'
import projectsData from '../data/projects.json'

const allTags = ['All', ...new Set(projectsData.flatMap(p => p.tags))]

export default function Projects() {
  const [activeTag, setActiveTag] = useState('All')
  const filtered = activeTag === 'All'
    ? projectsData
    : projectsData.filter(p => p.tags.includes(activeTag))

  return (
    <div className="pt-28 pb-10">
      <SectionWrapper>
        <div className="text-center mb-10 space-y-3">
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-fg">Projects</h1>
          <p className="text-muted-fg text-lg max-w-xl mx-auto">Things I've built — from quick prototypes to full applications.</p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-5 py-2.5 rounded-full border-2 border-fg font-bold text-sm transition-all ${
                activeTag === tag
                  ? 'bg-accent text-white shadow-pop'
                  : 'bg-card text-fg hover:bg-muted shadow-pop'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 gap-6">
            {filtered.map(p => (
              <ProjectCard key={p.id} project={p} featured={p.featured} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-muted rounded-2xl border-2 border-fg border-dashed">
            <p className="font-heading font-bold text-2xl text-muted-fg mb-2">Nothing here yet</p>
            <p className="text-muted-fg">Building something cool in this category — check back soon!</p>
          </div>
        )}
      </SectionWrapper>
    </div>
  )
}
