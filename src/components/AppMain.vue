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
    
    <main >
        <ul >
            <li  v-for="movie in store.movies">
                <p>Titolo: {{ movie.title }}</p>
                <p>Titolo originale: {{ movie.original_title }}</p>
                <p  v-if="movie.original_language==='it'">Lingua:  <img class="bandiera" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg" alt=""></p>
                <p v-else-if="movie.original_language==='en'">Lingua: <img class="bandiera" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg" alt=""></p>
                <p v-else>Lingua: {{ movie.original_language }}</p>
                <p>Voto: {{ movie.vote_average }}</p>
                
            </li>
        </ul>
    </main>
</template>

<style>
    main{
        position: fixed;
        top: 95px;
        left: 0;
        height: 92%;
        overflow-y: auto;
        width: 100%;
        padding-top: 3rem;
        padding-left: 3rem;
        padding-right: 3rem;
        background-color: #a7a7a7;
        
    }
    .bandiera{
        height: 1rem;
    }
</style>
