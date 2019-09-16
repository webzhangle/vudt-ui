<template>
    <div class="container">
        <dt-annotation text='报价时默认投保人信息同车主'></dt-annotation>
        <dt-annotation type='tip' backgroundColor text='报价时默认投保人信息同车主'></dt-annotation>
        <dt-annotation type='warn' text='报价时默认投保人信息同车主'></dt-annotation>
        <dt-annotation type='warn' backgroundColor text='报价时默认投保人信息同车主'></dt-annotation>
    </div>
</template>
<script>
import Vue from 'vue'
import { annotation } from '@/components/index';
Vue.use(annotation)
export default {
    data () {
        return {
            
        }
    }
}
</script>
<style lang="less" scoped>
.container {
    padding:30px;
    .dt-annotation {
        margin-bottom: 15px;
    }
}
</style>
