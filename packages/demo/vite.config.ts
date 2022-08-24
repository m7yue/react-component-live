import { defineConfig } from 'vite'
import vitePluginreact from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  
  server: {
    host: '127.0.0.1',
    port: 7777
  },
  plugins: [vitePluginreact()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`,
      }
    }
  },
})
