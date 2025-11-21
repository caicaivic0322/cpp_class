import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '.build', // Explicitly set output to .build to match Render settings
    emptyOutDir: true
  }
})