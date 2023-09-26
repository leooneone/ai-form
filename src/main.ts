import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import AiForm from "../index.js"; //导入





const app = createApp(App)
app.use(ElementPlus/*, { i18n: i18n.global.t }*/)
//.use(i18n)
.use(AiForm).mount('#app')


