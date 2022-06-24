import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import svgIcon from "@/icons";
import Vant from "@/plugins/vant";
import "vant/lib/index.css";
import "@/utils/rem";
createApp(App)
    .use(store)
    .use(router)
    .use(Vant)
    .component("svg-icon", svgIcon)
    .mount("#app");
