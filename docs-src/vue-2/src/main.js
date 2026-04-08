import Vue from 'vue';
import App from './App.vue';
import VueLoading from '@stackline/vue-loading';
import './app.css';

Vue.use(VueLoading);

new Vue({
  render: (h) => h(App, { props: { vueLine: '2.0.0 -> 2.7.16' } })
}).$mount('#app');
