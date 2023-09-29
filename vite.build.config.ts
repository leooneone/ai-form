import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import VueSetupExtend from 'vite-plugin-vue-setup-extend' 

import { createSvg } from './src/icons/index'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(),
     VueSetupExtend() ,
     
     createSvg('./src/icons/svg/')
    ],
    server: {
      host: '0.0.0.0',
    //  port: env.VITE_PORT as unknown as number,
      
      
    },
    build: {
        outDir: 'dist',
        sourcemap: false,
        chunkSizeWarningLimit: 1500,
        rollupOptions: {
          output: {
            entryFileNames: `assets/[name].[hash].js`,
            chunkFileNames: `assets/[name].[hash].js`,
            assetFileNames: `assets/[name].[hash].[ext]`,
            compact: true,
            manualChunks: {
              vue: ['vue'],
             
            },
          },
        },
      },
});