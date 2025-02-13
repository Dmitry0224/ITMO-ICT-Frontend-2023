import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig(() => {
  return {
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
    ],
    build: {
      sourcemap: false,
    },
    base: '',
    resolve: {
      alias: {
        src: fileURLToPath(new URL('./src', import.meta.url)),
        public: fileURLToPath(new URL('./public', import.meta.url)),
      },
    },
  }
})
