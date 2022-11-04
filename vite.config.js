import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import alias from '@rollup/plugin-alias';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    alias({
      entries: [
        {
          find: 'src',
          replacement: path.resolve(path.join(__dirname), 'src'),
        },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id, { getModuleInfo }) { 
          const parsed = path.parse(id);
          const dir = parsed.dir.split('/');

          // code splitting for axios
          if (dir.includes('axios')) {
            return 'axios';
          }

          // code splitting for svelte-query
          if (dir.includes('@sveltestack') && dir.includes('svelte-query') && parsed.ext == '.svelte') {
            return 'query';
          }

          // code splitting for each page
          if (dir.includes('src') && dir.includes('page') && parsed.ext == '.svelte') {
            return parsed.name;
          }


        }
      },
    },
  },
})
