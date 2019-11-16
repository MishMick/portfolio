import Vue from 'vue'

import VueShortkey from 'vue-shortkey'
import VueObserveVisibility from 'vue-observe-visibility'

import VueSolarized from '@/plugins/solarized'
import VueNavigation from '@/plugins/navigation'

import router from './router'
import store from './store'
import i18n from './i18n'

import App from './App.vue'

Vue.use(VueShortkey, {
  prevent: ['input', 'textarea']
})
Vue.use(VueObserveVisibility)

Vue.use(VueSolarized)
Vue.use(VueNavigation)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('div#app')
