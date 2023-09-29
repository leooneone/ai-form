

<template> 

 
     
<AiFormDesigner :custom="state.custom" :show-header="true" >
  <template #right="{activeData}">
  <el-form-item label="test"   v-if="activeData.tag==='ai-ou-select'">
    {{ activeData }}
    <el-switch v-model="activeData.showLabel" ></el-switch>
  <el-button>123443fdssafasdf+++++++++</el-button>

</el-form-item>
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
import BuildPanel from './debugPanel/buildPanel.vue'
import RealPanel from './debugPanel/realPanel.vue'
import NpmPanel from './debugPanel/npmPanel.vue'
const state=reactive({panel:'real',

custom:{



}

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
