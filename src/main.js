
import Vue from "vue"
import App from "./App"
import router from "./router";
import KindUI from "./components"
import "./components/styles/index.scss"

Vue.use(KindUI)

new Vue({
    el: "#app",
    router,
    render: h => h(App)
})
