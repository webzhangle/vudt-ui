<template>
    <div>
        <dt-dialog :show1 = "show1" title="信息" content="消息已成功发送" @cancel="cancel" number="1" @confirm="confirm" />
        <button @click="qwe">点击触发</button>
    </div>
</template>
<script>
import Vue from 'vue'
import dtDialog from '@/components/dtDialog';
import $ from '@/components/vue.js';
Vue.prototype.$alert = $.dtAlert

export default {
    components: {
        dtDialog
    },
    data () {
        return {
            show1: false
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
            this.$alert()
        }
    }
}
</script>
<style lang="less" scoped>

</style>
