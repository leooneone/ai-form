import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import VueSetupExtend from 'vite-plugin-vue-setup-extend' 

import { createSvg } from './src/icons/index'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(),
     VueSetupExtend(),
     
      createSvg('./src/icons/svg/')
    ],
    server: {
      host: '0.0.0.0',
    //  port: env.VITE_PORT as unknown as number,
      
      
    },
    build: {
        outDir: "ai-form", //输出文件名称
        lib: {
            entry: path.resolve(__dirname, "./src/packages/ai-form/index.js"), //指定组件编译入口文件
            name: "ai-form",
            fileName: "ai-form",
        }, //库编译模式配置
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ["vue"],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: "Vue",
                },
            },
        }, // rollup打包配置
    },
});