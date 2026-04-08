import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const docsDir = path.join(rootDir, 'docs');
const releaseLines = [
  { id: 'vue-2', label: 'Vue 2', version: '2.0.0', runtime: '2.7.16' },
  { id: 'vue-3', label: 'Vue 3', version: '3.0.0', runtime: '3.5.32' }
];

if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir);
}

function hasBuiltDocs(id) {
  return fs.existsSync(path.join(docsDir, id, 'index.html'));
}

function buildCards() {
  return releaseLines.map((line) => {
    const available = hasBuiltDocs(line.id);
    const stateClass = available ? 'is-live' : 'is-pending';
    const stateLabel = available ? 'Live docs' : 'Build pending';
    const action = available
      ? `<a class="line-link" href="./${line.id}/">Open ${line.label}</a>`
      : '<span class="line-link is-disabled">Build pending</span>';

    return [
      `        <article class="line-card ${stateClass}">`,
      '          <div class="line-head">',
      `            <span class="line-badge">${line.label}</span>`,
      `            <span class="line-state">${stateLabel}</span>`,
      '          </div>',
      `          <h2>${line.label}</h2>`,
      `          <p>Maintained Vue wrapper docs for the ${line.runtime} runtime line, keeping the same Stackline loading engine with the Vue conventions expected by that generation.</p>`,
      `          <p class="line-version">npm version: <code>${line.version}</code></p>`,
      `          ${action}`,
      '        </article>'
    ].join('\n');
  }).join('\n');
}

fs.writeFileSync(
  path.join(docsDir, 'index.html'),
  [
    '<!doctype html>',
    '<html lang="en">',
    '  <head>',
    '    <meta charset="utf-8" />',
    '    <meta name="viewport" content="width=device-width, initial-scale=1" />',
    '    <title>@stackline/vue-loading</title>',
    '    <style>',
    '      :root {',
    '        color-scheme: light;',
    '        font-family: "Avenir Next", "Segoe UI", sans-serif;',
    '        background: #f4f8fc;',
    '        color: #102033;',
    '      }',
    '      * { box-sizing: border-box; }',
    '      body {',
    '        margin: 0;',
    '        min-height: 100vh;',
    '        background:',
    '          radial-gradient(circle at top left, rgba(37, 99, 235, 0.10), transparent 30%),',
    '          radial-gradient(circle at top right, rgba(14, 165, 233, 0.08), transparent 24%),',
    '          #f4f8fc;',
    '      }',
    '      main { max-width: 1220px; margin: 0 auto; padding: 48px 20px 72px; }',
    '      .hero { display: grid; gap: 18px; margin-bottom: 28px; }',
    '      .eyebrow { display: inline-flex; width: fit-content; align-items: center; min-height: 30px; padding: 0 12px; border-radius: 999px; background: rgba(37, 99, 235, 0.10); color: #1d4ed8; font-size: 12px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; }',
    '      h1 { margin: 0; font-size: clamp(40px, 8vw, 72px); line-height: 0.95; letter-spacing: -0.05em; }',
    '      .hero p { margin: 0; max-width: 760px; color: #4d6178; line-height: 1.75; font-size: 18px; }',
    '      .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; }',
    '      .hero-link { display: inline-flex; align-items: center; justify-content: center; min-height: 44px; padding: 0 16px; border-radius: 999px; text-decoration: none; font-weight: 700; border: 1px solid rgba(16, 32, 51, 0.08); }',
    '      .hero-link.primary { background: linear-gradient(135deg, #0f172a, #1d4ed8); color: #ffffff; border-color: transparent; }',
    '      .hero-link.secondary { background: rgba(255, 255, 255, 0.94); color: #102033; }',
    '      .line-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 18px; }',
    '      .line-card { display: grid; gap: 16px; min-height: 230px; padding: 24px; border-radius: 28px; border: 1px solid rgba(16, 32, 51, 0.09); background: rgba(255, 255, 255, 0.92); box-shadow: 0 22px 60px rgba(16, 32, 51, 0.08); }',
    '      .line-card.is-live { border-color: rgba(37, 99, 235, 0.18); }',
    '      .line-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; }',
    '      .line-badge, .line-state { display: inline-flex; align-items: center; min-height: 30px; padding: 0 12px; border-radius: 999px; font-size: 12px; font-weight: 700; }',
    '      .line-badge { background: rgba(37, 99, 235, 0.10); color: #1d4ed8; }',
    '      .line-state { background: rgba(16, 32, 51, 0.06); color: #334155; }',
    '      .line-card h2 { margin: 0; font-size: 24px; letter-spacing: -0.03em; }',
    '      .line-card p { margin: 0; color: #4d6178; line-height: 1.7; }',
    '      .line-version { color: #102033; }',
    '      .line-link { display: inline-flex; width: fit-content; align-items: center; justify-content: center; min-height: 42px; padding: 0 16px; border-radius: 999px; background: #102033; color: #ffffff; text-decoration: none; font-weight: 700; }',
    '      .line-link.is-disabled { background: rgba(16, 32, 51, 0.06); color: #64748b; }',
    '      @media (max-width: 720px) {',
    '        main { padding: 32px 16px 56px; }',
    '        .line-head { flex-direction: column; align-items: flex-start; }',
    '      }',
    '    </style>',
    '  </head>',
    '  <body>',
    '    <main>',
    '      <section class="hero">',
    '        <span class="eyebrow">Stackline Vue loading wrapper</span>',
    '        <h1>@stackline/vue-loading</h1>',
    '        <p>Versioned Vue bindings for the Stackline loading toolkit. Each maintained line keeps the same loader engine and public ideas while fitting the runtime expectations of Vue 2 and Vue 3.</p>',
    '        <div class="hero-actions">',
    '          <a class="hero-link primary" href="./vue-3/">Open Vue 3 docs</a>',
    '          <a class="hero-link secondary" href="https://www.npmjs.com/package/@stackline/vue-loading">npm package</a>',
    '        </div>',
    '      </section>',
    '      <section class="line-grid">',
    buildCards(),
    '      </section>',
    '    </main>',
    '  </body>',
    '</html>',
    ''
  ].join('\n')
);

fs.writeFileSync(path.join(docsDir, '.nojekyll'), '');
