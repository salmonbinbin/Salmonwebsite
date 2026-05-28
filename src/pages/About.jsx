import { useState } from 'react'
import { Sparkles, MapPin, Mail, Copy, Check, MessageCircle, Video } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import SkillVisual from '../components/SkillVisual'
import skillsData from '../data/skills.json'

const EMAIL = '2186185477@qq.com'

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
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border-2 border-fg shadow-pop mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold uppercase tracking-widest text-muted-fg">关于我</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-fg mb-10">
            你好，我是 <span className="text-accent">Salmon</span>
          </h1>

          <div className="space-y-6 text-muted-fg text-lg leading-relaxed">
            <p>
              我是计算机科学与技术专业的大三学生。写代码算是我的工具箱里最顺手的一把，但不是唯一一把。
            </p>
            <p>
              做过四个完整的项目：用 AI 帮小商户做经营决策（拿了科大讯飞杯一等奖），给校园做健康管理系统（在大湾区计算机创新大赛拿了优秀奖），为新会做本地美食文化探索平台（拿了校级网页设计大赛一等奖），还帮学长学姐用 Spring Boot + Vue 的技术栈做了好几个毕业设计。前端、后端、产品设计——哪个缺人就顶哪个，反正用 AI 工具辅助学起来也快。
            </p>
            <p>
              但我跟大多数 CS 同学不太一样的地方是：我还做过运营。在 Elite Journey 市场部实习过，在 CSSC 跟了四个冬夏令营做后勤统筹，在朝阳行动项目组当了两年执行骨干。写推文、拍视频、做策划、盯现场——这些让我明白一件事：技术很重要，但技术之外的东西——沟通、统筹、把事情想清楚再动手——才是让一件事真的做成的关键。
            </p>
            <p>
              现在在找一个能同时用到技术、产品和运营能力的岗位。不挑城市，不挑公司大小，想跟有意思的人一起做有意思的事。
            </p>
          </div>

          <div className="flex items-center gap-2 mt-8 text-sm text-muted-fg">
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
