<template>
  <div class="app-shell">
    <header class="hero-grid">
      <section class="hero-card hero-main">
        <span class="badge">Vue {{ vueLine }} · Loading wrapper</span>
        <h1>@revivejs/vue-loading</h1>
        <p>
          Maintained Vue bindings for the ReviveJS loading toolkit. Keep the loading
          engine framework-agnostic, then add Vue-native ergonomics for declarative
          components, host directives, and fullscreen programmatic states.
        </p>
        <div class="hero-actions">
          <a class="button primary" href="#playground">Open playground</a>
          <a
            class="button secondary"
            href="https://github.com/alexandroit/vue-loading#readme"
            rel="noreferrer"
            target="_blank"
          >
            README
          </a>
        </div>
        <div class="hero-notes">
          <div><strong>Declarative</strong> Use a plain Vue component when the loader itself is what you want to render.</div>
          <div><strong>Directive-ready</strong> Turn an existing card, table, chart shell, modal body, or upload zone into a loading surface.</div>
          <div><strong>Programmatic</strong> Use a controller for fullscreen and workspace-level loading flows.</div>
        </div>
      </section>

      <section class="hero-card hero-setup">
        <h2>Setup in 3 steps</h2>
        <div class="step">
          <span>1</span>
          <div>
            <strong>Install the wrapper</strong>
            <div class="code-block-shell is-compact">
              <div class="code-block-head">
                <button type="button" class="ghost-button copy-button" @click="copySnippet('install', installCode)">{{ snippetCopyLabels.install }}</button>
              </div>
              <pre class="code-block compact">{{ installCode }}</pre>
            </div>
          </div>
        </div>
        <div class="step">
          <span>2</span>
          <div>
            <strong>Register the plugin</strong>
            <div class="code-block-shell is-compact">
              <div class="code-block-head">
                <button type="button" class="ghost-button copy-button" @click="copySnippet('plugin', pluginCode)">{{ snippetCopyLabels.plugin }}</button>
              </div>
              <pre class="code-block compact">{{ pluginCode }}</pre>
            </div>
          </div>
        </div>
        <div class="step">
          <span>3</span>
          <div>
            <strong>Choose component, directive, or controller</strong>
            <div class="code-block-shell is-compact">
              <div class="code-block-head">
                <button type="button" class="ghost-button copy-button" @click="copySnippet('directive', directiveCode)">{{ snippetCopyLabels.directive }}</button>
              </div>
              <pre class="code-block compact">{{ directiveCode }}</pre>
            </div>
          </div>
        </div>
      </section>
    </header>

    <div class="playground-row">
      <section class="demo-card playground-card" id="playground">
        <div class="demo-head">
          <div>
            <h3>Playground</h3>
            <p>Use the Vue wrapper against the same kind of interactive preview shell as the core docs.</p>
          </div>
        </div>

        <div class="playground-shell">
          <form class="playground-controls">
            <div class="field">
              <label for="playground-variant">Variant</label>
              <select id="playground-variant" v-model="state.variant">
                <option v-for="variant in variants" :key="variant.value" :value="variant.value">
                  {{ variant.label }}
                </option>
              </select>
            </div>

            <div class="field">
              <label for="playground-size">Size <span>{{ state.size }}px</span></label>
              <input id="playground-size" v-model.number="state.size" type="range" min="18" max="96">
            </div>

            <div class="field">
              <label for="playground-speed">Speed <span>{{ state.speed }}ms</span></label>
              <input id="playground-speed" v-model.number="state.speed" type="range" min="300" max="2200" step="50">
            </div>

            <div class="field two-up">
              <div>
                <label for="playground-color">Primary</label>
                <input id="playground-color" v-model="state.color" type="color">
              </div>
              <div>
                <label for="playground-secondary-color">Secondary</label>
                <input id="playground-secondary-color" v-model="state.secondaryColor" type="color">
              </div>
            </div>

            <div class="field">
              <label for="playground-label">Label</label>
              <input id="playground-label" v-model="state.label" type="text">
            </div>

            <div class="field two-up">
              <div>
                <label for="playground-delay">Delay</label>
                <input id="playground-delay" v-model.number="state.delay" type="number" min="0" step="50">
              </div>
              <div>
                <label for="playground-min-visible">Min visible</label>
                <input id="playground-min-visible" v-model.number="state.minVisible" type="number" min="0" step="50">
              </div>
            </div>

            <div class="toggle-row">
              <label><input v-model="state.overlay" type="checkbox"> Overlay</label>
              <label><input v-model="state.fullscreen" type="checkbox"> Fullscreen</label>
              <label><input v-model="state.centered" type="checkbox"> Centered</label>
              <label><input v-model="state.reducedMotion" type="checkbox"> Reduced motion</label>
            </div>

            <div class="playground-actions">
              <button type="button" @click="replayTiming">Replay timing</button>
              <button type="button" class="ghost-button" @click="copyCode">{{ copyButtonLabel }}</button>
            </div>
          </form>

          <div class="playground-preview">
            <div class="playground-preview-tabs" role="tablist" aria-label="Preview surfaces">
              <button
                v-for="surface in surfaces"
                :key="surface.id"
                type="button"
                role="tab"
                class="playground-preview-tab"
                :class="{ 'is-active': activeSurface === surface.id }"
                :aria-selected="activeSurface === surface.id"
                @click="activeSurface = surface.id"
              >
                {{ surface.label }}
              </button>
            </div>

            <p class="playground-description">{{ activeDescription }}</p>

            <div class="playground-stage" :class="{ 'is-reduced-motion': state.reducedMotion }">
              <div v-if="activeSurface === 'default' && !previewOptions.overlay" :class="['playground-surface', 'playground-surface--clean', { 'is-fullscreen-simulated': state.fullscreen }]">
                <revive-loading
                  :visible="previewVisible"
                  :options="previewOptions"
                  class="playground-loader-host"
                  :style="{ minHeight: state.fullscreen ? '400px' : '320px', width: '100%' }"
                />
              </div>

              <div
                v-else-if="activeSurface === 'table'"
                v-revive-loading="{ visible: previewVisible, options: previewOptions }"
                :class="['playground-surface', 'surface-table', { 'is-fullscreen-simulated': state.fullscreen }]"
              >
                <div class="playground-table-head">
                  <span>Status</span>
                  <span>Customer</span>
                  <span>Plan</span>
                  <span>MRR</span>
                </div>
                <div v-for="row in 4" :key="'table-' + row" class="playground-table-row">
                  <span><i /></span>
                  <span><i /></span>
                  <span><i /></span>
                  <span><i /></span>
                </div>
              </div>

              <div
                v-else-if="activeSurface === 'page'"
                v-revive-loading="{ visible: previewVisible, options: previewOptions }"
                :class="['playground-surface', 'surface-page', { 'is-fullscreen-simulated': state.fullscreen }]"
              >
                <div class="page-topbar" />
                <div class="page-grid">
                  <div class="page-tile" />
                  <div class="page-tile" />
                  <div class="page-tile" />
                  <div class="page-tile" />
                </div>
              </div>

              <div v-else-if="activeSurface === 'modal'" :class="['playground-surface', 'surface-modal', { 'is-fullscreen-simulated': state.fullscreen }]">
                <div class="modal-shell">
                  <div class="modal-header" />
                  <div class="modal-body" v-revive-loading="{ visible: previewVisible, options: previewOptions }">
                    <div class="modal-line" />
                    <div class="modal-line short" />
                    <div class="modal-line" />
                  </div>
                </div>
              </div>

              <div
                v-else-if="activeSurface === 'chart'"
                v-revive-loading="{ visible: previewVisible, options: previewOptions }"
                :class="['playground-surface', 'surface-chart', { 'is-fullscreen-simulated': state.fullscreen }]"
              >
                <div class="chart-bar" style="height: 28%" />
                <div class="chart-bar" style="height: 46%" />
                <div class="chart-bar" style="height: 60%" />
                <div class="chart-bar" style="height: 38%" />
                <div class="chart-bar" style="height: 72%" />
                <div class="chart-bar" style="height: 55%" />
              </div>

              <div
                v-else-if="activeSurface === 'upload'"
                v-revive-loading="{ visible: previewVisible, options: previewOptions }"
                :class="['playground-surface', 'surface-upload', { 'is-fullscreen-simulated': state.fullscreen }]"
              >
                <div class="upload-icon" />
                <div class="upload-title">Drop files here</div>
                <div class="upload-caption">PNG, SVG, PDF up to 25 MB</div>
              </div>

              <div
                v-else
                v-revive-loading="{ visible: previewVisible, options: previewOptions }"
                :class="['playground-surface', 'surface-card-grid', { 'is-fullscreen-simulated': state.fullscreen }]"
              >
                <div class="surface-card-cell" />
                <div class="surface-card-cell" />
                <div class="surface-card-cell wide" />
              </div>
            </div>

            <pre class="code-block code-preview">{{ generatedCode }}</pre>
          </div>
        </div>
      </section>
    </div>

    <main class="content-grid" id="examples">
      <section class="examples-column">
        <section class="demo-card">
          <div class="demo-head">
            <div>
              <h3>Basic component</h3>
              <p>Use the Vue component when the loader itself is the thing being rendered in the tree.</p>
            </div>
          </div>
          <div class="code-block-shell">
            <div class="code-block-head">
              <button type="button" class="ghost-button copy-button" @click="copySnippet('component', componentCode)">{{ snippetCopyLabels.component }}</button>
            </div>
            <pre class="code-block">{{ componentCode }}</pre>
          </div>
          <div class="surface-frame">
            <revive-loading
              visible
              :options="{
                variant: 'orbit',
                size: 56,
                centered: true,
                color: '#2563eb',
                secondaryColor: '#bfdbfe',
                label: 'Loading dashboard'
              }"
              class="component-stage"
              :style="{ minHeight: '220px' }"
            />
          </div>
        </section>

        <section class="demo-card">
          <div class="demo-head">
            <div>
              <h3>Directive overlay surface</h3>
              <p>Turn an existing card surface into a loading region without rebuilding the layout around the loader.</p>
            </div>
          </div>
          <div class="code-block-shell">
            <div class="code-block-head">
              <button type="button" class="ghost-button copy-button" @click="copySnippet('overlay', overlayCode)">{{ snippetCopyLabels.overlay }}</button>
            </div>
            <pre class="code-block">{{ overlayCode }}</pre>
          </div>
          <div class="inline-actions">
            <button type="button" class="button secondary" @click="replayCardSurface">Replay card loader</button>
          </div>
          <div
            v-revive-loading="{ visible: surfaceVisible, options: cardSurfaceOptions }"
            class="card-shell"
          >
            <div class="card-metric">$128,400</div>
            <div class="card-caption">Quarterly expansion pipeline</div>
            <div class="card-bars">
              <span style="height: 46%" />
              <span style="height: 68%" />
              <span style="height: 54%" />
              <span style="height: 79%" />
            </div>
          </div>
        </section>

        <section class="demo-card">
          <div class="demo-head">
            <div>
              <h3>Button and submit states</h3>
              <p>Use the same directive around a button surface when the request should stay anchored to the action.</p>
            </div>
          </div>
          <div class="button-surface">
            <div
              v-revive-loading="{ visible: buttonVisible, options: buttonOptions }"
              class="button-shell"
            >
              <button type="button" class="cta-button" @click="replayButtonSurface">Sync invoice</button>
            </div>
          </div>
        </section>

        <section class="demo-card">
          <div class="demo-head">
            <div>
              <h3>Fullscreen and programmatic controller</h3>
              <p>Use a controller when the loading state is tied to navigation, bootstrapping, or a larger workspace transition.</p>
            </div>
          </div>
          <div class="code-block-shell">
            <div class="code-block-head">
              <button type="button" class="ghost-button copy-button" @click="copySnippet('controller', controllerCode)">{{ snippetCopyLabels.controller }}</button>
            </div>
            <pre class="code-block">{{ controllerCode }}</pre>
          </div>
          <div class="inline-actions">
            <button type="button" class="button primary" @click="runFullscreenDemo">Show fullscreen loader</button>
          </div>
        </section>
      </section>

      <aside class="sidebar-column">
        <section class="demo-card side-card">
          <div class="demo-head">
            <div>
              <h3>Wrapper surface</h3>
              <p>The public API stays intentionally small so the real behavior continues to live in the core loading package.</p>
            </div>
          </div>
          <ul class="feature-list">
            <li><code>&lt;revive-loading /&gt;</code> for component-first loading states.</li>
            <li><code>v-revive-loading</code> for cards, tables, modals, charts, and buttons.</li>
            <li><code>createLoadingController()</code> and <code>useLoading()</code> for fullscreen and programmatic flows.</li>
            <li>Core exports like <code>loaderVariants</code>, <code>createLoader</code>, and theme helpers stay available.</li>
          </ul>
        </section>

        <section class="demo-card side-card">
          <div class="demo-head">
            <div>
              <h3>Release lines</h3>
              <p>Each maintained runtime line gets its own docs build and npm release.</p>
            </div>
          </div>
          <div class="release-links">
            <a href="../vue-2/">Vue 2</a>
            <a href="../vue-3/">Vue 3</a>
          </div>
        </section>

        <section class="demo-card side-card">
          <div class="demo-head">
            <div>
              <h3>Event log</h3>
              <p>Small runtime notes from the docs interactions while you test the wrapper.</p>
            </div>
          </div>
          <div class="event-log">
            <div v-for="entry in logs" :key="entry" class="log-line">{{ entry }}</div>
          </div>
        </section>
      </aside>
    </main>
  </div>
</template>

<script>
import { computed, defineComponent, reactive, ref } from 'vue-demi';
import { createLoadingController, loaderVariants } from '@revivejs/vue-loading';

const INSTALL_CODE = 'npm install @revivejs/vue-loading';
const PLUGIN_CODE = `import { createApp } from 'vue';\nimport App from './App.vue';\nimport VueLoading from '@revivejs/vue-loading';\n\ncreateApp(App).use(VueLoading).mount('#app');`;
const DIRECTIVE_CODE = `<div v-revive-loading="{ visible: isLoading, options: loadingOptions }">...</div>`;
const COMPONENT_CODE = `<revive-loading\n  :visible=\"true\"\n  :options=\"{\n    variant: 'orbit',\n    size: 56,\n    centered: true,\n    label: 'Loading dashboard'\n  }\"\n  :style=\"{ minHeight: '180px' }\"\n/>`;
const OVERLAY_CODE = `<section\n  v-revive-loading=\"{ visible: isLoading, options: loadingOptions }\"\n  class=\"card-shell\"\n>\n  ...\n</section>`;
const CONTROLLER_CODE = `import { createLoadingController } from '@revivejs/vue-loading';\n\nconst loading = createLoadingController();\n\nasync function showLoader() {\n  const instance = await loading.show(document.body, {\n    fullscreen: true,\n    overlay: true,\n    centered: true,\n    variant: 'galaxy',\n    label: 'Loading workspace'\n  });\n\n  window.setTimeout(() => {\n    void instance.hide();\n  }, 1200);\n}`;

const SURFACES = [
  {
    id: 'default',
    label: 'Default',
    description: 'A clean centered stage for checking size, color, speed, and label choices.'
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Keep product cards visible while the active region stays anchored to a loading state.'
  },
  {
    id: 'table',
    label: 'Table',
    description: 'A common analytics refresh pattern where the user should keep their table context.'
  },
  {
    id: 'page',
    label: 'Page',
    description: 'Simulate a route-level or workspace-level loading state inside the docs shell.'
  },
  {
    id: 'modal',
    label: 'Modal',
    description: 'Load only the modal body while keeping the dialog frame stable.'
  },
  {
    id: 'chart',
    label: 'Chart',
    description: 'Useful for analytical surfaces where movement should feel intentional and data-centric.'
  },
  {
    id: 'upload',
    label: 'Upload',
    description: 'A drop zone preview for uploads, media workflows, and file-heavy forms.'
  }
];

function stamp(message) {
  return `${new Date().toLocaleTimeString('en-US', { hour12: false })}  ${message}`;
}

function repeat(value, count) {
  let output = '';

  for (let index = 0; index < count; index += 1) {
    output += value;
  }

  return output;
}

function escapeSingleQuotes(value) {
  return String(value).split("'").join("\\'");
}

function buildPreviewOptions(state) {
  const isSimulatedFullscreen = state.fullscreen;
  const isOverlay = state.overlay || isSimulatedFullscreen;
  const nextOptions = {
    variant: state.variant,
    size: state.size,
    speed: state.speed,
    color: state.color,
    secondaryColor: state.secondaryColor,
    centered: isOverlay ? true : state.centered,
    delay: state.delay,
    minVisible: state.minVisible
  };

  if (state.label) {
    nextOptions.label = state.label;
  }

  if (isOverlay) {
    nextOptions.overlay = true;
  }

  if (isSimulatedFullscreen) {
    nextOptions.background = 'rgba(15, 23, 42, 0.54)';
  }

  return nextOptions;
}

function buildOptionsObjectLiteral(state, indentLevel, forceOverlay = false) {
  const indent = repeat(' ', indentLevel);
  const innerIndent = repeat(' ', indentLevel + 2);
  const lines = [
    '{',
    `${innerIndent}variant: '${state.variant}',`,
    `${innerIndent}size: ${state.size},`,
    `${innerIndent}speed: ${state.speed},`,
    `${innerIndent}color: '${state.color}',`,
    `${innerIndent}secondaryColor: '${state.secondaryColor}',`
  ];

  if (state.overlay || state.fullscreen || forceOverlay) {
    lines.push(`${innerIndent}overlay: true,`);
  }

  if (state.fullscreen) {
    lines.push(`${innerIndent}fullscreen: true,`);
    lines.push(`${innerIndent}background: 'rgba(15, 23, 42, 0.54)',`);
  }

  if (state.centered && !state.fullscreen) {
    lines.push(`${innerIndent}centered: true,`);
  }

  if (state.label) {
    lines.push(`${innerIndent}label: '${escapeSingleQuotes(state.label)}',`);
  }

  if (state.delay > 0) {
    lines.push(`${innerIndent}delay: ${state.delay},`);
  }

  if (state.minVisible !== 240) {
    lines.push(`${innerIndent}minVisible: ${state.minVisible},`);
  }

  lines.push(`${indent}}`);
  return lines.join('\n');
}

function buildSurfaceMarkup(surface) {
  if (surface === 'modal') {
    return [
      '<div class="modal-shell">',
      '  <div class="modal-header"></div>',
      '  <div class="modal-body">',
      '    <div class="modal-line"></div>',
      '    <div class="modal-line short"></div>',
      '    <div class="modal-line"></div>',
      '  </div>',
      '</div>'
    ].join('\n');
  }

  if (surface === 'table') {
    return [
      '<div class="table-shell">',
      '  <div class="table-head">',
      '    <span>Status</span>',
      '    <span>Customer</span>',
      '    <span>Plan</span>',
      '    <span>MRR</span>',
      '  </div>',
      '  <div class="table-row">...</div>',
      '  <div class="table-row">...</div>',
      '</div>'
    ].join('\n');
  }

  if (surface === 'chart') {
    return [
      '<div class="chart-panel">',
      '  <div class="chart-bar"></div>',
      '  <div class="chart-bar"></div>',
      '  <div class="chart-bar"></div>',
      '</div>'
    ].join('\n');
  }

  if (surface === 'upload') {
    return [
      '<div class="upload-zone">',
      '  <div class="upload-icon"></div>',
      '  <p>Drop files here</p>',
      '</div>'
    ].join('\n');
  }

  if (surface === 'page') {
    return [
      '<section class="page-shell">',
      '  <header class="page-topbar"></header>',
      '  <div class="page-grid">...</div>',
      '</section>'
    ].join('\n');
  }

  return [
    '<section class="dashboard-cards">',
    '  <div class="card"></div>',
    '  <div class="card"></div>',
    '  <div class="card card-wide"></div>',
    '</section>'
  ].join('\n');
}

function buildGeneratedCode(state, surface) {
  if (state.fullscreen) {
    return [
      "import { createLoadingController } from '@revivejs/vue-loading';",
      '',
      'const loading = createLoadingController();',
      '',
      'async function showLoader() {',
      `  const instance = await loading.show(document.body, ${buildOptionsObjectLiteral(state, 4, true)});`,
      '  window.setTimeout(() => {',
      '    void instance.hide();',
      '  }, 1200);',
      '}'
    ].join('\n');
  }

  if (surface === 'default' && !state.overlay) {
    return [
      '<revive-loading',
      '  :visible="isLoading"',
      `  :options="${buildOptionsObjectLiteral(state, 2)}"`,
      '  :style="{ minHeight: \'220px\' }"',
      '/>'
    ].join('\n');
  }

  return [
    `<section`,
    `  v-revive-loading="{ visible: isLoading, options: ${buildOptionsObjectLiteral(state, 2, true)} }"`,
    `>`,
    buildSurfaceMarkup(surface),
    `</section>`
  ].join('\n');
}

export default defineComponent({
  name: 'VueLoadingDocsApp',
  props: {
    vueLine: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const fullscreen = createLoadingController();
    const logs = ref([stamp(`Vue ${props.vueLine} docs ready.`)]);
    const surfaces = SURFACES;
    const variants = loaderVariants.map((variant) => ({
      value: variant.value,
      label: variant.label
    }));
    const activeSurface = ref('default');
    const copyButtonLabel = ref('Copy code');
    const snippetCopyLabels = reactive({
      install: 'Copy',
      plugin: 'Copy',
      directive: 'Copy',
      component: 'Copy',
      overlay: 'Copy',
      controller: 'Copy'
    });
    const previewVisible = ref(true);
    const surfaceVisible = ref(true);
    const buttonVisible = ref(false);
    const state = reactive({
      variant: 'orbit',
      size: 60,
      speed: 900,
      color: '#2563eb',
      secondaryColor: '#c7d2fe',
      overlay: false,
      fullscreen: false,
      centered: true,
      label: 'Loading preview',
      delay: 0,
      minVisible: 240,
      reducedMotion: false
    });

    const previewOptions = computed(() => buildPreviewOptions(state));
    const generatedCode = computed(() => buildGeneratedCode(state, activeSurface.value));
    const activeDescription = computed(() => {
      const active = surfaces.find((surface) => surface.id === activeSurface.value);
      return active ? active.description : '';
    });
    const cardSurfaceOptions = computed(() => ({
      overlay: true,
      centered: true,
      variant: 'glass-spinner',
      color: '#2563eb',
      secondaryColor: '#dbeafe',
      label: 'Loading revenue card',
      minVisible: 400
    }));
    const buttonOptions = computed(() => ({
      overlay: true,
      centered: true,
      variant: 'liquid-pill',
      size: 42,
      label: ''
    }));

    function pushLog(message) {
      logs.value = [stamp(message), ...logs.value].slice(0, 16);
    }

    async function runFullscreenDemo() {
      pushLog('Showing fullscreen loader from createLoadingController.');

      const instance = await fullscreen.show(document.body, {
        fullscreen: true,
        overlay: true,
        centered: true,
        variant: 'galaxy',
        color: '#38bdf8',
        secondaryColor: '#bfdbfe',
        minVisible: 500,
        label: 'Loading workspace'
      });

      window.setTimeout(() => {
        void instance.hide().then(() => {
          pushLog('Fullscreen loader hidden.');
        });
      }, 1300);
    }

    function replayCardSurface() {
      surfaceVisible.value = false;
      window.setTimeout(() => {
        surfaceVisible.value = true;
        pushLog('Dashboard overlay replayed.');
      }, 40);
    }

    function replayButtonSurface() {
      buttonVisible.value = true;
      pushLog('Button loading state activated.');
      window.setTimeout(() => {
        buttonVisible.value = false;
        pushLog('Button loading state cleared.');
      }, 1200);
    }

    function replayTiming() {
      previewVisible.value = false;
      window.setTimeout(() => {
        previewVisible.value = true;
      }, 40);
    }

    async function copyCode() {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(generatedCode.value);
        } else {
          const textarea = document.createElement('textarea');
          textarea.value = generatedCode.value;
          textarea.setAttribute('readonly', 'true');
          textarea.style.position = 'absolute';
          textarea.style.left = '-9999px';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
        }

        copyButtonLabel.value = 'Copied';
      } catch (error) {
        copyButtonLabel.value = 'Copy failed';
      }

      window.setTimeout(() => {
        copyButtonLabel.value = 'Copy code';
      }, 1200);
    }

    async function copySnippet(key, value) {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(value);
        } else {
          const textarea = document.createElement('textarea');
          textarea.value = value;
          textarea.setAttribute('readonly', 'true');
          textarea.style.position = 'absolute';
          textarea.style.left = '-9999px';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
        }

        snippetCopyLabels[key] = 'Copied';
      } catch (error) {
        snippetCopyLabels[key] = 'Copy failed';
      }

      window.setTimeout(() => {
        snippetCopyLabels[key] = 'Copy';
      }, 1200);
    }

    return {
      activeDescription,
      activeSurface,
      buttonOptions,
      buttonVisible,
      cardSurfaceOptions,
      componentCode: COMPONENT_CODE,
      controllerCode: CONTROLLER_CODE,
      copyButtonLabel,
      copyCode,
      copySnippet,
      directiveCode: DIRECTIVE_CODE,
      generatedCode,
      installCode: INSTALL_CODE,
      logs,
      overlayCode: OVERLAY_CODE,
      pluginCode: PLUGIN_CODE,
      previewOptions,
      previewVisible,
      replayButtonSurface,
      replayCardSurface,
      replayTiming,
      runFullscreenDemo,
      state,
      snippetCopyLabels,
      surfaceVisible,
      surfaces,
      variants
    };
  }
});
</script>
