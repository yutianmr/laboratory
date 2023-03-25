import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'vant/lib/index.css';
import './assets/iconfont/iconfont.css'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
// import 'swiper/swiper.scss'
Vue.use(iView);
if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/ssr')
  Vue.use(VueAwesomeSwiper)
}
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.config.productionTip = false

Vue.use(Vant);
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
