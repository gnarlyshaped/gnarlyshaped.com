import { rmSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The repo root is what GitHub Pages serves, so the build is written there.
// Favicons, CNAME and og-image live at the root already, so there is no publicDir.
const outDir = fileURLToPath(new URL('..', import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'clean-root-assets',
      apply: 'build',
      buildStart() {
        rmSync(new URL('../assets', import.meta.url), { recursive: true, force: true })
      },
    },
  ],
  publicDir: false,
  build: {
    outDir,
    emptyOutDir: false,
  },
})
