# Moya Kramo — Portfolio

A dark, burgundy-themed static portfolio for showcasing AI/ML artifacts.
No build step, no frameworks — just HTML, CSS, and a little JavaScript. Anyone can edit it.

**Live URL (after deploy):** `https://moyakramo.github.io/portfolio/`

---

## 1. Files in this repo

```
portfolio/
├── index.html            ← Home
├── about.html            ← About
├── artifacts.html        ← Artifacts grid
├── artifact-01.html      ← Artifact detail: AI Timeline
├── artifact-template.html← Copy this to add new artifacts (2–5)
├── .nojekyll             ← Tells GitHub Pages to serve files as-is
├── README.md             ← This file
└── assets/
    ├── style.css         ← All styling (the theme lives here)
    ├── main.js           ← Mobile menu + sidebar scroll-highlighting
    └── artifacts/
        ├── ai-timeline-cover.png                 ← Grid thumbnail
        └── AIML500_1.3_AI_Timeline_Kramo.pdf     ← The timeline deck
```

---

## 2. Deploy to GitHub Pages (one time, ~5 minutes)

1. Go to <https://github.com/new> and create a repository named **`portfolio`**
   (owner must be your account, **moyakramo**). Make it **Public**.
2. On the new repo page, click **"uploading an existing file"**.
3. Drag in **everything inside this folder** — all the `.html` files, `README.md`,
   `.nojekyll`, and the whole `assets` folder. Commit.
4. Go to **Settings → Pages**.
5. Under **"Build and deployment" → Source**, choose **"Deploy from a branch"**.
6. Set branch to **`main`** and folder to **`/ (root)`**. Click **Save**.
7. Wait 1–2 minutes, then visit **`https://moyakramo.github.io/portfolio/`**.

> Tip: If you prefer the command line and have `git` installed:
> ```bash
> git init
> git add .
> git commit -m "Initial portfolio"
> git branch -M main
> git remote add origin https://github.com/moyakramo/portfolio.git
> git push -u origin main
> ```
> Then do steps 4–7 above.

Any time you change a file and commit/upload it, the live site updates automatically
within a minute or two.

---

## 3. Add a new artifact (2, 3, 4, 5…)

Each artifact is a single self-contained page. To add one:

1. **Copy** `artifact-template.html` → rename to `artifact-02.html`
   (then `artifact-03.html`, etc.).
2. **Add your files** to `assets/artifacts/`:
   - the artifact's PDF (or images), and
   - a cover image named e.g. `artifact-02-cover.png` (16:9 looks best).
3. **Open `artifact-02.html`** and fill in the placeholders marked `{{ … }}`:
   the title, tags, and each section (Introduction, Objective, Process, etc.).
   Update the PDF/download links to point at your new file.
4. **Add a card to the grid.** Open `artifacts.html`, copy the existing
   `<a class="art-card">…</a>` block for Artifact 01, paste it above the
   "Coming soon" placeholder, and change the number, title, thumbnail, and link
   (`href="artifact-02.html"`).
5. (Optional) Update the **"Latest artifact"** card on `index.html` the same way.
6. Commit / upload the changed files. Done.

### Turning a PowerPoint into a viewable PDF
GitHub Pages can't display `.pptx`. Convert it first:
- **Easiest:** open the deck in PowerPoint → **File → Export → Create PDF/XPS**.
- **Google Slides:** File → Download → PDF.
- Save the PDF into `assets/artifacts/` and link to it from your artifact page.

For a grid thumbnail, take a screenshot of the first slide (or export slide 1 as PNG)
and save it as your `*-cover.png`.

---

## 4. Change the look

Everything visual is controlled at the top of **`assets/style.css`** in the
`:root { … }` block — background shades, the burgundy/red brand colours, fonts,
corner radius. Adjust a value there and the whole site updates. For example:

```css
--burgundy:  #6e1423;   /* deep burgundy */
--red-bright:#e63950;   /* highlight red */
--accent:    #b81d3a;   /* buttons / links */
```

---

## 5. Notes

- Page links are **relative** (e.g. `artifact-01.html`), so the site works whether
  it's at `/portfolio/` or anywhere else — no path surgery needed.
- The `.nojekyll` file must stay in the repo; it prevents GitHub from hiding files
  that start with an underscore and keeps everything served exactly as uploaded.
