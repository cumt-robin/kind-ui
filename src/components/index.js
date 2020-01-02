import Vue from "vue";
import Row from "./row";
import Col from "./col";
import Button from "./button";
import Icon from "./icon";

const components = [
    Row,
    Col,
    Button,
    Icon
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
    Button,
    Icon
}