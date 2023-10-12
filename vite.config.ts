import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import VueSetupExtend from 'vite-plugin-vue-setup-extend' 
import { createSvgIconsPlugin,viteSv } from 'vite-plugin-svg-icons'
import { createSvg } from './src/icons/index'

 
 

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(),  VueSetupExtend() ,
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
   
     
    // createSvg('./src/icons/svg/')
    ],
    server: {
      host: '0.0.0.0',
    //  port: env.VITE_PORT as unknown as number,
      
      
    },
    build: {
        outDir: "lib", //输出文件名称
        
        lib: {
            entry: path.resolve(__dirname, "./index.ts"), //指定组件编译入口文件
            name: "ai-form",
            fileName: "ai-form",
        }, //库编译模式配置
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue', 'element-plus'],
            output: {
                exports: 'default', 
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue',
                    'element-plus': 'ElementPlus'
                  },
                assetFileNames: `style.css`
            },
        }, // rollup打包配置
    },
    resolve: {
        // https://cn.vitejs.dev/config/#resolve-alias
        alias: {
          // 设置路径
          '~': path.resolve(__dirname, './'),
          // 设置别名
          '@': path.resolve(__dirname, './src')
        },
        // https://cn.vitejs.dev/config/#resolve-extensions
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
      },
});