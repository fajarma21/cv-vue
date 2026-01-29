<template>
  <header>
    <div class="photo" aria-hidden="true">
      <img
        :src="profile.photo"
        :alt="profile.name"
        width="104px"
        height="104px"
      />
    </div>
    <div class="title">
      <div class="name">
        <h1>
          {{ profile.name }}
        </h1>
      </div>
      <div class="role">{{ profile.role }}</div>
      <div class="info">
        <div class="infoCol">
          <v-icon name="co-gmail" scale="0.85" />
          <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
        </div>
        <div class="infoCol">
          <v-icon name="co-globe-alt" scale="0.85" />
          <a :href="`https://${profile.url}`" target="_blank">{{
            profile.url
          }}</a>
        </div>
        <div class="infoCol">
          <v-icon name="co-linkedin" scale="0.85" />
          <a :href="`https://${profile.linkedinUrl}`" target="_blank">{{
            profile.linkedinUrl
          }}</a>
        </div>
        <div class="infoCol">
          <v-icon name="co-location-pin" scale="0.85" />
          <a :href="profile.locationUrl" target="_blank">{{
            profile.location
          }}</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const { profile } = defineProps(['profile']);
</script>

<style lang="scss" scoped>
header {
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 18px;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.linkedin {
  position: absolute;
  top: 0;
  right: 0;
}

.photo {
  width: 108px;
  height: 108px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 800;
  font-size: 28px;
  background: linear-gradient(135deg, var(--accent), var(--accent-dark));
  box-shadow: 0 8px 20px rgba(0, 160, 130, 0.12);

  img {
    border-radius: 10px;
  }
}

.title {
  flex: 1;
}
.name {
  display: flex;
  align-items: center;
  gap: 4px;
  h1 {
    margin: 0;
    font-size: 22px;
    font-weight: 800;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
}
.role {
  color: var(--muted);
  font-size: 14px;
}

.info {
  display: flex;
  gap: 4px 12px;
  flex-wrap: wrap;
  margin-top: 6px;
  font-size: 14px;
  color: var(--muted);
  a {
    color: inherit;
    text-decoration: none;
  }
}

.infoCol {
  display: flex;
  align-items: center;
  gap: 4px;
  svg {
    opacity: 0.5;
  }
}
</style>
