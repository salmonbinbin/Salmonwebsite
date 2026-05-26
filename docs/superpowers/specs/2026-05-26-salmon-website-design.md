# Salmon Personal Website — Design Specification

**Date:** 2026-05-26  
**Style Direction:** Playful Geometric  
**Implementation Standard:** design-taste-frontend skill

---

## Context

Salmon is a CS student building a personal website to showcase their growth journey, skills, and projects. Target roles: frontend/product/operations. The site needs to convey "creative builder who bridges tech and business" — not a pure developer, not a pure designer, but someone who can prototype fast, think in product terms, and communicate through content.

The site itself should be the first piece of evidence for this positioning: distinctive, well-crafted, memorable.

---

## Architecture

### Tech Stack

| Layer | Choice | Notes |
|-------|--------|-------|
| Framework | React 18 + Vite | Fast HMR, familiar |
| Styling | Tailwind CSS v4 + CSS custom props | Playful Geometric design tokens |
| Animation | Framer Motion | Bouncy entrances, scroll-triggered reveals |
| Routing | React Router v7 | SPA with 4 pages |
| Icons | Lucide React | Component-based, not CDN |
| Fonts | Outfit (heading), Plus Jakarta Sans (body) | From Google Fonts |
| Deployment | Vercel | Free, auto-deploy, CDN |
| Content | JSON files in `/src/data/` | Easily editable, no CMS needed |

### Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Marquee.jsx
│   ├── Timeline.jsx
│   ├── ProjectCard.jsx
│   ├── WritingCard.jsx
│   ├── SkillVisual.jsx
│   ├── ContactForm.jsx
│   ├── ScrollProgress.jsx
│   ├── BackgroundDecorations.jsx
│   └── SectionWrapper.jsx
├── pages/
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── Writing.jsx
│   └── About.jsx
├── data/
│   ├── projects.json
│   ├── writings.json
│   ├── timeline.json
│   └── skills.json
├── hooks/
│   └── useScrollReveal.js
├── styles/
│   └── index.css          (CSS variables + keyframes)
├── App.jsx
└── main.jsx
```

### Data Flow

- All content lives in `/src/data/*.json`
- Pages import JSON directly
- No API calls, no backend
- Contact form can use a simple webhook (e.g., Formspree) — no server needed
- Future: swap JSON for MDX or CMS without changing component structure

---

## Design System

### Color Tokens

```
--bg:              #FFFDF5    Warm cream (paper feel)
--fg:              #1E293B    Soft charcoal (not pure black)
--muted:           #F1F5F9    Light gray for section backgrounds
--muted-fg:        #64748B    Muted text
--accent:          #6366F1    Indigo — primary brand
--secondary:       #EC4899    Hot pink — decorative pop
--tertiary:        #F59E0B    Amber — highlights, badges
--quaternary:      #10B981    Emerald — success, active states
--border:          #E2E8F0    Light border
--card:            #FFFFFF    Card background
--ring:            #6366F1    Focus ring (matches accent)
```

**Dark variant** (for Hero accent areas and Writing page alt sections):
```
--dark-bg:         #0F172A    Slate-900
--dark-fg:         #F8FAFC
--dark-accent:     #818CF8    Lighter indigo for dark
```

### Typography

- **Headings**: Outfit, weight 700–900, `tracking-tight`, `leading-[1.1]`
- **Body**: Plus Jakarta Sans, weight 400–500, `leading-relaxed`
- **Scale**: Major third (1.25) — `text-xs` through `text-7xl`
- **Labels/Buttons**: Uppercase, `tracking-widest`, bold

### Shadows (The Core Identity)

```css
.shadow-pop {
  box-shadow: 4px 4px 0px 0px var(--fg);
  transition: transform 300ms, box-shadow 300ms;
  /* cubic-bezier(0.34, 1.56, 0.64, 1) for bounce */
}
.shadow-pop:hover  { transform: translate(-2px, -2px); box-shadow: 6px 6px 0px var(--fg); }
.shadow-pop:active { transform: translate(2px, 2px);   box-shadow: 2px 2px 0px var(--fg); }

.shadow-card       { box-shadow: 8px 8px 0px var(--border); }
.shadow-card:hover { transform: rotate(-1deg) scale(1.02); }
```

### Radii

- Buttons: `rounded-full`
- Cards: `rounded-2xl` or `rounded-3xl`
- Inputs: `rounded-lg`
- Special: `blob-radius` (one sharp corner), `arch-radius`
- Inner elements: 4px less than container

### Patterns & Textures

- `bg-dot-grid`: radial-gradient dots, 24px spacing, used on section backgrounds
- Decorative primitives: circles, triangles, pill shapes — absolutely positioned, low opacity, with borders

### Animations

- `popIn`: scale(0.5) → scale(1) with cubic-bezier overshoot, 600ms
- `wiggle`: rotate ±3deg on hover, 400ms
- `marquee`: infinite horizontal scroll, 20s
- Scroll reveal: Intersection Observer triggers pop-in
- Respect `prefers-reduced-motion`

---

## Page Designs

### Home (/)

**Purpose:** First impression. Answer "who is this person?" within 3 seconds.

**Sections (top to bottom):**

1. **Navbar** — Fixed top, `bg-[#FFFDF5]/90 backdrop-blur-sm border-b-2`. Logo left (indigo circle + "Salmon"), links right. Mobile: hamburger.

2. **Hero** — Two column. Left: badge ("CS Student & Builder"), massive heading with indigo highlight word, one-line summary, two buttons (Primary: "See My Work" with shadow-pop, Secondary: outlined). Right: geometric composition — large yellow circle behind, pink rounded square, dot-grid overlay, a "mockup card" floating with shadow-card. This is the visual hook.

3. **Marquee** — Dark bar (`bg-[#1E293B]`), white text, infinite scroll: "REACT · PRODUCT · AI · DATA · TYPESCRIPT · PROTOTYPING · CONTENT · ...". PlayfulGeometric signature element.

4. **Three Pillars** — Cards in a 3-column grid connected by a dashed SVG line. Each card: floating icon orb (half over the top border), title, description. Colors rotate: indigo → pink → amber.

5. **Journey Timeline** — Dashed vertical line with 3–5 nodes. Each node: colored circle marker + date + title + short description. Alternating left/right on desktop, all-left on mobile.

6. **Featured Projects** — 2–3 project cards in bento layout (one large, two small). Hard shadow, colored border accent, tech tags as pills.

7. **CTA** — Centered. "Let's Work Together" heading. Email + social links (GitHub, LinkedIn). Buttons with colored hard shadows (pink offset).

8. **Footer** — Dark background (`bg-[#1E293B]`), 3 columns (product, resources, connect). Top border in hot pink (`border-t-4 border-[#EC4899]`).

### Projects (/projects)

**Purpose:** Evidence of capability.

- **Filter bar**: Pill buttons — All / Frontend / Product / Data / AI. Active state = filled color + shadow-pop pressed effect.
- **Grid**: Bento layout. Featured project spans 2 columns or 2 rows. Each card: image preview area (placeholder if no real screenshot), title, one-liner, tag pills, "View →" link.
- **Empty state**: If no projects match filter, show a playful illustration "Nothing here yet — building something cool!"

### Writing (/writing)

**Purpose:** Depth of thinking. Shows you're not just a coder.

- **List layout**: Clean, readable. Date → Title → Summary → Tags.
- **Filter**: Tag pills (same style as Projects).
- **Search**: Input with shadow-pop focus state.
- **Reading mood**: Option to switch to a dark reading area — dark background card with light text (subtle nod to Medium/Substack).

### About (/about)

**Purpose:** Build trust. Show the full picture.

- **Top half**: Longer bio. "Hi, I'm Salmon" header. 2–3 paragraphs about your journey, philosophy, and what you're looking for.
- **Skill visualization**: NOT progress bars. Use geometric shapes — concentric circles, dot clusters, or a "constellation" map where each star is a skill, connected by lines to show relationships (Tech ↔ Product ↔ Content).
- **Bottom half**: Contact form. Name, Email, Message inputs. Submit button with shadow-pop. Labels in uppercase bold, small tracking-wide.

---

## Component Specifications

### Button

Variants: `primary`, `secondary`, `outline`, `ghost`  
All use `shadow-pop` on primary/secondary. All have `rounded-full`, `border-2 border-[--fg]`.  
Primary: `bg-[--accent] text-white`. Hover lifts, active presses.  
Hover transition: `cubic-bezier(0.34, 1.56, 0.64, 1)` (bounce).

### Card

Base: `bg-white rounded-2xl border-2 border-[--fg] p-8 shadow-card`.  
Hover: `rotate-[-1deg] scale-[1.02]`.  
Has a floating icon container that sits half outside the top border (`-top-8 absolute`).

### Input

Base: `border-2 border-[#CBD5E1] rounded-lg`.  
Focus: `border-[--accent]` + `shadow: 4px 4px 0px [--accent]`.  
Label: `text-sm font-bold uppercase tracking-wide`.

### Navbar

Fixed, `z-50`. Glass morph: `bg-[#FFFDF5]/90 backdrop-blur-sm`. Bottom border: `border-b-2 border-[--fg]`.  
Desktop: horizontal links + CTA button. Mobile: hamburger → slide menu.

### Marquee

Container: `bg-[--fg] text-white py-4 overflow-hidden`.  
Content: duplicated text for seamless loop, `animate-marquee` at 20s linear infinite.

---

## Verification Plan

1. **Dev server**: `npm run dev` → confirm all 4 pages render
2. **Design audit**: Run design-taste-frontend skill review against Playful Geometric spec
3. **Browser test**: Playwright screenshot of Home page at 375px, 768px, 1440px
4. **Interactive test**: Click through navigation, filter projects, submit contact form
5. **A11y check**: Keyboard nav, focus rings, reduced motion, color contrast
6. **Content check**: All JSON data renders correctly on each page

---

## Implementation Sequence

1. Scaffold Vite + React + Tailwind + Router + Framer Motion
2. Implement design tokens (CSS variables, Tailwind config)
3. Build base components (Button, Card, Input, Navbar, Footer)
4. Build Home page (all sections)
5. Build Projects page
6. Build Writing page
7. Build About page
8. Add animations and micro-interactions
9. Responsive polish
10. Design review and final pass
