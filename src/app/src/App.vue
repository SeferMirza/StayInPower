<script setup>
import Data from '@/story-test.json';
import { ref } from 'vue';
import ChoiceCard from './components/ChoiceCard.vue';

const currentScene = ref(Data.story);
const hoveredSide = ref(null);
const sideIcons = {};

Object.keys(Data.sides).forEach(side => {
  sideIcons[side] = Data.sides[side].icon;
});

function hit(id) {
  console.log(id);
}
</script>

<template>
  <header>
    <div class="sides">
      <div
        v-for="{icon, name, acceptance} in Data.sides"
        class="side"
        :key="name"
        :side-name="name"
        @mouseenter="hoveredSide = name"
        @mouseleave="hoveredSide = null"
      >
        <div class="side-content">
          <font-awesome-icon :icon="`fa-solid ${icon}`" />
          <div class="progress-container">
            <div class="progress-bar" :style="{ width: acceptance + '%' }" />
          </div>
        </div>
        <div v-if="hoveredSide === name" class="side-name">{{ name }}</div>
      </div>
    </div>
  </header>

  <div class="content-block">
    <div class="cards">
      <ChoiceCard
        v-for="card in currentScene"
        v-bind:key="card.id"
        :name="Data.components[card.id].name"
        :image="Data.components[card.id].image"
        :detail="Data.components[card.id].detail"
        :sides="Data.components[card.id].sides"
        :sideIcons
        @click="hit(card.id)"
      />
    </div>
    <div class="events">
      right side events
    </div>
  </div>
</template>

<style scoped>
.content-block {
  width: 100%;
  height: 100%;
  align-content: center;
  display: flex;
  flex-direction: row;
}

.cards {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
}

header {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30px;
}

.events {
  width: 15%;
}

.sides {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  gap: 20px;
  width: 60%;
}

.side {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

.side-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 80%;
  gap: 10px;
}

.progress-container {
  width: 100%;
  height: 4px;
  background-color: #e0e0e0;
  border-radius: 2px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background-color: #007bff;
}

.side-name {
  height: 20%;
  font-weight: bold;
}
</style>
