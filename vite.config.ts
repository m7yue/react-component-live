import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command}) => {

  return {
    // base: command === 'build' ?  'dist' : '',
    base: './',
    server: {
      host: '127.0.0.1',
      port: 7777
    },
    plugins: [react()]
  }
})
