<template>
    <div class="toast">
        <dt-button type="primary" @click.native="toastClick1">提示toast</dt-button>
        <dt-button @click.native="toastClick2">成功 success toast</dt-button>
        <dt-button type="warn" @click.native="toastClick3">失败 fail toast</dt-button>
        <dt-button @click.native="toastClick4">加载 loading toast</dt-button>
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
        toastClick1 () {
            this.$toast({
                text:'提示toast',
                duration: 1
            })
        },
        toastClick2 () {
            this.$toast({
                text:'成功toast',
                type: 'success',
                duration: 1
            })
        },
        toastClick3 () {
            this.$toast({
                text:'失败toast',
                type: 'fail',
                duration: 1
            })
        },
        toastClick4 () {
            this.$toast({
                text:'加载toast',
                type: 'loading',
                duration: 1
            })
        },
        toastClose () {
            this.$toast.close()
        }
    }
}
</script>
<style lang="less" scoped>
.toast {
    padding: 30px;
    .dt-btn {
        margin-bottom: 15px;
    }
}
</style>
