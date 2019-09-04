<template>
    <div class="dt-progress">
        <p>{{ percentage }}</p>
        <h4 :style="'width:'+percentage+'%'"></h4>
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
    mounted () {

    },
    methods: {
        
    }
    
}
</script>
<style lang="less" scoped>
@import url('./dtProgress.less');
</style>
