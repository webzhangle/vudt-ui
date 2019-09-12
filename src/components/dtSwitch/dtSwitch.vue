<template>
    <div class="" data-control="BOX" id="Box_points_switch">
        <label>
            <input class="mui-switch mui-switch-anim switch" type="checkbox" ref="switch" :checked="checked" @change="switchChange($event)">
        </label>
    </div>
</template>
<script>
export default {
    name : 'dt-swich',
    props: {
        checked : {
            type : Boolean,
            default: false
        }
    },
    mounted () {

    },
    methods: {
        switchChange (e) {
            var switchDom = this.$refs.switch
            if (switchDom.checked) {
                this.$emit('checked',switchDom.checked)
            } else {
                this.$emit('unChecked',switchDom.checked)
            }
        }
    }
    
}
</script>

<style lang="less" scoped>
@import url('./dtSwitch.less');
</style>
