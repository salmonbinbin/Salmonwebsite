import { Link } from 'react-router-dom'
import { Hexagon } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-fg text-white pt-16 pb-8 border-t-4 border-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-full border-2 border-white flex items-center justify-center">
                <Hexagon className="text-white w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-xl">Salmon</span>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xs">
              写代码，也做运营和内容。在技术和业务中间搭桥的人。
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4 text-tertiary text-sm uppercase tracking-wide">导航</h4>
            <ul className="space-y-2 text-[#94A3B8] text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">首页</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">项目</Link></li>
              <li><Link to="/writing" className="hover:text-white transition-colors">文章</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">关于</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4 text-secondary text-sm uppercase tracking-wide">联系</h4>
            <ul className="space-y-2 text-[#94A3B8] text-sm">
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="mailto:2186185477@qq.com" className="hover:text-white transition-colors">2186185477@qq.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#94A3B8] text-xs">&copy; {new Date().getFullYear()} Salmon. 用心构建。</p>
        </div>
      </div>
    </footer>
  )
}
