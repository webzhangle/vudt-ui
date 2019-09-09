<template>
    <div>
       <dt-swiper :list="baseList" loop auto/>
    </div>
</template>
<script>
import Vue from 'vue'
import { swiper } from '@/components/index';
Vue.use(swiper)
export default {
    data () {
        return {
            baseList : [
                {
                    url: 'javascript:',
                    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
                    title: '送你一朵fua'
                },
                {
                    url: 'javascript:',
                    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
                    title: '送你一辆车'
                },
                {
                    url: 'javascript:',
                    img: 'https://static.vux.li/demo/5.jpg', // 404
                    title: '送你一次旅行',
                    fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
                }
            ]
        }
    }
}
</script>