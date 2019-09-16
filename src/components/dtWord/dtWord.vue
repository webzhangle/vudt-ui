<template>
    <div :class="type">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props : {
      type: {
        type: String,
        default: 'title-1'
      }
    },
    data() {
      return {};
    }
};
</script>
<style scoped lang="less">
@import url('./dtWord.less');
</style>