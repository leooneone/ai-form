<template>
  <div class="ai-amount">
     <el-input-number
      style="width: 100%"
      v-model="state.innerValue"
      v-bind="$attrs"
      @input="handleInput"
    ></el-input-number> 
    <div class="explain-text" v-if="props.showChinese">大写：{{ chinese }}</div>
  </div>
</template>
<script lang="ts" setup name="AiAmount">
import { reactive ,watch,computed } from 'vue'
import {getAmountChinese} from '../utils/index.js'
  const emits=defineEmits(["update:modelValue"])
  const props=defineProps( ["modelValue","showChinese"  ])
 
  const state=reactive(
      {
      innerValue: props&&props.modelValue
    })
  
  
  const    chinese =computed(()=>{
      return props.showChinese ? getAmountChinese(state.innerValue) : ''
    }) 
 const    handleInput =(val) =>{
      emits('update:modelValue', val)   
    } 

  watch(
    () => props.modelValue,
  (val) => {
    if (val !== state.innerValue) {
      state.innerValue = val
      }
    
  }

  )
     
</script>
<style lang="scss" scoped>
.explain-text {
  font-size: 12px;
  color: #aaa;
  line-height: 20px;
}
</style>