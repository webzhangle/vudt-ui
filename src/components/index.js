import Vue from 'vue'
import dtButton from './dtButton/index'
// 弹窗组件
import dtAlert from './dtAlert/dtAlert'
import dtAlertApi from './dtAlert/index.js'
Vue.prototype.$alert = dtAlertApi
// toast组件
import dtToast from './dtToast/dtToast'
import dtToastApi from './dtToast/index.js'
Vue.prototype.$toast = dtToastApi
// switch组件
import dtSwitch from './dtSwitch/dtSwitch'
// checkBox 组件
import dtCheckBox from './dtCheckBox/dtCheckBox'
// dtRadio 组件
import dtRadio from './dtRadio/dtRadio'
//header 组件
import dtHeader from './dtHeader/dtHeader'
//进度条组件
import dtProgress from './dtProgress/dtProgress'
export const button = {
    install (Vue) {
        Vue.component('dtButton',dtButton)
    }
}
export const alert = {
    install (Vue) {
        Vue.component('dtAlert',dtAlert)
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

