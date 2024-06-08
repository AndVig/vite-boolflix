<script>
import axios from 'axios';
import {store} from './store'

export default{
    name: 'Boolflix',
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
    <h1>Boolflix</h1>
    <div>
        <label for="">Ricerca</label>
        <input type="text" id="search-movie" v-model="store.searchKey">
        <button @click="searchMovie">Cerca</button>
    </div>
</template>

<style>

</style>
