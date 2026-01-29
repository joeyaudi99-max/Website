# Joey Audi - Portfolio Website

Modern portfolio website built with React, TypeScript, and CSS Modules.

## Prerequisites

Before you can run this project, you need to install **Node.js** and **npm** (Node Package Manager).

### Installing Node.js

1. **Download Node.js:**
   - Visit [nodejs.org](https://nodejs.org/)
   - Download the LTS (Long Term Support) version for your operating system
   - For Windows: Download the `.msi` installer

2. **Install Node.js:**
   - Run the installer
   - Follow the installation wizard
   - Make sure to check the box that says "Automatically install the necessary tools"
   - Restart your computer after installation

3. **Verify Installation:**
   Open Command Prompt or PowerShell and run:
   ```bash
   node --version
   npm --version
   ```
   Both commands should display version numbers.

## Getting Started

Once Node.js is installed:

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm start
   ```
   This will open the website at `http://localhost:3000`

3. **Build for Production:**
   ```bash
   npm run build
   ```

4. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

## Project Structure

```
Website/
├── public/              # Static assets
│   ├── Media/          # Images and videos
│   ├── CNAME           # Custom domain configuration
│   └── index.html      # HTML template
├── src/
│   ├── components/     # React components
│   │   ├── layout/    # Navbar, Footer
│   │   ├── common/    # Reusable components
│   │   ├── effects/   # Visual effects
│   │   ├── portfolio/ # Portfolio-specific components
│   │   └── about/     # About page components
│   ├── pages/         # Page components
│   ├── contexts/      # React contexts (Theme)
│   ├── hooks/         # Custom React hooks
│   ├── data/          # Content data files
│   └── styles/        # Global styles
└── package.json       # Dependencies and scripts
```

## Features

- ✅ Responsive design for all devices
- ✅ Light/Dark theme toggle
- ✅ Auto-rotating image carousels
- ✅ Before/After image sliders
- ✅ Lightbox image galleries
- ✅ Smooth scroll animations
- ✅ Portfolio filtering system
- ✅ TypeScript for type safety
- ✅ CSS Modules for scoped styling

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **React Router** - Client-side routing
- **CSS Modules** - Scoped styling
- **Font Awesome** - Icons
- **Google Fonts** - Montserrat font

## Deployment

The site is configured to deploy to GitHub Pages at `joeyaudi.com`.

To deploy:
```bash
npm run deploy
```

This will:
1. Build the production version
2. Push the build to the `gh-pages` branch
3. Deploy to GitHub Pages

## Development

- `npm start` - Run development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run deploy` - Deploy to GitHub Pages

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Joey Audi. All rights reserved.

## Contact

- Email: contact@joeyaudi.com
- LinkedIn: [linkedin.com/in/joeyaudi](https://www.linkedin.com/in/joeyaudi)
- GitHub: [github.com/joeyaudi](https://github.com/joeyaudi)
