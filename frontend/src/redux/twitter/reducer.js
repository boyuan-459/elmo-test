import { Map, List } from 'immutable'

import * as actions from './action'

const initState = new Map({
    users: List(),
    error: null,
})

export default function twitterReducer (state = initState, action) {
    switch (action.type) {
        case actions.FETCH_USERS_SUCCESS:
            return state.set('users', new List(action.payload.users))
        default:
            return state
    }
}
