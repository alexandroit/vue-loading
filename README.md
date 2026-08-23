# @stackline/vue-loading

> A maintained Vue wrapper for **@stackline/loading-core** with declarative components, host directives, a programmatic controller, and versioned demos for Vue 2 and Vue 3.

[![npm version](https://img.shields.io/npm/v/@stackline/vue-loading.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/vue-loading)
[![npm downloads](https://img.shields.io/npm/dt/@stackline/vue-loading.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/vue-loading)
[![npm monthly](https://img.shields.io/npm/dm/@stackline/vue-loading.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/vue-loading)
[![license](https://img.shields.io/npm/l/@stackline/vue-loading.svg?style=flat-square)](https://github.com/alexandroit/vue-loading/blob/main/LICENSE)
[![Vue 3](https://img.shields.io/badge/Vue-3-42b883?style=flat-square&logo=vue.js)](https://vuejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![GitHub stars](https://img.shields.io/github/stars/alexandroit/vue-loading.svg?style=flat-square)](https://github.com/alexandroit/vue-loading/stargazers)

**[Documentation & Live Demos](https://alexandro.net/docs/vue/vue-loading/)** | **[npm](https://www.npmjs.com/package/@stackline/vue-loading)** | **[Issues](https://github.com/alexandroit/vue-loading/issues)** | **[Repository](https://github.com/alexandroit/vue-loading)**

**Latest version:** `3.0.1`

---

> **Built on top of:** [@stackline/loading-core](https://www.npmjs.com/package/@stackline/loading-core), the framework-agnostic Stackline loading toolkit with modern variants, delay and minimum visible duration handling, accessibility defaults, and themeable CSS variables.

---

## Why this library?

`@stackline/vue-loading` keeps the full Stackline loading engine intact while adapting it to modern Vue applications.

It gives Vue teams three practical integration paths:

- `<stackline-loading>` when the loader itself is what the component should render
- `v-stackline-loading` when an existing card, table, modal body, chart shell, or button should become busy
- `createLoadingController()` and `useLoading()` when the loading state is fullscreen, route-level, or fully programmatic

The wrapper stays intentionally thin so the real behavior continues to live in the core package:

- polished loading variants from `@stackline/loading-core`
- delay and `minVisible` anti-flicker behavior
- inline, overlay, container, and fullscreen modes
- accessibility defaults and optional labels
- versioned docs for Vue 2 and Vue 3

## Features

| Feature | Supported |
| :--- | :---: |
| Declarative Vue loading component | ✅ |
| Host directive for existing surfaces | ✅ |
| Programmatic controller and composable | ✅ |
| Same loader variants as the core package | ✅ |
| Delay and minimum visible duration support | ✅ |
| Card, table, modal, upload, chart, and button patterns | ✅ |
| Versioned demos for Vue 2 and Vue 3 | ✅ |
| Full access to the core loading helpers and tokens | ✅ |

## Table of Contents

1. [Vue Version Compatibility](#vue-version-compatibility)
2. [Installation](#installation)
3. [Quick Start](#quick-start)
4. [Usage Patterns](#usage-patterns)
5. [API Overview](#api-overview)
6. [Run Locally](#run-locally)
7. [License](#license)

## Vue Version Compatibility

Each package family only installs on its matching Vue family. Framework major and package major are not always the same package number, so use the package family column below.

| Package family | Framework family | Peer range | Tested release window | Demo link |
| :---: | :---: | :---: | :---: | :--- |
| **3.x** | **Vue 3 only** | **`>=3.0.0 <4.0.0`** | **3.0.0 -> 3.5.32** | [Vue 3 family docs](https://alexandro.net/docs/vue/vue-loading/vue-3/) |
| **2.x** | **Vue 2 only** | **`>=2.0.0 <3.0.0`** | **2.0.0 -> 2.7.16** | [Vue 2 family docs](https://alexandro.net/docs/vue/vue-loading/vue-2/) |


## Installation

```bash
npm install @stackline/vue-loading
```

Choose the package family from the compatibility table above. Each published family is locked to one framework major only.

## Quick Start

### Vue 3

```ts
import { createApp } from 'vue';
import App from './App.vue';
import VueLoading from '@stackline/vue-loading';

createApp(App).use(VueLoading).mount('#app');
```

### Component usage

```vue
<template>
  <stackline-loading
    :visible="true"
    :options="{
      variant: 'orbit',
      size: 56,
      centered: true,
      label: 'Loading dashboard'
    }"
    :style="{ minHeight: '180px' }"
  />
</template>
```

### Directive usage

```vue
<template>
  <section
    v-stackline-loading="{ visible: isLoading, options: loadingOptions }"
    class="card-shell"
  >
    ...
  </section>
</template>
```

## Usage Patterns

### `<stackline-loading />`

Use the component when the loader itself is the thing being rendered.

### `v-stackline-loading`

Use the directive for:

- cards
- tables
- dashboards
- buttons
- modal bodies
- chart shells
- upload zones

### `createLoadingController()` and `useLoading()`

Use a controller when you need fullscreen or document-level control:

```ts
import { createLoadingController } from '@stackline/vue-loading';

const loading = createLoadingController();

async function showLoader() {
  const instance = await loading.show(document.body, {
    fullscreen: true,
    overlay: true,
    centered: true,
    variant: 'galaxy',
    label: 'Loading workspace'
  });

  window.setTimeout(() => {
    void instance.hide();
  }, 1200);
}
```

## API Overview

### `<stackline-loading />`

Props:

- `visible`
- `options`
- standard element attributes such as `class` and `style`

Emits:

- `create`
- `shown`
- `hidden`
- `updated`
- `destroyed`

Exposed methods:

- `getInstance()`
- `show()`
- `hide()`
- `toggle(force?)`
- `update(options)`
- `destroy()`

### `v-stackline-loading`

Directive values:

- `true` or `false`
- a raw options object
- `{ visible, options }`

### Controller helpers

Methods:

- `create(target?, options?)`
- `mount(target?, options?)`
- `show(target?, options?)`
- `hide()`
- `toggle(force?)`
- `update(options)`
- `destroy()`
- `getInstance()`

### Core re-exports

The wrapper also re-exports core helpers such as:

- `createLoader`
- `showLoader`
- `hideLoader`
- `mountLoader`
- `loaderVariants`
- `getVariantDefinition`
- `applyThemeTokens`
- `lightTheme`
- `darkTheme`

## Run Locally

```bash
npm install
npm run typecheck
npm run build
npm run docs:install:vue-2
npm run docs:install:vue-3
npm run build:docs
```

## Security

Report vulnerabilities privately by following [SECURITY.md](SECURITY.md). Do
not disclose exploit details in a public issue.

## License

MIT
