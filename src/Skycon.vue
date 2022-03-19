<template>
  <canvas :width="width" :height="height" :data-condition="condition"></canvas>
</template>

<script>
import Skycons from "./skycons";

function buildWrapper(skycons) {
  const wrapped = {};
  wrapped.paused = !skycons.interval;
  wrapped.play = () => {
    skycons.play();
    wrapped.paused = false;
  };
  wrapped.pause = () => {
    skycons.pause();
    wrapped.paused = true;
  };
  return wrapped;
}

export default {
  props: {
    // Weather condition
    condition: {
      type: String,
      required: true
    },

    // Icon size
    size: {
      type: [Number, String],
      default: 64
    },

    // Icon color
    color: {
      type: String,
      default: "black"
    },

    // Start with paused animation
    paused: {
      type: Boolean,
      default: false
    },

    // The animation speed
    speed: {
      type: [Number, String],
      default: 1
    }
  },
  computed: {
    width() {
      return "" + this.size;
    },
    height() {
      return "" + this.size;
    },
    icon() {
      return this.condition.toUpperCase().replace(/[\s.-]/g, "_");
    }
  },
  mounted() {
    const skycons = new Skycons({
      color: this.color,
      speed: this.speed
    });
    skycons.set(this.$el, Skycons[this.icon]);
    if (!this.paused) skycons.play();
    this.$emit("load", buildWrapper(skycons));
  }
};
</script>
