import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [react()],
  
=======
  plugins: [react(),tailwindcss(),],
>>>>>>> 7579c292de21203213f16a6f75481be02ccd5bde
})
