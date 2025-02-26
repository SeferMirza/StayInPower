<script setup>
import { defineProps } from 'vue';

defineProps({
  name: String,
  image: String,
  detail: String,
  stats: Object, // Örn: "stats": { "charisma": 3, "leadership": 1 }
});
</script>

<template>
  <div
    class="card"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="name">{{ name }}</div>
    <div class="detail">{{ detail }}</div>
    <div class="stats">
      <div v-if="stats.charisma" class="stat">
        <span class="stat-value">{{ stats.charisma }}</span>
      </div>
      <div v-if="stats.leadership" class="stat">
        <span class="stat-value">{{ stats.leadership }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 17%;
  height: 55%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  position: relative;
}

.name {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.detail {
  height: 30%;
  font-size: 16px;
  text-align: center;
  padding: 10px;
}

.stats {
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border-radius: 0 0 10px 10px;
}

.stat {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
</style>
