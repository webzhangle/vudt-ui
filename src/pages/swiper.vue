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
                    img: 'http://img0.imgtn.bdimg.com/it/u=3875741789,1521067019&fm=15&gp=0.jpg',
                    title: '国寿财'
                },
                {
                    url: 'javascript:',
                    img: 'http://img4.imgtn.bdimg.com/it/u=3162412210,1563369982&fm=26&gp=0.jpg',
                    title: '国寿财'
                },
                {
                    url: 'javascript:',
                    img: 'http://img4.imgtn.bdimg.com/it/u=3190441126,995644236&fm=26&gp=0.jpg', 
                    title: '国寿财',
                }
            ]
        }
    }
}
</script>