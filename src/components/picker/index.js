import AwesomePicker from './picker.vue'
const picker = {
  install (Vue) {
    Vue.component(AwesomePicker.name, AwesomePicker)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(picker)
}
export default picker
