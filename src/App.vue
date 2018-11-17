<template>
  <div id="app">
    <h1>Tic tac toe</h1>
    <game />
  </div>
</template>

<script>
import Game from './components/Game/Game';

export default {
  name: 'app',
  components: {
    Game,
  },
};
</script>

<style lang="scss">
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
  }
</style>
