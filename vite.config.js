import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'a0ac-2400-1a00-b030-a138-a417-3a5c-1420-a4c7.ngrok-free.app'
    ]
  }
})
