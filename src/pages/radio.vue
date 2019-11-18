<template>
    <div class="radio">
        <p>请选择一个你喜欢的水果！！！</p>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <label for="">{{ item.name }}</label>
                <dt-radio :value="item.name" @getVal="getVal" :checked="val==item.name"/>
            </li>
        </ul>
        
        <p>请选择的水果是 {{val}} ！</p>
    </div>
</template>
<script>
import Vue from 'vue'
import { radio } from '@/components/index';
Vue.use(radio)
export default {
    data () {
        return {
            list: [
                {
                    name : '苹果'
                },
                {
                    name : '香蕉'
                },
                {
                    name : '葡萄'
                }
            ],
            val : ''
        }
    },
    methods : {
        getVal (e) {
            this.val = e
            this.list = Object.assign({}, this.list);
            console.log(e)
        }
    }
}
</script>
<style lang="less" scoped>
.radio {
    padding: 30px;
    ul {
        li {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 15px;
            label {
                margin-right: 15px;
            }
        }
    }
    p {
        text-align: center;
        margin-bottom: 15px;
    }
}
    
</style>



