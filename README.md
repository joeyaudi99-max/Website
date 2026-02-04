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
│   ├── pages/             # Page components
│   ├── data/              # Content data files
│   ├── styles/            # Global styles
│   ├── App.tsx            # Main app component
│   └── index.tsx          # Entry point
├── public/                # Static files (copied to build)
│   ├── index.html         # HTML template
│   ├── manifest.json      # PWA manifest
│   └── ...
├── build/                 # Production build (generated)
├── Media/                 # Portfolio media files
├── scripts/               # Build and deployment scripts
└── package.json           # Dependencies and scripts
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
   Opens [http://localhost:3000](http://localhost:3000) in your browser. The page will reload when you make changes.

3. **Build for production:**
   ```bash
   npm run build
   ```
   Creates optimized production build in the `build/` folder.

4. **Run tests:**
   ```bash
   npm test
   ```
   Launches the test runner in interactive watch mode.

## 🌐 Deployment

This site is deployed to **GitHub Pages** and served from the repository root.

### Deployment Process

1. **Build the production version:**
   ```bash
   npm run build
   ```

2. **Deploy to root (automated):**
   ```bash
   npm run deploy
   ```
   This script copies the build files to the repository root for GitHub Pages.

3. **Commit and push:**
   ```bash
   git add .
   git commit -m "Deploy updated build"
   git push origin main
   ```

4. **Live in minutes:**
   Your changes will be live at [joeyaudi.com](https://joeyaudi.com) within 1-5 minutes.

### Manual Deployment

If you prefer manual deployment:

1. Build the project: `npm run build`
2. Copy contents of `build/` to repository root
3. Preserve these files (don't overwrite):
   - `Media/` folder
   - `CNAME` file
   - `404.html` file
   - `.nojekyll` file
   - `.gitignore` file
   - Source code (`src/`, `package.json`, etc.)

## 📂 Repository Structure

The repository contains both **source code** and **production build**:

- **Development files:** `src/`, `public/`, `package.json`, `tsconfig.json`
- **Production files:** `index.html`, `static/`, `asset-manifest.json` (in root)
- **Media assets:** `Media/` folder (used by both dev and prod)

This approach allows:
- GitHub Pages to serve directly from `main` branch root
- Full source code in the same repository
- Easy development and deployment workflow

## 🎨 Customization

### Adding New Pages

1. Create component in `src/pages/`:
   ```tsx
   // src/pages/Portfolio.tsx
   import React from 'react';
   import './Portfolio.css';
   
   const Portfolio: React.FC = () => {
     return <div>Portfolio content</div>;
   };
   
   export default Portfolio;
   ```

2. Add route in `src/App.tsx`:
   ```tsx
   import Portfolio from './pages/Portfolio';
   
   <Route path="/portfolio" element={<Portfolio />} />
   ```

### Using Media Files

Media files are located in the `Media/` folder. Reference them in your components:

```tsx
<img src="/Media/Profile.jpg" alt="Profile" />
<video src="/Media/Wine_Hack_Subtitles.mp4" />
```

### Styling

- **Global styles:** `src/index.css` and `src/App.css`
- **Component styles:** Create `.css` file next to component
- **CSS Modules:** Use `.module.css` for scoped styles

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server on http://localhost:3000 |
| `npm run build` | Create production build in `build/` folder |
| `npm run deploy` | Build and copy files to root for GitHub Pages |
| `npm test` | Run test suite |
| `npm run eject` | Eject from Create React App (⚠️ irreversible) |

## 📱 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ PWA support (installable on mobile devices)
- ✅ Dark/light theme color schemes
- ✅ SPA routing (via `404.html` redirect)
- ✅ Optimized performance (gzipped bundles)
- ✅ TypeScript for type safety
- ✅ iOS-optimized (safe areas, touch targets)

## 🐛 Troubleshooting

### Development server won't start
- Delete `node_modules/` and run `npm install` again
- Clear cache: `npm cache clean --force`

### Build fails
- Check for TypeScript errors: `npm run build`
- Ensure all imports are correct
- Verify `public/index.html` exists

### Deployment issues
- Ensure `CNAME` file contains: `joeyaudi.com`
- Check GitHub Pages settings (should serve from `main` branch root)
- Wait 5-10 minutes for CDN cache to clear

## 📄 License

This is a personal portfolio website. All rights reserved.

## 📞 Contact

**Joey Audi**  
Audiovisual Technician & Event Coordinator  
[joeyaudi.com](https://joeyaudi.com)

---

Built with ❤️ using React and TypeScript
