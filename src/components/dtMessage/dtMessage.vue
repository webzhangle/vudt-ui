<template>
    <div>
        <div class="dt-mask" v-show="show"></div>
        <transition name="fade">
            <div class="dt-dialog" style="" v-show="show">
                <div class="dt-dialog-hd">
                    <strong class="dt-dialog-title">{{ title }}</strong>
                </div>
                <div class="dt-dialog-bd">
                    <div>{{ content }}</div>
                </div>
                <div class="dt-dialog-bd" v-if="messageType == '3'">
                    <div class="input">
                        <input type="text" placeholder="请输入" v-model="inputValue">
                    </div>
                </div>
                <div class="dt-dialog-ft">
                    <button  v-if="messageType >= '2'" class="dt-dialog-btn dt-dialog-btn_cancel" @click="cancel">取消</button>
                    <button class="dt-dialog-btn dt-dialog-btn_confirm" @click="confirm">确定</button>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    name : 'dt-message',
    props: {
        show1: {
            type:Boolean,
            default: true
        },
        title: {
            type:String,
            default:'信息'
        },
        content: {
            type:String,
            default:'你好'
        },
        messageType : {
            type:String,
            default: '1',
        }
    },
    created () {

    },
    data () {
        return {
            show: this.show1,
            inputValue: ''
        }
    },
    methods: {
        confirm () {
            this.show = false
            this.$emit('confirm',this.inputValue)
        },
        cancel () {
            this.show = false
            this.inputValue = ''
            this.$emit('cancel',this.inputValue)
        }
    }
}
</script>
<style lang="less" scoped>
@import url('./dtMessage.less');
</style>
