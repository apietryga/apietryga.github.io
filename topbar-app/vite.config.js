import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Deployed under <site>/topbar/ (see deploy.sh), so assets resolve from that base.
export default defineConfig({
  base: '/topbar/',
  plugins: [vue()],
  resolve: {
    alias: {
      // Shared, unified data lives one level up in /data.
      '@data': fileURLToPath(new URL('../data', import.meta.url)),
    },
  },
  server: {
    // Allow importing the shared /data modules that sit outside this app's root.
    fs: { allow: ['..'] },
  },
})
