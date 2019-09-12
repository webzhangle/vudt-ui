<template>
    <div>
        <ul>
            <li v-show="index == 0">我是首页页面</li>
            <li v-show="index == 1">我是消息页面</li>
            <li v-show="index == 2">我是我的页面</li>
        </ul>
        <dt-tabbar :list="tabbarList" @tabbar="tabbar"></dt-tabbar>
    </div>
</template>
<script>
import Vue from 'vue'
import { tabBar } from '@/components/index';
Vue.use(tabBar)

export default {
    data () {
        return {
            tabbarList: [
                {
                    icon: 'index',
                    title: '首页',
                    selected: true,
                    badge: 8
                },
                {
                    icon: 'index',
                    title: '消息',
                    selected: false
                },
                {
                    icon: 'index',
                    title: '我的',
                    selected: false
                }
            ],
            index:0
        }
    },
    methods: {
        tabbar (val) {
            console.log(val)
            this.index = val
        }
    }
}
</script>
<style lang="less" scoped>
li {
    text-align: center;
}
</style>
