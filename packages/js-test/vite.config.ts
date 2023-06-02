import { resolve } from 'path';
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'js-test',
      fileName: 'js-test'
    }
  },
  plugins: [dts()],
})
