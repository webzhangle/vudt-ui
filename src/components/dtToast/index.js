import Vue from 'vue'
import Toast from './dtToast';
const ToastConstructor = Vue.extend(Toast);
let ToastDom = new ToastConstructor({
    el: document.createElement('div')
})
let dtToast = (obj) => {
    if (obj) {
        ToastDom.show = true
        ToastDom.text = obj.text || ''
        ToastDom.duration = obj.duration || '0'
        if (obj.duration) {
            setTimeout(()=>{
                ToastDom.show = false
            },(parseInt(obj.duration)*1000))
        }

    }
    console.log(ToastDom)
    document.body.appendChild( ToastDom.$el )
}
dtToast.close = function () {
    ToastDom.show = false
}
export default dtToast