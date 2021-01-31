require('./bootstrap');

window.Vue = require('vue');

Vue.component('app-component', require('./components/App.vue').default);
import router from './Route'

const app = new Vue({
    router
}).$mount('#app')
