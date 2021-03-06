// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import bCard from 'bootstrap-vue/es/components/card/card';
import App from './App'
import router from './router'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(BootstrapVue);
Vue.component('b-card', bCard);


Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDO_G1jGRzjqWsq35K5ldUhc9cFP9n9CTI",
    libraries: "places" // necessary for places input
  }
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
