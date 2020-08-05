import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
// import Auth from './modules/auth/all_in_one_index'
import Auth from './modules/auth/index'
import Movies from './modules/movies/index'


Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    modules: {
        auth: Auth,
        movies: Movies
    },
    state: {},
    mutations: {},
    actions: {},
    getters: {}
})