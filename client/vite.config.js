import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ['b77466f520ab.ngrok-free.app', "d7651e88a52f.ngrok-free.app", "4a8cfcd00e1c.ngrok-free.app"]
  }
})
