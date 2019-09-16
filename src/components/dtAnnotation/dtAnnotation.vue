<template>
    <div :class="[dtAnnotation, datetype]" :style="{background:background}">
        <svg-icon :icon-class="type"></svg-icon>
        <p>{{text}}</p>
    </div>
</template>
<script>
export default {
    props : {
        type: {
            type: String,
            default: 'tip'
        },
        text: String,
        backgroundColor: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            background: this.backgroundColor ? this.type === 'tip' ? 'rgb(243, 152, 0,0.3)' : 'rgb(255, 64, 64,0.3)' : 'rgb(255, 255, 255)',
            dtAnnotation: 'dt-annotation',
            datetype: this.type
        }
    },
    created () {
   
    }
}
</script>
<style lang="less" scoped>
@import url('./dtAnnotation.less');
</style>
