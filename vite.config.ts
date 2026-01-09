import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Özel domain (CNAME) kullanıldığı için base '/' olmalıdır.
  // Eğer CNAME kullanmadan github.io/repo-adi altına atılacaksa burası '/repo-adi/' olmalıdır.
  base: '/', 
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})