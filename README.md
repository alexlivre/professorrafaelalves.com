# professorrafaelalves.com

Official website and portfolio of **Prof. Rafael Alves da Silva** — Keynote Speaker (Bett Brasil), AI in Education Researcher, Human Sciences Specialist, and Microsoft Innovative Educator Expert (MIEE).

🌐 **Live URL:** [https://professorrafaelalves.com](https://professorrafaelalves.com)

---

## 📌 Project Overview

This project is a high-performance, self-contained, and framework-free production web platform designed to present the keynote lectures, research publications, executive trajectory, and institutional workshops of Prof. Rafael Alves.

### Key Highlights
- **Zero Build Step:** 100% native semantic HTML5, modern CSS3 (Flexbox & CSS Grid), and vanilla ES6+ JavaScript.
- **Self-Contained:** Zero external CDNs or remote dependencies; all assets and fonts are served locally for maximum privacy, speed, and reliability.
- **Dual-Audience Architecture:**
  - **Human Experience:** Executive visual design adhering strictly to the *60-30-10 Alabaster Frost* palette, high contrast (WCAG AAA compliant), responsive layout, and interactive modal lightbox.
  - **Machine / AI Optimization:** Comprehensive semantic metadata, JSON-LD Schema.org graphs, WebMCP manifest (`mcp-manifest.json`), standard `llms.txt`, and structured dossiers for AI crawlers.

---

## 📂 Project Structure

```text
professorrafaelalves.com/
├── assets/
│   └── images/              # High-resolution optimized local image assets
├── .gitignore               # Git ignore rules
├── humans.txt               # Team and author attribution manifest
├── index.html               # Main production landing page & semantic markup
├── llms.txt                 # Structured context for LLMs and AI crawlers
├── mcp-manifest.json        # WebMCP agent tools and endpoints definition
├── memory.md                # Project technical memory and architecture specification
├── rafael_alves_da_silva.md # Complete professional and academic dossier
├── robots.txt               # Search engine and crawler directives
├── script.js                # Lightweight vanilla interactive behaviors & lightbox
├── sitemap.xml              # XML sitemap for SEO indexing
├── style.css                # Custom modern stylesheet with 60-30-10 color system
└── test-automation/         # Automated validation suite & logs
```

---

## 🚀 Getting Started

### Local Development

Since this project has no build step or package dependencies, you can serve it with any local static HTTP server:

Using Python:
```bash
python -m http.server 8000
```

Using Node (`npx`):
```bash
npx serve .
```

Then open `http://localhost:8000` in your web browser.

---

## 🧪 Testing & Quality Assurance

Automated validation checks are located in `test-automation/`:
- JavaScript syntax and integrity validation.
- Asset and link resolution checks.
- Zero external dependency verification.

Run tests using:
```bash
node test-automation/run_tests.js
```

---

## 👨‍💻 Author & Technical Architecture

- **UI Architect & Developer:** **Alex Santos (alexlivre)**
- **Website:** [https://alexlivre.dev/](https://alexlivre.dev/)
- **GitHub:** [@alexlivre](https://github.com/alexlivre)

Crafted according to the *60-30-10 Alabaster Frost* design system, WCAG AAA contrast compliance, and strict Anti-AI-Slop standards.

---

## 📄 License

All rights reserved © Prof. Rafael Alves da Silva.
