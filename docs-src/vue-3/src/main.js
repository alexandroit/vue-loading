import { createApp } from 'vue';
import App from './App.vue';
import VueLoading from '@stackline/vue-loading';
import './app.css';

createApp(App, { vueLine: '3.0.0 -> 3.5.32' }).use(VueLoading).mount('#app');
