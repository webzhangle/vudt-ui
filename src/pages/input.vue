<template>
    <div class="input">
        <dt-input></dt-input>
        <dt-input borderRadius="6" />
        <dt-input borderRadius="6" disabled/>
        <dt-input isSearch />
        <dt-input isClear @input="input"/>
        <dt-input isSearch isClear borderRadius="6" />

        <dt-input isSearch isClear borderRadius="6" height="70"/>
    </div>
</template>
<script>
import Vue from 'vue'
import { input } from '@/components/index';
Vue.use(input)
export default {
    methods: {
        input (val) {
            console.log(val)
        }
    }
}
</script>
<style lang="less" scoped>
    .input {
        background: #333;
        padding: 30px;
        box-sizing: border-box;
        .dt-input {
            margin-bottom: 15px;
        }
    }
</style>
