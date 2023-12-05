 

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import VueSetupExtend from 'vite-plugin-vue-setup-extend' 
import { createSvgIconsPlugin,viteSv } from 'vite-plugin-svg-icons'
import { createSvg } from './src/icons/index'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(),
     VueSetupExtend() ,
      

     createSvgIconsPlugin(
      {
          // 指定需要缓存的图标文件夹
          iconDirs: [path.resolve(process.cwd(),   './src/icons/svg/')],
          // 指定symbolId格式
          symbolId: 'icon-[name]',
  
          /**
           * 自定义插入位置
           * @default: body-last
           */
         // inject?: 'body-last' | 'body-first'
  
          /**
           * custom dom id
           * @default: __svg__icons__dom__
           */
          ///customDomId: '__svg__icons__dom__',
        }
    ),
    ],
    server: {
      host: '0.0.0.0',
    //  port: env.VITE_PORT as unknown as number,
      
      
    },
    build: {
      outDir: 'dist',
      chunkSizeWarningLimit: 1500,
      sourcemap: false,
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().match(/\/node_modules\/(?!.pnpm)(?<moduleName>[^\/]*)\//)?.groups!.moduleName ?? 'vender'
            }
          },
        },
      },
    },

      
    css: { preprocessorOptions: { css: { charset: false } } },
});