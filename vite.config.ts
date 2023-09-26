import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import DefineOptions from 'unplugin-vue-define-options/vite'
import dts from 'vite-plugin-dts'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(),
    VueSetupExtend(),
    dts({

        entryRoot: ".",
        outputDir: ["./ai/es", "./ai/lib"],
        tsConfigFilePath: "./tsconfig.json"
    }),
    DefineOptions()
    ],
    server: {
        host: '0.0.0.0',
        //  port: env.VITE_PORT as unknown as number,


    },


    build: {
        //打包文件目录
        outDir: "es",
        //压缩
        //minify: false,
        rollupOptions: {
            globals: {
                vue: 'Vue',
                'element-plus': 'ElementPlus',
            },
            assetFileNames: `ai.style.css`,
            //忽略打包vue文件
            external: ["vue", 'element-plus'],
            input: ["index.ts"],
            output: [
                {
                    //打包格式
                    //   format: "es",
                    //打包后文件名
                    //     entryFileNames: "[name].mjs",
                    //让打包目录和我们目录对应
                    //   preserveModules: true,
                    exports: "default",
                    //配置打包根目录
                    dir: "./ai/es",
                },
                {
                    //打包格式
                    format: "cjs",
                    //打包后文件名
                    entryFileNames: "[name].js",
                    //让打包目录和我们目录对应
                    preserveModules: true,
                    exports: "named",
                    //配置打包根目录
                    dir: "./ai/lib",
                },
            ],
        },
        lib: {
            entry: "./index.ts",
            name: "ai-form",
            //fileName:(format)=>`ai-form.${format}.js`
        },
    },

});