require('./skycons')

for (var i = iconList.length; i--; )
  icons.set(list[i], list[i]);

icons.play();

module.exports.install = function (Vue, options) {

  var skycons = new Skycons({ color: options.color || 'black' });

  Vue.component('skycon', {
    template: '<canvas ref="canvas" :width="width" :height="height"></canvas>',
    props: {
      width: {
        type: Number,
        default: 128
      },
  
      height: {
        type: Number,
        default: 128
      },

      night: {
        type: Boolean,
        default: false
      },

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
      skycons.set(this.$refs.canvas, Skycons[this.getType()]);
    },
    computed: {
      type() {
        if(this.clear) return 'CLEAR' + (this.night ? '_NIGHT' : '_DAY')
        if(this.partlyCloudy) return 'PARTLY_CLOUDY' + (this.night ? '_NIGHT' : '_DAY')
        if(this.fog) return 'FOG';
        if(this.wind) return 'WIND';
        if(this.snow) return 'SNOW';
        if(this.sleet) return 'SLEET';
        if(this.rain) return 'RAIN';
        if(this.cloudy) return 'CLOUDY';
      }
    }
  })

  skycons.play()
}
