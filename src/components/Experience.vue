<template>
  <Section title="Experience">
    <div class="job" v-for="exp in list" :key="exp.autoId">
      <h4>
        {{ exp.title }} —
        <a :href="exp.url" target="_blank" v-if="exp.url">{{ exp.company }}</a>
        <span v-else>{{ exp.company }}</span>
      </h4>
      <div class="meta">
        {{ convertTime(exp.start) }} — {{ convertTime(exp.end) }}
      </div>
      <p>-- need to be completed --</p>
    </div>
  </Section>
</template>

<script setup>
import dayjs from 'dayjs';
import Section from './Section.vue';

const { list } = defineProps(['list']);

const convertTime = (date) => {
  if (date) {
    return dayjs(date.seconds * 1000).format('MMM YYYY');
  }

  return 'Present';
};
</script>

<style lang="scss" scoped>
.job {
  padding: 12px;
  border-radius: 10px;
  background: #fbfdfb;
  border: 1px solid #eef6f3;
  h4 {
    margin: 0;
    font-size: 15px;

    a {
      color: inherit;
      text-decoration: none;
    }
  }
  p {
    margin: 8px 0 0;
    color: var(--muted);
    line-height: 1.5;
  }
}
.meta {
  font-size: 13px;
  color: var(--muted);
  margin-top: 6px;
}
</style>
