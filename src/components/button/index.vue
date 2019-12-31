<template>
    <button class="k-button" @click="handleClick">
        <span>
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
    name: 'KButton',
    data() {
        return {}
    },
    mounted() {
        
    },
    methods: {
        handleClick() {
            this.$emit('click')
        }
    }
}
</script>
