<template>
  <canvas :id="id" :width="width" :height="height"></canvas>
</template>

<script>
import Skycons from './skycons';

export default {
  props: {
    // Icon size
    width: {
      type: Number,
      default: 64
    },
    height: {
      type: Number,
      default: 64
    },

    // Weather condition
    condition: {
      type: String,
      default: null
    }
  },
  data: function() {
    return {
      id: 'canvas__' + Date.now().valueOf() + Math.floor(10000 * Math.random())
    };
  },
  mounted: function() {
    this.$skycons.set(this.id, Skycons[this.icon]);
  },
  computed: {
    icon: function() {
      if(!this.condition) return 'CLEAR_DAY';
      return this.condition.toUpperCase().replace(/-/g, '_');
    }
  }
}
</script>
