<template>
  <div class="dt-steps">
    <div
      v-bind:class="[stepArray.length==2 ? 'width-2' : stepArray.length==3?'width-3':'width-4', '']"
      v-for="(item,index) in stepArray"
      :key="index"
    >
      <div class="width-100 mt-b">
          <a href="javascript:;" v-bind:class="[index<currentVal ? 'color-pick' : 'color-no-pick', '']"></a>
          <p class="title">{{item}}</p>
      </div>
      <div v-if="errorStep<=0" class="width-100">
        <div
          class
          v-bind:class="[index<currentVal ? 'color-pick circle' : 'color-no-pick circle-no-border', '']"
        ></div>
        <p
          v-show="index!=0"
          class="line-1"
          v-bind:class="[index<currentVal ? 'color-pick' : 'color-no-pick', '']"
        ></p>
        <p
          v-show="index!=stepArray.length-1"
          class="line-2"
          v-bind:class="[index<currentVal-1 ? 'color-pick' : 'color-no-pick', '']"
        ></p>
      </div>
      <div v-else class="width-100">
        <div
          class
          v-bind:class="[index<errorStep ? 'color-pick circle' : index==errorStep?'color-pick circle-error' :'color-no-pick circle-no-border', '']"
        ></div>
        <p
          v-show="index!=0"
          class="line-1"
          v-bind:class="[index<errorStep ? 'color-pick' :index==errorStep?'color-error-pick-1' :'color-no-pick', '']"
        ></p>
        <p
          v-show="index!=stepArray.length-1"
          class="line-2"
          v-bind:class="[index<errorStep-1 ? 'color-pick' :index==errorStep-1?'color-error-pick-2' :'color-no-pick', '']"
        ></p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
@import url('./dtStep.less');
</style>
<script>
export default {
  data() {
    return {};
  },
  props: {
    currentVal: {
      type: Number,
      default: 3
    },
    errorStep: {
      type: Number,
      default: 0
    },
    stepArray: {
      type: Array,
      default: function() {
        return ["步骤1", "步骤2", "步骤3", "步骤4","步骤5"];
      }
    }
  }
};
</script>