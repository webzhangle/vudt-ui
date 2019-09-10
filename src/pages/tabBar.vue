<template>
    <div>
        
        <dt-tabbar>
            <dt-tabbar-item>
                <img slot="icon" src="../assets/demo/icon_nav_button.png">
                <span slot="label">ui设计</span>
            </dt-tabbar-item>
            <dt-tabbar-item show-dot>
                <img slot="icon" src="../assets/demo/icon_nav_msg.png">
                <span slot="label">web前端</span>
            </dt-tabbar-item>
            <dt-tabbar-item selected link="/component/demo">
                <img slot="icon" src="../assets/demo/icon_nav_article.png">
                <span slot="label">java后台</span>
            </dt-tabbar-item>
            <dt-tabbar-item badge="2">
                <img slot="icon" src="../assets/demo/icon_nav_cell.png">
                <span slot="label">产品</span>
            </dt-tabbar-item>
        </dt-tabbar>
    </div>
</template>
<script>
import Vue from 'vue'
import { tabBar,tabBarItem } from '@/components/index';
Vue.use(tabBar)
Vue.use(tabBarItem)
export default {
    
}
</script>