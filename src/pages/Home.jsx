import { Link } from 'react-router-dom'
import { Sparkles, BarChart3, PenLine, ArrowRight, Star, Trophy, FolderGit2, FileText, GraduationCap } from 'lucide-react'
import Button from '../components/Button'
import Card from '../components/Card'
import Marquee from '../components/Marquee'
import Timeline from '../components/Timeline'
import ProjectCard from '../components/ProjectCard'
import BackgroundDecorations from '../components/BackgroundDecorations'
import SectionWrapper from '../components/SectionWrapper'
import timelineData from '../data/timeline.json'
import projectsData from '../data/projects.json'

const marqueeKeywords = ['React', 'Vue', 'Spring Boot', 'FastAPI', '微信小程序', 'TypeScript', 'AI', '产品', '运营', '内容', 'Tailwind', 'Node.js', 'Python']

const pillars = [
  {
    icon: <Sparkles className="text-white w-7 h-7" />,
    iconBg: 'bg-accent',
    title: '做开发',
    description: '前端 Vue/React 都写，后端 Spring Boot 和 FastAPI 都用，微信小程序也做过。用 AI 工具辅助，一个人能搞定全栈。',
  },
  {
    icon: <BarChart3 className="text-white w-7 h-7" />,
    iconBg: 'bg-secondary',
    title: '做运营',
    description: '在 Elite Journey 做过运营实习，跟过四个冬夏令营的后勤统筹。懂怎么把一件事从策划推到落地。',
  },
  {
    icon: <PenLine className="text-white w-7 h-7" />,
    iconBg: 'bg-tertiary',
    title: '做内容',
    description: '在朝阳行动项目组写了 10+ 篇公众号推文，拍了短视频，累计阅读过万。会写、会拍、会传播。',
  },
]

const stats = [
  { icon: <Trophy className="w-6 h-6" />, value: '3', label: '比赛获奖', color: 'text-tertiary' },
  { icon: <FolderGit2 className="w-6 h-6" />, value: '4+', label: '完整项目', color: 'text-accent' },
  { icon: <FileText className="w-6 h-6" />, value: '10+', label: '公众号推文', color: 'text-secondary' },
  { icon: <GraduationCap className="w-6 h-6" />, value: '4', label: '夏校经历', color: 'text-quaternary' },
]

const shadowColors = ['shadow-card-pink', 'shadow-card-amber', 'shadow-card-emerald']

export default function Home() {
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
        <BackgroundDecorations variant="hero" />
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 space-y-6">
            <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border-2 border-fg shadow-pop">
              <span className="w-2 h-2 bg-quaternary rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-muted-fg">大三 / 计算机科学 / 不只写代码</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.08] tracking-tight text-fg">
              我是 Salmon，一个{' '}
              <span className="text-accent underline decoration-tertiary decoration-[5px] underline-offset-[8px]">
                不只写代码
              </span>{' '}
              的 builder
            </h1>

            <p className="text-lg text-muted-fg max-w-lg leading-relaxed">
              能写前端，也能写后端；做过产品，也做过运营。喜欢在技术和业务中间那座桥上跑来跑去——把需求翻译成方案，把想法落地成东西。
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <Button variant="primary" size="lg">
                  看看我做了什么
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/writing">
                <Button variant="outline" size="lg">
                  读点东西
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative hidden md:block md:col-span-2">
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
                <Star className="text-fg w-5 h-5 fill-fg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-10 bg-muted border-y-2 border-fg">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center space-y-1">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-fg bg-card shadow-pop ${s.color}`}>
                  {s.icon}
                </div>
                <div className="font-heading font-extrabold text-3xl text-fg">{s.value}</div>
                <div className="text-muted-fg text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee items={marqueeKeywords} />

      {/* Three Pillars */}
      <SectionWrapper>
        <div className="text-center mb-14 space-y-3">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-fg">我能做什么</h2>
          <p className="text-muted-fg text-lg max-w-xl mx-auto">开发、运营、内容——三件事我都做，而且喜欢把它们串起来。</p>
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
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-fg">我是怎么走到这里的</h2>
            <p className="text-muted-fg text-lg">从第一行代码，到做出有人用的东西。</p>
          </div>
          <Timeline events={timelineData} />
        </div>
      </section>

      {/* Featured Projects */}
      <SectionWrapper>
        <div className="text-center mb-14 space-y-3">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-fg">做过的东西</h2>
          <p className="text-muted-fg text-lg max-w-xl mx-auto">几个拿过奖的项目，还有更多在项目页。</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {featuredProjects.map(p => (
            <ProjectCard key={p.id} project={p} featured={p.featured} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/projects">
            <Button variant="outline" size="lg">看全部 →</Button>
          </Link>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="border-t-2 border-fg">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-fg">聊一聊</h2>
          <p className="text-muted-fg text-lg">在找实习，也欢迎聊聊合作或者有意思的想法。不一定非得是技术岗——运营、产品、内容相关的也可以。</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/about">
              <Button variant="primary" size="lg">
                给我发邮件
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
