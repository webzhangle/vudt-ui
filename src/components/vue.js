import Vue from 'vue'
import Alert from './dtAlert/index';
const AlertConstructor = Vue.extend(Alert);
let dtAlert = (obj) => {
    let AlertDom = new AlertConstructor({
        el: document.createElement('div')
    })
    AlertDom.title = obj.title || '信息' //设置title内容
    AlertDom.content = obj.content || '稻田，你好' //设置content内容
    AlertDom.number = obj.number || '1' //设置number内容
	document.body.appendChild( AlertDom.$el )
}
export default {
    dtAlert // 弹出框
}