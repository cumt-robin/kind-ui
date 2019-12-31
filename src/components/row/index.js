import Row from "./index.vue";

Row.install = function(Vue) {
    Vue.component(Row.name, Row);
};

export default Row
