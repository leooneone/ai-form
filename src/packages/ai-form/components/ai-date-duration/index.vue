<template>
  <div>
    <el-date-picker v-model="state.timeRange" v-bind="$attrs"></el-date-picker>
    <div v-if="showDuration" class="explain-text">
      时长: {{ state.duration }}
    </div>
  </div>
</template>
<script lang="ts" setup name="AiDateDuration">
import { reactive ,watch,computed,defineEmits,defineProps} from 'vue'
import { timeCalculate } from '../../utils/index.js' 
  const props=defineProps(["modelValue","cmpType", "showDuration","tag", "tagIcon", "defaultValue", "labelWidth", "range-separator", "start-placeholder", "end-placeholder", "clearable", "format", "value-format", "regList", "changeTag", "proCondition", "asSummary", "fieldId", "renderKey", "layout", "value"]) 

 const emits=defineEmits(["update:modelValue","change"])
 const state=reactive({
 
      timeRange: props.modelValue || props.defaultValue || ['', ''],
      duration: ''
    }) 

  watch(
    () => props.modelValue,
  (val) => {
    if (!val) {
        state.timeRange = ['', '']
      } else if (Array.isArray(val) && state.timeRange + '' !== val + '') {
        state.timeRange = val
      }
    
  }
  )
  watch(
    () => state.timeRange,
  (val) => {
    let res = ''
        if (Array.isArray(state.timeRange)) {
          const [start, end] = state.timeRange.slice(0, 2).map( c => new Date(c).getTime())
          res = timeCalculate(start, end)
        }
        state.duration = res
        emits('change', val)
        emits('update:modelValue', val)
    
  },{
      immediate:true
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