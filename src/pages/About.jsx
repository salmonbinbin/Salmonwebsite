import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, MapPin, Mail, Copy, Check, MessageCircle, Video, ArrowUpRight } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import SkillVisual from '../components/SkillVisual'
import skillsData from '../data/skills.json'
import { EMAIL } from '../data/contact'

export default function About() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = EMAIL
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="pt-28 pb-10">
      {/* Bio */}
      <SectionWrapper>
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border-2 border-fg shadow-pop mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold uppercase tracking-widest text-muted-fg">关于我</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-fg mb-6">
            你好，我是 <span className="text-accent">Salmon</span>。
          </h1>

          <div className="max-w-3xl space-y-4 text-muted-fg text-lg leading-relaxed">
            <p>广州商学院计算机科学与技术专业在读。我做网站与 AI 应用，也参与过市场运营和冬夏令营的现场执行。对我来说，先把问题说清楚，再把方案做出来，同样重要。</p>
            <p>目前关注产品与技术结合的机会，希望继续练习需求梳理、方案沟通和开发落地。</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {[
              {
                title: '从需求到作品',
                description: '校园 AI 助手、健康管理系统和本地美食网站，分别记录了我处理不同场景需求的方法。',
                to: '/projects',
                label: '看项目案例',
                color: 'bg-accent/10',
              },
              {
                title: '从方案到现场',
                description: '在 Elite Journey 参与文案与活动执行，在 CSSC 冬夏令营参与后勤和助教协作。',
                to: '/gallery',
                label: '看活动记录',
                color: 'bg-tertiary/15',
              },
              {
                title: '从经历到表达',
                description: '在朝阳行动参与推文与短视频制作，也把开发和运营中的思考整理成文章。',
                to: '/writing',
                label: '读我的文章',
                color: 'bg-secondary/10',
              },
            ].map(item => (
              <div key={item.title} className={`${item.color} border-2 border-fg rounded-2xl p-6 shadow-card flex flex-col`}>
                <h2 className="font-heading font-extrabold text-xl text-fg mb-3">{item.title}</h2>
                <p className="text-muted-fg text-sm leading-relaxed flex-1">{item.description}</p>
                <Link to={item.to} className="inline-flex items-center gap-1 text-accent font-bold text-sm mt-6 hover:underline">
                  {item.label} <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 mt-9 text-sm text-muted-fg">
            <MapPin className="w-4 h-4" />
            <span>广东 · 新会</span>
          </div>
        </div>
      </SectionWrapper>

      {/* Skills */}
      <SectionWrapper className="bg-muted border-y-2 border-fg">
        <div className="text-center mb-10 space-y-3">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-fg">我会的东西</h2>
          <p className="text-muted-fg text-lg max-w-xl mx-auto">点一下分类可以筛选。不只技术——运营和内容也是我能做的事情。</p>
        </div>
        <SkillVisual skills={skillsData} />
      </SectionWrapper>

      {/* Contact */}
      <SectionWrapper id="contact">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10 space-y-3">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-fg">联系我</h2>
            <p className="text-muted-fg text-lg">聊聊项目、合作或者有意思的想法。</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Email */}
            <div className="bg-card rounded-2xl border-2 border-fg p-6 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border-2 border-accent/30 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-lg text-fg mb-1">邮箱</h3>
              <p className="text-sm text-muted-fg mb-4 truncate">{EMAIL}</p>
              <div className="flex gap-2">
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent('来自网站的联系')}`}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-accent text-white rounded-xl border-2 border-fg font-bold text-sm shadow-pop hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_var(--color-fg)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_var(--color-fg)] transition-all"
                >
                  <Mail className="w-4 h-4" />
                  发邮件
                </a>
                <button
                  onClick={handleCopy}
                  className="flex items-center justify-center gap-1.5 px-3 py-2 bg-card text-fg rounded-xl border-2 border-fg font-bold text-sm shadow-pop hover:bg-muted transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-quaternary" /> : <Copy className="w-4 h-4" />}
                  {copied ? '已复制' : '复制'}
                </button>
              </div>
            </div>

            {/* WeChat */}
            <div className="bg-card rounded-2xl border-2 border-fg p-6 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-quaternary/10 border-2 border-quaternary/30 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-quaternary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-fg mb-1">微信</h3>
              <p className="text-sm text-muted-fg mb-4">扫码添加好友</p>
              <div className="bg-muted rounded-xl border-2 border-border overflow-hidden">
                <img
                  src="/contact/wechat-qr.png"
                  alt="微信二维码"
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="hidden flex-col items-center justify-center py-8 text-muted-fg">
                  <MessageCircle className="w-6 h-6 mb-2 opacity-40" />
                  <p className="text-xs">二维码待添加</p>
                </div>
              </div>
            </div>

            {/* Douyin */}
            <div className="bg-card rounded-2xl border-2 border-fg p-6 shadow-card sm:col-span-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 border-2 border-secondary/30 flex items-center justify-center shrink-0">
                  <Video className="w-6 h-6 text-secondary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading font-bold text-lg text-fg mb-1">抖音</h3>
                  <p className="text-sm text-muted-fg">关注我的抖音</p>
                </div>
              </div>
              <div className="mt-4 bg-muted rounded-xl border-2 border-border overflow-hidden max-w-xs">
                <img
                  src="/contact/douyin-qr.png"
                  alt="抖音二维码"
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="hidden flex-col items-center justify-center py-8 text-muted-fg">
                  <Video className="w-6 h-6 mb-2 opacity-40" />
                  <p className="text-xs">二维码待添加</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
