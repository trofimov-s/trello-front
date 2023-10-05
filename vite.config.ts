import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const ROOT_PATH = path.join(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@pages': path.resolve(ROOT_PATH, 'pages'),
      '@components': path.resolve(ROOT_PATH, 'components'),
      '@UI': path.resolve(ROOT_PATH, 'components/UI'),
      "@enums": path.resolve(ROOT_PATH, 'enums'),
      "@models": path.resolve(ROOT_PATH, 'models'),
      "@utils": path.resolve(ROOT_PATH, 'utils'),
      "@hooks": path.resolve(ROOT_PATH, 'hooks'),
      "styles": path.resolve(ROOT_PATH, 'styles'),
    },
  },
});
