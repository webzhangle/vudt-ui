<template>
    <div class="dt-progress">
        <p>{{ percentage1 }}%</p>
        <h4 :style="'width:'+percentage1+'%'"></h4>
    </div>
</template>
<script>
export default {
    name : 'dt-header',
    props: {
        percentage:{
            type : String,
            default: '0'
        },
    },
    computed: {
        percentage1 () {
            if (parseInt(this.percentage) >= 100) {
                return '100'
            }
            return this.percentage
        }
    },
    mounted () {

    },
    methods: {
        
    }
    
}
</script>
<style lang="less" scoped>
@import url('./dtProgress.less');
</style>
