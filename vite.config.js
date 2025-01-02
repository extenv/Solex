import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import path from 'path';

export default defineConfig({
    plugins: [solidPlugin()],
    root: './src',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    server: {
        proxy: {
            '/api': 'http://localhost:5000',
        },
    },
});
