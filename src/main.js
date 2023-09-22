import { createApp } from "vue";
import App from "./App.vue";
import Spring from "./components/learns/spring/Spring.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from './plugins/font-awesome'

const app1 = createApp(App)
app1.use(router)
app1.use(store)
app1.component("font-awesome-icon", FontAwesomeIcon)
app1.mount("#app");

const app2 = createApp(Spring)
app2.use(router)
app2.use(store)
app2.component("font-awesome-icon", FontAwesomeIcon)
app2.mount("#spring");