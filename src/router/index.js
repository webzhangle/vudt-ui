import Vue from 'vue'
import Router from 'vue-router'
import Button from '@/pages/button'
import Alert from '@/pages/Alert'
import Toast from '@/pages/Toast'
import Loading from '@/pages/Loading'
import Switch from '@/pages/switch'
import CheckBox from '@/pages/checkBox'
import Radio from '@/pages/radio'
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
        },
        {
          path: '/Loading',
          name: 'Loading',
          component: Loading
        },
        {
          path: '/Switch',
          name: 'Switch',
          component: Switch
        },
        {
          path: '/CheckBox',
          name: 'CheckBox',
          component: CheckBox
        },
        {
          path: '/Radio',
          name: 'Radio',
          component: Radio
        }
    ]
})
