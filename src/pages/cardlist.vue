<template>
    <div class="card">
        <dt-card-list role="car" :dataList="dataList1"></dt-card-list>

        <dt-card-list role="person" :dataList="dataList2" open></dt-card-list>
    </div>
</template>
<script>
import Vue from 'vue'
import { cardlist } from '@/components/index';
Vue.use(cardlist)
export default {
    mounted () {
       
    },
    data () {
        return {
            dataList1 : {
                headerLeftIcon: 'Vehicleowner',
                title: '车辆信息',
                role: 'person',
                headerRightIcon: {
                    icon:'camera',
                    redicon: false
                },
                children: [
                    {
                        name: '车架号',
                        content: 'LSKG4AC14HA109834',
                        iconRight : {
                            icon : 'Framenumber',
                            redicon : false
                        }
                    },
                    {
                        name: '发动机号',
                        content: 'H1SJ1190232'
                    },
                    {
                        name: '车辆型号',
                        content: '一汽奥迪Q2L2018款1',
                        iconRight : {
                            icon : 'goback'
                        }
                    },
                    {
                        name: '注册日期',
                        content: '2018年04月11日',
                        type: 'register',
                        iconRight : {
                            icon : 'datetime'
                        }
                    },
                    {
                        name: '发证日期',
                        content: '2018年04月11日',
                        type: 'publish',
                        iconRight : {
                            icon : 'datetime'
                        }
                    },
                    {
                        name: '购车日期',
                        content: '请选择购车日期（非必填）',
                        type: 'shopCar',
                        iconRight : {
                            icon : 'datetime'
                        }
                    },
                ]
            },
            dataList2 : {
                headerLeftIcon: 'OwnerInformation',
                title: '车主信息',
                role: 'person',
                headerRightIcon: {
                    icon:'camera',
                    redicon: false
                },
                children: [
                    {
                        name: '姓名',
                        content: '李泽',
                        redicon: false
                    },
                    {
                        name: '证件类型',
                        content: '居民身份证',
                        type: 'doctype',
                        redicon: true
                    },
                    {
                        name: '证件号码',
                        content: '211322199006010325',
                        redicon: false
                    },
                ]
            }
        }
    }
}
</script>
<style lang="less" scoped>
.card {
    background: #000;
    padding: 30px;
    .dt-card-list {
        margin-bottom: 15px;
    }
}
</style>
