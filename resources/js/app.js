require('./bootstrap');


// import axios from 'axios'
// import VueAxios from 'vue-axios'
import '../../assets/css/app.css'
import BootstrapVue from 'bootstrap-vue'
// Components
import Headcomponent from './components/Header'
import Bodycomponent from './components/Body'
import Containercomponent from './components/Container'
import Contentcomponent from './components/Content'
import Navbarcomponent from './components/Navbar'
// /Components

// Pages
import Dragdroppages from './pages/Dragdrop'
import News from './pages/News'
import Ticketpages from './pages/Ticket'
import Showimage from './pages/Showimage'
import Validationpages from './pages/Validation'
// /Pages
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(BootstrapVue)
Vue.use(VueRouter)
window.Vue = require('vue').default;

// Vue.component('header-component', require('./components/Header.vue').default);

const router = new VueRouter({
    mode : 'history',
    routes : [
        {
            path : '/dnd',
            name : 'dragndrop',
            component : Dragdroppages
        },
        {
            path : '/news',
            name : 'news',
            component : News
        },
        {
            path : '/ticket',
            name : 'ticket',
            component : Ticketpages
        },
        {
            path : '/showimg',
            name : 'showimg',
            component : Showimage
        },
        {
            path : '/validation',
            name : 'validation',
            component : Validationpages
        }
    ]

})
new Vue({
    el: '#app',
    components : {Headcomponent, Bodycomponent, Containercomponent, Navbarcomponent, Contentcomponent},
    router
});
