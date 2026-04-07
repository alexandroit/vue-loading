import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      '@revivejs/vue-loading': resolve(__dirname, '../../src/index.ts'),
      vue: resolve(__dirname, 'node_modules/vue/dist/vue.esm-bundler.js'),
      'vue-demi': resolve(__dirname, 'node_modules/vue-demi/lib/index.mjs')
    },
    dedupe: ['vue', 'vue-demi']
  },
  build: {
    outDir: '../../docs/vue-3',
    emptyOutDir: true
  }
});
