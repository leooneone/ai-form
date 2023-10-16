import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

import 'virtual:svg-icons-register'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import AiForm from "../index.ts"; 
import AiSignDemo from './demo/AiSignDemo/index.vue'
   
//import AiForm from "../dist/ai-form.js"; 
//import '../dist/style.css'
import './style.scss'
//import AiForm from "test-ai-form"; //导入
var app=createApp(App)

app.use(ElementPlus/*, { i18n: i18n.global.t }*/)
//.use(i18n)
 
app.component('AiSignDemo',AiSignDemo)
app.use(AiForm).mount('#app')


