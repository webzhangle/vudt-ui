<template>
    <div>
        <dt-progress percentage = "40"/>
        <dt-progress :percentage = "number"/>
    </div>
</template>
<script>

import Vue from 'vue'
import {progress} from '@/components/index';
Vue.use(progress)
export default {
    data () {
        return {
            number: '50'
        }
    },
    mounted () {
        setInterval(()=>{
            this.number = (parseInt(this.number) + 1).toString()
        },10000)
    }
}
</script>
<style>
.dt-progress {
    margin-bottom: 15px;
}
</style>
