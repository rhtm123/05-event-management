import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: './index.html',
                // Add more HTML files as needed
      }
    }
  }
})
