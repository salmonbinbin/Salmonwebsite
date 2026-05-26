import { Link } from 'react-router-dom'
import { Sparkles, BarChart3, PenLine, ArrowRight } from 'lucide-react'
import Button from '../components/Button'
import Card from '../components/Card'
import Marquee from '../components/Marquee'
import Timeline from '../components/Timeline'
import ProjectCard from '../components/ProjectCard'
import BackgroundDecorations from '../components/BackgroundDecorations'
import SectionWrapper from '../components/SectionWrapper'
import timelineData from '../data/timeline.json'
import projectsData from '../data/projects.json'

const marqueeKeywords = ['React', 'TypeScript', 'AI', 'Product', 'Data', 'Tailwind', 'Node.js', 'Prototyping', 'Content Strategy', 'Figma', 'Python']

const pillars = [
  {
    icon: <Sparkles className="text-white w-7 h-7" />,
    iconBg: 'bg-accent',
    title: 'Rapid Prototyping',
    description: 'Turning ideas into working MVPs with React, AI tools, and fast iteration. Build fast, learn faster.',
  },
  {
    icon: <BarChart3 className="text-white w-7 h-7" />,
    iconBg: 'bg-secondary',
    title: 'Data & Visualization',
    description: 'Making sense of data to drive decisions — from interactive dashboards to analytical reports.',
  },
  {
    icon: <PenLine className="text-white w-7 h-7" />,
    iconBg: 'bg-tertiary',
    title: 'Content & Strategy',
    description: 'Writing about tech, product thinking, and operations. Communicating complex ideas clearly.',
  },
]

const shadowColors = ['shadow-card-pink', 'shadow-card-amber', 'shadow-card-emerald']

export default function Home() {
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
        <BackgroundDecorations variant="hero" />
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border-2 border-fg shadow-pop">
              <span className="w-2 h-2 bg-quaternary rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-muted-fg">CS Student & Builder</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.08] tracking-tight text-fg">
              Building at the{' '}
              <span className="text-accent underline decoration-tertiary decoration-[5px] underline-offset-[8px]">
                intersection
              </span>{' '}
              of code, product &amp; story
            </h1>

            <p className="text-lg text-muted-fg max-w-md leading-relaxed">
              I use code and AI to build products, visualize data, and tell compelling stories — bridging the gap between what gets built and why it matters.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <Button variant="primary" size="lg">
                  See My Work
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/writing">
                <Button variant="outline" size="lg">
                  Read My Writing
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-dot-grid opacity-50 -z-10 rotate-3 rounded-2xl" />
            <div className="bg-card p-4 rounded-3xl border-2 border-fg shadow-card relative z-10" style={{ borderRadius: '24px 24px 24px 0' }}>
              <div className="bg-muted rounded-2xl p-8 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full border-2 border-fg flex items-center justify-center animate-wiggle">
                    <Sparkles className="text-white w-6 h-6" />
                  </div>
                  <div className="h-3 bg-border rounded-full w-28" />
                </div>
                <div className="space-y-2">
                  <div className="h-2.5 bg-border rounded-full w-full" />
                  <div className="h-2.5 bg-border rounded-full w-3/4" />
                  <div className="h-2.5 bg-border rounded-full w-1/2" />
                </div>
                <div className="flex gap-3">
                  <div className="h-9 bg-accent rounded-lg w-20 border-2 border-fg shadow-pop" />
                  <div className="h-9 bg-quaternary rounded-lg w-20 border-2 border-fg shadow-pop" />
                </div>
              </div>
              <div className="absolute -top-5 -right-5 w-14 h-14 bg-tertiary rounded-full border-2 border-fg flex items-center justify-center shadow-pop">
                <span className="text-fg font-bold text-lg">★</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee items={marqueeKeywords} />

      {/* Three Pillars */}
      <SectionWrapper>
        <div className="text-center mb-14 space-y-3">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-fg">What I Do</h2>
          <p className="text-muted-fg text-lg max-w-xl mx-auto">Three ways I bring value — building, analyzing, and communicating.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-10 relative">
          <svg className="absolute top-1/2 left-0 w-full h-4 -translate-y-1/2 hidden sm:block -z-10" viewBox="0 0 1200 20">
            <path d="M100,10 Q300,10 400,10 T600,10 T800,10 T1100,10" stroke="#E2E8F0" strokeWidth="4" strokeDasharray="12,8" fill="none" />
          </svg>
          {pillars.map((p, i) => (
            <Card key={i} icon={p.icon} iconBg={p.iconBg} shadowColor={shadowColors[i]}>
              <div className="text-center space-y-3">
                <h3 className="font-heading font-bold text-xl text-fg">{p.title}</h3>
                <p className="text-muted-fg text-sm leading-relaxed">{p.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Journey Timeline */}
      <section className="py-20 sm:py-28 bg-muted border-y-2 border-fg relative">
        <div className="absolute inset-0 bg-dot-grid opacity-40" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-14 space-y-3">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-fg">My Journey</h2>
            <p className="text-muted-fg text-lg">From writing my first line of code to building things that matter.</p>
          </div>
          <Timeline events={timelineData} />
        </div>
      </section>

      {/* Featured Projects */}
      <SectionWrapper>
        <div className="text-center mb-14 space-y-3">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-fg">Featured Projects</h2>
          <p className="text-muted-fg text-lg max-w-xl mx-auto">A few things I've built. More on the Projects page.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {featuredProjects.map(p => (
            <ProjectCard key={p.id} project={p} featured={p.featured} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/projects">
            <Button variant="outline" size="lg">View All Projects →</Button>
          </Link>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="border-t-2 border-fg">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-fg">Let's Work Together</h2>
          <p className="text-muted-fg text-lg">I'm open to internships, collaborations, and interesting projects. Always happy to chat.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/about">
              <Button variant="primary" size="lg">
                Get in Touch
              </Button>
            </Link>
            <a href="mailto:hello@salmon.dev">
              <Button variant="secondary" size="lg" className="!bg-fg shadow-[6px_6px_0px_0px_var(--color-secondary)] hover:shadow-[8px_8px_0px_0px_var(--color-secondary)]">
                hello@salmon.dev
              </Button>
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
