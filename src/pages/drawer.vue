<template>
  <div class="box">
    <p @click="display = true">打开抽屉</p>
    <dt-drawer title="我是一个抽屉组件" :display.sync="display" :inner="true" :width="drawerWidth" direction="bottom" :mask="true">
        1. Hello, 稻田!
        2. Hello, 稻田!
    </dt-drawer>
  </div>
</template>
<script>
import Vue from 'vue'
import {drawer} from '@/components/index'
Vue.use(drawer)
export default {
  data () {
    return {
      display: false,
      drawerWidth: '200px'
    }    
  }
}
</script>