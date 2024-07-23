<script setup lang="ts">
import Heart from "@/ui/assets/icons/heart.svg?raw";
import CaretRight from "@/ui/assets/icons/caret-right.svg?raw";
import CaretDown from "@/ui/assets/icons/caret-down.svg?raw";
import Copy from "@/ui/assets/icons/copy.svg?raw";

const icons = {
  heart: Heart,
  caretRight: CaretRight,
  caretDown: CaretDown,
  copy: Copy,
};

defineProps({
  icon: { type: String, default: "heart" },
  spinning: Boolean,
});
</script>

<template>
  <div class="fig-icon" v-html="icons[icon]"></div>
</template>
<style lang="scss"></style>
