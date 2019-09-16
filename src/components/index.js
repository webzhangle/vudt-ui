import Vue from 'vue'
import dtButton from './dtButton/index.vue'
// 弹窗组件
import dtMessage from './dtMessage/dtMessage.vue'
import dtMessageApi from './dtMessage/index.js'
Vue.prototype.$message = dtMessageApi
// toast组件
import dtToast from './dtToast/dtToast.vue'
import dtToastApi from './dtToast/index.js'
Vue.prototype.$toast = dtToastApi
// switch组件
import dtSwitch from './dtSwitch/dtSwitch.vue'
// checkBox 组件
import dtCheckBox from './dtCheckBox/dtCheckBox.vue'
// dtRadio 组件
import dtRadio from './dtRadio/dtRadio.vue'
//header 组件
import dtHeader from './dtHeader/dtHeader.vue'
//进度条组件
import dtProgress from './dtProgress/dtProgress.vue'
//InputNumber 组件
import dtInputNumber from './dtInputNumber/dtInputNumber.vue'
//swiper组件
import dtSwiper from './dtSwiper/swiper.vue'
// picker 组件
// import dtPicker from './dtPicker/dtPicker.vue'
//tab 组件
import Tab from './dtTab/index.js'
// tabBar组件
import dtTabBar from './dtTabbar/dtTabbar.vue'
// input 组件
import dtInput from './dtInput/dtInput.vue'
// upload 上传
import dtUpload from './dtUpload/dtUpload.vue'
// 动态list
import dtList from './dtList/dtList.vue'
//badge
import dtBadge from './dtBadge/dtBadge.vue'
//CardList
import dtCardList from './dtCardList/dtCardList.vue'
//Drawer
import dtDrawer from './dtDrawer/dtDrawer.vue'
// step
import dtStep from './dtStep/dtStep.vue'
// table 组件
import dtTable from './dtTable/dtTable.vue'
//annotation 组件
import dtAnnotation from './dtAnnotation/dtAnnotation.vue'
//container组件
import dtContainer from './dtContainer/dtContainer.vue'

export const button = {
    install (Vue) {
        Vue.component('dtButton',dtButton)
    }
}
export const message = {
    install (Vue) {
        Vue.component('dtMessage',dtMessage)
    }
}
export const toast = {
    install (Vue) {
        Vue.component('dtToast',dtToast)
    }
}
export const Switch = {
    install (Vue) {
        Vue.component('dtSwitch',dtSwitch)
    }
} 
export const checkBox = {
    install (Vue) {
        Vue.component('dtCheckBox',dtCheckBox)
    }
} 
export const radio = {
    install (Vue) {
        Vue.component('dtRadio',dtRadio)
    }
} 
export const header = {
    install (Vue) {
        Vue.component('dtHeader',dtHeader)
    }
} 
export const progress = {
    install (Vue) {
        Vue.component('dtProgress',dtProgress)
    }
} 
export const inputNumber = {
    install (Vue) {
        Vue.component('dtInputNumber',dtInputNumber)
    }
}
export const swiper = {
    install (Vue) {
        Vue.component('dtSwiper',dtSwiper)
    }
}



// export const picker = {
//     install (Vue) {
//         Vue.component('dtPicker',dtPicker)
//     }
// }
import dtPicker from './picker/picker.vue'
export const picker = {
  install (Vue) {
    Vue.component(dtPicker.name, dtPicker)
  }
}
// if (typeof window !== 'undefined' && window.Vue) {
//   window.Vue.use(picker)
// }

export const tab = {
    install (Vue) {
        Vue.component('dtTab',Tab.Tab)
    }
}
export const tabItem = {
    install (Vue) {
        Vue.component('dtTabItem',Tab.TabItem)
    }
}

export const tabBar = {
    install (Vue) {
        Vue.component('dtTabbar',dtTabBar)
    }
}

export const input = {
    install (Vue) {
        Vue.component('dtInput',dtInput)
    }
}
export const upload = {
    install (Vue) {
        Vue.component('dtUpload',dtUpload)
    }
}
export const list = {
    install (Vue) {
        Vue.component('dtList',dtList)
    }
}
export const badge = {
    install (Vue) {
        Vue.component('dtBadge',dtBadge)
    }
}
export const cardlist = {
    install (Vue) {
        Vue.component('dtCardList',dtCardList)
    }
}
export const drawer = {
    install (Vue) {
        Vue.component('dtDrawer',dtDrawer)
    }
}
export const step = {
    install (Vue) {
        Vue.component('dtStep',dtStep)
    }
}
export const table = {
    install (Vue) {
        Vue.component('dtTable',dtTable)
    }
}
export const annotation = {
    install (Vue) {
        Vue.component('dtAnnotation',dtAnnotation)
    }
}
export const container = {
    install (Vue) {
        Vue.component('dtContainer',dtContainer)
    }
}