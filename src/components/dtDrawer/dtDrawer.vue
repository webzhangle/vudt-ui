<template>
 <div class="dt-drawer">
  <div :class="maskClass" @click="closeByMask"></div>
  <div :class="mainClass" :style="mainStyle" class="main" id="main">
   <div class="drawer-head">
    <span>{{ title }}</span>
    <span class="close-btn" v-show="closable" @click="closeByButton">X</span>
   </div>
   <div class="drawer-body">
    <slot/>
   </div>
  </div>
 </div>
</template>
<script>
export default {
 props: {
  // 是否打开
  display: {
   type: Boolean
  },
  // 标题
  title: {
   type: String,
   default: '标题'
  },
  // 是否显示关闭按钮
  closable: {
   type: Boolean,
   default: true
  },
  // 是否显示遮罩
  mask: {
   type: Boolean,
   default: true
  },
  // 是否点击遮罩关闭
  maskClosable: {
   type: Boolean,
   default: true
  },
  // 宽度
  width: {
   type: String,
   default: '400px'
  },
  // 是否在父级元素中打开
  inner: {
   type: Boolean,
   default: false
  },
  direction: {
    type: String,
    default: 'left'
  }
 },
 computed: {
  maskClass: function () {
   return {
    'mask-show': (this.mask && this.display),
    'mask-hide': !(this.mask && this.display),
    'inner': this.inner
   }
  },
  mainClass: function () {
   return {
    'main-show': this.display,
    'main-hide': !this.display,
    'inner': this.inner
   }
  },
  mainStyle: function () {
    let obj = {}
    if (this.direction === 'right') {
        obj = {
            width: this.width,
            right: this.display ? '0' : `-${this.width}`,
            borderLeft: this.mask ? 'none' : '1px solid #eee'
        } 
    }
    if (this.direction === 'left') {
        obj = {
            width: this.width,
            left: this.display ? '0' : `-${this.width}`,
            borderLeft: this.mask ? 'none' : '1px solid #eee'
        } 
    }
    if (this.direction === 'top') {
        obj = {
            width:'100%',
            height: this.width,
            top: this.display ? '0' : `-${this.width}`,
            borderLeft: this.mask ? 'none' : '1px solid #eee'
        } 
    }
    if (this.direction === 'bottom') {
        obj = {
            width:'100%',
            height: this.width,
            bottom: this.display ? '0' : `-${this.width}`,
            borderLeft: this.mask ? 'none' : '1px solid #eee',
            top: 'auto'
        } 
    }
    return obj
  }
 },
 mounted () {
  if (this.inner) {
   let box = this.$el.parentNode
   box.style.position = 'relative'
  }
 },
 methods: {
  closeByMask () {
   this.maskClosable && this.$emit('update:display', false)
  },
  closeByButton () {
   this.$emit('update:display', false)
  }
 }
}
</script>
<style lang="less" scoped>
.dt-drawer {
 /* 遮罩 */
//  height: 100vh;
//     position: fixed;
//     z-index: 999999;
//     width: 100%;
 .mask-show {
  position: fixed!important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0,0,0,.5);
  opacity: 1;
  transition: opacity .5s;
 }
 .mask-hide {
  opacity: 0;
  transition: opacity .5s;
 }
 /* 滑块 */
 .main {
  position: fixed!important;
  z-index: 10;
  top: 0;
  height: 100%;
  background: #fff;
  transition: all 0.5s;
 }
 .main-show {
  opacity: 1;
 }
 .main-hide {
  opacity: 0;
 }
 /* 某个元素内部显示 */
 .inner {
  position: absolute;
 }
 /* 其他样式 */
 .drawer-head {
  display: flex;
  justify-content: space-between;
  height: 45px;
  line-height: 45px;
  padding: 0 15px;
  font-size: 14px;
  font-weight: bold;
  border-bottom: 1px solid #eee;
  .close-btn {
   display: inline-block;
   cursor: pointer;
   height: 100%;
   padding-left: 20px;
  }
 }
 .drawer-body {
  font-size: 14px;
  padding: 15px;
 }
}
</style>