<script>
export default {
    name: 'KRow',
    props: {
        gutter: Number
    },
    render(h) {
        const style = {};
        if (this.gutter) {
            style.marginLeft = -this.gutter / 2 + 'px'
            style.marginRight = -this.gutter / 2 + 'px'
        }
        return h('div', {
            class: 'k-row',
            style
        }, this.$slots.default)
    }
}
</script>
