<template>
  <div class="container" style="margin-top: 50px">
    <div class="row">
      <div class="col-xs-12 col-md-6">
        <game-grid/>
      </div>
      <div class="col-xs-12 col-md-6">
        <game-controls/>
      </div>
    </div>
  </div>
</template>
<script>
import GameGrid from './GameGrid/GameGrid';
import GameControls from './GameControls/GameControls';
import { RESET } from '../../store/actions.type';

export default {
  components: {
    GameGrid,
    GameControls,
  },
  created() {
    this.$store.dispatch(RESET);
  },
};
</script>
