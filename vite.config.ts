import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/ensoltech-new/',
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    }
  }
})
