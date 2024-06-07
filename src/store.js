import { reactive } from "vue";
const store={
    movies:[],
    series:[],
    keySearch:'',
    apiInfo:{
        key:'064a33b676e5e0bcdb5d9a7106ed8f18',
        baseUrl:'https://api.themoviedb.org/3/search/',
        endpoints: {
            movies:'movie',
            tvs:'tv',
        },
    }
}