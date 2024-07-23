<template>
  <div class="title">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.title {
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--size-medium);
  padding: 0 calc(var(--size-xsmall) / 2) 0 var(--size-xsmall);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xsmall);
  line-height: var(--line-height);
  letter-spacing: var(--font-letter-spacing-pos-xsmall);
  cursor: default;
  user-select: none;
}
</style>
