<template>
    <div>
        <dt-upload />
    </div>
</template>
<script>
import Vue from 'vue'
import { upload } from '@/components/index';
Vue.use(upload)
export default {
    
}
</script>
<style lang="less" scoped>
.dt-upload {padding: 30px;}
</style>
