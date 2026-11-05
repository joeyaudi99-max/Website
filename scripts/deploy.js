const fs = require('fs-extra');
const path = require('path');

console.log('🚀 Starting deployment process...\n');

const buildDir = path.join(__dirname, '../build');
const rootDir = path.join(__dirname, '..');

// Keep these crawlable summaries aligned with the page content in src/pages.
// The React app replaces this fallback as soon as it starts, so interactions and
// visual behavior remain owned by the existing React components.
const staticPages = [
  {
    path: '',
    title: 'Joey Audi - Audiovisual Marketing Specialist',
    description: 'Audiovisual marketing specialist based in Finland, creating content, planning newsletters, developing visual brands, and executing multi-platform campaigns.',
    heading: 'Joey Audi',
    paragraphs: [
      'Audiovisual marketing specialist with hands-on experience in content creation, newsletter planning, visual branding, and campaign execution.',
      'Based in Finland, I bring a visual storyteller’s perspective to digital marketing and brand development. I have coordinated international events for up to 600 people and managed audiovisual content across five social media channels.'
    ]
  },
  {
    path: 'about',
    title: 'About Me | Joey Audi',
    description: 'Learn about Joey Audi’s experience in audiovisual marketing, event coordination, content creation, visual branding, and social media.',
    heading: 'About Joey Audi',
    paragraphs: [
      'A background in audiovisual arts, cinema, and interactive media shapes the way I approach digital marketing and visual brand development.',
      'I have managed events and produced graphics and video content at Nokia Arena’s Paidia gaming space, coordinated international student events for up to 600 people, and planned marketing materials and sponsorship outreach for more than 30 annual events.',
      'I have also managed audiovisual content workflows for more than five social media channels, producing over 60 videos per month.'
    ]
  },
  {
    path: 'portfolio',
    title: 'Portfolio | Joey Audi',
    description: 'Explore Joey Audi’s portfolio of audiovisual production, video, 3D animation, cinematography, event branding, and creative projects.',
    heading: 'Portfolio',
    paragraphs: [
      'Selected professional and academic work across audiovisual production, event branding, video, photography, and 3D rendering.',
      'The interactive portfolio includes project details, media galleries, case studies, and links to related work.'
    ]
  },
  {
    path: 'contact',
    title: 'Contact | Joey Audi',
    description: 'Contact Joey Audi in Tampere, Finland, about audiovisual production, event coordination, and video content opportunities.',
    heading: 'Contact Joey Audi',
    paragraphs: [
      'Joey Audi is based in Tampere, Finland and is seeking opportunities in audiovisual production, event coordination, and video content creation.',
      'Email: contact@joeyaudi.com'
    ]
  }
];

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
  'README.md',
  'AGENTS.md'
];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function createFallbackMarkup(page) {
  const links = staticPages.map(linkPage => {
    const href = linkPage.path ? '/' + linkPage.path : '/';
    const label = linkPage.path || 'Home';
    return '<a href="' + href + '">' + escapeHtml(label) + '</a>';
  }).join(' ');

  const paragraphs = page.paragraphs.map(paragraph =>
    '<p>' + escapeHtml(paragraph) + '</p>'
  ).join('');

  return '<main class="container" aria-labelledby="static-page-title">' +
    '<h1 id="static-page-title">' + escapeHtml(page.heading) + '</h1>' +
    paragraphs +
    '<nav aria-label="Main navigation">' + links + '</nav>' +
    '</main>';
}

function renderStaticPage(template, page) {
  const title = '<title>' + escapeHtml(page.title) + '</title>';
  const description = '<meta name="description" content="' + escapeHtml(page.description) + '" />';
  const canonicalUrl = 'https://joeyaudi.com' + (page.path ? '/' + page.path : '/');
  let html = template.replace(/<title>[\s\S]*?<\/title>/i, title);
  html = html.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, description);
  html = html.replace('</head>', '<link rel="canonical" href="' + canonicalUrl + '" />' +
    '<meta property="og:title" content="' + escapeHtml(page.title) + '" />' +
    '<meta property="og:description" content="' + escapeHtml(page.description) + '" />' +
    '<meta property="og:url" content="' + canonicalUrl + '" />' +
    '</head>');

  if (!html.includes('<div id="root"></div>')) {
    throw new Error('Could not find the expected React root in build/index.html.');
  }

  return html.replace(
    '<div id="root"></div>',
    '<div id="root">' + createFallbackMarkup(page) + '</div>'
  );
}

async function writeStaticPages(template) {
  for (const page of staticPages.slice(1)) {
    const pageDir = path.join(rootDir, page.path);
    await fs.ensureDir(pageDir);
    await fs.writeFile(
      path.join(pageDir, 'index.html'),
      renderStaticPage(template, page),
      'utf8'
    );
    console.log('✅ Generated crawlable route: /' + page.path);
  }

  const homePage = staticPages[0];
  await fs.writeFile(
    path.join(rootDir, 'index.html'),
    renderStaticPage(template, homePage),
    'utf8'
  );
}

async function deploy() {
  try {
    if (!fs.existsSync(buildDir)) {
      console.error('❌ Build directory not found. Run "npm run build" first.');
      process.exit(1);
    }

    console.log('📦 Copying build files to root...\n');

    for (const item of itemsToCopy) {
      const srcPath = path.join(buildDir, item);
      const destPath = path.join(rootDir, item);

      if (fs.existsSync(srcPath)) {
        if (fs.existsSync(destPath) && !preservedFiles.includes(item)) {
          await fs.remove(destPath);
        }

        await fs.copy(srcPath, destPath);
        console.log('✅ Copied: ' + item);
      } else {
        console.log('⚠️  Skipped (not found): ' + item);
      }
    }

    const builtIndexPath = path.join(buildDir, 'index.html');
    const builtIndex = await fs.readFile(builtIndexPath, 'utf8');
    await writeStaticPages(builtIndex);

    console.log('\n✨ Deployment files are ready.');
    console.log('\n📝 Next steps:');
    console.log('   1. Review the changes: git status');
    console.log('   2. Commit the generated deployment files and source changes');
    console.log('   3. Push to GitHub: git push origin main');
    console.log('\n🌐 The crawlable pages will be served at joeyaudi.com after publishing.\n');
  } catch (error) {
    console.error('❌ Deployment failed:', error.message);
    process.exit(1);
  }
}

deploy();
