import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: './index.html',
        main: "./main.js",
        // Add more HTML files as needed
      }
    }
  }
})
