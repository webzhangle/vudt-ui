<template>
    <div class="inputNumber">
        <dt-inputNumber :init="0" :max="10" text="数量"/>
        <dt-inputNumber :init="30" :min="20" @getValue="getValue" text="数量"/>
        <dt-inputNumber :init="8" :min="5" :max="10" text="数量"/>
    </div>
</template>
<script>
import Vue from 'vue'
import {inputNumber} from '@/components/index';
Vue.use(inputNumber)

export default {
    methods : {
        getValue (val) {
            console.log(val)
        }
    }
}
</script>
<style lang="less" scoped>
.inputNumber {
    padding: 30px;
    .dt-input-number {
        margin-bottom: 15px!important;
    }
}

</style>
