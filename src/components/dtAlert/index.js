import Vue from 'vue'
import Alert from './dtAlert.vue';
const AlertConstructor = Vue.extend(Alert);
let dtAlert = (obj) => {
    //用promise封装
    return new Promise ((resolve, reject)=>{
        let AlertDom = new AlertConstructor({
            el: document.createElement('div')
        })
        AlertDom.title = obj.title || '信息' //设置title内容
        AlertDom.content = obj.content || '稻田，你好' //设置content内容
        AlertDom.messageType = obj.messageType || '1' //设置messageType内容
        
        AlertDom.confirm = function () {
            resolve(AlertDom.inputValue)
            AlertDom.show = false
        }
        AlertDom.cancel = function () {
            reject()
            AlertDom.show = false
        }
        document.body.appendChild( AlertDom.$el )
    })
}
export default dtAlert