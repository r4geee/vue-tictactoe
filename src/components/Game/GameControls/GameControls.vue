<template>
  <h1 class="winner" v-if="!!winner">Player {{ winner }} has won!</h1>
  <h1 v-else :style="{color: turn === 1 ? 'red' : 'blue' }">Player {{ turn }} turn</h1>
</template>
<script>
export default {
  computed: {
    winner() {
      return this.$store.getters.winner;
    },
    turn() {
      return this.$store.getters.turn;
    },
  },
};
</script>
<style lang="scss">
  .winner {
    color: green;
  }
</style>
