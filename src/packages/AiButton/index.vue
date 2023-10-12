<template>
 <section>
    <el-button type="danger" @click="test" ><slot></slot></el-button>
</section>
</template>
 
<script lang="ts" setup  name="AiButton">
import { reactive } from "vue";
import { getCurrentInstance } from "vue";

const { proxy } = getCurrentInstance() as any;
const state= reactive({
    msg:'自定义组件111'
})

const test=()=>{


    proxy.$modal.msg("验证表单设计");

}
</script>