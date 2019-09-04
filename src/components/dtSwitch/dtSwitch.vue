<template>
    <div class="" data-control="BOX" id="Box_points_switch">
        <label>
            <input class="mui-switch mui-switch-anim" type="checkbox" id="switch" @change="switchChange($event)">
        </label>
    </div>
</template>
<script>
export default {
    name : 'dt-swich',
    mounted () {

    },
    methods: {
        switchChange (e) {
            var switchDom = document.getElementById('switch');
            if (switchDom.checked) {
                this.$emit('checked')
            } else {
                this.$emit('unChecked')
            }
        }
    }
    
}
</script>

<style lang="less" scoped>
@import url('./dtSwitch.less');
</style>
