// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import node from '@astrojs/node';
import clerk from '@clerk/astro';

// https://astro.build/config
export default defineConfig({
  srcDir: './app',
  output: 'server',
  integrations: [react(), clerk()],

  adapter: node({
    mode: 'standalone'
  })
});