import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        status: '',
        token: '',
        user: {},
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading'
        },
        auth_success(state, {
            token,
            user
        }) {
            state.status = 'success'
            state.token = token
            state.user = user
        },
        auth_error(state) {
            state.status = 'error'
        },
        logout(state) {
            state.status = ''
            state.token = ''
        },
    },
    actions: {
        async login({
            commit
        }, user) {
            commit('auth_request')
            return await axios({
                    url: 'http://127.0.0.1:8000/api/auth/login',
                    data: user,
                    method: 'post'
                })
                .then(resp => {
                    const token = resp.data.access_token
                    const isLogin = resp.data.isLogin
                    const user = resp.data.user
                    localStorage.setItem('token', token)
                    localStorage.setItem('isLogin', isLogin)
                    axios.defaults.headers.common['Authorization'] = token
                    commit('auth_success', {
                        token,
                        user
                    })
                })
                .catch(err => {
                    commit('auth_error')
                    localStorage.removeItem('token')
                })
        },

        async register({
            commit
        }, user) {
            commit('auth_request')
            return await axios({
                    url: 'http://127.0.0.1:8000/api/auth/signup',
                    data: user,
                    method: 'POST'
                })
                .then(resp => {
                    const token = resp.data.access_token
                    const isLogin = resp.data.isLogin
                    const user = resp.data.user
                    localStorage.setItem('token', token)
                    localStorage.setItem('isLogin', isLogin)
                    axios.defaults.headers.common['Authorization'] = token
                    commit('auth_success', {
                        token,
                        user
                    })
                })
                .catch(err => {
                    commit('auth_error', err)
                    localStorage.removeItem('token')
                })
        },
        logout({
            commit
        }) {
            return new Promise((resolve, reject) => {
                commit('logout')
                localStorage.removeItem('token')
                localStorage.clear();
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        }

    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
        user: state => state.user
    }
}