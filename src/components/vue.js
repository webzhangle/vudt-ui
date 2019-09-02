import Vue from 'vue'
import Alert from './dtDialog/index';
const AlertConstructor = Vue.extend(Alert);
let dtAlert = ()=>{
    let AlertDom = new AlertConstructor({
        el:document.createElement('div')
    })
    AlertDom.content = 456 //设置content内容
	  document.body.appendChild( AlertDom.$el )
}
export default {
    dtAlert // 弹出框
}