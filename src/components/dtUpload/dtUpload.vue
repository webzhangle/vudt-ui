<template>
    <div class="dt-upload">
        <ul>
            <li v-for="(item,index) in list" :key="index" :style="{backgroundImage:'url(' + item + ')'}">
                <svg-icon icon-class="clear" @click = "clear(index)"></svg-icon>
            </li>
            <li class="inputUpload">
                <svg-icon icon-class="add1"></svg-icon>
                <input type="file" @change="file($event)">
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name : 'dt-upload',
    data () {
        return {
            list: [],
            files: []
        }
    },
    mounted () {

    },
    methods: {
        clear (index) {
            this.list.splice(index,1)
            this.files.splice(index,1)
        },
        file (e,index) {
            this.files.push(e.target.files[0])
            console.log(this.files)
            this.getBase64(e.target.files[0],(val)=>{
                this.list.push(val)
            })
        },
        // file转成base64
        getBase64 (blob,success) {
            var reader = new FileReader();
            reader.readAsDataURL(blob)
            reader.onload=function(e){
                success(reader.result)
            }  
        }
    }
    
}
</script>

<style lang="less" scoped>
@import url('./dtUpload.less');
</style>
