<template>
    <div>
        <dt-header title = "我是标题" leftText="返回" @leftClick="leftClick"/>
        
        <dt-header title = "我是标题" leftText="" leftHide/>

        <dt-header @rightClick="rightClick">
            <svg-icon icon-class="more"></svg-icon>
        </dt-header>
    </div>
    
</template>
<script>
import Vue from 'vue'
import {header} from '@/components/index';
Vue.use(header)
export default {
    methods: {
        leftClick () {
           console.log('点击了左侧返回箭头')
        },
        rightClick () {
            alert('点击了右侧图标')
        }
    }
}
</script>
<style lang="less" scoped>
.dt-header {margin-bottom: 15px;}
</style>
