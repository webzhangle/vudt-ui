<template>
    <div>
        <dt-step></dt-step>
        <dt-step :currentVal="1"></dt-step>
    </div>
</template>
<script>
import Vue from 'vue'
import { step } from '@/components/index';
Vue.use(step)
export default {
    
}
</script>
