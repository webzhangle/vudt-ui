<template>
    <div class="dt-radio-container">
        <input class="dt-radio" name="radio" type="radio" @change="radioChange" :value="value">
        <svg-icon icon-class="radio" v-show="checked"></svg-icon>
        <svg-icon icon-class="unRadio" v-show="!checked"></svg-icon>
    </div>
</template>
<script>
export default {
    name : 'dt-radio',
    props : {
        checked : {
            type: Boolean,
            default: false,
        },
        value : {
            type: String,
            default: '',
        },
    },
    watch : {

    },
    data () {
        return {
            radioChecked: this.checked
        }
    },
    mounted () {

    },
    methods: {
        radioChange (e) {
            this.$emit('getVal',this.value)
        }
    }
    
}
</script>

<style lang="less" scoped>
@import url('./dtRadio.less');
</style>
