import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Plain Vue 3 SPA (migrated off Nuxt). Served at the domain root on GitHub Pages.
export default defineConfig({
  base: '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@data': fileURLToPath(new URL('./data', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      // Use Dart Sass's modern API (silences the legacy-js-api deprecation).
      scss: { api: 'modern' },
    },
  },
  server: {
    host: true,        // bind 0.0.0.0 so WSL2 is reachable via localhost and the WSL IP
    port: 5173,
    strictPort: true,  // fail loudly instead of silently drifting to another port
  },
})
