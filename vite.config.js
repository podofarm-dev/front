/** @type {import('vite').UserConfig} */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import EnvironmentPlugin from "vite-plugin-environment";
import path from "path";
// https://vitejs.dev/config/
export default (function (_a) {
    var mode = _a.mode;
    var env = loadEnv(mode, process.cwd());
    // process에서 타입에러가 뜨게된다. @types/node를 설치해주자
    return defineConfig({
        define: {
            'process.env': __assign({}, env)
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
    });
});
