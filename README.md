# Joey Audi Portfolio Website

Portfolio website for Joey Audi - Audiovisual Technician & Event Coordinator, showcasing cinematography, event coordination, and community engagement work.

**Live Site:** [https://joeyaudi.com](https://joeyaudi.com)

## 🚀 Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **React Router 6** - Client-side routing
- **CSS Modules** - Scoped styling
- **Font Awesome** - Icon library

## 📁 Project Structure

```
Website/
├── src/                    # React source code
│   ├── components/         # Reusable components
│   ├── pages/              # Page components
│   ├── data/               # Content data files
│   ├── styles/             # Global styles
│   ├── App.tsx             # Main app and routes
│   └── index.tsx           # Entry point
├── public/                 # Static assets and CRA HTML template
├── build/                  # Production build (generated)
├── Media/                  # Portfolio media files
├── scripts/deploy.js       # Root deployment and static route generation
├── AGENTS.md               # Editing and deployment guidance
└── package.json            # Dependencies and scripts
```

## 🛠️ Development

### Prerequisites

- Node.js 16+ and npm installed
- Git for version control

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```
   Opens [http://localhost:3000](http://localhost:3000). The page reloads when you make changes.

3. **Build for production:**
   ```bash
   npm run build
   ```
   Creates the optimized production build in `build/`.

4. **Run tests:**
   ```bash
   npm test
   ```

## 🌐 Deployment

GitHub Pages serves the production site from the repository root on the `main` branch. The custom domain is `joeyaudi.com`.

1. Make changes in `src/`, `public/`, or deployment scripts. Do not hand-edit generated root files.
2. Run `npm run deploy`. The npm `predeploy` lifecycle builds the app, then `scripts/deploy.js` copies the build output to the root and generates crawlable pages at `/`, `/about`, `/portfolio`, and `/contact`.
3. Review the source and generated outputs, then commit and push the changes to `main` to publish.

The crawlable HTML provides page text and metadata in the initial response. When JavaScript loads, the existing React app replaces that fallback and continues to handle the site’s interactions and routing.

When adding or removing a route, update `src/App.tsx`, `scripts/deploy.js`, and `sitemap.xml` together. See [AGENTS.md](AGENTS.md) for repository-specific editing guidance.

## 📱 Features

- ✅ Responsive design
- ✅ PWA support
- ✅ Dark/light theme colors
- ✅ Client-side routes with GitHub Pages fallback
- ✅ TypeScript

## 📄 License

This is a personal portfolio website. All rights reserved.
