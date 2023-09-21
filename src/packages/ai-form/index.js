// install.js 

// install.js
import MyButton from "./components/ai-button/index.vue";
import MyAmount from "./components/ai-amount/index.vue";
import MyDateDuration from "./components/ai-date-duration/index.vue"; 

const myComs = import.meta.globEager('./components/ai*/index.vue') 
 
const AiForm = {
    install(App) {
        for (const path in myComs) {

            let cname = myComs[path].default.name
           // components[cname] = myComs[path].default
           console.log('install',cname)
            App.component(cname, myComs[path].default)
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
 