import Vue from 'vue'
import dtButton from './dtButton/index.vue'
// 弹窗组件
import dtMessage from './dtMessage/dtMessage.vue'
import dtMessageApi from './dtMessage/index.js'
Vue.prototype.$message = dtMessageApi
// toast组件
import dtToast from './dtToast/dtToast.vue'
import dtToastApi from './dtToast/index.js'
Vue.prototype.$toast = dtToastApi
// switch组件
import dtSwitch from './dtSwitch/dtSwitch.vue'
// checkBox 组件
import dtCheckBox from './dtCheckBox/dtCheckBox.vue'
// dtRadio 组件
import dtRadio from './dtRadio/dtRadio.vue'
//header 组件
import dtHeader from './dtHeader/dtHeader.vue'
//进度条组件
import dtProgress from './dtProgress/dtProgress.vue'
//InputNumber 组件
import dtInputNumber from './dtInputNumber/dtInputNumber.vue'
//swiper组件
import dtSwiper from './dtSwiper/swiper.vue'
// picker 组件
import dtPicker from './dtPicker/dtPicker.vue'



export const button = {
    install (Vue) {
        Vue.component('dtButton',dtButton)
    }
}
export const message = {
    install (Vue) {
        Vue.component('dtMessage',dtMessage)
    }
}
export const toast = {
    install (Vue) {
        Vue.component('dtToast',dtToast)
    }
}
export const Switch = {
    install (Vue) {
        Vue.component('dtSwitch',dtSwitch)
    }
} 
export const checkBox = {
    install (Vue) {
        Vue.component('dtCheckBox',dtCheckBox)
    }
} 
export const radio = {
    install (Vue) {
        Vue.component('dtRadio',dtRadio)
    }
} 
export const header = {
    install (Vue) {
        Vue.component('dtHeader',dtHeader)
    }
} 
export const progress = {
    install (Vue) {
        Vue.component('dtProgress',dtProgress)
    }
} 
export const inputNumber = {
    install (Vue) {
        Vue.component('dtInputNumber',dtInputNumber)
    }
}
export const swiper = {
    install (Vue) {
        Vue.component('dtSwiper',dtSwiper)
    }
}
export const picker = {
    install (Vue) {
        Vue.component('dtPicker',dtPicker)
    }
}

