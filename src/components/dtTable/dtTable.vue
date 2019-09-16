<template>
    <div class="dt-table">
      <div class="table-responsive" :style="{'overflow-x':overflow}">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th></th>
              <th nowrap="nowrap" v-for="(item,index) in dataList.head" :key="index">{{ item }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item , index) in dataList.content" :key="index">
              <th scope="row" nowrap="nowrap">{{item.title}}</th>
              <td v-for="(item1 ,index1) in item.content" :key="index1">{{ item1 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>
<script>
export default {
    props: {
        dataList : {
            type: Object,
            default: {}
        },
        scroll : {
            type: Boolean,
            default: false
        }
    },
    data () {
      return {
        overflow:this.scroll? 'auto': 'hidden'
      }
    }
}
</script>
<style lang="less" scoped>
@import url('./dtTable.less');
</style>
