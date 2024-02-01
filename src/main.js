
import App from './App.vue';
import store from './functions/store.js';
import router from './functions/router.js';
import { createApp } from 'vue';

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
