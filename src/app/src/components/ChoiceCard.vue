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
        <font-awesome-icon icon="fa-solid fa-star" />
        <font-awesome-icon v-if="stats.charisma > 0" icon="fa-solid fa-up-long" />
        <font-awesome-icon v-else-if="stats.charisma < 0" icon="fa-solid fa-down-long" />
      </div>
      <div v-if="stats.leadership" class="stat">
        <font-awesome-icon icon="fa-solid fa-person-military-pointing" />
        <font-awesome-icon v-if="stats.leadership > 0" icon="fa-solid fa-up-long" />
        <font-awesome-icon v-else-if="stats.leadership < 0" icon="fa-solid fa-down-long" />
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
  font-size: 34px;
  font-weight: bold;
  text-align: center;
}

.detail {
  height: 30%;
  font-size: 22px;
  text-align: center;
  padding: 10px;
}

.stats {
  height: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 10px;
  border-radius: 0 0 10px 10px;
}

.stat {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
}
</style>
