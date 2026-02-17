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
      publicDir: 'public',
      build: {
        copyPublicDir: true,
        outDir: 'docs',  // ADD THIS LINE - outputs to docs folder for GitHub Pages
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