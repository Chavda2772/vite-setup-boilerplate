import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

// https://vitejs.dev/config/
export default () => {
    return defineConfig({
        plugins: [
            vue(),
            VitePWA({
                mode: 'development',
                registerType: 'autoUpdate',
                base: '/',
                srcDir: 'src',
                filename: 'sw.js',
                includeAssets: ['/favicon.png'],
                strategies: 'injectManifest',
                manifest: {
                    name: 'PWA Long Name',
                    short_name: 'PWA Short Name',
                    theme_color: '#ffffff',
                    start_url: '/',
                    display: 'standalone',
                    background_color: '#000',
                    icons: [
                        {
                            src: 'icon-192.png',
                            sizes: '192x192',
                            type: 'image/png',
                        },
                        {
                            src: '/icon-512.png',
                            sizes: '512x512',
                            type: 'image/png',
                        },
                        {
                            src: 'icon-512.png',
                            sizes: '512x512',
                            type: 'image/png',
                            purpose: 'any maskable',
                        },
                    ],
                },
                workbox: {
                    cleanupOutdatedCaches: false,
                },
            }),
        ],
        server: {
            port: 4000,
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
    })
}
