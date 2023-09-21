// install.js
import MyButton from "./button/index.vue";


const component = [MyButton];

const AiForm = {
    install(App:any) {
        component.forEach((item) => {
            App.component(item.name, MyButton)
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
 