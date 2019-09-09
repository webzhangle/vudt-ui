<template>
    <div class="dt-input-number">
        <p>{{text}}</p>
        <ul>
            <li :class="number <= min ? 'reduce':''">
                <svg-icon icon-class="reduce" @click="reduce"></svg-icon>
            </li>
            <li>
                <p>{{ number }}</p>
            </li>
            <li :class="number >= max ? 'add':''">
                <svg-icon icon-class="add" @click="add"></svg-icon>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'dtInputNumber',
    props: {
        init: {
            type : Number,
            default: 0
        },
        min: {
            type : Number,
            default: -Infinity
        },
        max: {
            type : Number,
            default: Infinity
        },
        text : {
            type:String,
            default: ''
        }
    },
    mounted () {
        console.log(this.init)
    },
    data () {
        return {
            number : this.init
        }
    },
    methods : {
        reduce () {
            if (this.number<=this.min) {return;}
            this.number--
            this.$emit('getValue',this.number)
        },
        add () {
            if (this.number>=this.max) {return;}
            this.number++
            this.$emit('getValue',this.number)
        }
    }
}
</script>
<style lang="less" scoped>
@import url('./dtInputNumber.less');
</style>

