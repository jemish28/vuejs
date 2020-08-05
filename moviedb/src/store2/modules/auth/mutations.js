export const auth_request = (state) => {
    state.status = 'loading'
}

export const auth_success = (state, {
    token,
    user
}) => {
    state.status = 'success'
    state.token = token
    state.user = user
}

export const auth_error = (state) => {
    state.status = 'error'
}

export const logout = (state) => {
    state.status = ''
    state.token = ''
    state.user = ''
}