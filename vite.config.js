import { defineConfig } from 'vite'

export default defineConfig({
  base: '/genius-coin/',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})