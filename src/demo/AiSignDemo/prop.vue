<template>
    <section v-if="props.activeData.tag==='AiSignDemo'">
<el-form-item label="画笔粗细">
         <el-input-number v-model="props.activeData.lineWidth" min="1" max="10"></el-input-number>
    

</el-form-item>
<el-form-item label="画布背景色">
         <el-color-picker v-model="props.activeData.bgColor"></el-color-picker>
    

</el-form-item>
    <el-form-item label="画笔颜色">
         <el-color-picker v-model="props.activeData.lineColor"></el-color-picker>
 

</el-form-item>



<el-form-item label="是否裁剪">
         <el-switch v-model="props.activeData.isCrop"></el-switch>
    

</el-form-item>

</section>
</template>
<script lang="ts" setup>
const props=defineProps(['activeData'])

</script>