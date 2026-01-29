# 🚀 Quick Deploy Guide

## ✅ Your React App is Deployed on Main Branch

Your React portfolio is now deployed directly to the main branch, so GitHub Pages serves it automatically!

---

## 🎯 How to Deploy Updates (3 Ways)

### Option 1: Use the Deploy Script (EASIEST)
```powershell
.\deploy.ps1
```
This will:
1. Build your React app
2. Copy files to root
3. Commit and push
4. Ask for a commit message

### Option 2: Manual Commands
```powershell
# Build
npm run build

# Copy to root
Get-ChildItem "build" | ForEach-Object { Copy-Item $_.FullName -Destination "." -Recurse -Force }

# Commit and push
git add -A
git commit -m "Update portfolio"
git push origin main
```

### Option 3: Quick npm command
```bash
npm run build && git add -A && git commit -m "Update" && git push
```

---

## 📝 Common Tasks

### Update Portfolio Items
1. Edit `src/data/portfolioData.ts`
2. Run `.\deploy.ps1`
3. Wait 2 minutes
4. Check https://joeyaudi.com

### Change Theme Colors
1. Edit `src/styles/global.css`
2. Run `.\deploy.ps1`
3. Done!

### Add New Page
1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Run `.\deploy.ps1`

---

## 🌐 Your Live Site

**Production**: https://joeyaudi.com
**Local Dev**: http://localhost:3000 (when running `npm start`)

---

## ⚡ Development Workflow

```powershell
# Start dev server (for testing locally)
npm start

# Make your changes in src/ folder
# Save - browser auto-refreshes!

# When ready to deploy
.\deploy.ps1
```

---

## 📁 Project Structure

```
Website/
├── src/                    # Your React source code (edit these!)
│   ├── components/         # Reusable components
│   ├── pages/             # Page components
│   ├── data/              # Content (easy to update!)
│   ├── styles/            # Global CSS
│   └── hooks/             # Custom React hooks
│
├── public/                # Static assets (images, CNAME)
├── build/                 # Build output (auto-generated)
│
├── index.html             # Built React app (in root for GitHub Pages)
├── static/                # Compiled CSS/JS (in root for GitHub Pages)
│
├── deploy.ps1             # Easy deployment script
└── package.json           # Dependencies and scripts
```

---

## 🎨 Quick Edits

**Change your bio**:
- Edit `src/pages/About.tsx`

**Add portfolio project**:
- Edit `src/data/portfolioData.ts`

**Update skills**:
- Edit `src/data/aboutData.ts`

**Add experience**:
- Edit `src/data/timelineData.ts`

After editing, run `.\deploy.ps1`!

---

## ✅ Everything is Set Up!

✅ React app built and deployed
✅ GitHub Pages serving from main branch
✅ Custom domain (joeyaudi.com) configured
✅ Mobile optimized (iOS compliant)
✅ Deploy script ready to use

**Your site is live!** 🎉

Visit: **https://joeyaudi.com**

(Wait 1-2 minutes after deployment for changes to appear)
