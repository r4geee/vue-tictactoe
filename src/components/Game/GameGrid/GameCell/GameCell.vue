<template>
  <div class="game-cell" @click="clicked">
    <span class="value">{{ sign }}</span>
  </div>
</template>
<script>
import { UPDATE_MATRIX } from '../../../../store/actions.type';

export default {
  props: {
    x: {
      type: Number,
    },
    y: {
      type: Number,
    },
  },
  computed: {
    matrix() {
      return this.$store.getters.matrix;
    },
    turn() {
      return this.$store.getters.turn;
    },
    size() {
      return this.$store.getters.size;
    },
    value() {
      return this.matrix[this.x][this.y];
    },
    sign() {
      let result = '';
      if (this.value === 1) {
        result = 'X';
      } else if (this.value === 2) {
        result = 'O';
      }
      return result;
    },
    winner() {
      return this.$store.getters.winner;
    },
  },
  methods: {
    clicked() {
      if (this.value || this.winner) return;

      this.$store.dispatch(UPDATE_MATRIX,
        {
          x: this.x,
          y: this.y,
          value: this.turn,
        });
    },
  },
};
</script>
<style>
  .game-cell {
    width: 75px;
    height: 75px;
    border: 1px solid grey;
    cursor: pointer;
    line-height: 75px;
    font-size: 30px;
  }
</style>
