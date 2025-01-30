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

export function setProducts(state, [loading,response = null]){

    if(response){

        state.products={
            data:response.data,
            links:response.links,
            total:response.total,
            limit:response.per_page,
            from:response.from,
            to:response.to,
            page:response.current_page,
            


        }
    }
    state.products.loading=loading;

}
    
