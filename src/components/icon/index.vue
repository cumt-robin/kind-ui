<template>
    <i
        class="iconfont"
        :style="{'fontSize': `${size}px`, 'color': color}"
        :class="icon"
        :title="title"
        @click="trigger('click')"
    >
        <slot />
    </i>
</template>

<script>
export default {
    name: 'KIcon',
    props: {
        icon: {
            type: String,
            required: true
        },
        size: {
            type: Number
        },
        color: {
            type: String
        },
        title: {
            type: String
        }
    },
    methods: {
        trigger(eventName) {
            this.$emit(eventName);
        }
    }
}
</script>
