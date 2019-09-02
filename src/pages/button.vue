<template>
    <div>
        <dt-button>default按钮</dt-button>
        <dt-button disabled>default按钮</dt-button> 
        <dt-button reverse>default按钮</dt-button>
        <dt-button disabled reverse>default按钮</dt-button>

        <dt-button type="primary">primary按钮</dt-button> 
        <dt-button type="primary" disabled>primary按钮</dt-button> 
        <dt-button type="primary" reverse>primary按钮</dt-button> 
        <dt-button type="primary" disabled reverse>primary按钮</dt-button>


        <dt-button type="warn">warn按钮</dt-button>
        <dt-button type="warn" disabled>warn按钮</dt-button>
        <dt-button type="warn" reverse>warn按钮</dt-button>
        <dt-button type="warn" disabled reverse>warn按钮</dt-button>

        <dt-button type="primary" mini>warn按钮</dt-button>
        <dt-button type="warn" middle @buttonClick="a">warn按钮</dt-button>

        <dt-button type="primary" mini actionType="reset">warn按钮</dt-button>

        <dt-button type="primary" showLoading actionType="reset">primary按钮</dt-button>
        <dt-button type="warn" showLoading>warn按钮</dt-button>
    </div>
</template>
<script>
import dtButton from '@/components/dtButton'
export default {
    components: {
        dtButton
    },
    methods : {
        a () {
            alert(1)
        }
    }
}
</script>
<style lang="less" scoped>
.dt-btn {margin: 15px 0}
</style>

