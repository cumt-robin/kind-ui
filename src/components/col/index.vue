<script>
const validator = function(value) {
    return value > 0 && value <= 24
}

export default {
    name: 'KCol',
    props: {
        span: {
            type: Number,
            default: 24,
            validator
        },
        xs: {
            type: Number,
            validator
        },
        sm: {
            type: Number,
            validator
        },
        md: {
            type: Number,
            validator
        },
        lg: {
            type: Number,
            validator
        },
        xl: {
            type: Number,
            validator
        }
    },
    render(h) {
        const style = {};
        const parent = this.$parent;
        if (parent.$options.name === 'KRow' && parent.gutter) {
            style.paddingLeft = parent.gutter / 2 + 'px'
            style.paddingRight = parent.gutter / 2 + 'px'
        }
        const classList = ['k-col'];
        classList.push(`k-col-${this.span}`);
        ['xs', 'sm', 'md', 'lg', 'xl'].forEach(prop => {
            if (this[prop]) {
                classList.push(`k-col-${prop}-${this[prop]}`)
            }
        });
        return h('div', {
            class: classList.join(' '),
            style
        }, this.$slots.default)
    }
}
</script>
