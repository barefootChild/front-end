// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

Raven.config('https://f4dff36d48a54457917434b05f0c8123@sentry.io/1196764')
  .addPlugin(RavenVue, Vue)
  .install()

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
