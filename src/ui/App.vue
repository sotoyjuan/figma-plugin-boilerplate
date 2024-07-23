<script setup lang="ts">
import Button from "./components/figma-ds/Button.vue";

function notify() {
  parent.postMessage({ pluginMessage: { type: "hello" } }, "*");
}
</script>

<template>
  <div class="container">
    <Button @click="notify()">Click me</Button>
    Made by sotoijuan.com
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  gap: var(--size-xsmall);
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
