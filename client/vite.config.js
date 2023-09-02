import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint';
// To get the resolution from the node path module for the file system
import path from 'node:path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default defineConfig({
  plugins: [react(), { // do not fail on serve (i.e. local development)
    ...eslint({
      failOnWarning: false,
      failOnError: false,
    }),
    apply: 'serve',
    enforce: 'post'
  }],
  // Used to resolve alias in absolute paths in vite
  resolve: {
    alias: [
      { find: '~', replacement: path.resolve(__dirname,'./src'), },
      { find: 'components', replacement: path.resolve(__dirname, './src/components') },
      { find: 'views', replacement: path.resolve(__dirname, './src/views') },
    ]
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    }
  },
  server: {
    port: 3000,
  }
})
