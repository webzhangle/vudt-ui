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