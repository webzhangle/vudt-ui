<template>
    <div class="dt-card-list">
        <ul class="header">
            <li class="icon-left">
                <svg-icon :icon-class="list.headerLeftIcon"></svg-icon>
            </li>
            <li class="title">
                <h2>{{ list.title }}</h2>
            </li>
            <li class="icon-right">
                <svg-icon :icon-class="list.headerRightIcon.icon"></svg-icon>
                <!-- <dt-badge></dt-badge> -->
            </li>
        </ul>
        <div class="children">
            <ul v-for="(item,index) in list.children" :key="index" @click="select(item.name,item.type,index)" :class="role == 'person' ? 'no-right' : ''">
                <li class="name">
                    {{ item.name }}
                </li>
                <li class="center">
                    <input type="text" :id="item.type" :placeholder="'请输入'+item.name" :disabled="item.name === '注册日期' || item.name === '发证日期' || item.name === '购车日期' || item.name === '证件类型'" /> 
                </li>
                <li class="icon-right" v-if="item.iconRight">
                    <svg-icon :icon-class="item.iconRight.icon"></svg-icon>
                    <!-- <dt-badge></dt-badge> -->
                </li>
            </ul>
        </div>
        <dt-picker
            ref="register"
            :textTitle="picker1.textTitle"
            :type="picker1.type"
            :anchor="picker1.anchor"
            @confirm="handlePicker1Confirm">
        </dt-picker>
        <dt-picker
            ref="publish"
            :textTitle="picker2.textTitle"
            :type="picker2.type"
            :anchor="picker2.anchor"
            @confirm="handlePicker2Confirm">
        </dt-picker>
        <dt-picker
            ref="shopCar"
            :textTitle="picker3.textTitle"
            :type="picker3.type"
            :anchor="picker3.anchor"
            @confirm="handlePicker3Confirm">
        </dt-picker>
        
        <dt-picker
            ref="doctype"
            :textTitle="picker0.textTitle"
            :data="picker0.data"
            :anchor="picker0.anchor"
            @confirm="handlePicker0Confirm">
        </dt-picker>
    </div>
</template>
<script>
import dtBadge from '../dtBadge/dtBadge.vue'
import dtPicker from '../picker/picker.vue'
const data1 = ['身份证','户口本','驾驶证']
export default {
    components : {
        dtBadge,
        dtPicker
    },
    props: {
        dataList : {
            type: Object,
            default: ()=>{}
        },
        role:[String]
    },
    data () {
        return {
            list: this.dataList,
            picker1: {
                anchor: [],
                textTitle: '日期选择器(内置)',
                type: 'date'
            },
            picker2: {
                anchor: [],
                textTitle: '日期选择器(内置)',
                type: 'date'
            },
            picker3: {
                anchor: [],
                textTitle: '日期选择器(内置)',
                type: 'date'
            },
            picker0: {
                anchor: [],
                textTitle: '多列选择器',
                data: [data1]
            },
        }
    },
    mounted() {
        console.log(this.dataList)
    },
    computed : {

    },
    methods: {
        handlePicker1Confirm (v) {
            this.picker1.anchor = v
            this.value = v ? JSON.stringify(v) : null
            let value = v[0].value + v[1].value + v[2].value
            document.getElementById('register').value = value
            
        },
        handlePicker2Confirm (v) {
            this.picker2.anchor = v
            this.value = v ? JSON.stringify(v) : null
            let value = v[0].value + v[1].value + v[2].value
            document.getElementById('publish').value = value
            
        },
        handlePicker3Confirm (v) {
            this.picker3.anchor = v
            this.value = v ? JSON.stringify(v) : null
            let value = v[0].value + v[1].value + v[2].value
            document.getElementById('shopCar').value = value
            
        },
        handlePicker0Confirm (v) {
            this.picker0.anchor = v
            this.value = v ? JSON.stringify(v) : null
            let value = v[0].value 
            document.getElementById('doctype').value = value
            
        },
        select (name, type , index) {
            if (name === '注册日期') {
                this.$refs.register.show()
            }
            if (name === '发证日期') {
                this.$refs.publish.show()
            }
            if (name === '购车日期') {
                this.$refs.shopCar.show()
            }
            if (name === '证件类型') {
                // this.$refs.doctype.show()
                this.$refs.doctype.show()
            }
            
        }
    }
}
</script>
<style lang="less" scoped>
@import url('./dtCardList.less');
</style>
