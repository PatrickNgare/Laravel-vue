import axiosClient from "../axios";

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
