<template>
    <div class="dt-input" :class="dtInputContainer" :style="{'height':height+'px'}">
        <svg-icon icon-class="search" v-if="isSearch" @click="search"></svg-icon>
        <input :type="type" :placeholder="placeholder" :class="dtclass" v-model="value" :disabled="disabled" @input="input"/>
        <svg-icon icon-class="clear" v-if="isClear" @click="clear"></svg-icon>
    </div>
</template>
<script>
export default {
    props: {
        height: {
            type: String,
        },
        type: {
            type: String,
            default: "text"
        },
        placeholder: {
            type: String,
            default: "请输入"
        },
        isSearch: {
            type: Boolean,
            default: false
        },
        isClear: {
            type: Boolean,
            default: false
        },
        borderRadius : {
            type: String,
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            value: ''
        }
    },
    computed: {
        dtclass () {
            return [
                this.isSearch ? 'margin-left' : '',
                this.isClear ? 'margin-right' : ''
            ] 
        },
        dtInputContainer () {
            return [
                this.borderRadius && this.borderRadius != "0" ? 'border-radius' : '',
                this.disabled ? 'disabled' : '',
            ] 
        }
    },
    methods : {
        clear () {
            this.value = ''
        },
        search () {

        },
        input () {
            this.$emit('input',this.value)
        }
    }
}
</script>
<style lang="less" scoped>
@import url('./dtInput.less');
</style>
