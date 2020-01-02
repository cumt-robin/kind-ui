<template>
    <div class="wrapper">
        <k-row :gutter="20">
            <k-col :span="6" :xs="12" :sm="8" :md="6">
                <div class="content">1</div>
            </k-col>
            <k-col :span="6" :xs="12" :sm="8" :md="6">
                <div class="content">2</div>
            </k-col>
            <k-col :span="6" :xs="12" :sm="8" :md="6">
                <div class="content">3</div>
            </k-col>
            <k-col :span="6" :xs="12" :sm="8" :md="6">
                <div class="content">4</div>
            </k-col>
        </k-row>

        <k-row :gutter="40">
            <k-col :span="6" :xs="12" :sm="8" :md="6">
                <div class="content">1</div>
            </k-col>
            <k-col :span="6" :xs="12" :sm="8" :md="6">
                <div class="content">2</div>
            </k-col>
            <k-col :span="6" :xs="12" :sm="8" :md="6">
                <div class="content">3</div>
            </k-col>
            <k-col :span="6" :xs="12" :sm="8" :md="6">
                <div class="content">4</div>
            </k-col>
        </k-row>

        <k-button>2</k-button>
    </div>
</template>

<script>
export default {
    name: 'Layout'
}
</script>

<style lang="scss" scoped>
.wrapper {
    padding: 0 20px;
}
.k-row+.k-row {
    margin-top: 20px;
}
.k-col {
    margin-bottom: 10px;
}
.content {
    background-color: #eee;
    padding: 8px 0px;
    text-align: center;
    border-radius: 4px;
}
</style>

