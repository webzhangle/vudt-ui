<template>
    <div>
        <div class="dt-list" v-for="(item,index) in list" :key="index">
            <ol v-if="item.img">
                <li v-if="head">
                    <h3>
                        <img :src="item.img" alt="">
                    </h3> 
                </li>
                <li v-if="!head">
                    <img :src="item.img" alt="">
                </li>
            </ol>
            <ul>
                <li class="title">
                    <h2>{{ item.des0 }}</h2>
                    <dt-Check-box v-if="CheckBox" :checked="item.checked"/>
                </li>
                <li v-if="item.des1">
                    <p>{{ item.des1 }}</p>
                </li>
                <li v-if="item.des2">
                    <p>{{ item.des2 }}</p>
                </li>
                <li v-if="item.des3">
                    <p>{{ item.des3 }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import dtCheckBox from '../dtCheckBox/dtCheckBox.vue'
export default {
    components: {
        dtCheckBox
    },
    name : 'dt-list',
    props: {
        list: {
            type: Array,
            default : []
        },
        head: {
            type:Boolean,
            default: false
        },
        CheckBox: {
            type:Boolean,
            default: false
        }
    },
    mounted () {

    },
    methods: {
        
    }
    
}
</script>

<style lang="less" scoped>
@import url('./dtList.less');
</style>
