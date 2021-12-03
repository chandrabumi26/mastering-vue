<template>
    <div class="d-block p-1 justify-content-center">
        <div class="history-ticket rounded d-block">
            <table class="table m-1">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- <tr v-for="ticket in tickets" :key="ticket.id">
                        <td>Tupac</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Biggie Smalls</td>
                    </tr> -->
                    <tr v-for="(ticket, index) in tickets.slice(0, 5)" v-bind:key="index">
                        <td>{{ticket.id}}</td>
                        <td>{{ticket.name}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="ticket-input rounded d-block mt-1">
            <button @click="addRow" class="btn btn-success m-1">New Ticket</button>
            <br>
                <div class="input-container m-2 p-2 rounded"
                    v-for="(item, counter) in items"
                    v-bind:key="counter">
                    <button class="btn btn-danger" @click="deleteRow(counter)">Delete</button>
                    <label>{{counter+1}}. Name :</label>
                    <input type="text" required>
                    <label>Top Gun :</label>
                    <input type="text" required> 
                </div>
        </div>
        
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
        return {
            items:[
                {
                    id : ''
                }
            ],
            tickets : []
        }
    },
    methods : {
        addRow(){
            this.items.push({
                id : '',
            })
        },
        deleteRow(counter){
            this.items.splice(counter,1);
        }
    },
    mounted(){
        axios.get('https://api.imgflip.com/get_memes')
        .then(Response=>(this.tickets = Response.data.data.memes))
    }
}
</script>