<div align="center">
	<h2>AiForm</h2>
	<p align="center">
	    <a href="https://v3.vuejs.org/" target="_blank">
	        <img src="https://img.shields.io/badge/vue.js-vue3.x-green" alt="vue">
	    </a>
	    <a href="https://element-plus.gitee.io/#/zh-CN/component/changelog" target="_blank">
	        <img src="https://img.shields.io/badge/element--plus-%3E1.0.0-blue" alt="element plus">
	    </a>
		<a href="https://www.tslang.cn/" target="_blank">
	        <img src="https://img.shields.io/badge/typescript-%3E4.0.0-blue" alt="typescript">
	    </a>
		<a href="https://vitejs.dev/" target="_blank">
		    <img src="https://img.shields.io/badge/vite-%3E2.0.0-yellow" alt="vite">
		</a>
		<a href="https://github.com/leooneone/aibpm.ui.plus/blob/main/LICENSE" target="_blank">
		    <img src="https://img.shields.io/badge/license-MIT-success" alt="license">
		</a>
	</p>
	<p>&nbsp;</p>
</div>

#### 🌈 介绍

AiForm是一个开源的表单设计/解析器。基于对开源项目form-generator和扩展项目approvalFlow学习和复用，使用 vue3.x + CompositionAPI setup 语法糖 + typescript + vite + element plus  技术重构而成，适配手机、平板、pc ，希望减少工作量，帮助大家实现快速开发。

#### ⛱️ 线上预览

- vue3.x 版本预览（ai-form）<a href="https://demo.aiform.ailicloud.com" target="_blank">https://demo.aiform.ailicloud.com</a>

#### 📸部分截图：
![demo.png](https://raw.githubusercontent.com/leooneone/ai-form/main/src/assets/demo/demo.png)
 
#### ⚡ 使用说明

> Vite 不再支持 Node 12 / 13 / 15，因为上述版本已经进入了 EOL 阶段。现在你必须使用 Node 14.18+ / 16+ 版本。

包使用方法：
```bash
# 安装组件
npm i ai-form@latest -S 

# 引入安装后的组件 main.ts中增加如下配置:
import AiForm from "ai-form"; 

# 启用表单组件 main.ts
app.use(AiForm);

# 调用组件 调用组件前 需要引入elment plus 及 样式文件
<ai-form-designer :show-header="true" >

```

源码开发：
```bash
# 进入项目
cd ai-form

# 安装依赖
npm i

# 运行项目
npm run dev

```
#### 📚 文档

- 查看文档：<a href="https://doc.aiform.ailicloud.com" target="_blank">doc.aiform.ailicloud.com(暂未实现)</a>

#### 💯 学习交流加 QQ 群

>  讨论群：<a target="_blank" href="https://jq.qq.com/?_wv=1027&k=S36Tm7gj">601291407</a>

  <a target="_blank" href="https://jq.qq.com/?_wv=1027&k=S36Tm7gj">
  	<img  src="https://raw.githubusercontent.com/leooneone/aibpm.ui.plus/main/src/assets/demo/qqgroup.jpg" width="320"  alt="AIBPM讨论群" title="AI组件讨论群"/>
  </a>

#### 💕 特别感谢

- <a href="https://github.com/JakHuang/form-generator" target="_blank">form-generator</a>
- <a href="https://github.com/SNFocus/approvalFlow" target="_blank">approvalFlow</a>

#### ❤️ 鸣谢列表

- <a href="https://github.com/vuejs/vue" target="_blank">vue</a>
- <a href="https://github.com/vuejs/vue-next" target="_blank">vue-next</a>
- <a href="https://github.com/element-plus/element-plus" target="_blank">element-plus</a>
- <a href="https://github.com/vuejs/pinia" target="_blank">pinia</a>
- <a href="https://github.com/sass/sass" target="_blank">sass</a>
- <a href="https://github.com/microsoft/TypeScript" target="_blank">typescript</a>
- <a href="https://github.com/vitejs/vite" target="_blank">vite</a>

#### 💌 支持作者

如果您觉得本项目对您有帮助，您可以选择以下方式让开源走的更远，感谢支持：

1.去 <a target="_blank" href="https://github.com/leooneone/aibpm.ui.plus">Github</a> 或者
<a target="_blank" href="https://gitee.com/leooneone/aibpm.ui.plus">Gitee</a> 帮我点个 ⭐ Star；

2.请作者喝罐可乐，或者给作者的宝宝们（Mark&Ellie）小红包用作兴趣班资金。  
  请您在捐赠后，加群：601291407，私聊群主留个赞助记录。
<img src="https://raw.githubusercontent.com/leooneone/aibpm.ui.plus/main/src/assets/demo/donate.png">

#### 📜开源协议
[MIT](https://opensource.org/licenses/MIT)
### 请保留作者信息，以帮助宣传项目，方便更多的人加入讨论，一起完善
