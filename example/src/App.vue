<template>
  <div id="app">
    <div>
      <!-- General usage -->
      <h1>All Icons</h1>
      <skycon condition="clear-day" color="#ff9e80" />
      <skycon condition="clear-night" color="#1e88e5" />
      <skycon condition="partly-cloudy-day" color="#43a047" />
      <skycon condition="partly-cloudy-night" color="#607d8b" />
      <skycon condition="cloudy" color="#ffc107" />
      <skycon condition="rain" color="#4db6ac" />
      <skycon condition="sleet" color="#8c9eff" />
      <skycon condition="snow" color="#ff9e80" />
      <skycon condition="wind" color="#f48fb1" />
      <skycon condition="fog" color="#e53935" />

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
import { Skycon } from "vue-skycons";

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
