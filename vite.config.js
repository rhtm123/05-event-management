import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        js: "./main.js",
        // Add more HTML files as needed
      }
    }
  }
})
