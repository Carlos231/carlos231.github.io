// Shared helper: load puppeteer-core from the temp tools folder and find an installed Chromium browser.
// First-time setup (nothing is added to the repo):
//   mkdir -p "$GC_TOOLS_TMP/node" && cd "$GC_TOOLS_TMP/node" && npm init -y && npm i puppeteer-core
// GC_TOOLS_TMP defaults to $TMPDIR/golf-caddie-tools.
import { createRequire } from 'node:module';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
export const toolsTmp = process.env.GC_TOOLS_TMP || path.join(process.env.TMPDIR || os.tmpdir(), 'golf-caddie-tools');

export async function launch() {
  const nodeDir = path.join(toolsTmp, 'node');
  let puppeteer;
  try {
    puppeteer = createRequire(path.join(nodeDir, 'index.js'))('puppeteer-core');
  } catch {
    throw new Error(`puppeteer-core not found. Run: mkdir -p "${nodeDir}" && cd "${nodeDir}" && npm init -y && npm i puppeteer-core`);
  }
  const candidates = [
    process.env.GC_BROWSER,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
  ].filter(Boolean);
  const executablePath = candidates.find((p) => fs.existsSync(p));
  if (!executablePath) throw new Error('No Chrome, Edge, Chromium, or Brave found. Set GC_BROWSER to a Chromium browser binary.');
  return puppeteer.launch({ executablePath, headless: 'new', args: ['--no-first-run', '--hide-scrollbars'] });
}
