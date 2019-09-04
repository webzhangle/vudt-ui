<template>
    <div class="dt-radio-container">
        <input class="dt-radio" name="radio" type="radio" ref="radio" @click="radioChange($event)">
        <svg-icon icon-class="radio" v-show="checkedBox"></svg-icon>
        <svg-icon icon-class="unradio" v-show="!checkedBox"></svg-icon>
    </div>
</template>
<script>

export default {
    name : 'dt-radio',
    props : {
        checked : {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            checkedBox: this.checked
        }
    },
    mounted () {
        if (this.checked) {
            this.$refs.radio.checked = true
        }
    },
    methods: {
        radioChange (e) {
            this.checkedBox = !this.checkedBox
        }
    }
    
}
</script>

<style lang="less" scoped>
@import url('./dtRadio.less');
</style>
