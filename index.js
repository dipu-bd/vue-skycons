module.exports.install = function (Vue, options) {
  // initialize skycons
  require('./skycons')
  var skycons = new Skycons({ color: options.color || 'black' });
  skycons.play();

  // register component
  Vue.component('skycon', {
    template: `<canvas ref="canvas" :width="width" :height="height"></canvas>`,
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

      // Day or night
      night: {
        type: Boolean,
        default: false
      },

      // Weather conditions
      clear: {
        type: Boolean,
        default: false
      },
      partlyCloudy: {
        type: Boolean,
        default: false
      },
      cloudy: {
        type: Boolean,
        default: false
      },
      rain: {
        type: Boolean,
        default: false
      },
      sleet: {
        type: Boolean,
        default: false
      },
      snow: {
        type: Boolean,
        default: false
      },
      wind: {
        type: Boolean,
        default: false
      },
      fog: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      skycons.set(this.$refs.canvas, Skycons[this.type]);
    },
    computed: {
      type() {
        if(this.clear) return 'CLEAR' + (this.night ? '_NIGHT' : '_DAY')
        if(this.partlyCloudy) return 'PARTLY_CLOUDY' + (this.night ? '_NIGHT' : '_DAY')
        if(this.cloudy) return 'CLOUDY';
        if(this.rain) return 'RAIN';
        if(this.sleet) return 'SLEET';
        if(this.snow) return 'SNOW';
        if(this.wind) return 'WIND';
        if(this.fog) return 'FOG';
      }
    }
  })
}
