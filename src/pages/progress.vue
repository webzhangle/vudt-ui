<template>
    <div class="container">
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
        this.time = setInterval(()=>{
            if (this.number == '100') {
                clearInterval(this.time)
            }
            this.number = (parseInt(this.number) + 1).toString()
        },100)
    }
}
</script>
<style lang="less" scoped>
.container {
    padding: 15px;
    .dt-progress {
        margin-bottom: 15px;
    }
}

</style>
