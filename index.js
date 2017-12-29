import Skycons from './skycons';
import SkyconComponent from './Skycon';

export default {
  install: function (Vue, options) {
    // initialize skycons
    var skycons = new Skycons(options || {});
    skycons.play();
  
    // register component
    Vue.prototype.$skycons = skycons;
    Vue.component('skycon', SkyconComponent)
  }
}
