export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

export const fetchUsers = params => ({
    type: FETCH_USERS,
    params,
})

export const fetchUsersSuccess = payload => ({
    type: FETCH_USERS_SUCCESS,
    payload,
})

export const fetchUsersFailed = error => ({
    type: FETCH_USERS_FAILED,
    error,
})
