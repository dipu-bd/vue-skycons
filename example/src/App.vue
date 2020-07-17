<template>
  <div id="app">
    <div>
      <!-- General usage -->
      <h1>All Icons</h1>
      <skycon condition="clear-day" />
      <skycon condition="clear-night" />
      <skycon condition="partly-cloudy-day" />
      <skycon condition="partly-cloudy-night" />
      <skycon condition="cloudy" />
      <skycon condition="rain" />
      <skycon condition="sleet" />
      <skycon condition="snow" />
      <skycon condition="wind" />
      <skycon condition="fog" />

      <hr />

      <!-- Width and height -->
      <h2>Custom size and color</h2>
      <skycon condition="rain" size="128" color="orangered" />

      <hr />

      <!-- Paused -->
      <h2>Manual control</h2>
      <skycon condition="snow" size="128" paused @load="onLoad" />
    </div>
  </div>
</template>

<script>
import Skycon from "vue-skycons/src/Skycon.vue";

export default {
  components: {
    Skycon
  },
  methods: {
    onLoad(player) {
      console.log("loaded");
      setInterval(() => {
        if (player.paused) {
          player.play();
        } else {
          player.pause();
        }
      }, 1000);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
hr {
  margin: 30px;
}
</style>
