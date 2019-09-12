import Vue from 'vue'
import Drawer from './dtDrawer.vue';
const DrawerConstructor = Vue.extend(Drawer);
let DrawerDom = new DrawerConstructor({
    el: document.createElement('div')
})
let dtDrawer = (obj) => {
    if (obj) {
       

    }
    console.log(DrawerDom)
    document.body.appendChild( DrawerDom.$el )
    document.body.style.overflow = 'hidden'
}
dtDrawer.close = function () {
    DrawerDom.show = false
}
export default dtDrawer