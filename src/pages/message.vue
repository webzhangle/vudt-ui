<template>
    <div>
        <dt-message :show1 = "show1" title="信息" content="消息已成功发送" @cancel="cancel" @confirm="confirm" />
        <dt-button reverse @click.native="message1">alert按钮</dt-button>
        <dt-button reverse @click.native="message2">confirm 提示框</dt-button>
        <dt-button reverse @click.native="message3">prompt 提示框</dt-button>
    </div>
</template>
<script>
import Vue from 'vue'
import {button,message} from '@/components/index';
Vue.use(button)
Vue.use(message)
export default {
    data () {
        return {
            show1: false
        }
    },
    methods: {
        confirm () {
        },
        cancel () {
            console.log(2)
        },
        message1 () {
            this.$message({
                title:'提示信息',
                messageType: 1
            })
        },
        message2 () {
            this.$message({
                title:'提示信息',
                messageType: 2
            })
        },
        message3 () {
            this.$message({
                title:'提示信息',
                messageType: 3,
            }).then((val)=>{
                console.log(val)
            }).catch((val)=>{
                console.log(val)
            })
        }
    }
}
</script>
<style lang="less" scoped>

</style>
