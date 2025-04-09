import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: './index.html',
        service: './service.html',
        services: './services.html',
        about: './about-us.html',
        data: './public/data/services.json',
        contact: './contact.html',

                // Add more HTML files as needed
      }
    }
  }
})
