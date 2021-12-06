<template>
    <div class="navbar-mastering mt-1">
        <ul class="list-group">
            <li class="list-group-item">
                <router-link :to="{name : 'dragndrop'}">Drag and Drop</router-link>
            </li>
            <li class="list-group-item">
                <router-link :to="{name : 'news'}">News</router-link>
            </li>
            <li class="list-group-item">
                <router-link :to="{name : 'ticket'}">Ticket</router-link>
            </li>
            <li class="list-group-item">
                <router-link :to="{name : 'showimg'}">Show Image</router-link>
            </li>
            <li class="list-group-item">
                <router-link :to="{name : 'validation'}">Validation</router-link>
            </li>
        </ul>
    </div>
</template>