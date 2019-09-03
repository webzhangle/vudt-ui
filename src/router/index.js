import Vue from 'vue'
import Router from 'vue-router'
import Button from '@/pages/button'
import Alert from '@/pages/Alert'
import Toast from '@/pages/Toast'
Vue.use(Router)

export default new Router({
    routes: [
        {
          path: '/Button',
          name: 'Button',
          component: Button
        },
        {
          path: '/Alert',
          name: 'Alert',
          component: Alert
        },
        {
          path: '/Toast',
          name: 'Toast',
          component: Toast
        }
    ]
})
