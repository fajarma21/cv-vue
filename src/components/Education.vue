<template>
  <Section title="Education">
    <div class="container" v-for="edu in list" :key="edu.autoId">
      <h4>{{ edu.title }}</h4>
      <a class="text" :href="edu.url" target="_blank"
        >{{ edu.name }} · {{ edu.time }}</a
      >
      <div class="text">
        <strong>GPA: {{ edu.point }}</strong
        ><span> / {{ edu.pointScale }}</span>
      </div>
    </div>
  </Section>
</template>

<script setup>
import Section from './Section.vue';

const { list } = defineProps(['list']);
</script>

<style lang="scss" scoped>
.container {
  padding: 12px;
  border-radius: 10px;
  background: #fbfdfb;
  border: 1px solid #eef6f3;
  h4 {
    margin: 0;
  }
}

.text {
  font-size: 14px;
  color: var(--muted);
  margin-top: 6px;
  text-decoration: none;
  span {
    opacity: 0.7;
  }
}
</style>
