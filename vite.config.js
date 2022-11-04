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
})
