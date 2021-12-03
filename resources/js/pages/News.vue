<template>
    <div class="d-block p-1 justify-content-center">
        <div v-for="bpi in newsData" :key="bpi.code" class="news-card shadow-sm rounded d-block">
            <h5>{{ bpi.description }}</h5>
            <p>{{ bpi.rate }}</p>
        </div>
    </div>
</template>
<script>
import VueAxios from 'vue-axios'
import axios from 'axios'
import Vue from 'vue'
Vue.use(axios)
Vue.use(VueAxios)
export default {
    data () {
        return {
            newsData : [],
        }
    },
    mounted(){
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(Response => (
            this.newsData = Response.data.bpi
            ))
        
    }
}
</script>