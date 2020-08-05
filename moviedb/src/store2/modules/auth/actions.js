import axios from 'axios';
export const login = async ({
    commit
}, user) => {
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
            console.log(err);
        })
}

export const register = async ({
    commit
}, user) => {
    commit('auth_request')
    return await axios({
            url: 'http://127.0.0.1:8000/api/auth/signup',
            data: user,
            method: 'POST'
        })
        .then(resp => {
            const token = resp.data.access_token
            const isLogin = resp.data.isCreated
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
}


export const logout = ({
    commit
}) => {
    return new Promise((resolve) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
    })
}