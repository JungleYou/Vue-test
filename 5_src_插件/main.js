import Vue from "vue";
// @ts-ignore
import App from "./App.vue";

//引入插件
import plugins from "./plugins";
Vue.use(plugins);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
