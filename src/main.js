import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

// createPinia(App).use(createPinia()).mount('#app')

// createApp(App).mount('#app')

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount('#app');
