

<template>
    <div>
        <div class="btnbox">
          <div class="btn" @click="toShow">打开picker</div>
        </div>
        <div class="result">
          <p>----选择结果----</p>
          <p>{{res}}</p>
        </div>
        <dt-picker
            :show="show"
            :columns="columns"
            :defaultData="defaultData"
            :link="link"
            :selectData="pickData"
            v-on:cancel="close"
            v-on:confirm="confirmFn">
        </dt-picker>
      </div>
</template>

<script>
import Vue from "vue";
import { picker } from "@/components/index";
Vue.use(picker);
export default {
  data() {
    return {
      isCopy: "",
      res: null,
      show: false,
      columns: 2, // 两列
      link: true, // 联动必须需要link 参数
      defaultData: [],
      pickData: {
        // 第一列数据结构
        data1: [
          {
            text: "数码",
            value: 1999
          },
          {
            text: "水果",
            value: 2001
          },
          {
            text: "衣服",
            value: 2002
          }
        ],
        // 第二列数据结构
        data2: {
          "1999": [
            {
              text: "相机",
              value: 101
            },
            {
              text: "手机",
              value: 102
            },
            {
              text: "音箱",
              value: 103
            }
          ],
          "2001": [
            {
              text: "苹果",
              value: 104
            },
            {
              text: "香蕉",
              value: 105
            },
            {
              text: "西红柿",
              value: 106
            }
          ],
          "2002": [
            {
              text: "衬衫",
              value: 107
            },
            {
              text: "短裤",
              value: 108
            },
            {
              text: "上衣",
              value: 109
            }
          ]
        }
      }
    };
  },
  methods: {
    close() {
      this.show = false;
    },
    confirmFn(val) {
      this.show = false;
      console.log(val);
      this.res = val;
      this.pickData.default = [val.select1, val.select2];
    },
    toShow() {
      this.show = true;
    }
  }
};
</script>

<style lange="less" scoped>
.btnbox {
  display: flex;
  justify-content: center;
}
.btn {
  background: #2e68fa;
  color: #fff;
  padding: 5px 10px;
  display: inline-block;
  margin: 0 10px;
  font-size: 14px;
  border-radius: 4px;
}
.result {
  text-align: center;
  padding: 10px;
}
.isCopy {
  margin: 10px;
  border: 1px dashed red;
  text-align: center;
}
</style>


