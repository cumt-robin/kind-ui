import Vue from "vue";
import Row from "./row";
import Col from "./col";

const components = [
    Row,
    Col
]

const install = function(Vue) {
    components.forEach(item => {
        item.install(Vue)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    Row,
    Col,
}