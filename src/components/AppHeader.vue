<script>
import axios from 'axios';
import {store} from '../store'

export default{
    name: 'AppHeader',
    data(){
        return{
            store,
        }
    },
    methods:{
        searchMovie(){
            const url =this.store.apiInfo.baseUrl + this.store.apiInfo.endpoints.movies;
            axios.get(url, {
                params:{
                    api_key: this.store.apiInfo.key,
                    language: this.store.languageKey,
                    query:this.store.searchKey,
                }
            })
            .then((response)=> {
                console.log(response.data.results);
                this.store.movies=response.data.results;
            })
            .catch((error)=> console.log(error));
        },
    }
}
</script>

<template>
    <header class="d-flex justify-content-between align-items-center p-3">
            <h1>Boolflix</h1>
        <div>
            
            <input type="text" id="search-movie" placeholder="Ricerca" v-model="store.searchKey">
            <button @click="searchMovie"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </header>

    
    
</template>

<style>
header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #0e0e0e;
    z-index: 1;

    h1 {
        color: red;
    }
}
</style>
