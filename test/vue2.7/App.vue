<template>
  <div id="demo">
    <div>
      <!-- General usage -->
      <h1>All Icons</h1>
      <Skycon :condition="condition" :color="color" title="clear-night" />
      <Skycon condition="clear-night" color="#1e88e5" title="clear-night" />
      <Skycon condition="partly-cloudy-day" color="#43a047" title="partly-cloudy-day" />
      <Skycon condition="partly-cloudy-night" color="#607d8b" title="partly-cloudy-night" />
      <Skycon condition="cloudy" color="#ffc107" title="cloudy" />
      <Skycon condition="rain" color="#4db6ac" title="rain" />
      <Skycon condition="sleet" color="#8c9eff" title="sleet" />
      <Skycon condition="snow" color="#ff9e80" title="snow" />
      <Skycon condition="wind" color="#f48fb1" title="wind" />
      <Skycon condition="fog" color="#e53935" title="fog" />

      <hr />

      <!-- Width and height -->
      <h2>Custom size and color</h2>
      <Skycon condition="rain" size="128" color="orangered" />

      <hr />

      <!-- Animation Speed -->
      <h2>Speed control</h2>
      <Skycon condition="wind" color="#ff9e80" speed="0.5" title="half" />
      <Skycon condition="wind" color="#f48fb1" speed="1" title="normal" />
      <Skycon condition="wind" color="#e53935" speed="2" title="twice" />

      <hr />

      <!-- Paused -->
      <h2>Manual control</h2>
      <Skycon condition="snow" paused @load="onLoad" />
    </div>
  </div>
</template>

<script setup>
import Skycon from "../../src/modules/index";
import { ref } from 'vue'

const color = ref('#ff9e80')
const condition = ref('clear-day')

const onLoad = (player) => {
  setInterval(() => {
    if (player.paused) {
      player.play();
    } else {
      player.pause();
    }
  }, 1000);
}

setTimeout(() => {
  color.value = 'red'
  condition.value = 'clear-night'
}, 2000)
</script>

<style>
#demo {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  align-items: center;
  justify-content: center;
}

hr {
  margin: 30px;
}
</style>
