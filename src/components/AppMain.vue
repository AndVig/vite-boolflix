<script>

    import {store} from '../store'
    
    export default{
        name: 'AppMain',
        data(){
        return{
            store,
        }
    },
        
    }
</script>

<template>
    
    <div>
        <ul>
            <li v-for="movie in store.movies">
                <p>Titolo: {{ movie.title }}</p>
                <p>Titolo originale: {{ movie.original_title }}</p>
                <p>Lingua: {{ movie.original_language }}</p>
                <p>Voto: {{ movie.vote_average }}</p>
                
            </li>
        </ul>
    </div>
</template>

<style>

</style>
