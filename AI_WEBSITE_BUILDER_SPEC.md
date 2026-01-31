# AI Website Builder – Full Specification

## 1. Project Overview
Build a modern AI-powered website builder where users can describe a website in natural language and instantly generate a complete frontend (HTML, CSS, JS) and optionally backend code.

The product should feel minimal, fast, and developer-friendly, similar to modern AI tools.

---

## 2. Core Features

### 2.1 Prompt-Based Website Generation
- Single main input box for user prompt
- Example prompt:
  "Create a modern SaaS landing page with hero section, pricing, testimonials, and contact form"
- AI generates:
  - HTML
  - CSS (modern, responsive)
  - JavaScript (interactions)
- Output should be editable and previewable

---

### 2.2 Live Preview
- Split-screen layout:
  - Left: Prompt + Controls
  - Right: Live website preview (iframe)
- Auto-refresh preview on generation
- Responsive preview modes:
  - Desktop
  - Tablet
  - Mobile

---

### 2.3 Code Editor
- Tabs:
  - HTML
  - CSS
  - JavaScript
- Syntax highlighting
- Copy-to-clipboard button
- Download as ZIP option

---

### 2.4 Templates & Presets
- Quick-select buttons:
  - Landing Page
  - Portfolio
  - Blog
  - Startup Website
  - Dashboard
- Clicking a template auto-fills the prompt

---

### 2.5 Regenerate & Refine
- Buttons:
  - "Regenerate"
  - "Improve UI"
  - "Make it more modern"
  - "Add animations"
- Follow-up prompts allowed

---

## 3. Pages & Layout

### 3.1 Landing Page
Sections:
- Hero section
  - Title: "Build Websites with AI"
  - Subtitle
  - Prompt input box
  - CTA button: "Generate Website"
- Features section
- How it works (3 steps)
- Footer with links

---

### 3.2 Builder Page
Main working area:
- Prompt input at top
- Generate button
- Split layout:
  - Code editor
  - Live preview
- Toolbar:
  - Download
  - Copy code
  - Reset

---

## 4. UI / UX Style

### 4.1 Design Language
- Dark theme by default
- Accent color: Purple / Blue gradient
- Rounded corners
- Soft shadows
- Glassmorphism cards

### 4.2 Fonts
- Primary: Inter / Poppins
- Code font: JetBrains Mono / Fira Code

---

## 5. Animations
- Fade-in on load
- Button hover micro-interactions
- Smooth transitions between states
- Loading animation while AI generates code

---

## 6. Tech Stack

### 6.1 Frontend
- Framework: React + Vite OR Next.js
- Styling:
  - Tailwind CSS
- Editor:
  - Monaco Editor OR CodeMirror
- Preview:
  - iframe rendering generated HTML

---

### 6.2 Backend
- Node.js
- Express OR serverless functions
- API endpoint:
  - POST /generate
  - Input: user prompt
  - Output: HTML, CSS, JS

---

### 6.3 AI Integration
- Use a text-generation API
- Prompt structure:
  - System: "You are a professional frontend developer"
  - User: Website description
- Response format:
  ```json
  {
    "html": "...",
    "css": "...",
    "js": "..."
  }
