import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs',  // Change from default 'dist' to 'docs'
  },
  base: '/vaelora-master/'  // Important: match your repo name for correct relative paths
});