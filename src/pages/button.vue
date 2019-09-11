<template>
    <div class="button">
        <p class="des">default按钮展示区</p>
        <dt-button>default按钮</dt-button>
        <dt-button disabled>default按钮</dt-button> 
        <dt-button reverse>default按钮</dt-button>
        <dt-button disabled reverse>default按钮</dt-button>

        <p class="des">primary按钮展示区</p>
        <dt-button type="primary">primary按钮</dt-button> 
        <dt-button type="primary" disabled>primary按钮</dt-button> 
        <dt-button type="primary" reverse>primary按钮</dt-button> 
        <dt-button type="primary" disabled reverse>primary按钮</dt-button>

        <p class="des">warn按钮展示区</p>
        <dt-button type="warn">warn按钮</dt-button>
        <dt-button type="warn" disabled>warn按钮</dt-button>
        <dt-button type="warn" reverse>warn按钮</dt-button>
        <dt-button type="warn" disabled reverse>warn按钮</dt-button>

        <p class="des">按钮型号展示区</p>
        <dt-button type="primary" mini>warn按钮</dt-button>
        <dt-button type="warn" middle @buttonClick="click">warn按钮</dt-button>
        <dt-button type="primary" mini actionType="reset">warn按钮</dt-button>

        <p class="des">showLoading按钮展示区</p>
        <dt-button type="primary" showLoading actionType="reset">primary按钮</dt-button>
        <dt-button type="warn" showLoading>warn按钮</dt-button>
    </div>
</template>
<script>
import Vue from 'vue'
import { button } from '@/components/index';
Vue.use(button)
export default {

    methods : {
        click () {
            alert('我被点击了')
        }
    }
}
</script>
<style lang="less" scoped>
.button {
    padding: 15px;
    .des {
        text-align: center;
        font-size: 15px;
    }
    .dt-btn {
        margin: 15px 0;
    }
}

</style>

