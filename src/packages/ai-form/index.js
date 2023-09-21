// install.js 


import * as svg from '@element-plus/icons-vue'
const myComs = import.meta.globEager('./components/Ai*/index.vue') 
 
import globalProperties from '../globalProperties'
/**
 * 导出全局注册 element plus svg 图标
 * @param app vue 实例
 * @description 使用：https://element-plus.gitee.io/zh-CN/component/icon.html
 */
export function elSvg(app) {
    const icons = svg 
    for (const i in icons) {
      app.component(`${icons[i].name}`, icons[i])
    }
  
  }
const AiForm = {
    install(app) {
        ///注册全局属性
        app.use(globalProperties)
        ///注册elment icon  

        elSvg(app)
        for (const path in myComs) {

            let cname = myComs[path].default.name
           // console.log('install',cname)
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
 