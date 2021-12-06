<template>
    <div class="img-page-container m-2 rounded">
        <img v-for="(dataImage, index) in dataImages.slice(0,1)" v-bind:key="index" :src=dataImage.url height="300" width="300">
        <!-- <div img v-for="(dataImage, index) in dataImages.slice(0,1)" v-bind:key="index">{{dataImage.title}}</div> -->
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
        axios.get('https://jsonplaceholder.typicode.com/albums/1/photos').then(Response=>(this.dataImages = Response.data))
    }
}
</script>