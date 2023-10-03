import Vue from 'vue'
import App from './App.vue'
import StudentTable from './components/StudentTable.vue'
import Navbar from './components/Navbar.vue'

Vue.config.productionTip = false

Vue.component("app-student-table",StudentTable);
Vue.component("app-navbar",Navbar);

new Vue({
  render: h => h(App),
}).$mount('#app')
