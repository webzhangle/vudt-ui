import Vue from 'vue'
import Message from './dtMessage.vue';
const MessageConstructor = Vue.extend(Message);
let dtMessage = (obj) => {
    //用promise封装
    return new Promise ((resolve, reject)=>{
        let MessageDom = new MessageConstructor({
            el: document.createElement('div')
        })
        MessageDom.title = obj.title || '信息' //设置title内容
        MessageDom.content = obj.content || '稻田，你好' //设置content内容
        MessageDom.messageType = obj.messageType || '1' //设置messageType内容
        
        MessageDom.confirm = function () {
            resolve(MessageDom.inputValue)
            MessageDom.show = false
        }
        MessageDom.cancel = function () {
            reject()
            MessageDom.show = false
        }
        document.body.appendChild( MessageDom.$el )
    })
}
export default dtMessage