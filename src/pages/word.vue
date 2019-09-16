<template>
    <dt-container>
        <div class="contanier">
            <ul>
                <li><dt-word type="title-1">一级标题一级标题一级标题一级标题</dt-word></li>
                <li><dt-word type="title-2">二级标题二级标题二级标题二级标题，二级标题</dt-word></li>
                <li><dt-word type="title-3">三级标题三级标题三级标题三级标题，三级标题三级标题</dt-word></li>
                <li>
                    <dt-word type="text">
                        正文内容正文内容正文内容，正文内容正文内容，正文内容正文内容正文内容正文内容，正文内容正文内容正文内容正文内容，正文内容正文内容
                        正文内容正文内容，正文内容正文内容，正文内容正文内容正文内容正文内容正文内容，正文内容正文内容正文内容正文内容正文内容正文内容，
                        正文内容
                    </dt-word>
                </li>
            </ul>
        </div>
    </dt-container>
    
</template>
<script>
import Vue from 'vue'
import { word,container } from '@/components/index';
Vue.use(word)
Vue.use(container)
export default {
    
}
</script>
<style lang="less" scoped>
ul {
    li {
        margin-bottom: 15px;
    }
}
</style>
