import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: './index.html',
        service: './service.html',
        services: './services.html',
        about: './about-us.html',
        data: './data/services.json',

                // Add more HTML files as needed
      }
    }
  }
})
