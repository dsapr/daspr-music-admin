import { createApp } from 'vue';
import { Quasar, Notify } from 'quasar';
import router from './router';
import store from './store';
import './permission'; // permission control

import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';

import App from './App.vue';

// createApp(App).mount('#app')

const myApp = createApp(App);

myApp.use(router);
myApp.use(store);

myApp.use(Quasar, {
  plugins: {
    Notify
  }
});
myApp.mount('#app');
