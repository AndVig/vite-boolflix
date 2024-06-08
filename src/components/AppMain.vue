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
        <!-- Risultati a lista -->
        <!-- <ul> <p>Movies</p>
            <li  v-for="movie in store.movies">
                <p>Titolo: {{ movie.title }}</p>
                <p>Titolo originale: {{ movie.original_title }}</p>
                <img :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`">
                <p  v-if="movie.original_language==='it'">Lingua:  <img class="bandiera" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg" alt=""></p>
                <p v-else-if="movie.original_language==='en'">Lingua: <img class="bandiera" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg" alt=""></p>
                <p v-else>Lingua: {{ movie.original_language }}</p>
                <p>Voto: {{ movie.vote_average }}</p>
                <p><i v-for="n in 5" :key="n" class="fa-star" :class="{'fa-solid' : n <= Math.round(movie.vote_average / 2), 'fa-regular': n > Math.round(movie.vote_average / 2) }"></i></p>
                
            </li>
        </ul>
        <ul> <p>Series</p>
            <li  v-for="serie in store.series">
                <p>Titolo: {{ serie.title }}</p>
                <p>Titolo originale: {{ serie.original_title }}</p>
                <img :src="`https://image.tmdb.org/t/p/w342/${serie.poster_path}`">
                <p  v-if="serie.original_language==='it'">Lingua:  <img class="bandiera" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg" alt=""></p>
                <p v-else-if="serie.original_language==='en'">Lingua: <img class="bandiera" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg" alt=""></p>
                <p v-else>Lingua: {{ serie.original_language }}</p>
                <p>Voto: {{ serie.vote_average }}</p>
                <p><i v-for="n in 5" :key="n" class="fa-star" :class="{'fa-solid' : n <= Math.round(serie.vote_average / 2), 'fa-regular': n > Math.round(serie.vote_average / 2) }"></i></p>
            </li>
        </ul> -->
        <p>Movies</p>
        <div class="d-flex justify-content-around flex-wrap">
            <div v-for="movie in store.movies" class="flip-card my-5 ">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`"> 
                    </div>
                    <div class="flip-card-back ">
                        <p>Titolo: {{ movie.title }}</p>
                        <p>Titolo originale: {{ movie.original_title }}</p>
                        <p  v-if="movie.original_language==='it'">Lingua:  <img class="bandiera" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg" alt=""></p>
                        <p v-else-if="movie.original_language==='en'">Lingua: <img class="bandiera" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg" alt=""></p>
                        <p v-else>Lingua: {{ movie.original_language }}</p>
                        <p><i v-for="n in 5" :key="n" class="fa-star" :class="{'fa-solid' : n <= Math.round(movie.vote_average / 2), 'fa-regular': n > Math.round(movie.vote_average / 2) }"></i></p>   
                    </div>
                </div>
            </div>
        </div>
        <p>Series</p>
        <div class="d-flex justify-content-around flex-wrap">
            <div v-for="serie in store.series" class="flip-card my-5 ">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img :src="`https://image.tmdb.org/t/p/w342/${serie.poster_path}`"> 
                    </div>
                    <div class="flip-card-back ">
                        <p>Titolo: {{ serie.title }}</p>
                        <p>Titolo originale: {{ serie.original_title }}</p>
                        <p  v-if="serie.original_language==='it'">Lingua:  <img class="bandiera" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg" alt=""></p>
                        <p v-else-if="serie.original_language==='en'">Lingua: <img class="bandiera" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg" alt=""></p>
                        <p v-else>Lingua: {{ serie.original_language }}</p>
                        <p><i v-for="n in 5" :key="n" class="fa-star" :class="{'fa-solid' : n <= Math.round(serie.vote_average / 2), 'fa-regular': n > Math.round(serie.vote_average / 2) }"></i></p>   
                    </div>
                </div>
            </div>
        </div>
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
    .flip-card {
        background-color: transparent;
        width: 343px;
        height: 514px;
        perspective: 1000px;
    }

    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
    }

    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .flip-card-front {
        background-color: #bbb;
        color: black;
    }

    .flip-card-back {
        padding-top: 10rem;
        
        background-color: #2980b9;
        color: white;
        transform: rotateY(180deg);
    }
</style>
