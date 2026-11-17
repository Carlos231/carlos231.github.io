// Screenshot pages at phone (390px) and desktop (1440px) widths, above the fold and full page,
// and report any page that scrolls sideways.
// Usage: node marketing/tools/screenshots.mjs <prefix> <baseUrl> name=/path [name=/path ...]
//   e.g. node marketing/tools/screenshots.mjs after http://127.0.0.1:4173 home=/ app=/apps/golf-caddie/
// Output: marketing/screenshots/<today>/<prefix>-<name>-<mobile|desktop>[-full].png (that folder is git-ignored).
import fs from 'node:fs';
import path from 'node:path';
import { launch, repo } from './browser.mjs';

const [prefix, base, ...specs] = process.argv.slice(2);
if (!prefix || !base || !specs.length) { console.error('Usage: screenshots.mjs <prefix> <baseUrl> name=/path ...'); process.exit(2); }
const d = new Date();
const today = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; // local date
const outDir = path.join(repo, 'marketing/screenshots', today);
fs.mkdirSync(outDir, { recursive: true });
const sizes = {
  mobile: { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
  desktop: { width: 1440, height: 900, deviceScaleFactor: 1 },
};
const browser = await launch();
let bad = 0;
for (const spec of specs) {
  const [name, urlPath] = spec.split('=');
  for (const [label, viewport] of Object.entries(sizes)) {
    const page = await browser.newPage();
    await page.setViewport(viewport);
    await page.goto(base + urlPath, { waitUntil: 'networkidle0', timeout: 60000 });
    const m = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth, h: document.documentElement.scrollHeight }));
    await page.screenshot({ path: path.join(outDir, `${prefix}-${name}-${label}.png`) });
    await page.evaluate(() => document.querySelectorAll('img[loading=lazy]').forEach((i) => { i.loading = 'eager'; }));
    await new Promise((r) => setTimeout(r, 600));
    await page.screenshot({ path: path.join(outDir, `${prefix}-${name}-${label}-full.png`), fullPage: true });
    const overflow = m.sw > m.cw;
    if (overflow) bad++;
    console.log(`${name} ${label}: ${m.h}px tall`, overflow ? 'SCROLLS SIDEWAYS' : 'ok');
    await page.close();
  }
}
await browser.close();
console.log('saved to', path.relative(repo, outDir));
process.exit(bad ? 1 : 0);
