import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/wedoxa-new/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      // ADD THIS SECTION:
      publicDir: 'public',  // Ensures public files are copied to dist
      build: {
        copyPublicDir: true,  // Explicitly copy public dir
      },
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});