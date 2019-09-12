<template>
    <div class="switch">
        <ul>
            <li>
                <span>开关已经开启</span>
            </li>
            <li>
                <dt-switch @checked="checked" @unChecked="unChecked" checked></dt-switch>
            </li>
        </ul>
        <ul>
            <li>
                <span>开关未开启</span>
            </li>
            <li>
                <dt-switch @checked="checked" @unChecked="unChecked"></dt-switch>
            </li>
        </ul>
    </div>
</template>
<script>
import Vue from 'vue'
import { Switch } from '@/components/index';
Vue.use(Switch)
export default {
    methods : {
        checked (val) {
            console.log(val)
            alert('我已经开启了')
        },
        unChecked (val) {
            console.log(val)
            alert('我已经关闭了')
        }
    }
}
</script>
<style lang="less" scoped>
.switch {
    padding: 30px;
    ul {
        li {
            text-align: center;
            margin-bottom: 15px;
        }
    } 
}

</style>

