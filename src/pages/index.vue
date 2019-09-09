<template>
    <div class="main">
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <router-link :to="item.link">{{ item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data () {
        return {
            list: [
                {
                    name: '按钮',
                    link: 'Button'
                },
                {
                    name: '弹窗',
                    link: 'Message'
                },
                {
                    name: '多选',
                    link: 'CheckBox'
                },
                {
                    name: '单选',
                    link: 'Radio'
                },
                {
                    name: '计数器',
                    link: 'inputNumber'
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.main {
    ul {
        display: flex;
        flex-wrap: wrap;
        li {
            width: 33.33%;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>
