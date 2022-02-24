import { createApp } from 'vue';
import { Quasar } from 'quasar';
import router from './router';
import store from './store';

import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';

import App from './App.vue';

// createApp(App).mount('#app')

const myApp = createApp(App);

myApp.use(router);
myApp.use(store);

myApp.use(Quasar, {
  plugins: {}
});
myApp.mount('#app');
