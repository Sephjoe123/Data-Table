import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons"; 
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons"; 

import { faEllipsisV } from "@fortawesome/free-solid-svg-icons"; 
import { faFilter } from "@fortawesome/free-solid-svg-icons";

library.add(faCircleChevronDown,faCircleChevronUp,faEllipsisV, faFilter);

const app = createApp(App);

const pinia = createPinia();

app.use(pinia);
app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
