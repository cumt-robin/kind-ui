<script>
import PopperJs from "popper.js";
export default {
    name: 'KPopup',
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        visible(val) {
            if (val) {
                this.$nextTick(() => {
                    this.open();
                })
            }
        }
    },
    render(h) {
        
        const style = {};
        return h('div', {
            class: 'k-popup',
            style
        }, this.$slots.default)
    }
}
</script>
