

<template> <ai-amount v-model="state.test" :showChinese="true"></ai-amount>
    <ai-button size="large" type="primary">我是测试组件</ai-button>
</template>
<script setup lang="ts"> 
import { reactive } from "vue";

const state=reactive({test:1})
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
