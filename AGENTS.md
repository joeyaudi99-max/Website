# AGENTS.md

## Cursor Cloud specific instructions

This is a React/TypeScript portfolio website (Create React App). No backend, database, Docker, or environment variables required.

### Quick reference

- **Dev server:** `npm start` (runs on port 3000)
- **Build:** `npm run build`
- **Lint:** `npx eslint src/`
- **Tests:** `CI=true npm test -- --watchAll=false --passWithNoTests` (no test files currently exist)

See `README.md` for full documentation of available scripts and project structure.

### Notes

- There is no lock file (`package-lock.json`) in the repository; `npm install` generates one fresh each time.
- CRA dev server emits deprecation warnings for `onAfterSetupMiddleware` / `onBeforeSetupMiddleware`; these are harmless and come from `react-scripts 5.0.1`.
- All portfolio content is hardcoded in `src/data/`; there are no API calls or environment variables.
- Media assets (~280 MB) are committed in `Media/`; they are served from `public/Media/` during development.
