import Vue from 'vue'
import SvgIcon from '@/components/svgIcon'// svg组件
 
// register globally
Vue.component('svg-icon', SvgIcon)
console.log(123)
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)