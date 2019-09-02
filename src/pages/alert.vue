<template>
    <div>
        <dt-alert :show1 = "show1" title="信息" content="消息已成功发送" @cancel="cancel" number="2" @confirm="confirm" />
        <button @click="qwe">点击触发</button>
    </div>
</template>
<script>
import Vue from 'vue'
import dtAlert from '@/components/dtAlert';
import $ from '@/components/vue.js';
Vue.prototype.$alert = $.dtAlert

export default {
    components: {
        dtAlert
    },
    data () {
        return {
            show1: true
        }
    },
    methods: {
        confirm () {
            console.log(1)
        },
        cancel () {
            console.log(2)
        },
        qwe () {
            this.$alert({
                title:'提示信息'
            })
        }
    }
}
</script>
<style lang="less" scoped>

</style>
