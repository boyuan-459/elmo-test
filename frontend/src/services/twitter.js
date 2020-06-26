import axiosInstance from './axiosInstance'

export function fetchUsers ({ q }) {
    return axiosInstance.get(`/twitter/search?q=${q}`).then(result => {
            return Promise.resolve(result.data)
        }).catch(error => {
            return Promise.reject(error.data)
        })
}

export function fetchUser (id) {
    return axiosInstance.get(`/twitter/show/${id}`).then(result => {
        return Promise.resolve(result.data)
    }).catch(error => {
        return Promise.reject(error.data)
    })
}
