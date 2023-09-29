<template> 
  <div    :class="colClassName"  @click.native.stop="conf.mode === 'designer'&&activeFormItem&&activeFormItem(item)">
    <template v-if="conf.mode==='designer'">
      <span class="drawing-item-delete" @click="deleteItem(index, parent)" title="删除">
        <el-icon><Delete /></el-icon>
      </span>
      <span class="drawing-item-copy" @click="copyItem(item, parent)" title="复制">
        <el-icon><CopyDocument /></el-icon>
      </span>
    </template>

   <component v-if="!!components[item.tag]" :is="components[item.tag]" v-bind="$attrs"  :item="item"  :active-id="activeId" :conf="conf"    >
   
  </component>
    
    <render-form-item v-else :active-id="activeId" :item="item" :conf="conf"></render-form-item>

    
  </div> 
</template>
  
  <script lang="ts" setup name="drag-item">
import { defineAsyncComponent, computed, inject, provide } from 'vue'

const RenderFormItem = defineAsyncComponent(() => import('./RenderFormItem.vue'))

let components = {}

const elModules = import.meta.globEager('./Elements/Layout/*.vue')
for (const path in elModules) {
  let cname = elModules[path].default.name
  components[cname] = elModules[path].default
 
}

 
const props = defineProps({
  parent: Object,
  activeId: String || Number,
  item: Object,
  conf: Object,
  index: String || Number,
})

const activeFormItem = inject('activeFormItem')
provide('activeFormItem', activeFormItem)
const copyItem = inject('copyItem')
const deleteItem = inject('deleteItem')
 

let colClassName = computed(() => {
  if(props.conf.mode === 'designer')
  {
  return props.conf.activeId === props.item.formId ? 'drawing-item active-form-item' : 'drawing-item '
  }
  return ''
})
</script>