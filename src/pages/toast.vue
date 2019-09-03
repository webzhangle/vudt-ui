<template>
    <div>
        <dt-button @click.native="toastClick">提示toast</dt-button>
        <!-- <dt-toast text="成功" duration='5' type="success"></dt-toast> -->
        <dt-button type="primary" @click.native="toastClose">关闭toast</dt-button>
    </div>
</template>
<script>
import Vue from 'vue'
import {button,toast} from '@/components/index';
Vue.use(button)
Vue.use(toast)
export default {
    mounted () {
        
    },
    methods : {
        toastClick () {
            this.$toast({
                text:'123',
                type:'success'
            })
        },
        toastClose () {
            this.$toast.close()
        }
    }
}
</script>
