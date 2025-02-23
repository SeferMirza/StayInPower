<script setup>
import cardsData from '@/story-test.json';

console.log(cardsData);
</script>

<template>
  <header>
    <div>
      States
    </div>
  </header>

  <div class="content-block">
    <div class="cards">
      cards
    </div>
    <div>
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
}

header {
  width: 100%;
}
</style>
