import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// the base matches the repository name. If hosting with own domain, change to: base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/'
})
