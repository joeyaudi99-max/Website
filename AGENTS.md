# Website repository guidance

## How this site is built

- This is a Create React App single-page application using React Router.
- GitHub Pages serves the published site from the repository root on the `main` branch. The custom domain is `joeyaudi.com`.
- Application behavior and interactive UI live in `src/`; public assets and the HTML build template live in `public/`.
- The root `index.html`, root `static/`, and root `asset-manifest.json` are generated deployment output. Do not make hand edits to those files; they are replaced by `npm run deploy`.
- `npm run deploy` runs the production build through npm's `predeploy` lifecycle, copies the build output to the repository root, and generates crawlable fallback HTML for the home, About, Portfolio, and Contact routes.

## Keep these in sync

- Routes are registered in `src/App.tsx`.
- The crawlable summaries and per-route title/description are defined in `scripts/deploy.js`. Keep each summary accurate when the corresponding page in `src/pages/` changes.
- Public URLs are listed in `sitemap.xml`. When adding or removing a route, update `src/App.tsx`, the static page list in `scripts/deploy.js`, and `sitemap.xml` together.
- Keep `CNAME`, `.nojekyll`, and the GitHub Pages root publishing setup intact.

## Safe editing and publishing

- For content or behavior changes, edit the source components and data in `src/`, not generated files in the root.
- Run `npm run deploy` to regenerate the production root files and route folders before committing a deployment.
- The static HTML is an initial, accessible content fallback. The existing React app replaces it when JavaScript starts; keep interactions, routing behavior, styling, and components in the React app.
- Do not change the hosting model or introduce a new rendering framework without reviewing the deployment flow and explaining the impact first.
