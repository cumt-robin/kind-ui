<template>
    <section>
        <k-button @click="showDialog">显示</k-button>
        <k-button @click="hideDialog">隐藏</k-button>

        <k-dialog title="测试对话框" :visible.sync="isVisible">
            测试下
        </k-dialog>
    </section>
</template>

<script>
export default {
    data() {
        return {
            isVisible: true
        }
    },
    mounted() {
        
    },
    methods: {
        showDialog() {
            this.isVisible = true
        },
        hideDialog() {
            this.isVisible = false;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
