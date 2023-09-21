// install.js
import MyButton from "./button/index.vue";
import MyAmount from "./amount/index.vue";


const component = [MyButton,MyAmount];

const AiForm = {
    install(App) {
        component.forEach((item) => {
            console.log('install',item.name)
            App.component(item.name, item)
            //App.component(item.name, MyButton);
        });
    },
};

export default AiForm;

// import Transfer from './src/main';
//     /* istanbul ignore next */
//     Transfer.install = function(Vue) {
//       Vue.component(Transfer.name, Transfer);
//     };
//     export default Transfer;
 