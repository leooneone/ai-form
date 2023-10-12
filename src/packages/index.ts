// install.js

import * as svg from '@element-plus/icons-vue'
import 'virtual:svg-icons-register'
import globalProperties from '../globalProperties'
 
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

 
 
const myComs = import.meta.globEager('./Ai*/index.vue') 
const AiForm = {
    install(app) {
 
      console.log('install ',myComs)
        ///注册全局属性
       app.use(globalProperties)
        
      console.log('use globalProperties ')
        ///注册elment icon  

        elSvg(app)
        
      console.log('elSvg ')
        for (const path in myComs) {

            let cname = myComs[path].default.name

            console.log('install com',cname)
           app.component(cname, myComs[path].default)
          }

        // myComs.forEach((item) => {
        //     console.log('install',item.name)
        //     App.component(item.name, item)
        //     //App.component(item.name, MyButton);
        // });
    },
};
 
export default AiForm;

// import Transfer from './src/main';
//     /* istanbul ignore next */
//     Transfer.install = function(Vue) {
//       Vue.component(Transfer.name, Transfer);
//     };
//     export default Transfer;
 