import { reactive } from "vue";

export const store={
    movies:[],
    series:[],
    searchKey:'',
    languageKey:'it-IT',
    apiInfo:{
        key:'064a33b676e5e0bcdb5d9a7106ed8f18',
        baseUrl:'https://api.themoviedb.org/3/search/',
        endpoints: {
            movies:'movie',
            series:'tv',
        },
    }
}