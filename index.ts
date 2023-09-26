// install.js 


import * as svg from '@element-plus/icons-vue'

import globalProperties from './globalProperties'
 
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

  // install.js 

   
  import MyButton from "./packages/ai-form/components/AiButton/index.vue";
  import MyAmount from "./packages/ai-form/components/AiAmount/index.vue";
  
  
  const component = [MyButton,MyAmount];
  
  const AiForm1 = {
      install(app) {
          component.forEach((item) => {
            console.log('item',item)
              console.log('install',item.name)
              app.component(item.name, item)
              //App.component(item.name, MyButton);
          });
      },
  };
   
  const myComs = import.meta.globEager('./packages/ai-form/components/Ai*/index.vue') 
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

 