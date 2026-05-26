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
              Builder & thinker at the intersection of code, product, and storytelling.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4 text-tertiary text-sm uppercase tracking-wide">Navigate</h4>
            <ul className="space-y-2 text-[#94A3B8] text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/writing" className="hover:text-white transition-colors">Writing</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4 text-secondary text-sm uppercase tracking-wide">Connect</h4>
            <ul className="space-y-2 text-[#94A3B8] text-sm">
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="mailto:hello@salmon.dev" className="hover:text-white transition-colors">hello@salmon.dev</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#94A3B8] text-xs">&copy; {new Date().getFullYear()} Salmon. Built with hard shadows & love.</p>
        </div>
      </div>
    </footer>
  )
}
