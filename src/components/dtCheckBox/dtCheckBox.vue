<template>
    <div class="dt-checkbox-container">
        <input class="dt-checkbox" type="checkbox" id="checkbox" ref="checkbox" @change="checkboxChange($event)">
        <svg-icon icon-class="checkBox" v-show="checkedBox"></svg-icon>
        <svg-icon icon-class="unCheckBox" v-show="!checkedBox"></svg-icon>
    </div>
</template>
<script>
export default {
    name : 'dt-checkBox',
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
            this.$refs.checkbox.checked = true
        }
    },
    methods: {
        checkboxChange (e) {
            this.checkedBox = this.$refs.checkbox.checked
            this.$emit('checkedBoxFun',this.checkedBox)
        }
    }
    
}
</script>

<style lang="less" scoped>
@import url('./dtCheckBox.less');
</style>
