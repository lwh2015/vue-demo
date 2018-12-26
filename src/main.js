import "./registerServiceWorker";
import App from "./App.vue";
import Vue from "vue";
import router from "./router";
import store from "./store";
import Axios from "axios";
//ElementUI
import ElementUI from "element-ui";
import "../theme/index.css";
//动画库
import "animate.css";

Vue.use(ElementUI);
Vue.config.productionTip = false;
window.axios = Axios;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
