import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
    // Только для разработки в браузере: обходит CORS. В APK запросы идут напрямую через CapacitorHttp.
    proxy: {
      '/rameev-api': {
        target: 'https://app.rameevcollege.ru',
        changeOrigin: true,
        secure: true,
        rewrite: (p) => p.replace(/^\/rameev-api/, ''),
      },
    },
  },
  build: { outDir: 'dist', sourcemap: false },
});
