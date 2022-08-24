import { build, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  return {
    base: './',
    
    server: {
      host: '127.0.0.1',
      port: 7777
    },
    plugins: [react()],
    build: {
      lib: {
        entry: 'src/index.ts',
        formats: ['es', 'cjs'],
        fileName: ((format) => {
          return format === 'es' ? 'index.mjs' : 'index.js'
        })
      },
      outDir: 'dist',
      rollupOptions: {
        external: [
          "react",
          "react-dom",
          "monaco-editor",
          "prism-react-renderer",
          "monaco-themes",
          "react-live"
        ],
      },
    }
  }
})
