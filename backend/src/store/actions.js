
import axiosClient from "../axios";

export function getUser({commit},data){

    return axiosClient.get('/user',data)
    .then(({data})=>{
        commit('setUser',data)
        return data;
    })
}


 export function login({commit},data){

    return axiosClient.post('/login', data)
     .then(({data}) => {
        commit('setUser', data.user);
        commit('setToken', data.token);
        return data;
    })
}

export function logout({ commit, state }) {
    return axiosClient.post('/logout', null, {
        headers: {
            'Authorization': `Bearer ${state.token}`, // Include the token from the state
        }
    })
    .then(response => {
        commit('setToken', null); // Clear the token in the state
        return response;
    })
    .catch(error => {
        console.error('Logout failed', error);
        throw error; // Propagate the error
    });
}


export function getProducts({commit},{ url=null }){
      commit('setProducts', [true])
      url=url || '/products';
    return axiosClient.get(url)
    .then(res=>{
        commit('setProducts', [false, res.data])
        return res.data;

    })
    .catch(()=>{
        commit('setProducts', [false])

    })
}
