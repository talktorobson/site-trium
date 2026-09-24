#!/usr/bin/env node
/* Snapshot the rendered landing into index.html so no-JS crawlers see the real page.
   Run after scripts/compile.sh. Needs Playwright (npx or NODE_PATH). */
import { createServer } from 'node:http';
import { readFileSync, writeFileSync } from 'node:fs';
import { extname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const indexPath = join(root, 'index.html');
const BEGIN = '<!--prerender:begin-->';
const END = '<!--prerender:end-->';

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.webm': 'video/webm',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
};

function serve() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      const url = new URL(req.url, 'http://127.0.0.1');
      let file = url.pathname === '/' ? '/index.html' : url.pathname;
      try {
        const body = readFileSync(join(root, decodeURIComponent(file)));
        res.writeHead(200, { 'content-type': mime[extname(file)] || 'application/octet-stream' });
        res.end(body);
      } catch {
        res.writeHead(404);
        res.end();
      }
    });
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

async function loadPlaywright() {
  try {
    return (await import('playwright')).default ?? (await import('playwright'));
  } catch {
    return import(pathToFileURL('/opt/homebrew/lib/node_modules/playwright/index.js').href);
  }
}

const server = await serve();
const { port } = server.address();
const pw = await loadPlaywright();
const { chromium } = pw.default ?? pw;
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
page.setDefaultTimeout(30000);
await page.goto(`http://127.0.0.1:${port}/index.html`, { waitUntil: 'networkidle' });
await page.waitForSelector('.site');
await page.evaluate(() => {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
  document.querySelectorAll('.faq-item').forEach((el) => el.classList.add('open'));
  document.querySelectorAll('.faq-a').forEach((el) => {
    el.style.maxHeight = 'none';
  });
  document.querySelectorAll('.faq-q').forEach((el) => el.setAttribute('aria-expanded', 'true'));
});
const snapshot = await page.$eval('.site', (el) => el.outerHTML);
// Markdown twin of the rendered page for AI agents (llms-full.txt), so it never drifts from the HTML.
const markdown = await page.$eval('.site', (site) => {
  const SKIP = 'nav, header, footer, svg, video, script, style, form, .skip, .shot-note, [aria-hidden="true"]';
  const clean = (s) => s.replace(/\s+/g, ' ').trim();
  const out = [];
  const walk = (el) => {
    if (el.matches(SKIP)) return;
    const tag = el.tagName;
    if (/^H[1-4]$/.test(tag)) {
      const t = clean(el.textContent);
      if (t) out.push('', '#'.repeat(Number(tag[1]) + 1) + ' ' + t, '');
      return;
    }
    if (el.classList.contains('faq-q')) {
      out.push('', '#### ' + clean(el.textContent), '');
      return;
    }
    if (tag === 'TABLE') {
      const rows = [...el.rows].map((r) => [...r.cells].map((c) => clean(c.textContent).replace(/\|/g, '/')));
      if (rows.length) {
        out.push('', '| ' + rows[0].join(' | ') + ' |', '|' + rows[0].map(() => ' --- |').join(''));
        rows.slice(1).forEach((r) => out.push('| ' + r.join(' | ') + ' |'));
        out.push('');
      }
      return;
    }
    if (tag === 'P' || tag === 'LI' || tag === 'BLOCKQUOTE') {
      const t = clean(el.innerText || el.textContent);
      if (t) out.push((tag === 'LI' ? '- ' : '') + t);
      return;
    }
    for (const c of el.children) walk(c);
  };
  walk(site);
  return out.join('\n').replace(/\n{3,}/g, '\n\n').trim();
});
await browser.close();
server.close();

if (!snapshot.includes('FOPA') || !snapshot.includes('<h1')) {
  console.error('prerender snapshot looks empty');
  process.exit(1);
}

const html = readFileSync(indexPath, 'utf8');
const i0 = html.indexOf(BEGIN);
const i1 = html.indexOf(END);
if (i0 < 0 || i1 < 0 || i1 <= i0) {
  console.error('prerender markers missing in index.html');
  process.exit(1);
}
const next =
  html.slice(0, i0 + BEGIN.length) +
  '\n' +
  snapshot +
  '\n' +
  html.slice(i1);
writeFileSync(indexPath, next);
console.log('prerendered', snapshot.length, 'chars into index.html');

const llmsHead = readFileSync(join(root, 'llms.txt'), 'utf8').split('\n## ')[0].trim();
writeFileSync(
  join(root, 'llms-full.txt'),
  `${llmsHead}\n\nConteúdo completo da página https://triumbpo.com.br/ em Markdown, gerado a partir do HTML publicado.\n\n${markdown}\n`
);
console.log('wrote llms-full.txt', markdown.length, 'chars');
