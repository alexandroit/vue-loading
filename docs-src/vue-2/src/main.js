import Vue from 'vue';
import App from './App.vue';
import VueLoading from '@revivejs/vue-loading';
import './app.css';

Vue.use(VueLoading);

new Vue({
  render: (h) => h(App, { props: { vueLine: '2.7.16' } })
}).$mount('#app');
