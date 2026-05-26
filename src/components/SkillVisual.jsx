import { useState } from 'react'

const categoryColorMap = {
  Frontend: 'var(--color-accent)',
  Backend: 'var(--color-quaternary)',
  Tech: 'var(--color-secondary)',
  Data: 'var(--color-tertiary)',
  Product: 'var(--color-accent)',
  Content: 'var(--color-quaternary)',
}

const categoryBgMap = {
  Frontend: 'rgba(99,102,241,0.15)',
  Backend: 'rgba(16,185,129,0.15)',
  Tech: 'rgba(236,72,153,0.15)',
  Data: 'rgba(245,158,11,0.15)',
  Product: 'rgba(99,102,241,0.15)',
  Content: 'rgba(16,185,129,0.15)',
}

export default function SkillVisual({ skills }) {
  const [activeCategory, setActiveCategory] = useState(null)
  const categories = [...new Set(skills.map(s => s.category))]

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
            className={`px-5 py-2 rounded-full border-2 border-fg font-bold text-sm shadow-pop transition-all ${
              activeCategory === cat || activeCategory === null
                ? 'bg-fg text-white'
                : 'bg-card text-fg hover:bg-muted'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 justify-center max-w-lg mx-auto">
        {skills
          .filter(s => !activeCategory || s.category === activeCategory)
          .map((skill) => (
            <div
              key={skill.name}
              className="px-4 py-3 rounded-2xl border-2 border-fg shadow-pop cursor-default hover:scale-105 transition-transform"
              style={{
                backgroundColor: categoryBgMap[skill.category] || 'rgba(99,102,241,0.15)',
                color: categoryColorMap[skill.category] || 'var(--color-accent)',
              }}
            >
              <span className="font-bold text-sm">{skill.name}</span>
            </div>
          ))}
      </div>
    </div>
  )
}
