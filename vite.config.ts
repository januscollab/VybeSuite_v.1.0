import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/anthropic': {
        target: 'https://api.anthropic.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/anthropic/, ''),
        headers: {
          'Origin': 'https://api.anthropic.com'
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Enable raw text imports for prompt files
  assetsInclude: ['**/*.txt']
});