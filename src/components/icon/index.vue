<template>
    <i
        :style="{'fontSize': `${size}px`, 'color': color}"
        :class="ICON_PREFIX + icon"
        :title="title"
        @click="trigger('click')"
    >
        <slot />
    </i>
</template>

<script>
import { ICON_PREFIX } from "../../../config/index";
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
    data() {
        return {
            ICON_PREFIX
        }
    },
    methods: {
        trigger(eventName) {
            this.$emit(eventName);
        }
    }
}
</script>
