<template>
    <button
        :style="buttonStyle"
        class="dt-btn"
        :class="classes"
        :disabled="btnDisabled1"
        :type="actionType"
        @click="onClick">
        <i class="dt-loading" v-if="showLoading"></i>
        <slot>{{ text }}</slot>
    </button>
</template>
<script>
export default {
    name: 'dt-button',
    props: {
        type: {
            default:'default'
        },
        btnDisabled: {
            type: Boolean,
            default: false,
        },
        actionType: {
            type: String,
            default: 'button'
        },
        showLoading: {
            type: Boolean,
            default: false,
        },
        reverse: {
            type: Boolean,
            default: false,
        },
        mini : {
            type: Boolean,
            default: false,
        },
        middle : {
            type: Boolean,
            default: false,
        }
    },
    data () {
        return {
            text: '',
            btnDisabled1: false
        }
    },
    created () {
        this.showLoading ? this.btnDisabled1 = true : this.btnDisabled1 = false
    },
    computed: {
        buttonStyle () {
            
        },
        classes () {
            return [
                !this.reverse ? 'dt-btn_' + this.type : 'dt-reverse-btn_' + this.type,
                this.showLoading? 'dt-btn_loading' : '',
                this.mini? 'dt-btn_mini' : '',
                this.middle? 'dt-btn_middle' : ''
            ]
        }
    },
    methods: {
        onClick () {
            // alert(1)
            this.$emit('buttonClick')
        }
    }
}
</script>

<style lang="less" scoped>
@import url('./dtButton.less');
</style>
