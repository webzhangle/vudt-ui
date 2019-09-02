import Vue from 'vue'
import Router from 'vue-router'
import Button from '@/pages/button'
import Dialog from '@/pages/dialog'
Vue.use(Router)

export default new Router({
    routes: [
        {
          path: '/',
          name: 'Button',
          component: Button
        },{
          path: '/Dialog',
          name: 'Dialog',
          component: Dialog
        }
    ]
})
