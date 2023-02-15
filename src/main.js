import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.filter("tolow", function (val) {
  return val.toLowCase();
});
new Vue({
  render: (h) => h(App),
}).$mount("#app");
