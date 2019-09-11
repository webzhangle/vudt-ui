import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Button from '@/pages/button'
import Message from '@/pages/Message'
import Toast from '@/pages/Toast'
import Loading from '@/pages/Loading'
import Switch from '@/pages/switch'
import CheckBox from '@/pages/checkBox'
import Radio from '@/pages/radio'
import Header from '@/pages/header'
import Progress from '@/pages/progress'
import inputNumber from '@/pages/inputNumber'
import Swiper from '@/pages/swiper'
import Picker from '@/pages/picker'
import Tab from '@/pages/tab'
import TabBar from '@/pages/tabBar'
import Input from '@/pages/input'
import Upload from '@/pages/upload'
import List from '@/pages/list'
Vue.use(Router)

export default new Router({
    routes: [
        {
          path: '/',
          name: 'Index',
          component: Index
        },
        {
          path: '/Button',
          name: 'Button',
          component: Button
        },
        {
          path: '/Message',
          name: 'Message',
          component: Message
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
        },
        {
          path: '/Header',
          name: 'Header',
          component: Header
        },
        {
          path: '/Progress',
          name: 'Progress',
          component: Progress
        },
        {
          path: '/inputNumber',
          name: 'inputNumber',
          component: inputNumber
        },
        {
          path: '/Swiper',
          name: 'Swiper',
          component: Swiper
        },
        {
          path: '/Picker',
          name: 'Picker',
          component: Picker
        },
        {
          path: '/Tab',
          name: 'Tab',
          component: Tab
        },
        {
          path: '/TabBar',
          name: 'TabBar',
          component: TabBar
        },
        {
          path: '/Input',
          name: 'Input',
          component: Input
        },
        {
          path: '/Upload',
          name: 'Upload',
          component: Upload
        },
        {
          path: '/List',
          name: 'List',
          component: List
        }
    ]
})
