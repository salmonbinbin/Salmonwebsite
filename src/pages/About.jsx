import { Sparkles, MapPin } from 'lucide-react'
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
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-10 space-y-3">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-fg">联系我</h2>
            <p className="text-muted-fg text-lg">聊聊项目、合作或者有意思的想法。</p>
          </div>
          <ContactForm />
        </div>
      </SectionWrapper>
    </div>
  )
}
