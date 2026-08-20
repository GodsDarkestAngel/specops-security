import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Hosted at a GitHub Pages project subpath: username.github.io/specops-security/
// If a custom domain is attached later (CNAME served from the root),
// change base back to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/specops-security/',
})
