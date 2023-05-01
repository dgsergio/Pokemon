import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./jest-setup.js'],
    coverage: {
      exclude: ['src/mocks/**', 'src/__test__/**'],
    },
  },
});
