# Salmon Personal Website — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Playful Geometric personal website for Salmon — a CS student showcasing projects, writing, skills, and growth journey for tech/product/operations roles.

**Architecture:** React 18 SPA with Vite, Tailwind CSS v4, Framer Motion, React Router v7. Four pages (Home, Projects, Writing, About) + shared layout components. Content managed via JSON data files. No backend — static site deployable to Vercel.

**Tech Stack:** React 18, Vite, Tailwind CSS v4, Framer Motion, React Router v7, Lucide React, Outfit + Plus Jakarta Sans fonts.

**Design Standard:** `design-taste-frontend` skill must be invoked at checkpoints. Follow Playful Geometric spec exactly — hard shadows (4px/4px offset, no blur), chunky 2px borders, var(--accent) color tokens, bouncy cubic-bezier transitions.

---

## File Structure Map

```
salmon-website/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx                    # React DOM entry
│   ├── App.jsx                     # Router + Layout shell
│   ├── index.css                   # CSS variables, keyframes, utilities
│   ├── components/
│   │   ├── Navbar.jsx              # Fixed glass-morph nav
│   │   ├── Footer.jsx              # Dark footer w/ columns
│   │   ├── Button.jsx              # 4 variants + shadow-pop
│   │   ├── Card.jsx                # Base card with floating icon
│   │   ├── Input.jsx               # Styled input with focus shadow
│   │   ├── Marquee.jsx             # Infinite scroll keyword bar
│   │   ├── Timeline.jsx            # Journey timeline nodes
│   │   ├── ProjectCard.jsx         # Project display card
│   │   ├── WritingCard.jsx         # Article list item
│   │   ├── SkillVisual.jsx         # Constellation skill map
│   │   ├── ContactForm.jsx         # Name/Email/Message form
│   │   ├── ScrollProgress.jsx      # Top-of-page progress bar
│   │   ├── BackgroundDecorations.jsx # Geometric shapes layer
│   │   └── SectionWrapper.jsx      # Section container + scroll reveal
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── Writing.jsx
│   │   └── About.jsx
│   ├── data/
│   │   ├── projects.json
│   │   ├── writings.json
│   │   ├── timeline.json
│   │   └── skills.json
│   └── hooks/
│       └── useScrollReveal.js
```

---

### Task 1: Scaffold Project

**Files:**
- Create: `package.json`, `vite.config.js`, `index.html`, `tailwind.config.js`, `postcss.config.js`, `src/main.jsx`, `src/App.jsx`, `src/index.css`

- [ ] **Step 1: Create project with Vite**

Run:
```bash
cd /Users/salmon/Desktop/Salmon-website
npm create vite@latest . -- --template react
```

Expected: Scaffolds Vite + React project in current directory.

- [ ] **Step 2: Install dependencies**

Run:
```bash
npm install
npm install react-router-dom framer-motion lucide-react
npm install -D tailwindcss @tailwindcss/vite
```

Expected: All packages installed.

- [ ] **Step 3: Configure Vite with Tailwind plugin**

Write `vite.config.js`:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

- [ ] **Step 4: Write Tailwind CSS import**

Write `src/index.css`:
```css
@import "tailwindcss";

@theme {
  --font-heading: "Outfit", system-ui, sans-serif;
  --font-body: "Plus Jakarta Sans", system-ui, sans-serif;
  --color-bg: #FFFDF5;
  --color-fg: #1E293B;
  --color-muted: #F1F5F9;
  --color-muted-fg: #64748B;
  --color-accent: #6366F1;
  --color-accent-fg: #FFFFFF;
  --color-secondary: #EC4899;
  --color-tertiary: #F59E0B;
  --color-quaternary: #10B981;
  --color-border: #E2E8F0;
  --color-card: #FFFFFF;
  --color-ring: #6366F1;
  --color-dark-bg: #0F172A;
  --color-dark-fg: #F8FAFC;
  --color-dark-accent: #818CF8;
}

body {
  font-family: var(--font-body);
  background-color: var(--color-bg);
  color: var(--color-fg);
  overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 800;
}

.shadow-pop {
  box-shadow: 4px 4px 0px 0px var(--color-fg);
  transition: transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
.shadow-pop:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px 0px var(--color-fg);
}
.shadow-pop:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0px 0px var(--color-fg);
}

.shadow-card {
  box-shadow: 8px 8px 0px 0px var(--color-border);
  transition: transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
.shadow-card:hover {
  transform: rotate(-1deg) scale(1.02);
}

.shadow-card-pink {
  box-shadow: 8px 8px 0px 0px var(--color-secondary);
}

.shadow-card-amber {
  box-shadow: 8px 8px 0px 0px var(--color-tertiary);
}

.shadow-card-emerald {
  box-shadow: 8px 8px 0px 0px var(--color-quaternary);
}

.input-focus-shadow:focus {
  border-color: var(--color-accent);
  box-shadow: 4px 4px 0px 0px var(--color-accent);
  outline: none;
}

.bg-dot-grid {
  background-image: radial-gradient(var(--color-border) 1.5px, transparent 1.5px);
  background-size: 24px 24px;
}

@keyframes wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(3deg); }
  75% { transform: rotate(-3deg); }
}
.animate-wiggle:hover {
  animation: wiggle 0.4s ease-in-out;
}

@keyframes popIn {
  0% { opacity: 0; transform: scale(0.5); }
  100% { opacity: 1; transform: scale(1); }
}
.pop-in {
  animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.marquee-content {
  display: inline-block;
  animation: marquee 20s linear infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(3deg); }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 5: Write index.html**

Write `index.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Salmon — Builder & Thinker</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
</head>
<body class="antialiased">
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

- [ ] **Step 6: Write main.jsx entry**

Write `src/main.jsx`:
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
```

- [ ] **Step 7: Write App.jsx shell with routes**

Write `src/App.jsx`:
```jsx
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Writing from './pages/Writing'
import About from './pages/About'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 8: Verify scaffold**

Run:
```bash
npm run dev
```

Expected: Dev server starts, blank page renders at localhost. No console errors.

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "feat: scaffold Vite + React + Tailwind + Router project"
```

---

### Task 2: Base Components — Button, Card, Input

**Files:**
- Create: `src/components/Button.jsx`, `src/components/Card.jsx`, `src/components/Input.jsx`

- [ ] **Step 1: Write Button component**

Write `src/components/Button.jsx`:
```jsx
import { forwardRef } from 'react'

const variants = {
  primary: 'bg-accent text-accent-fg shadow-pop',
  secondary: 'bg-secondary text-white shadow-pop',
  outline: 'bg-transparent text-fg border-2 border-fg hover:bg-tertiary transition-colors',
  ghost: 'bg-transparent text-fg hover:bg-muted transition-colors',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const Button = forwardRef(({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center gap-2 rounded-full border-2 border-fg font-bold tracking-wide transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'
export default Button
```

- [ ] **Step 2: Write Card component**

Write `src/components/Card.jsx`:
```jsx
export default function Card({ children, className = '', icon, iconBg = 'bg-accent', shadowColor = '' }) {
  return (
    <div className={`relative bg-card rounded-2xl border-2 border-fg p-8 shadow-card ${shadowColor} group cursor-pointer ${className}`}>
      {icon && (
        <div className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 ${iconBg} rounded-full border-2 border-fg flex items-center justify-center shadow-pop group-hover:scale-110 transition-transform z-10`}>
          {icon}
        </div>
      )}
      <div className={icon ? 'mt-8' : ''}>
        {children}
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Write Input component**

Write `src/components/Input.jsx`:
```jsx
import { forwardRef } from 'react'

const Input = forwardRef(({ label, id, className = '', ...props }, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="block text-sm font-bold uppercase tracking-wide text-fg">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        className={`w-full px-4 py-3 bg-white border-2 border-[#CBD5E1] rounded-lg text-fg placeholder-[#94A3B8] input-focus-shadow transition-all ${className}`}
        {...props}
      />
    </div>
  )
})

Input.displayName = 'Input'
export default Input
```

- [ ] **Step 4: Verify components render**

- [ ] **Step 5: Commit**

```bash
git add src/components/Button.jsx src/components/Card.jsx src/components/Input.jsx
git commit -m "feat: add Button, Card, Input base components"
```

---

### Task 3: Layout Components — Navbar, Footer, BackgroundDecorations

**Files:**
- Create: `src/components/Navbar.jsx`, `src/components/Footer.jsx`, `src/components/BackgroundDecorations.jsx`

- [ ] **Step 1: Write Navbar**

Write `src/components/Navbar.jsx`:
```jsx
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Hexagon, Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/writing', label: 'Writing' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className="fixed top-0 w-full z-50 bg-bg/90 backdrop-blur-sm border-b-2 border-fg">
      <div className="max-w-6xl mx-auto px-6 h-16 sm:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent rounded-full border-2 border-fg flex items-center justify-center shadow-pop">
            <Hexagon className="text-white w-5 h-5" />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-fg">Salmon</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`font-semibold text-sm transition-colors ${
                pathname === to ? 'text-accent' : 'text-muted-fg hover:text-accent'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/about#contact"
            className="bg-secondary text-white px-5 py-2 rounded-full border-2 border-fg font-bold text-sm shadow-pop flex items-center gap-2 hover:bg-secondary/90"
          >
            Contact
            <span className="text-white/80">→</span>
          </Link>
        </div>

        <button
          className="md:hidden p-2 border-2 border-fg rounded-lg"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t-2 border-fg bg-bg px-6 py-4 space-y-3">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={`block py-2 font-semibold ${
                pathname === to ? 'text-accent' : 'text-fg'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
```

- [ ] **Step 2: Write Footer**

Write `src/components/Footer.jsx`:
```jsx
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
              Builder &amp; thinker at the intersection of code, product, and storytelling.
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
          <p className="text-[#94A3B8] text-xs">&copy; {new Date().getFullYear()} Salmon. Built with hard shadows &amp; love.</p>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 3: Write BackgroundDecorations**

Write `src/components/BackgroundDecorations.jsx`:
```jsx
export default function BackgroundDecorations({ variant = 'default' }) {
  const shapes = {
    default: [
      { color: 'bg-tertiary', shape: 'rounded-full', size: 'w-48 h-48', pos: 'top-20 -left-10', opacity: 'opacity-30', delay: '' },
      { color: 'bg-secondary', shape: 'rounded-2xl', size: 'w-32 h-32', pos: 'bottom-10 right-10', opacity: 'opacity-20', delay: 'animation-delay-2000' },
      { color: 'bg-quaternary', shape: 'rounded-full', size: 'w-24 h-24', pos: 'top-40 right-1/4', opacity: 'opacity-40', delay: 'animation-delay-1000' },
    ],
    hero: [
      { color: 'bg-tertiary', shape: 'rounded-full', size: 'w-72 h-72', pos: 'top-10 -right-10', opacity: 'opacity-20', delay: '' },
      { color: 'bg-secondary', shape: 'rounded-3xl rotate-12', size: 'w-40 h-40', pos: 'bottom-20 left-10', opacity: 'opacity-25', delay: 'animation-delay-1500' },
      { color: 'bg-accent', shape: 'rounded-full', size: 'w-20 h-20', pos: 'top-1/3 right-1/3', opacity: 'opacity-30', delay: 'animation-delay-3000' },
    ],
  }

  const active = shapes[variant] || shapes.default

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
      {active.map((s, i) => (
        <div
          key={i}
          className={`absolute ${s.pos} ${s.size} ${s.color} ${s.shape} ${s.opacity} animate-float ${s.delay}`}
        />
      ))}
    </div>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/Navbar.jsx src/components/Footer.jsx src/components/BackgroundDecorations.jsx
git commit -m "feat: add Navbar, Footer, BackgroundDecorations layout components"
```

---

### Task 4: Section Components — Marquee, Timeline, ScrollProgress, SectionWrapper

**Files:**
- Create: `src/components/Marquee.jsx`, `src/components/Timeline.jsx`, `src/components/ScrollProgress.jsx`, `src/components/SectionWrapper.jsx`

- [ ] **Step 1: Write Marquee**

Write `src/components/Marquee.jsx`:
```jsx
export default function Marquee({ items }) {
  const text = items.join('  ·  ') + '  ·  '

  return (
    <div className="bg-fg py-5 overflow-hidden border-y-2 border-fg">
      <div className="overflow-hidden whitespace-nowrap">
        <span className="marquee-content text-white font-heading font-bold text-xl sm:text-2xl tracking-wide">
          {text}{text}
        </span>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Write Timeline**

Write `src/components/Timeline.jsx`:
```jsx
const colors = ['bg-accent', 'bg-secondary', 'bg-tertiary', 'bg-quaternary']

export default function Timeline({ events }) {
  return (
    <div className="max-w-2xl mx-auto relative">
      <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 sm:-translate-x-px"
        style={{ background: 'repeating-linear-gradient(to bottom, var(--color-accent) 0px, var(--color-accent) 12px, transparent 12px, transparent 20px)' }}
      />

      {events.map((event, i) => {
        const isLeft = i % 2 === 0
        return (
          <div key={i} className={`relative flex items-start mb-10 sm:mb-12 ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
            <div className={`absolute left-4 sm:left-1/2 w-4 h-4 ${colors[i % colors.length]} rounded-full border-[3px] border-fg -translate-x-1/2 z-10`} />
            <div className={`ml-10 sm:ml-0 sm:w-1/2 ${isLeft ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
              <span className={`inline-block text-xs font-bold uppercase tracking-widest mb-1`}
                style={{ color: i === 0 ? 'var(--color-accent)' : i === 1 ? 'var(--color-secondary)' : i === 2 ? 'var(--color-tertiary)' : 'var(--color-quaternary)' }}>
                {event.date}
              </span>
              <h3 className="font-heading font-bold text-lg text-fg">{event.title}</h3>
              <p className="text-muted-fg text-sm mt-1">{event.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
```

- [ ] **Step 3: Write ScrollProgress**

Write `src/components/ScrollProgress.jsx`:
```jsx
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const { pathname } = useLocation()

  useEffect(() => {
    setProgress(0)
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[60] pointer-events-none">
      <div
        className="h-full bg-accent transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
```

- [ ] **Step 4: Write SectionWrapper**

Write `src/components/SectionWrapper.jsx`:
```jsx
import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function SectionWrapper({ children, className = '', id }) {
  const ref = useRef(null)

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`py-20 sm:py-28 relative ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {children}
      </div>
    </motion.section>
  )
}
```

- [ ] **Step 5: Commit**

```bash
git add src/components/Marquee.jsx src/components/Timeline.jsx src/components/ScrollProgress.jsx src/components/SectionWrapper.jsx
git commit -m "feat: add Marquee, Timeline, ScrollProgress, SectionWrapper"
```

---

### Task 5: Data Files

**Files:**
- Create: `src/data/projects.json`, `src/data/writings.json`, `src/data/timeline.json`, `src/data/skills.json`

- [ ] **Step 1: Write projects.json**

Write `src/data/projects.json`:
```json
[
  {
    "id": "personal-website",
    "title": "Personal Website",
    "tagline": "A Playful Geometric portfolio built with React and Tailwind",
    "description": "My personal corner of the web showcasing projects, writing, and growth journey. Designed with a playful geometric aesthetic — hard shadows, bouncy animations, and chunky borders.",
    "tags": ["Frontend", "React", "Tailwind"],
    "link": "https://github.com/salmon/website",
    "featured": true
  },
  {
    "id": "data-dashboard",
    "title": "Campus Data Dashboard",
    "tagline": "Visualizing student activity data to improve campus services",
    "description": "Built an interactive dashboard pulling from campus APIs to display real-time library occupancy, dining hall traffic, and event attendance trends.",
    "tags": ["Data", "React", "AI"],
    "link": "https://github.com/salmon/dashboard",
    "featured": true
  },
  {
    "id": "ai-prototype",
    "title": "AI Course Assistant",
    "tagline": "LLM-powered study tool that generates flashcards and quizzes from lecture notes",
    "description": "A prototype that uses GPT to parse lecture PDFs and auto-generate study materials. Built in a weekend to test the idea of AI-assisted learning.",
    "tags": ["AI", "Product", "Frontend"],
    "link": "https://github.com/salmon/ai-study",
    "featured": true
  },
  {
    "id": "content-strategy",
    "title": "Tech Blog Content Strategy",
    "tagline": "Growing a technical blog from 0 to 1K monthly readers",
    "description": "Planned and executed a content strategy for a tech blog — keyword research, editorial calendar, SEO optimization, and distribution across platforms.",
    "tags": ["Product", "Content"],
    "link": "",
    "featured": false
  }
]
```

- [ ] **Step 2: Write writings.json**

Write `src/data/writings.json`:
```json
[
  {
    "id": "ai-tools-productivity",
    "title": "How I Use AI Tools to Ship Side Projects 3x Faster",
    "date": "2026-04-15",
    "summary": "A practical guide to using AI coding assistants, prompt engineering, and automated workflows to accelerate solo development.",
    "tags": ["AI", "Product"]
  },
  {
    "id": "why-product-thinking",
    "title": "Why CS Students Should Learn Product Thinking",
    "date": "2026-03-20",
    "summary": "The best engineers aren't just coders — they understand users, business models, and how to ship what actually matters.",
    "tags": ["Product"]
  },
  {
    "id": "react-animation-guide",
    "title": "Adding Personality to UIs: A Guide to Micro-Interactions",
    "date": "2026-02-10",
    "summary": "How small animations and thoughtful transitions can make your web apps feel polished and professional.",
    "tags": ["Frontend"]
  },
  {
    "id": "data-driven-decisions",
    "title": "Making Decisions with Data When You're Not a Data Scientist",
    "date": "2026-01-05",
    "summary": "Simple frameworks for using data to guide product decisions — no PhD required.",
    "tags": ["Data", "Product"]
  }
]
```

- [ ] **Step 3: Write timeline.json**

Write `src/data/timeline.json`:
```json
[
  {
    "date": "2024 — Present",
    "title": "B.S. Computer Science & Technology",
    "description": "Focused on frontend engineering, product thinking, and AI-assisted development. Building projects that bridge tech and business."
  },
  {
    "date": "2025",
    "title": "Built First AI-Powered Tool",
    "description": "Created a course assistant using LLMs to generate study materials. Learned prompt engineering and rapid prototyping."
  },
  {
    "date": "2024",
    "title": "First Full-Stack Project Launch",
    "description": "Built and shipped a React + Node.js campus dashboard used by 200+ students. Discovered the joy of making things people actually use."
  },
  {
    "date": "2023",
    "title": "Wrote My First Line of Code",
    "description": "Started with HTML and CSS. Fell in love with building things from scratch. The beginning of everything."
  }
]
```

- [ ] **Step 4: Write skills.json**

Write `src/data/skills.json`:
```json
[
  { "name": "React", "category": "Frontend" },
  { "name": "TypeScript", "category": "Frontend" },
  { "name": "Tailwind", "category": "Frontend" },
  { "name": "Next.js", "category": "Frontend" },
  { "name": "Node.js", "category": "Backend" },
  { "name": "Python", "category": "Backend" },
  { "name": "PostgreSQL", "category": "Backend" },
  { "name": "AI/LLM", "category": "Tech" },
  { "name": "Prompt Engineering", "category": "Tech" },
  { "name": "Data Viz", "category": "Data" },
  { "name": "Figma", "category": "Product" },
  { "name": "Product Strategy", "category": "Product" },
  { "name": "User Research", "category": "Product" },
  { "name": "Content Strategy", "category": "Content" },
  { "name": "Technical Writing", "category": "Content" },
  { "name": "SEO", "category": "Content" }
]
```

- [ ] **Step 5: Commit**

```bash
git add src/data/
git commit -m "feat: add content data files for projects, writings, timeline, skills"
```

---

### Task 6: Feature Components — ProjectCard, WritingCard, SkillVisual, ContactForm

**Files:**
- Create: `src/components/ProjectCard.jsx`, `src/components/WritingCard.jsx`, `src/components/SkillVisual.jsx`, `src/components/ContactForm.jsx`

- [ ] **Step 1: Write ProjectCard**

Write `src/components/ProjectCard.jsx`:
```jsx
import { ExternalLink } from 'lucide-react'

const tagColors = {
  Frontend: 'bg-accent/10 text-accent border-accent/30',
  Product: 'bg-secondary/10 text-secondary border-secondary/30',
  Data: 'bg-tertiary/10 text-tertiary border-tertiary/30',
  AI: 'bg-quaternary/10 text-quaternary border-quaternary/30',
  Content: 'bg-accent/10 text-accent border-accent/30',
}

export default function ProjectCard({ project, featured = false }) {
  return (
    <div className={`relative bg-card rounded-2xl border-2 border-fg p-6 shadow-card group cursor-pointer ${
      featured ? 'md:col-span-2 md:row-span-2' : ''
    }`}>
      <div className="w-full h-40 bg-muted rounded-xl border-2 border-fg mb-5 flex items-center justify-center text-muted-fg text-sm font-medium">
        Preview
      </div>
      <div className="space-y-3">
        <h3 className="font-heading font-bold text-xl text-fg">{project.title}</h3>
        <p className="text-muted-fg text-sm leading-relaxed">{project.tagline}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className={`text-xs font-semibold px-3 py-1 rounded-full border ${tagColors[tag] || 'bg-muted text-muted-fg border-border'}`}>
              {tag}
            </span>
          ))}
        </div>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-bold text-accent hover:underline mt-2">
            View Project <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Write WritingCard**

Write `src/components/WritingCard.jsx`:
```jsx
const tagColors = {
  Frontend: 'bg-accent/10 text-accent border-accent/30',
  Product: 'bg-secondary/10 text-secondary border-secondary/30',
  Data: 'bg-tertiary/10 text-tertiary border-tertiary/30',
  AI: 'bg-quaternary/10 text-quaternary border-quaternary/30',
  Content: 'bg-accent/10 text-accent border-accent/30',
}

export default function WritingCard({ article }) {
  return (
    <article className="bg-card rounded-2xl border-2 border-fg p-6 shadow-card group cursor-pointer flex flex-col sm:flex-row gap-5">
      <time className="text-xs font-bold uppercase tracking-widest text-accent whitespace-nowrap mt-0.5">
        {article.date}
      </time>
      <div className="space-y-2 flex-1">
        <h3 className="font-heading font-bold text-lg text-fg group-hover:text-accent transition-colors">
          {article.title}
        </h3>
        <p className="text-muted-fg text-sm leading-relaxed">{article.summary}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {article.tags.map(tag => (
            <span key={tag} className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${tagColors[tag] || 'bg-muted text-muted-fg border-border'}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
```

- [ ] **Step 3: Write SkillVisual**

Write `src/components/SkillVisual.jsx`:
```jsx
import { useState } from 'react'

const categoryColors = {
  Frontend: 'bg-accent',
  Backend: 'bg-quaternary',
  Tech: 'bg-secondary',
  Data: 'bg-tertiary',
  Product: 'bg-accent',
  Content: 'bg-quaternary',
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
          .map((skill, i) => (
            <div
              key={skill.name}
              className={`relative px-4 py-3 rounded-2xl border-2 border-fg ${categoryColors[skill.category]} bg-opacity-20 shadow-pop cursor-default hover:scale-105 transition-transform`}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="font-bold text-sm" style={{
                color: skill.category === 'Frontend' ? 'var(--color-accent)' :
                       skill.category === 'Backend' ? 'var(--color-quaternary)' :
                       skill.category === 'Tech' ? 'var(--color-secondary)' :
                       skill.category === 'Data' ? 'var(--color-tertiary)' :
                       'var(--color-accent)'
              }}>{skill.name}</span>
            </div>
          ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Write ContactForm**

Write `src/components/ContactForm.jsx`:
```jsx
import { useState } from 'react'
import Input from './Input'
import Button from './Button'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sent')
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-12 bg-card rounded-2xl border-2 border-fg shadow-card">
        <div className="w-20 h-20 bg-quaternary rounded-full border-2 border-fg flex items-center justify-center mx-auto mb-6 shadow-pop">
          <Send className="text-white w-8 h-8" />
        </div>
        <h3 className="font-heading font-bold text-2xl text-fg mb-2">Message Sent!</h3>
        <p className="text-muted-fg">Thanks for reaching out. I'll get back to you soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-2xl border-2 border-fg p-8 shadow-card">
      <Input label="Name" id="name" type="text" placeholder="Your name" required />
      <Input label="Email" id="email" type="email" placeholder="you@example.com" required />
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-bold uppercase tracking-wide text-fg">Message</label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell me what's on your mind..."
          className="w-full px-4 py-3 bg-white border-2 border-[#CBD5E1] rounded-lg text-fg placeholder-[#94A3B8] input-focus-shadow transition-all resize-none"
          required
        />
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        <Send className="w-5 h-5" />
        Send Message
      </Button>
    </form>
  )
}
```

- [ ] **Step 5: Commit**

```bash
git add src/components/ProjectCard.jsx src/components/WritingCard.jsx src/components/SkillVisual.jsx src/components/ContactForm.jsx
git commit -m "feat: add ProjectCard, WritingCard, SkillVisual, ContactForm components"
```

---

### Task 7: Home Page

**Files:**
- Create: `src/pages/Home.jsx`
- Modify: `src/App.jsx` (already imports Home)

- [ ] **Step 1: Write Home page**

Write `src/pages/Home.jsx`:
```jsx
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
```

- [ ] **Step 2: Test Home page renders**

Run:
```bash
npm run dev
```
Navigate to `http://localhost:5173`. Confirm Hero, Marquee, Three Pillars, Timeline, Featured Projects, and CTA all render.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Home.jsx
git commit -m "feat: implement Home page with all sections"
```

---

### Task 8: Projects, Writing, About Pages

**Files:**
- Create: `src/pages/Projects.jsx`, `src/pages/Writing.jsx`, `src/pages/About.jsx`

- [ ] **Step 1: Write Projects page**

Write `src/pages/Projects.jsx`:
```jsx
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
```

- [ ] **Step 2: Write Writing page**

Write `src/pages/Writing.jsx`:
```jsx
import { useState } from 'react'
import { Search } from 'lucide-react'
import WritingCard from '../components/WritingCard'
import SectionWrapper from '../components/SectionWrapper'
import writingsData from '../data/writings.json'

const allTags = ['All', ...new Set(writingsData.flatMap(w => w.tags))]

export default function Writing() {
  const [activeTag, setActiveTag] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = writingsData.filter(w => {
    const matchTag = activeTag === 'All' || w.tags.includes(activeTag)
    const matchSearch = search === '' || w.title.toLowerCase().includes(search.toLowerCase())
    return matchTag && matchSearch
  })

  return (
    <div className="pt-28 pb-10">
      <SectionWrapper>
        <div className="text-center mb-10 space-y-3">
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-fg">Writing</h1>
          <p className="text-muted-fg text-lg max-w-xl mx-auto">Thoughts on tech, product, and the craft of building things.</p>
        </div>

        <div className="max-w-xl mx-auto mb-10 space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-fg w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-card border-2 border-[#CBD5E1] rounded-lg text-fg placeholder-[#94A3B8] input-focus-shadow transition-all"
            />
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full border-2 border-fg font-bold text-sm transition-all ${
                  activeTag === tag
                    ? 'bg-fg text-white shadow-pop'
                    : 'bg-card text-fg hover:bg-muted shadow-pop'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-5">
          {filtered.length > 0 ? (
            filtered.map(w => <WritingCard key={w.id} article={w} />)
          ) : (
            <div className="text-center py-12 bg-muted rounded-2xl border-2 border-fg border-dashed">
              <p className="font-heading font-bold text-xl text-muted-fg">No articles found</p>
            </div>
          )}
        </div>
      </SectionWrapper>
    </div>
  )
}
```

- [ ] **Step 3: Write About page**

Write `src/pages/About.jsx`:
```jsx
import { Sparkles } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import SkillVisual from '../components/SkillVisual'
import ContactForm from '../components/ContactForm'
import Button from '../components/Button'
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
```

- [ ] **Step 4: Test all pages**

Run:
```bash
npm run dev
```
Navigate through all 4 pages. Confirm routing works, content renders, filters function.

- [ ] **Step 5: Commit**

```bash
git add src/pages/
git commit -m "feat: implement Projects, Writing, About pages"
```

---

### Task 9: Responsive Polish & Edge Cases

**Files:**
- Modify: `src/index.css`, `src/components/Navbar.jsx`

- [ ] **Step 1: Verify all pages at 375px, 768px, 1024px**

Open browser dev tools, test each page at each breakpoint. Check:
- No horizontal scroll
- Navbar collapses to hamburger below 768px
- Cards stack vertically on mobile
- Timeline collapses to single-side mobile layout (already handled by CSS)
- Font sizes readable (minimum 16px body text)
- Buttons have at least 44px tap targets

- [ ] **Step 2: Fix any layout issues found**

Common fixes:
- Hero heading: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl`
- Grid cards: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Section padding: `py-20 sm:py-28`
- Marquee font: `text-xl sm:text-2xl`

- [ ] **Step 3: Commit any responsive fixes**

```bash
git add -A
git commit -m "fix: responsive polish across all pages"
```

---

### Task 10: Design Audit with design-taste-frontend skill

- [ ] **Step 1: Invoke the design-taste-frontend skill**

Use the Skill tool to invoke `design-taste-frontend`. Pass the current state of the site for review against the Playful Geometric spec.

- [ ] **Step 2: Address every issue found**

Fix contrast issues, spacing problems, animation glitches, or anything flagged by the audit.

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "fix: design audit pass — layout, contrast, motion polish"
```

---

### Task 11: Smoke Test & Verification

- [ ] **Step 1: Run dev server and test golden path**

Start `npm run dev`. Navigate: Home → Projects → filter "AI" → clear filter → Writing → search "product" → About → submit contact form.

- [ ] **Step 2: Verify all interactions**

- Navbar links highlight correct active page
- Mobile menu opens/closes
- Filter pills change state
- Contact form shows success state
- Scroll progress bar updates
- Marquee scrolls smoothly
- Cards respond to hover
- Page transitions work via React Router

- [ ] **Step 3: Verify a11y basics**

- Tab through all interactive elements
- Focus rings visible on keyboard nav
- All images/links have accessible text
- No console errors

- [ ] **Step 4: Commit final verification fixes**

```bash
git add -A
git commit -m "chore: final verification fixes"
```

---

## Self-Review

**Spec Coverage Check:**
- ✅ Tech architecture (Vite + React + Tailwind + Framer Motion + Router) — Task 1
- ✅ Design tokens (CSS variables, custom properties) — Task 1, Step 4
- ✅ Button (4 variants + shadow-pop) — Task 2
- ✅ Card (floating icon, hover rotate) — Task 2
- ✅ Input (focus shadow, label style) — Task 2
- ✅ Navbar (fixed, glass-morph, mobile hamburger) — Task 3
- ✅ Footer (dark background, pink border top) — Task 3
- ✅ BackgroundDecorations (geometric shapes layer) — Task 3
- ✅ Marquee (infinite scroll keyword bar) — Task 4
- ✅ Timeline (dashed line, color-coded nodes) — Task 4
- ✅ ScrollProgress (top progress bar) — Task 4
- ✅ SectionWrapper (Framer Motion scroll reveal) — Task 4
- ✅ ProjectCard (bento, tags, link) — Task 6
- ✅ WritingCard (date, title, summary, tags) — Task 6
- ✅ SkillVisual (constellation map, category filter) — Task 6
- ✅ ContactForm (3 fields, success state) — Task 6
- ✅ Data files (JSON content management) — Task 5
- ✅ Home (Hero, Marquee, Pillars, Timeline, Projects, CTA) — Task 7
- ✅ Projects (filter bar, bento grid, empty state) — Task 8
- ✅ Writing (search, tag filter, list layout) — Task 8
- ✅ About (bio, skills, contact form) — Task 8
- ✅ Responsive (375/768/1024 verification) — Task 9
- ✅ Design audit (design-taste-frontend) — Task 10
- ✅ A11y (focus, keyboard, reduced motion, contrast) — Task 11

**Placeholder Scan:** None found.

**Type Consistency:** All component props, data types, and router paths consistent across tasks.
