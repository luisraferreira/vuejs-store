import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        movies: [],
        title: ''
    },
    mutations: {
        insertMovies(state, payload) {
            state.movies = [];
            state.movies.push(...payload);
        },
        changeTitle(state, payload) {
            state.title = payload
        }
    },
    actions: {
        getMovies({
            state,
            commit
        }) {
            const titleMovie = state.title,
                yearMovie = document.querySelector('#year').value;
            fetch(`http://omdbapi.com/?apikey=e62e1d19&s=${titleMovie}&y=${yearMovie}`)
                .then(json => json.json())
                .then(response => {
                    if (response.Response == "False") return
                    commit('insertMovies', response.Search)
                })
        }
    }
});

export default store;