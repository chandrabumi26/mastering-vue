<template>
    <div class="img-page-container m-2 rounded">
        <rise-loader :loading="loading" :color="green" :size="size"></rise-loader>
        <img v-for="(dataImage, index) in dataImages.slice(0,1)" v-bind:key="index" :src=dataImage.url height="300" width="300">
        <!-- <div img v-for="(dataImage, index) in dataImages.slice(0,1)" v-bind:key="index">{{dataImage.title}}</div> -->
    </div>
</template>
<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'
import RiseLoader from 'vue-spinner/src/RiseLoader.vue'
Vue.use(axios)
Vue.use(VueAxios)
export default {
    data(){
        return{
            green : '#3E7C17',
            size : '50px',
            dataImages : [],
            loading : false
        }
    },
    components : {
        RiseLoader
    },
    mounted(){
        this.loading = true
        axios.get('https://jsonplaceholder.typicode.com/albums/1/photos').then(Response=>(this.dataImages = Response.data)).catch((error)=>{
            console.log(error)
        }).finally(()=>{
            // this.loading = false
        })
    }
}
</script>