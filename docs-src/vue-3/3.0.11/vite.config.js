import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    preserveSymlinks: true,
    alias: {
      '@stackline/loading': resolve(__dirname, 'node_modules/@stackline/loading'),
      '@stackline/vue-loading': resolve(__dirname, '../../../src/index.ts'),
      vue: resolve(__dirname, 'node_modules/vue/dist/vue.esm-bundler.js'),
      'vue-demi': resolve(__dirname, 'node_modules/vue-demi/lib/index.mjs')
    },
    dedupe: ['vue', 'vue-demi']
  },
  build: {
    outDir: '../../../docs/vue-3/3.0.11',
    emptyOutDir: true
  }
});
