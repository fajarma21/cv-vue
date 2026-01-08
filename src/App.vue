<template>
  <div class="container" v-if="allAvailable">
    <Header :profile="profile" />
    <div class="summary">{{ profile.summary }}</div>
    <KeySkill
      v-if="profile.skills && profile.skills.length"
      :skills="profile.skills"
    />
    <Experience :list="experience" />
    <Education :list="education" />
  </div>
  <div class="no-print btnContainer" v-if="allAvailable">
    <PrintBtn />
  </div>
  <div class="loader no-print" v-else>
    <v-icon name="pr-spinner" animation="spin" scale="1.5" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { collection, getDocs, query } from 'firebase/firestore/lite';

import db from './firebase';

import Education from './components/Education.vue';
import Experience from './components/Experience.vue';
import Header from './components/Header.vue';
import KeySkill from './components/KeySkill.vue';
import PrintBtn from './components/PrintBtn.vue';

const profile = ref(null);
const education = ref(null);
const experience = ref(null);

const allAvailable = profile && education && experience;

const fetchData = async (collectionName, orderBy) => {
  const dataRef = collection(db, collectionName);
  const queryArgs = [dataRef];

  if (orderBy) queryArgs.push(firestoreOrderBy(orderBy[0], orderBy[1]));

  const q = query(...queryArgs);
  const querySnapshot = await getDocs(q);
  const dataDB = querySnapshot.docs.map((doc) => ({
    autoId: doc.id,
    ...doc.data(),
  }));
  return dataDB;
};

onMounted(async () => {
  const profileData = await fetchData('profile');
  if (profileData && profileData.length > 0) profile.value = profileData[0];

  const educationData = await fetchData('education');
  if (educationData && educationData.length > 0)
    education.value = educationData;

  const experienceData = await fetchData('experience');
  if (experienceData && experienceData.length > 0)
    experience.value = experienceData;
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: var(--max-width);
  background: var(--card);
  border-radius: 14px;
  box-shadow: 0 14px 40px rgba(7, 24, 18, 0.06);
  padding: 26px;
  display: flex;
  flex-direction: column;
  gap: var(--gap);

  @media print {
    box-shadow: none;
    border-radius: 0;
    padding: 0;
  }
}

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  color: var(--accent);
}

.summary {
  background: linear-gradient(90deg, rgba(0, 160, 130, 0.04), transparent);
  padding: 12px;
  border-radius: 10px;
  color: var(--muted);
  font-size: 14px;
}

.btnContainer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 32px;
}
</style>
