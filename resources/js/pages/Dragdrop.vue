<template>
    <div class="d-flex">
        <div class="drop-zone rounded shadow-sm" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
            <div class="card" v-for="item in getList(1)" :key="item.id" draggable="true" @dragstart="startDrag($event, item)">{{item.title}}</div>
        </div>

        <div class="drop-zone rounded shadow-sm" @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
            <div class="card" v-for="item in getList(2)" :key="item.id" draggable="true" @dragstart="startDrag($event, item)">{{item.title}}</div>
        </div>
    </div>
</template>

<script>
import vueCompositionApi, { ref } from '@vue/composition-api'
import Vue from 'vue'
Vue.use(vueCompositionApi)
const items = ref([
    {id:0, title:'Item One', list:1},
    {id:1, title:'Item Two', list:1},
    {id:2, title:'Item Three', list:2}
])
export default {
    methods : {
        getList : function(list){
            return items.value.filter((item) => item.list == list)
        },
        startDrag : function(event, item){
            console.log(item)
            event.dataTransfer.dropEffect = 'move'
            event.dataTransfer.effectAllowed = 'move'
            event.dataTransfer.setData('itemID', item.id)
        },
        onDrop : function(event, list){
            const itemID = event.dataTransfer.getData('itemID')
            const item = items.value.find((item)=> item.id == itemID)
            item.list = list
        }
    }
}
</script>