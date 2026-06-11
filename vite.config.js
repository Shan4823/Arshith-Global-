import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        aboutceo: resolve(__dirname, 'aboutceo.html'),
        internship: resolve(__dirname, 'internship.html'),
        latestnews: resolve(__dirname, 'LatestNews.html'),
        infotech: resolve(__dirname, 'infotech.html'),
        aboutinfotech: resolve(__dirname, 'about-infotech.html'),
        arshithinfotech: resolve(__dirname, 'arshithinfoTech.html'),
      },
    },
  },
});
