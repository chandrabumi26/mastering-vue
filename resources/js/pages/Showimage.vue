<template>
    <div class="img-page-container m-2 rounded">
        <img v-for="(dataImage, index) in dataImages.slice(0,1)" v-bind:key="index" src="" height="auto" width="auto">
    </div>
</template>
<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'
Vue.use(axios)
Vue.use(VueAxios)
export default {
    data(){
        return{
            dataImages : []
        }
    },
    mounted(){
        axios.get('https://api.imgflip.com/get_memes').then(Response=>(this.dataImages = Response.data.data.memes))
    }
}
</script>