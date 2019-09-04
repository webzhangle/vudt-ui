<template>
    <div class="dt-header">
        <div class="dt-header-left" v-if="!leftHide" @click="left">
            <a class="dt-header-back" v-if="leftText.length != 0">{{leftText}}</a>
            <div class="left-arrow"></div>
        </div>
        <h1 class="dt-header-title">{{ title }}</h1>
        <div class="dt-header-right" @click="right">
            <a class="dt-header-more">
                <slot></slot>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name : 'dt-header',
    props: {
        title:{
            type : String,
            default: '标题'
        },
        leftText:{
            type : String,
            default: ''
        },
        leftHide: {
            type : Boolean,
            default: false
        }
    },
    data () {
        return {
            
        }
    },
    mounted () {

    },
    methods: {
        left () {
            if (this.$parent.leftClick) {
                this.$parent.leftClick()
            } else {
                this.$router.go(-1)
            }
            
            
            
        },
        right () {
            this.$emit('rightClick')
        }
    }
    
}
</script>
<style lang="less" scoped>
@import url('./dtHeader.less');
</style>
