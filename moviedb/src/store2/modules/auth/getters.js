const isLoggedIn = state => !!state.token;
const authStatus = state => state.status;
const user = state => state.user;

export {
    isLoggedIn,
    authStatus,
    user
};