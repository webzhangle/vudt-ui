<template>
    <div>
        <dt-tab>
            <dt-tab-item selected @on-item-click="onItemClick">已发货</dt-tab-item>
            <dt-tab-item @on-item-click="onItemClick">未发货</dt-tab-item>
            <dt-tab-item @on-item-click="onItemClick">全部订单</dt-tab-item>
        </dt-tab>
        <dt-tab>
            <dt-tab-item v-for="n in 8" :key="n" :selected="n===1">已发货{{ n }}</dt-tab-item>
        </dt-tab>
    </div>
</template>
<script>
import Vue from 'vue'
import { tab,tabItem } from '@/components/index';
Vue.use(tab)
Vue.use(tabItem)
export default {
    
}
</script>