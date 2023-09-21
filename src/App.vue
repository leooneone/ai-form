

<template>
  <ai-sub-form :config="{type:'table'}"></ai-sub-form>
  <ai-date-duration v-model="state.test" :showChinese="true"></ai-date-duration>
  <ai-button size="large" type="primary">我是测试组件</ai-button>
</template>
<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({ test: 1  } ) ;
</script> 
