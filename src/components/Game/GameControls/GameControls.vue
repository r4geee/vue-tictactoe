<template>
  <div class="col-xs-12">
    <h1 class="winner" v-if="!!winner">Player {{ winner }} has won!</h1>
    <h1 v-else :style="{color: turn === 1 ? 'red' : 'blue' }">Player {{ turn }} turn</h1>
    <form class="form-horizontal">
      <div class="form-group">
        <label class="control-label col-xs-2" for="size">Size:</label>
        <div class="col-xs-8">
          <input type="text" class="form-control" id="size" placeholder="Grid size" v-model="size">
        </div>
        <button class="btn btn-primary" type="button" @click="reset">Reset</button>
      </div>
    </form>
  </div>
</template>
<script>

import { RESET, UPDATE_SIZE } from '../../../store/actions.type';

export default {
  computed: {
    winner() {
      return this.$store.getters.winner;
    },
    turn() {
      return this.$store.getters.turn;
    },
    size: {
      get() {
        return this.$store.getters.size;
      },
      set(value) {
        this.$store.dispatch(UPDATE_SIZE, value);
      },
    },
  },
  methods: {
    reset() {
      this.$store.dispatch(RESET);
    },
  },
};
</script>
<style lang="scss">
  .winner {
    color: green;
  }
</style>
