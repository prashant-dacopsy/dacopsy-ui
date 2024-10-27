import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      // Proxy API requests to the backend server
      '/app': {
        target: 'http://100.27.127.192:3000/app/', // Backend server URL
        changeOrigin: true,
        secure: false,
      },
      '/open': {
        target: 'http://100.27.127.192:3000/open/', // If you have multiple endpoints
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
