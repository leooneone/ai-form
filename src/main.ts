import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import AIForm from "./packages/ai-form/index.js"; //导入
createApp(App).use(ElementPlus/*, { i18n: i18n.global.t }*/)
//.use(i18n)
.use(AIForm).mount('#app')


