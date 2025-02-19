

<template> 

 
     <Test></Test>
<AiFormDesigner :custom="state.custom" :show-header="true"  >
  <template #right="{activeData}"> 
  
    <PropPanel :active-data="activeData"></PropPanel>
   
 
 
</template>
</AiFormDesigner>
 
<!--<el-tabs v-model="state.panel" >
<el-tab-pane name="real" label="开发模式">


  <RealPanel v-if="state.panel=='real'"></RealPanel>
  
</el-tab-pane>

<el-tab-pane name="build" label="调式模式(build)">

  <BuildPanel v-if="state.panel=='build'"></BuildPanel>
  
</el-tab-pane>

<el-tab-pane name="npm"  label="发布模式(NPM包)">

  <NpmPanel v-if="state.panel=='npm'"></NpmPanel>
  
  
</el-tab-pane>
</el-tabs>
    -->
</template>
<script setup lang="ts"> 
import { reactive,provide } from "vue"; 

import PropPanel from './demo/AiSignDemo/prop.vue'
const state=reactive({panel:'real',

custom:[{
      label: "我的组件",
      name: "my",
      coms: [
        {
          title: "扩展组件",
          model: [ { "label": "编辑电子签名", "dataType": "string", "showLabel": true, 
          "tag": "AiSignDemo", "tagIcon": "input",  "span": 24,
           "labelWidth": null, "style": { "width": "100%" }, 
           "clearable": true, "prepend": "", "append": "",   "readonly": false, "disabled": false, 
           "isCrop":true,
           "required": true
           
             }],
          color: "var(--el-color-primary)",
        },
        
      ],
    }],

})

const getToken=()=>{
  console.log('getToken')


  return 'getToken'
  
}
provide('getToken',getToken)
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
