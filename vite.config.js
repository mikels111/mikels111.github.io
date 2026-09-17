import { fileURLToPath } from 'node:url'
import { cpSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const outDir = dirname(fileURLToPath(import.meta.url)) + '/dist'

function spaFallback() {
  return {
    name: 'spa-404-fallback',
    closeBundle() {
      cpSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), spaFallback()],
  base: '/',
  resolve: {
    alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '$': fileURLToPath(new URL('./public', import.meta.url)),


    }
}
})