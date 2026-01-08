<template>
  <a class="btn ghost" href="#" @click="handleDownload"
    ><v-icon name="co-print" /> Print / Save PDF</a
  >
</template>

<script setup>
const handleDownload = (e) => {
  e.preventDefault();
  window.print();
  return false;
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 8px 12px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 700;
  color: white;
  background: var(--accent);
  border: 1px solid rgba(0, 160, 130, 0.12);
}
</style>
