<template>
    <div v-show="show">
        <transition name="dt-fade">
            <div class="dt-mask"></div>
        </transition>
        <div class="dt-dialog" style="">
            <div class="dt-dialog-hd">
                <strong class="dt-dialog-title">{{ title }}</strong>
            </div>
            <div class="dt-dialog-bd">
                <div>{{ content }}</div>
            </div>
            <div class="dt-dialog-ft">
                <button class="dt-dialog-btn dt-dialog-btn_primary" @click="confirm">确定</button>
                <p class="line" v-if="number >= '2'"></p>
                <button  v-if="number >= '2'" class="dt-dialog-btn dt-dialog-btn_primary" @click="cancel">取消</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'dt-alert',
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
        number : {
            type:String,
            default: '1',
        }
    },
    created () {

    },
    data () {
        return {
            show: this.show1
        }
    },
    methods: {
        confirm () {
            this.show = false
            this.$emit('confirm')
        },
        cancel () {
            this.show = false
            this.$emit('cancel')
        }
    }
}
</script>
<style lang="less" scoped>
@import url('./dtAlert');
</style>
