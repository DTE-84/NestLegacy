import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  server: {
    middlewareMode: false,
    mimeTypes: {
      '.jsx': 'application/javascript',
      '.js': 'application/javascript'
    }
  }
})

