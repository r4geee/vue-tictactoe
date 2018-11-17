<template>
  <div class="game-grid">
    <div class="game-grid-container">
      <div class="game-grid-row" v-for="y in size" :key="y">
        <game-cell v-for="x in size" :x="x" :y="y" :key="x"/>
      </div>
    </div>
  </div>
</template>
<script>
import _ from 'lodash';

import GameCell from './GameCell/GameCell';

export default {
  components: {
    GameCell,
  },
  computed: {
    size() {
      return _.range(this.$store.getters.size);
    },
  },
};
</script>
<style lang="scss">
  .game-grid {
    display: flex;
    justify-content: center;
    align-items: center;
    &-container {
      border: 2px solid grey;
      border-radius: 5px;
    }
    &-row {
      display: flex;
    }
  }
</style>
