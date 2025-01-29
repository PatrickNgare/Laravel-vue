export function setUser(state, user) {
    state.user.data = user;

}

export function setToken(state, token) {
    state.user.token = token;
    if(token){
        localStorage.setItem('TOKEN', token);
}
else{
    localStorage.removeItem('TOKEN');
}
}

export function setProducts(state, [loading,response = {}]){

    state.products.loading=loading;
    state.products.data=response.data;
}
