import Vue from 'vue'
import Router from 'vue-router'
import Button from '@/pages/button'
import Alert from '@/pages/Alert'
Vue.use(Router)

export default new Router({
    routes: [
        {
          path: '/',
          name: 'Button',
          component: Button
        },{
          path: '/Alert',
          name: 'Alert',
          component: Alert
        }
    ]
})
