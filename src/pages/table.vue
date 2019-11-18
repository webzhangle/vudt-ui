<template>
    <div class="container">
        <h2>不可滚动的table</h2> 
        <dt-table :dataList="dataList1"></dt-table>
        <h2>可以滚动的table</h2>
        <dt-table :dataList="dataList2" scroll></dt-table>
    </div>
</template>
<script>
import Vue from 'vue'
import { table } from '@/components/index';
Vue.use(table)
export default {
    data () {
        return {
            dataList1: {
                head : ['标题','标题','标题'],
                content : [
                    {
                        title : '标题',
                        content : ['内容','内容','内容']
                    },
                    {
                        title : '标题',
                        content : ['内容','内容','内容']
                    },
                    {
                        title : '标题',
                        content : ['内容','内容','内容']
                    }
                ]
            },
            dataList2: {
                head : ['标题','标题','标题','标题'],
                content : [
                    {
                        title : '标题',
                        content : ['内容','内容','内容','内容1']
                    },
                    {
                        title : '标题',
                        content : ['内容','内容','内容','内容']
                    },
                    {
                        title : '标题',
                        content : ['内容','内容','内容','内容']
                    }
                ]
            }
        }
    }
}
</script>
<style lang="less" scoped>

.container {
    height: 100%;
    background-color: rgba(255, 0, 0, 0.3);
    padding: 15px;
    h2 {
        height: 50px;
        line-height: 50px;
        text-align: center
    }
}
</style>
