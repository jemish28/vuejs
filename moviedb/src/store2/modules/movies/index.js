import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../../../routes'
Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        moviesList: [],
        movieDetail: [],
        status: '',
        page: 1
    },

    mutations: {
        _request(state) {
            state.status = 'loading'
        },
        _error(state) {
            state.status = 'error'
        },

        _success(state, {
            moviesList,
        }) {
            state.status = 'success'
            let results = [...state.moviesList, ...moviesList];
            state.moviesList = results
        },

        _detailSuccess(state, {
            movieDetail
        }) {
            state.status = 'success'
            state.movieDetail = movieDetail
        },

        _resetDetail(state) {
            state.status = 'success'
            state.movieDetail = []
        },

    },

    actions: {
        async getMovies({
            commit
        }, page) {
            commit('_request')
            return await axios({
                    url: 'https://api.themoviedb.org/3/movie/upcoming?api_key=38252124dbbb11a893376bd6da75d318&language=en-US&page=' + page,
                    method: 'get'
                })
                .then(resp => {
                    console.log('resp movieslist', resp);
                    const moviesList = resp.data.results
                    const page = resp.data.page
                    commit('_success', {
                        moviesList,
                        page
                    })
                })
                .catch(err => {
                    commit('_error')
                    console.log(err);
                })
        },

        async getMovieDetail({
            commit
        }) {
            commit('_request')
            return await axios({
                    url: "https://api.themoviedb.org/3/movie/" + router.currentRoute.params.id + "?api_key=38252124dbbb11a893376bd6da75d318&language=en-US",
                    method: 'get'
                })
                .then(resp => {
                    const movieDetail = resp.data
                    commit('_detailSuccess', {
                        movieDetail,
                    })
                })
                .catch(err => {
                    commit('_error')
                    console.log(err);
                })
        },

    },

    getters: {
        moviesList: state => state.moviesList,
        movieDetail: state => state.movieDetail,
    }
}