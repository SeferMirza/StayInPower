<script setup>
import Data from '@/story-test.json';
import { ref } from 'vue';
import ChoiceCard from './components/ChoiceCard.vue';

const currentScene = ref(Data.story);

console.log(currentScene.value);
function Hit(id) {
  console.log(id)
}
</script>

<template>
  <header>
    <div>
      States
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
        :stats="Data.components[card.id].stats"
        v-on:select="Hit(card.id)"
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
  justify-content: center;
  width: 100%;
  height: 100%;
}

header {
  width: 100%;
  background-color: aqua;
}

.events {
  width: 15%;
}
</style>
