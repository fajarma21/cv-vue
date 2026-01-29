<template>
  <Section title="Experience">
    <div class="job" v-for="(exp, index) in list" :key="exp.autoId">
      <div class="head">
        <h4>
          {{ exp.title }} —
          <a :href="exp.url" target="_blank" v-if="exp.url">{{
            exp.company
          }}</a>
          <span v-else>{{ exp.company }}</span>
        </h4>
        <div class="meta">
          {{ convertTime(exp.start) }} — {{ convertTime(exp.end) }}
        </div>
      </div>
      <ul v-if="index < 3">
        <li v-for="job in exp.jobDesc" :key="job">{{ job }}</li>
        <li>
          <span>Stacks: </span><em>{{ exp.jobDescStacks }}</em
          >.
        </li>
        <li>
          <span>Tools: </span><em>{{ exp.jobDescTools }}</em
          >.
        </li>
      </ul>
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

  p {
    margin: 8px 0 0;
    color: var(--muted);
    line-height: 1.5;
  }
  ul {
    margin: 8px 0 0;
    padding-left: 24px;
    li {
      font-size: 14px;
      color: var(--muted);
      span {
        opacity: 0.7;
      }
    }
  }
}
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  h4 {
    margin: 0;

    a {
      color: inherit;
      text-decoration: none;
    }
  }
}
.meta {
  font-size: 14px;
  color: var(--muted);
}
</style>
