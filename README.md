# Moya Kramo — Portfolio

**Live URL (after deploy):** `https://moyakramo.github.io/portfolio/`

---

## Files in this repo

```
portfolio/
├── index.html            ← Home
├── about.html            ← About
├── artifacts.html        ← Artifacts grid
├── artifact-01.html      ← Artifact detail: AI Timeline
├── artifact-template.html← Copy this to add new artifacts (2–5)
├── README.md             ← This file
└── assets/
    ├── style.css         ← All styling (the theme lives here)
    ├── main.js           ← Mobile menu + sidebar scroll-highlighting
    └── artifacts/
        ├── ai-timeline-cover.png                 ← Grid thumbnail
        └── AIML500_1.3_AI_Timeline_Kramo.pdf     ← The timeline deck
```

---



- Page links are **relative** (e.g. `artifact-01.html`), so the site works whether
  it's at `/portfolio/` or anywhere else — no path surgery needed.
- The `.nojekyll` file must stay in the repo; it prevents GitHub from hiding files
  that start with an underscore and keeps everything served exactly as uploaded.
