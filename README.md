# Customer Review of Maestro Renovation

An independent, documented customer review website for Maestro Renovation LLC. Built with React, TypeScript, Tailwind CSS, and Vite. Designed to be deployed as a static site on GitHub Pages.

**Live site:** [www.maestro-renovation-review.com](https://www.maestro-renovation-review.com/)

---

## Tech Stack

- **React 19** — UI framework
- **TypeScript** — Type safety
- **Tailwind CSS 4** — Utility-first styling
- **Vite** — Build tool and dev server
- **GitHub Actions** — Automated deployment to GitHub Pages

---

## Project Structure

```
├── .github/workflows/deploy.yml   # GitHub Actions workflow for auto-deploy
├── public/
│   ├── CNAME                      # Custom domain for GitHub Pages
│   └── .nojekyll                  # Prevents Jekyll processing
├── src/
│   ├── components/                # Reusable UI components
│   │   ├── ExhibitCard.tsx        # Evidence image/video display with lightbox
│   │   ├── FloatingTOC.tsx        # Floating table of contents (desktop)
│   │   ├── MobileNav.tsx          # Collapsible TOC (mobile/tablet)
│   │   ├── ReadingProgress.tsx    # Reading progress bar
│   │   ├── ReviewSection.tsx      # Individual issue section
│   │   ├── ScrollToTop.tsx        # Scroll-to-top button
│   │   ├── SeverityBadge.tsx      # Critical/Major/Minor severity pills
│   │   └── SummaryBar.tsx         # Summary statistics bar
│   ├── lib/
│   │   └── reviewData.ts         # All review content and media references
│   ├── pages/
│   │   └── Home.tsx              # Main page layout
│   ├── App.tsx                   # App entry component
│   ├── main.tsx                  # React DOM entry point
│   └── index.css                 # Global styles and design system
├── index.html                    # HTML template
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (comes with Node.js)

### Setup

```bash
# Clone the repository
git clone https://github.com/dmitryvinn/site-review.git
cd site-review

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:3000`.

### Build

```bash
# Create a production build
npm run build

# Preview the production build locally
npm run preview
```

The build output goes to the `dist/` directory.

---

## Deployment to GitHub Pages

### Automatic Deployment (Recommended)

This project includes a GitHub Actions workflow that **automatically deploys to GitHub Pages whenever you push to the `main` branch**.

#### One-Time Setup

1. Go to your GitHub repository **Settings** > **Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. That's it! Every push to `main` will trigger a build and deploy

#### How It Works

1. You push changes to the `main` branch
2. GitHub Actions runs the workflow in `.github/workflows/deploy.yml`
3. It installs dependencies, builds the site, and deploys the `dist/` folder to GitHub Pages
4. The `CNAME` file in `public/` ensures your custom domain is preserved

### Manual Deployment (Alternative)

If you prefer to deploy manually using the `gh-pages` npm package:

```bash
# Build and deploy to gh-pages branch
npm run deploy
```

This runs `vite build` and then pushes the `dist/` folder to the `gh-pages` branch.

> **Note:** If using manual deployment, go to **Settings** > **Pages** and set **Source** to **Deploy from a branch**, then select the `gh-pages` branch.

---

## Updating Content

All review content is stored in a single file: `src/lib/reviewData.ts`.

### To add a new section:

Add a new entry to the `sections` array:

```typescript
{
  id: "unique-section-id",        // Used for URL anchors
  title: "Section Title",
  severity: "critical",           // "critical" | "major" | "minor"
  content: [
    "First paragraph of text.",
    "Second paragraph of text.",
  ],
  exhibits: [
    {
      id: "AA",                   // Exhibit label (shown as "Fig. AA")
      src: "https://www.maestro-renovation-review.com/img/content/filename.jpg",
      caption: "Description of the evidence",
      type: "image",              // "image" | "video"
    },
  ],
}
```

### To update site metadata:

Edit the `siteInfo` object at the top of `reviewData.ts`.

### To add new images/videos:

1. Add the media files to your repository (e.g., in a `public/img/` directory)
2. Reference them in the exhibit `src` field using the full URL or relative path

---

## Custom Domain

The `CNAME` file in `public/` is set to `www.maestro-renovation-review.com`. This file is automatically copied to the build output during `npm run build`.

To change the domain, edit `public/CNAME`.

---

## License

This is a personal review website. All content and photographs are the property of the site owner.
