<template>
    <div class="dt-toast" v-show="show">
        <div class="dt-toast-content" :class="classs">
            <svg-icon :icon-class="type" v-if="type != ''"></svg-icon>
            <p>{{ text }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name : 'dt-toast',
    props: {
        text: {
            type: String,
            default: ''
        },
        duration: {
            type: String,
            default: '0'
        },
        type : {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            show: this.text.length == 0 ? false : true,
        }
    },
    computed : {
        classs () {
            return this.type != '' ? 'dt-toast-content-svg' : ''
        }
    },
    mounted () {
        if (this.duration != '0') {
            this.time = setTimeout(()=>{
                this.show = false
            },(parseInt(this.duration)*1000))
        }
    },
    beforeDestroy () {
        if (this.time) {
            clearTimeout(this.time)
        }
    }
}
</script>
<style lang="less" scoped>
@import url('./dtToast.less');
</style>

