# Memory & Technical Specification — professorrafaelalves.com

## 1. Project Overview & Identity
- **Website Name:** Website Oficial do Prof. Rafael Alves da Silva
- **Production Canonical Domain:** `https://professorrafaelalves.com/`
- **Location on Disk:** `C:\code\professorrafaelalves.com`
- **Original Source:** Derived from `modelos/modelo-04-executivo-keynote` in the `P.R.A` project repository. Chosen as the definitive official production release.
- **Subject:** Prof. Rafael Alves da Silva
  - **Roles:** Palestrante Principal (Keynote Speaker Bett Brasil), Pesquisador em Inteligência Artificial, Especialista em Educação e Ciências Humanas, Microsoft Innovative Educator Expert (MIEE).
  - **Official Channels:**
    - Instagram: `https://www.instagram.com/rafael_alvespw/`
    - WhatsApp: `+55 (62) 99106-0408` (`https://wa.me/5562991060408`)
    - LinkedIn: `https://www.linkedin.com/in/rafael-alves-da-silva-4560b093/`
    - Lattes: `http://lattes.cnpq.br/4422204752631557`
    - ORCID: `https://orcid.org/0009-0005-7287-9293`

---

## 2. Architectural Design & Philosophy
- **Stack:** 100% Framework-free native web stack (Pure Semantic HTML5, CSS3 Modern Flex/Grid, Vanilla ES6+ JavaScript).
- **Zero Build Step:** Ready to deploy immediately to any static hosting provider (Cloudflare Pages, Vercel, Netlify, GitHub Pages, or Apache/Nginx).
- **Zero External Dependencies / Self-Contained:** All 13 image assets, scripts, and styles are hosted locally within the folder. No external CDNs or remote image URLs.
- **Dual-Audience Architecture:**
  - **Human Audience:** Clean, professional, executive presentation without AI-slop or machine dossiers cluttering the viewport.
  - **Machine / AI / Crawler Audience:** Full WebMCP, JSON-LD Schema.org, `llms.txt`, and markdown dossiers served under the hood.

---

## 3. Visual Identity & Design System (60-30-10 Alabaster Frost)
- **Theme Concept:** Executivo Alabastro / Modern Keynote Speaker.
- **Strict 60-30-10 Color Rule:**
  - **60% Dominant (Surfaces):** `#F8FAFC` (Slate-50 soft alabaster background) and `#FFFFFF` (Crisp card containers).
  - **30% Structural (Typography & Structure):** `#0F172A` (Deep Slate-900 high-contrast primary text) and `#1E293B` (Slate-800 secondary text / `#E2E8F0` structural borders).
  - **10% Accent (Call-to-Action & Badges):** `#0284C7` (Sky-600) and `#0369A1` (Sky-700) reserved exclusively for focal interactive actions and badges.
- **Typography:**
  - Primary (Headings & Body): `Inter Tight`, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif.
  - Secondary / Monospace: `JetBrains Mono`, monospace (used for badges, metrics, dates, code references).
- **Anti-AI-Slop Principles Strictly Applied:**
  - No text gradients (`-webkit-text-fill-color: transparent` banned on text headings).
  - No fake terminal emulators or hacker output blocks in human DOM.
  - Pure vector SVGs for all icons (no mismatched low-res emoji icons).
  - High WCAG AAA contrast ratio throughout.

---

## 4. Key Sections & Content Features
1. **Hero Section:**
   - Unified hero badges: "Palestrante Bett Brasil", "MIEE Microsoft", "Pesquisador IA".
   - Clear value proposition highlighting AI, Education, and Human Sciences.
   - Direct CTA buttons: "Agendar Palestra" (WhatsApp anchor) and "Conhecer Trajetória".
2. **Keynote & Lectures (Palestras & Painéis):**
   - Bett Brasil highlights, keynote titles, workshops, and institutional panels.
   - Interactive lecture request cards.
3. **Trajectory / Timeline (Trajetória & Marcos):**
   - **Reverse Chronological Order:** Most recent milestones first (2024-2026 -> 2024-PRESENTE -> 2023 -> 2022-PRESENTE).
4. **Credentials & Certifications:**
   - Microsoft MIEE, AI Leader, Agent Academy, IBM Prompt Engineering badges.
5. **Photo Gallery (Galeria de Palestras):**
   - Bett Brasil, PUC Goiás, FIEB Salvador, Microsoft Tour, Podcast Innovent, Conferência IA.
   - Built-in lightweight lightbox modal viewer.
6. **Interactive Contact Dispatch:**
   - Functional WhatsApp message dispatch generator with form fields (Name, Institution, City, Date, Message).
   - Generates pre-filled WhatsApp links directly to the Professor.
7. **Footer & Machine Transparency:**
   - Direct links to `mcp-manifest.json`, `llms.txt`, `rafael_alves_da_silva.md`, and `sitemap.xml`.

---

## 5. File System & Manifest
```text
professorrafaelalves.com/
├── assets/
│   └── images/
│       ├── avatar-rafael.jpg           # Profile picture
│       ├── portrait-bett-brasil.webp   # Keynote portrait on stage
│       ├── students-lab-g1.jpg          # Educational lab with students
│       ├── gallery-bett-brasil.jpg     # Bett Brasil keynote photo
│       ├── gallery-puc-goias.jpg       # PUC Goiás conference
│       ├── gallery-conferencia-ia.jpg  # AI conference presentation
│       ├── gallery-microsoft-tour.jpg  # Microsoft tour session
│       ├── gallery-podcast-innovent.jpg# Innovent podcast recording
│       ├── gallery-fieb-salvador.jpg   # FIEB Salvador talk
│       ├── badge-miee.png              # Microsoft Innovative Educator Expert
│       ├── badge-ai-leader.png         # AI Leader certification
│       ├── badge-agent-academy.png     # Agent Academy certification
│       └── badge-ibm-prompt.png        # IBM Prompt Engineering badge
├── index.html                          # Main production HTML page
├── style.css                           # Executive Alabaster design system
├── script.js                           # Interactive components & dispatch
├── memory.md                           # This persistent memory file
├── robots.txt                          # Crawler rules & sitemap reference
├── sitemap.xml                         # Canonical XML sitemap
├── llms.txt                            # Protocol file for LLMs
├── mcp-manifest.json                   # WebMCP manifest for AI agents
└── rafael_alves_da_silva.md            # Comprehensive Markdown bio dossier
```

---

## 6. Machine & Agent Protocol Integration
- **WebMCP Manifest (`mcp-manifest.json`):** Defines discoverable capabilities and endpoints for autonomous agents.
- **LLMs Guide (`llms.txt`):** Briefing for AI agents and LLM scrapers with direct references to markdown documentation.
- **Markdown Dossier (`rafael_alves_da_silva.md`):** Complete, structured curriculum, research papers, awards, and lecture topics.
- **Schema.org Structured Data (JSON-LD in `index.html`):**
  - `Person`
  - `ProfilePage`
  - `EducationalOccupationalCredential`
  - `ItemList` (lectures and milestones)

---

## 7. Deployment Instructions
1. This directory is ready for production as-is.
2. Upload all files from `C:\code\professorrafaelalves.com` directly to the web root of your hosting service.
3. Configure the domain `professorrafaelalves.com` (and `www.professorrafaelalves.com`) pointing to the deployed site with HTTPS enabled.
4. Ensure standard HTTP headers are configured (e.g. `Cache-Control` for assets, MIME types for `.json`, `.xml`, and `.md`).
