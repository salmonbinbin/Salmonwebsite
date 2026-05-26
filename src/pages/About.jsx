import { Sparkles } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import SkillVisual from '../components/SkillVisual'
import ContactForm from '../components/ContactForm'
import skillsData from '../data/skills.json'

export default function About() {
  return (
    <div className="pt-28 pb-10">
      {/* Bio */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border-2 border-fg shadow-pop mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold uppercase tracking-widest text-muted-fg">Nice to meet you</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-fg mb-8">
            Hi, I'm <span className="text-accent">Salmon</span>
          </h1>

          <div className="space-y-5 text-muted-fg text-lg leading-relaxed">
            <p>
              I'm a Computer Science student who believes the best products are built by people who understand both the <strong className="text-fg">how</strong> and the <strong className="text-fg">why</strong>. I don't want to just write code — I want to understand what makes a product useful, how to measure its impact, and how to tell its story.
            </p>
            <p>
              My sweet spot is the intersection of <span className="text-accent font-semibold">frontend engineering</span>, <span className="text-secondary font-semibold">product thinking</span>, and <span className="text-tertiary font-semibold">content strategy</span>. I use AI tools to prototype fast, data to guide decisions, and writing to clarify my thinking.
            </p>
            <p>
              When I'm not building, you'll find me reading about product design, experimenting with new AI tools, or writing about what I've learned. I'm currently looking for opportunities where I can bring this multi-disciplinary approach to real products.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Skills */}
      <SectionWrapper className="bg-muted border-y-2 border-fg">
        <div className="text-center mb-10 space-y-3">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-fg">Skills & Toolkit</h2>
          <p className="text-muted-fg text-lg max-w-xl mx-auto">Click a category to filter. Not just what I know — how I combine them.</p>
        </div>
        <SkillVisual skills={skillsData} />
      </SectionWrapper>

      {/* Contact */}
      <SectionWrapper id="contact">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-10 space-y-3">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-fg">Get in Touch</h2>
            <p className="text-muted-fg text-lg">Let's talk about projects, opportunities, or ideas.</p>
          </div>
          <ContactForm />
        </div>
      </SectionWrapper>
    </div>
  )
}
