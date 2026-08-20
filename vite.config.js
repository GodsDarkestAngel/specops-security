import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain (specopssecurity.com) serves from the root, so base stays '/'.
// If this is ever hosted at a GitHub Pages project subpath instead
// (username.github.io/repo-name), change base to '/repo-name/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
