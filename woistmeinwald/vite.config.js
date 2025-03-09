import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'cesium': 'cesium/Source'
    }
  },
  build: {
    rollupOptions: {
      external: ['cesium/Source']
    }
  }
});