<template>
    <div>
        <dt-radio :value="item.name" v-for="(item,index) in list" :key="index" @getVal="getVal" :checked="val==item.name"/>
        {{val}}
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
                    name : '123'
                },
                {
                    name : '456'
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

