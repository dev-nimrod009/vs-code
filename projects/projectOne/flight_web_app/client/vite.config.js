import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // This block ensures direct navigation (like refreshing the page) 
  // on routes like /confirmpage works correctly by serving index.html.
  server: {
    configureServer: (server) => {
      server.middlewares.use((req, res, next) => {
        // Only rewrite if it's not a static file and not index.html
        if (req.url.endsWith('.html') || req.url.includes('.')) {
          next();
        } else {
          // Rewrite the URL to the root index.html
          req.url = '/index.html';
          next();
        }
      });
    }
  }
})
