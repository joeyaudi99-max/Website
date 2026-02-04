const fs = require('fs-extra');
const path = require('path');

console.log('🚀 Starting deployment process...\n');

const buildDir = path.join(__dirname, '../build');
const rootDir = path.join(__dirname, '..');

// Files and folders to copy from build to root
const itemsToCopy = [
  'index.html',
  'asset-manifest.json',
  'manifest.json',
  'robots.txt',
  'static'
];

// Files that should stay in root (not overwritten)
const preservedFiles = [
  '.git',
  '.gitignore',
  'node_modules',
  'src',
  'public',
  'package.json',
  'package-lock.json',
  'tsconfig.json',
  'scripts',
  'build',
  'Media',
  'CNAME',
  '404.html',
  '.nojekyll',
  'README.md'
];

async function deploy() {
  try {
    // Check if build directory exists
    if (!fs.existsSync(buildDir)) {
      console.error('❌ Build directory not found. Run "npm run build" first.');
      process.exit(1);
    }

    console.log('📦 Copying build files to root...\n');

    // Copy each item from build to root
    for (const item of itemsToCopy) {
      const srcPath = path.join(buildDir, item);
      const destPath = path.join(rootDir, item);

      if (fs.existsSync(srcPath)) {
        // Remove old version if it exists (except for preserved files)
        if (fs.existsSync(destPath) && !preservedFiles.includes(item)) {
          await fs.remove(destPath);
        }
        
        await fs.copy(srcPath, destPath);
        console.log(`✅ Copied: ${item}`);
      } else {
        console.log(`⚠️  Skipped (not found): ${item}`);
      }
    }

    console.log('\n✨ Deployment complete!');
    console.log('\n📝 Next steps:');
    console.log('   1. Review the changes: git status');
    console.log('   2. Commit the changes: git add . && git commit -m "Deploy updated build"');
    console.log('   3. Push to GitHub: git push origin main');
    console.log('\n🌐 Your site will be live at https://joeyaudi.com shortly after pushing!\n');

  } catch (error) {
    console.error('❌ Deployment failed:', error.message);
    process.exit(1);
  }
}

deploy();
