# Mobile Testing Guide for Your Portfolio Website

## Quick Summary
Your dev server is running at:
- **Local**: http://localhost:3000
- **Network**: http://192.168.0.183:3000

## Option 1: Test on Your Phone (Same WiFi Network) ⭐ RECOMMENDED

### Steps:
1. **Make sure your phone and computer are on the same WiFi network**

2. **Get your computer's IP address** (already shown above as `192.168.0.183`)

3. **On your phone's browser**, navigate to:
   ```
   http://192.168.0.183:3000
   ```

4. **Bookmark it** for easy access during testing

### Troubleshooting:
- If it doesn't work, check your Windows Firewall settings
- The dev server must be running (npm start)
- Try disabling Windows Firewall temporarily to test

---

## Option 2: Use Browser Developer Tools (Quick Testing)

### Chrome/Edge DevTools:
1. Press `F12` to open DevTools
2. Click the **device toolbar** icon (or press `Ctrl+Shift+M`)
3. Select a mobile device from the dropdown (e.g., iPhone 12 Pro, Samsung Galaxy S20)
4. Refresh the page

### Test different devices:
- iPhone SE (small screen)
- iPhone 12 Pro (medium)
- iPad (tablet)
- Samsung Galaxy S20+ (large Android)

---

## Option 3: Test with Ngrok (Access from Anywhere)

### Steps:
1. **Install ngrok**: Download from https://ngrok.com/download

2. **Run ngrok** in a new terminal:
   ```bash
   ngrok http 3000
   ```

3. **Use the ngrok URL** (e.g., `https://abc123.ngrok.io`) on any device

### Benefits:
- Access from anywhere in the world
- Share with others for testing
- Works without same WiFi network

---

## What to Test on Mobile

### Portfolio Page - Lightbox Issues:
1. ✅ Go to Portfolio page
2. ✅ Click on any project image to open lightbox
3. ✅ Check that image is properly sized (not too large/small)
4. ✅ Try navigation buttons (should be at bottom for easy thumb access)
5. ✅ Close the lightbox
6. ✅ **VERIFY**: Portfolio grid should reappear immediately (not after scrolling)

### Home Page:
1. ✅ Check mouse glow is subtle
2. ✅ Profile picture glow looks good
3. ✅ Navigation works

### About Page:
1. ✅ Skills badges display properly
2. ✅ All sections load correctly

### General Mobile UX:
1. ✅ Text is readable (not too small)
2. ✅ Buttons are easy to tap
3. ✅ No horizontal scrolling
4. ✅ Images load properly

---

## Quick Access URLs

- **Home**: http://192.168.0.183:3000
- **Portfolio**: http://192.168.0.183:3000/portfolio
- **About**: http://192.168.0.183:3000/about
- **Contact**: http://192.168.0.183:3000/contact

---

## Recent Fixes Applied

### Lightbox Exit Issue:
- Added aggressive repaint triggers
- Forced document reflow on close
- Dispatched resize event to ensure proper rendering
- Used multiple `requestAnimationFrame` calls for timing
- Added transform hack to force GPU repaint

### Mobile Lightbox Improvements:
- Reduced image height to 75vh (accounting for mobile browser UI)
- Moved navigation buttons to bottom (80px from bottom)
- Made buttons semi-transparent with backdrop blur
- Improved touch target sizes
- Better content width utilization (95%)

---

## Need More Help?

If the lightbox exit issue persists:
1. Try refreshing the page (`Ctrl+R`)
2. Check browser console for errors (`F12` → Console tab)
3. Try in a different browser (Chrome, Firefox, Edge)
4. Clear browser cache (`Ctrl+Shift+Delete`)
