import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  base: '/cv-vue',
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id, { getModuleInfo }) => {
          if (id.includes('node_modules')) {
            if (id.includes('oh-vue-icons')) return 'oh-vue-icons';
            if (id.includes('firebase')) return 'firebase';
            return 'vendor';
          }

          return null;
        },
        chunkFileNames: 'assets/chunk-[name]-[hash].js',
      },
    },
  },
});
