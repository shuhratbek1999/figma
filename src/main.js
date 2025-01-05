import Antd, { Button, message } from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import './css/style.css';
import router from './router';
const app = createApp(App);
// app.component(Layout.name,Layout)
app.config.globalProperties.$message = message;
app.config.globalProperties.$buttons = Button;
const pinia = createPinia();
// app.use(Gauth,gAuthOptions)
app.use(router);
app.use(pinia);
app.use(Antd);
app.mount('#app');
