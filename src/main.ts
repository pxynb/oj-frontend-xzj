import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
import "bytemd/dist/index.css";
import "@/utils/requestInterceptor";

createApp(App).use(store).use(router).use(ArcoVue).mount("#app");
