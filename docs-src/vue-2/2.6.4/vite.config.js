import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue2 from '@vitejs/plugin-vue2';

export default defineConfig({
  plugins: [vue2()],
  base: './',
  resolve: {
    preserveSymlinks: true,
    alias: {
      '@stackline/loading': resolve(__dirname, 'node_modules/@stackline/loading'),
      '@stackline/vue-loading': resolve(__dirname, '../../../src/index.ts'),
      vue: resolve(__dirname, 'node_modules/vue/dist/vue.esm.js'),
      'vue-demi': resolve(__dirname, 'node_modules/vue-demi/lib/index.mjs')
    },
    dedupe: ['vue', 'vue-demi']
  },
  build: {
    outDir: '../../../docs/vue-2/2.6.4',
    emptyOutDir: true
  }
});
