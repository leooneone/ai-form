<!--
  根据approvalFlow项目中fc-calcuation 组件重构
  Develped by Leo on 2023.9.21
-->
<template>
  <div class="ai-calculate">
    <!--<el-input v-model="innerValue" readonly></el-input>-->
    <div style="margin: auto 0">{{ state.innerValue }}</div>

    <div class="explain-text" v-if="props.showChinese">大写：{{ chinese }}</div>
  </div>
</template>
<script lang="ts" setup name="AiCalculate">
import {
  getAmountChinese,
  mergeNumberOfExps,
  validExp,
  toRPN,
  calcRPN,
  debounce,
} from "../../utils/index.js";

import {
  reactive,
  watch,
  computed,
  getCurrentInstance,
} from "vue";
const emits = defineEmits(["change", "update:modelValue"]);
const { proxy } = getCurrentInstance() as any;
const props = defineProps([
  "modelValue",
  "tag",
  "showChinese",
  "fieldId",
  "formData",
  "expression",
  "rowIndex", // 计算公式放在表格中时， 需要获取在表格中的行位置
]);
const state = reactive({
  innerValue: props.modelValue,
  RPN_EXP: toRPN(mergeNumberOfExps(props.expression)),
});

const chinese = computed(() => {
  return props.showChinese ? getAmountChinese(state.innerValue) : "";
});
const rootFormData = computed(() => {
  return props.formData || getFormData();
});

const getFormData = () => {
  var root = proxy.$parent;
  while (root) {
    if ("vmFormData" in root) {
      return root.vmFormData;
    }
    root = root.$parent;
  }
};
/**
 * 获取指定组件的值
 */
const getFormVal = (vModel) => {
  try {
    
    if (vModel.indexOf(".") > -1) {
      let [tabelVModel, cmpVModel] = vModel.split(".");
      if (typeof props.rowIndex === "number") {
        return rootFormData.value[tabelVModel][props.rowIndex][cmpVModel] || 0;
      } else {
        return rootFormData.value[tabelVModel].reduce(
          (sum, c) => (c[cmpVModel] || 0) + sum,
          0
        );
      }
    } 
    return rootFormData.value[vModel] || 0;
  } catch (error) {
    console.warn("计算公式出错, 可能包含无效的组件值", error);
    return 0;
  }
};
/**
 * 计算表达式
 */
const execRPN = () => {
   
  const temp = state.RPN_EXP.map((t) =>
    typeof t === "object" ? getFormVal(t.vModel) : t
  ); 
  state.innerValue = calcRPN(temp);
  emits("change", state.innerValue);

  emits("update:modelValue", state.innerValue);
};

let computeExps = null;
watch(
  () => props.formData,
  (val) => {
    if (!val) return;

    debounce(execRPN(), 500);
  },
  {
    deep: true,
    immediate: true,
  }
);
</script>
<style lang="scss" scoped>
.ai-calculate {
  display: flex;
  flex-direction: column;
}
.explain-text {
  font-size: 12px;
  color: #aaa;
  line-height: 20px;
}
</style>