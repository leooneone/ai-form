<template>
 <section>
    <el-button type="danger" >{{ state.msg }}</el-button>
</section>
</template>
 
<script lang="ts" setup  name="AiButton">
import { reactive } from "vue";

const state= reactive({
    msg:'自定义组件111'
})

</script>