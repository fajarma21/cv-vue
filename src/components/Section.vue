<template>
  <div class="section">
    <div class="section-title">{{ title }}</div>
    <slot />
  </div>
</template>

<script setup>
defineProps(['title']);
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.section-title {
  font-size: 12px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.6px;
  font-weight: 700;
}
</style>
