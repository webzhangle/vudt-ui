<template>
    <div class="list">
        <dt-list :list="list1" head CheckBox></dt-list>

        <dt-list :list="list2" CheckBox></dt-list>

        <dt-list :list="list3"></dt-list>

        <dt-list :list="list4" head></dt-list>
    </div>
</template>
<script>
import Vue from 'vue'
import { list } from '@/components/index';
Vue.use(list)
export default {
    data () {
        return {
            list1: [
                {
                    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
                    des0: '110502198401161215',
                    des1: '一枝花 | 18877654467 | 直接业务',
                    des2: '阳光保险代理有限公司',
                    des3: '078549829#',
                    checked: false
                }
            ],
            list2: [
                {
                    des0: '110502198401161215',
                    des1: '一枝花 | 18877654467 | 直接业务',
                    des2: '阳光保险代理有限公司',
                    des3: '078549829#',
                    checked: true
                }
            ],
            list3: [
                {
                    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
                    des0: '110502198401161215',
                    des1: '一枝花 | 18877654467 | 直接业务',
                    des2: '阳光保险代理有限公司',
                    checked: true
                }
            ],
            list4: [
                 {
                    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
                    des0: '110502198401161215',
                    checked: true
                }
            ]
        }
    },
    methods: {
        
    }
}
</script>
<style lang="less" scoped>
    
</style>
