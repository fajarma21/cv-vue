<template>
  <Section title="Key Skills">
    <div class="skills">
      <div class="skill-tag" v-for="skill in skills" :key="skill">
        {{ skill }}
      </div>
    </div>
  </Section>
</template>

<script setup>
import Section from './Section.vue';

const { skills } = defineProps(['skills']);
</script>

<style lang="scss" scoped>
.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.skill-tag {
  padding: 6px 10px;
  border-radius: 999px;
  font-weight: 700;
  color: var(--accent-dark);
  border: 1px solid rgba(0, 160, 130, 0.5);
  font-size: 14px;
}
</style>
