<template>
    <div>
        <dt-switch @checked="checked" @unChecked="unChecked"></dt-switch>
    </div>
</template>
<script>
import Vue from 'vue'
import { Switch } from '@/components/index';
Vue.use(Switch)
export default {
    methods : {
        checked () {
            console.log('我被选中了')
        },
        unChecked () {
            console.log('我meiyou 被选中了')
        }
    }
}
</script>
<style lang="less" scoped>
.dt-btn {margin: 15px 0}
</style>

