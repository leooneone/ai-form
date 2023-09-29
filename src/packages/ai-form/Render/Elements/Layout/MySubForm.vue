<template>
  <div  :class="className" style="margin-left: 0" v-if="conf.mode === 'designer'" >
    <span class="component-name">{{ item.label }} </span>

    <render-panel 
      :active-id="activeId"
      :list="item.children"
      tag="el-row"
      :conf="conf"
      :gutter="item.gutter"
      
      
    >
    </render-panel>
    
  <div style="text-align: center; background: white; color: #4e79ff; padding: 0.4rem 1rem">
    <el-icon><Plus></Plus></el-icon> {{ item.actionText }}
  </div>
</div><ai-sub-form v-else  :ref="setRef" :form-data="conf.model"   :config="item" v-model="conf.model[item.vModel]"></ai-sub-form>
</template>
<script lang="ts" setup name="my-sub-form">
import { inject, provide, defineAsyncComponent } from 'vue'

const RenderPanel = defineAsyncComponent(() => import('../../RenderPanel.vue'))

const props = defineProps({
  activeId: String || Number,
  item: Object,
  conf: Object,
  index: String || Number,
})

const setRef=(el)=>{
  
  if(!props.conf.tableRefs)
    props.conf.tableRefs={}
  props.conf.tableRefs[props.item.vModel]=el

 
 // return item.vModel
}

const className = 'drawing-layout-item'

const activeFormItem = inject('activeFormItem')
provide('activeFormItem', activeFormItem)
</script>