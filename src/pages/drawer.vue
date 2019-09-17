<template>
  <div class="box">
    <p @click="display1 = true">打开抽屉</p>
    <p @click="display2 = true">打开抽屉</p>
    <p @click="display3 = true">打开抽屉</p>
    <p @click="display4 = true">打开抽屉</p>

    <dt-drawer title="我是一个抽屉组件" :display.sync="display1" :inner="true" :width="drawerWidth" direction="left" :mask="true">
        1. Hello, 国寿财!
        2. Hello, 国寿财!
    </dt-drawer>
    <dt-drawer title="我是一个抽屉组件" :display.sync="display2" :inner="true" :width="drawerWidth" direction="top" :mask="true">
        1. Hello, 国寿财!
        2. Hello, 国寿财!
    </dt-drawer>
    <dt-drawer title="我是一个抽屉组件" :display.sync="display3" :inner="true" :width="drawerWidth" direction="bottom" :mask="true">
        1. Hello, 国寿财!
        2. Hello, 国寿财!
    </dt-drawer>
    <dt-drawer title="我是一个抽屉组件" :display.sync="display4" :inner="true" :width="drawerWidth" direction="right" :mask="true">
        1. Hello, 国寿财!
        2. Hello, 国寿财!
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
      display1: false,
      display2: false,
      display3: false,
      display4: false,
      drawerWidth: '200px'
    }    
  }
}
</script>
<style lang="less" scoped>
.box {
  >p {
    margin-bottom: 15px;
  }
}
</style>
