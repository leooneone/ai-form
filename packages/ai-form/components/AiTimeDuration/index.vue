
<template>
  <div>
    <el-time-picker v-model="state.timeRange" v-bind="$attrs" is-range ></el-time-picker>
    <div v-if="props.showDuration" class="explain-text">时长: {{state.duration}}</div>
  </div>
</template>
<script lang="ts" setup name="AiTimeDuration">
import { reactive, watch } from "vue";
import { timeCalculate } from "../../utils/index.js";
 
const emits = defineEmits(["update:modelValue", "change"]);

const props = defineProps([
  "modelValue",
  "showDuration",
  "defaultValue"
]);
const state = reactive({
  timeRange: props.modelValue || props.defaultValue || ["", ""],
  duration: "",
});
  
watch(
  () => props.modelValue,
  (val) => {
    if (!val) {
      state.timeRange = ["", ""];
    } else if (Array.isArray(val) && state.timeRange + "" !== val + "") {
      state.timeRange = val;
    }
  }
);
watch(
  () => state.timeRange,
  (val) => {
    let res = "";
        if (Array.isArray(state.timeRange)) {
          const [start, end] = state.timeRange.slice(0, 2).map( c => new Date('2020/01/01 ' + c).getTime())
          res = timeCalculate(start, end)
        }
        state.duration = res
    emits("change", val);
    emits("update:modelValue", val);
  },
  {
    immediate: true,
  }
);
   
 
</script>
<style lang="scss" scoped>
.explain-text {
  font-size: 12px;
  color: #aaa;
  line-height: 20px;
}
</style>