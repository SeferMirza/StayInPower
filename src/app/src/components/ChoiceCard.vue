<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  name: String,
  type: String,
  image: String,
  detail: String,
  sides: Object,
  sideIcons: [Object],
});

const keySides = Object.keys(props.sides);
</script>

<template>
  <div
    class="card"
    :class="type"
  >
    <div class="name">{{ name }}</div>
    <div class="detail">{{ detail }}</div>
    <div class="sides">
      <div v-for="side in keySides" :key="side" class="side">
        <font-awesome-icon :icon="`fa-solid ${sideIcons[side]}`" />
        <font-awesome-icon v-if="sides[side] > 0" icon="fa-solid fa-up-long" />
        <font-awesome-icon v-else-if="sides[side] < 0" icon="fa-solid fa-down-long" />
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
  cursor: pointer;
  border-radius: 10px;
  position: relative;
}

.white {
  background-color: rgb(214, 214, 214);
  color: rgb(22, 22, 22);
}

.blue {
  background-color: rgb(0, 0, 255);
}

.purple {
  background-color: rgb(128, 0, 128);
}

.yellow {
  background-color: rgb(255, 255, 0);
}

.red {
  background-color: rgb(255, 0, 0);
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

.sides {
  height: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 10px;
  border-radius: 0 0 10px 10px;
}

.side {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
}
</style>
