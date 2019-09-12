<template>
    <div class="dt-tabbar-container">
        <div class="dt-tabbar">
            <div @click="touch(index)" v-for="(item,index) in list" :key="index">
                <ul :class="{active:item.selected}">
                    <li>
                        <svg-icon :icon-class="item.icon"></svg-icon>
                        <dt-badge :text="item.badge" v-if="item.badge"></dt-badge>
                    </li>
                    <li><p>{{ item.title }}</p></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import dtBadge from '../dtBadge/dtBadge.vue'
export default {
    components: {
        dtBadge
    },
    props: {
        list: {
            type: Array,
            default: ()=>[]
        }
        
    },
    methods: {
        touch (index) {
            this.$set(this.list[index],'selected',true)
            for (var i = 0;i<this.list.length;i++) {
                if (i != index) {
                    this.$set(this.list[i],'selected',false)
                }
            }
            this.$emit('tabbar',index)
        }
    }
}
</script>
<style lang="less" scoped>
@import url('./tabbar.less');
</style>
