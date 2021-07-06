<template>
    <transition name="dialog-fade">
        <div class="k-dialog__wrapper" v-show="visible">
            <div class="k-dialog">
                <header class="k-dialog__header">
                    <span class="k-dialog__title">{{ title }}</span>
                    <k-icon class="k-dialog__close" icon="close" @click="handleClose"></k-icon>
                </header>
                <main class="k-dialog__body">
                    <slot></slot>
                </main>
                <div class="k-dialog__footer" v-if="$slots.footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import popupManager from "../utils/popup-manager";
import KIcon from "../icon/index.vue";
export default {
    name: 'KDialog',
    components: {
        KIcon
    },
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        title: String
    },
    data() {
        return {
        }
    },
    watch: {
        visible(val) {
            if (val) {
                this.open()
            } else {

            }
        }
    },
    mounted() {
        if (this.visible) {
            this.$nextTick(() => {
                this.open()
            })
        }
    },
    methods: {
        open() {
            popupManager.openModal();
            this.$el.style.zIndex = popupManager.generateZIndex();
            document.body.appendChild(this.$el);
        },
        handleClose() {
            popupManager.closeModal();
            this.$emit('update:visible', false)
        }
    }
}
</script>
