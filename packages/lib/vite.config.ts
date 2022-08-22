import { build, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  // if (command === 'build') {
  //   const entry = path.resolve(__dirname, 'src/index.ts')
  //   console.log(entry)
  //   return {
  //     base: './',
  //     build: {
  //       lib: {
  //         entry: entry,
  //         formats: ["es"],
  //         fileName: (fileName) => {
  //           return fileName + '.js'
  //         }
  //       },
  //       outDir: './dist',
  //       rollupOptions: {
  //         external: ["react", "react-dom"]
  //       },
  //     },
  //   }
  // }
  // else {
    return {
      base: './',
      
      server: {
        host: '127.0.0.1',
        port: 7777
      },
      plugins: [react()]
    }
  // }
})
