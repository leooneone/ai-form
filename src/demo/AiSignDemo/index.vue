<!--自定义组件的Demo-->
 
 
  
<template>
  <section > 
    <div style="height:60px" >
      <img v-if="state.resultImg" :src="state.resultImg" alt="" style="height:100%"  />
    </div>
    <el-button  @click="state.showSignEditor=true" v-if="!$attrs.disabled" type="danger" >
       {{$attrs.label}}
</el-button>
<el-dialog  v-model="state.showSignEditor" v-if="!$attrs.disabled" :title="$attrs.label">
    <div  class="esign-box" >
      <SignPanel ref="esignPanel" v-bind="$attrs"></SignPanel>
    </div>
    <template  #footer>
      <el-button @click="handleReset" type="danger"  >清空</el-button>
      <el-button @click="saveToImg" type="success"  >确认</el-button>
    </template>
</el-dialog>
  </section>
</template>
<script lang="ts" setup name="AiSignDemo">
import { ref, reactive } from "vue";
import SignPanel from "vue-esign";

const emits=defineEmits(["update:modelValue"])
  const props=defineProps( ["modelValue"  ])
const esignPanel = ref();

const state = reactive({
    showSignEditor:false,
  resultImg: props.modelValue,
});

const handleReset = () => {
  state.resultImg = '';
  emits('update:modelValue', state.resultImg)   
  esignPanel.value.reset();
};
const saveToImg = () => {
  esignPanel.value
    .generate()
    .then((res) => {
      state.resultImg = res;
      emits('update:modelValue', state.resultImg)   
      state.showSignEditor=false
    })
    .catch((err) => {
      //alert(err)
    });

   
    
    
 
};
</script>




<style  scoped>
.esign-box{
    border: 1px solid var(--el-color-primary);

}
.esign {
  max-width: 1000px;
  margin: auto;
  padding: 10px;
}  
</style>