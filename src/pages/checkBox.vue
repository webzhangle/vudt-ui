<template>
    <div class="checkBox">
        <p>你可以选择下面的水果哦！！！</p> 
        <ul>
            <li v-for="(item,index) in list" :key="index"> 
                <span>{{ item.name }}</span> 
                <dt-checkBox :checked="item.checked" @checkedBoxFun="checkedBoxFun($event,index)"/>
            </li>
        </ul>
        {{val}}
    </div>
</template>
<script>
import Vue from 'vue'
import { checkBox } from '@/components/index';
Vue.use(checkBox)
export default {
    data () {
        return {
            list : [
                {
                    name: '苹果',
                    checked: false
                },
                {
                    name: '香蕉',
                    checked: false
                },
                {
                    name: '鸭梨',
                    checked: true
                },
                {
                    name: '芒果',
                    checked: false
                }
            ],
            val: []
        }
    },
    methods: {
        checkedBoxFun (val,index) {
            this.$set(this.list[index],'checked',val)
            this.val = this.list.map((item,index)=>{
                if (item.checked == true) {
                    return item.name
                } else {
                    return ''
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
    .checkBox {
        padding: 30px;
        ul {
            width: 100px;
            margin: 100px auto;
            li {
                display: flex;
                align-items: center;
                margin-bottom: 15px;
                span {
                    margin-right: 10px;
                }
            }
        }
    }
</style>

