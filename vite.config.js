import { defineConfig } from 'vite';
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  base: '/genius-coin/',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  plugins: [
    Sitemap({ hostname: 'https://genius-coin.com' }),
  ],
})