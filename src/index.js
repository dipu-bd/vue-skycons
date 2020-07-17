import SkyconComponent from "./Skycon.vue";

export const Skycon = SkyconComponent;

export default {
  install(Vue) {
    Vue.component("skycon", SkyconComponent);
  },
};
