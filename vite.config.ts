/** @type {import('vite').UserConfig} */

import react from '@vitejs/plugin-react'

import { defineConfig, loadEnv } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import EnvironmentPlugin from "vite-plugin-environment";

import path from "path";

// https://vitejs.dev/config/
export default ({ mode }: { mode: any }) => {
  const env = loadEnv(mode, process.cwd());
  // process에서 타입에러가 뜨게된다. @types/node를 설치해주자

  return defineConfig({
    define: {
      'process.env': {
        ...env,
      }
    },
    server: {
      port: 5173,
    },
    resolve: {
      alias: [
        { find: "@", replacement: path.resolve(__dirname, "src") },
      ],
    },
    plugins: [
      react(),
      EnvironmentPlugin('all', { prefix: 'VITE_' }),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: env,
        }
      }),
    ],
  })
}
