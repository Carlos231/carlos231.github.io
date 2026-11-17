// Make a 1200x630 social image for each page, in assets/og/<slug>.png.
// Usage: node marketing/tools/og-image.mjs          (only guides that don't have an image yet)
//        node marketing/tools/og-image.mjs --all    (regenerate every image, including home, app, help, guides)
// A guide's image uses its front-matter `title`. Add `image: /assets/og/<slug>.png` to the guide's front matter.
import fs from 'node:fs';
import path from 'node:path';
import { launch, repo } from './browser.mjs';

const all = process.argv.includes('--all');
const out = path.join(repo, 'assets/og');
fs.mkdirSync(out, { recursive: true });
const icon = fs.readFileSync(path.join(repo, 'assets/golf-caddie-icon-512.png')).toString('base64');

// Pages that aren't guides. Keep these titles in step with each page's H1.
const pages = [
  ['home', 'Count every stroke and putt with one tap.', 'Golf stroke and putt counter for iPhone'],
  ['golf-caddie', 'The simple golf scorecard for Apple Watch. Pay once, not every year.', 'iPhone and Apple Watch'],
  ['help', 'How to use Golf Caddie', 'Help and support'],
  ['guides', 'Golf scorecard and golf app guides', 'Guides'],
];
const dir = path.join(repo, 'apps/golf-caddie/guides');
for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith('.md') || f.startsWith('_')) continue;
  const fm = fs.readFileSync(path.join(dir, f), 'utf8').split(/^---\s*$/m)[1];
  const title = /^title:\s*"(.*)"\s*$/m.exec(fm)?.[1];
  if (!title) { console.log('skip (no title):', f); continue; }
  pages.push([f.replace(/\.md$/, ''), title, 'Golf Caddie guide']);
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const html = (title, kicker) => `<!doctype html><html><head><meta charset="utf-8"><style>
  html,body{margin:0}
  body{width:1200px;height:630px;background:#f7f5f0;font-family:-apple-system,BlinkMacSystemFont,"Helvetica Neue",Arial,sans-serif;color:#1a1a1a;display:flex;flex-direction:column;justify-content:space-between;box-sizing:border-box;padding:64px 72px 56px;border-bottom:18px solid #2d6a4f}
  .top{display:flex;align-items:center;gap:22px}
  .top img{width:88px;height:88px;border-radius:20px}
  .name{font-size:34px;font-weight:700}
  .kicker{font-size:24px;color:#2d6a4f;font-weight:700;letter-spacing:.04em;text-transform:uppercase;margin-top:4px}
  h1{margin:0;font-weight:800;letter-spacing:-.02em;line-height:1.12;font-size:${title.length > 70 ? 54 : title.length > 48 ? 62 : 74}px;max-width:1040px}
  .foot{font-size:26px;color:#4b5563}
</style></head><body>
  <div class="top"><img src="data:image/png;base64,${icon}"><div><div class="name">Golf Caddie · Simple Scorecard</div><div class="kicker">${esc(kicker)}</div></div></div>
  <h1>${esc(title)}</h1>
  <div class="foot">Free on iPhone · No account · No subscription</div>
</body></html>`;

const browser = await launch();
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
for (const [slug, title, kicker] of pages) {
  const file = path.join(out, slug + '.png');
  if (!all && fs.existsSync(file)) continue;
  await page.setContent(html(title, kicker), { waitUntil: 'load' });
  const overflow = await page.evaluate(() => document.body.scrollHeight > 630);
  await page.screenshot({ path: file });
  console.log(overflow ? 'OVERFLOW (shorten the title)' : 'made', path.relative(repo, file));
}
await browser.close();
