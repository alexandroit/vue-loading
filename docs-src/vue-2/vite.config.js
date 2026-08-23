import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue2 from '@vitejs/plugin-vue2';

export default defineConfig({
  plugins: [vue2()],
  base: './',
  resolve: {
    alias: {
      '@stackline/vue-loading': resolve(import.meta.dirname, '../../src/index.ts'),
      vue: resolve(import.meta.dirname, 'node_modules/vue/dist/vue.esm.js'),
      'vue-demi': resolve(import.meta.dirname, 'node_modules/vue-demi/lib/index.mjs')
    },
    dedupe: ['vue', 'vue-demi']
  },
  build: {
    outDir: '../../docs/vue-2',
    emptyOutDir: true
  }
});
