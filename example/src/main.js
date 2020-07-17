import Vue from "vue";
import App from "./App.vue";
import VueSkycons from "vue-skycons";

Vue.config.productionTip = false;

Vue.use(VueSkycons);

new Vue({
  render: h => h(App)
}).$mount("#app");
