// install.js 


import * as svg from '@element-plus/icons-vue'

import 'virtual:svg-icons-register'
import globalProperties from './src/globalProperties'
 
/**
 * 导出全局注册 element plus svg 图标
 * @param app vue 实例
 * @description 使用：https://element-plus.gitee.io/zh-CN/component/icon.html
 */
  function elSvg(app) {
    const icons = svg 
    for (const i in icons) {
      app.component(`${icons[i].name}`, icons[i])
    }
  
  }

  
   
  const myComs = import.meta.globEager('./src/packages/Ai*/index.vue') 
const AiForm = {
    install(app) {
  
        ///注册全局属性
        app.use(globalProperties)
         
        ///注册elment icon  

        elSvg(app)
         
        for (const path in myComs) {

            let cname = myComs[path].default.name
 
           app.component(cname, myComs[path].default)
          }

        
    },
};
 
export default AiForm;

 