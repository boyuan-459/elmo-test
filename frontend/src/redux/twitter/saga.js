import { all, takeEvery, put, fork, call } from 'redux-saga/effects'

import { fetchUsers, fetchUser } from 'services/twitter'
import * as actions from './action'

export function* handleUsersFetch () {
    yield takeEvery(actions.FETCH_USERS, function* (action) {
        try {
            const res = yield call(fetchUsers, action.params)
            console.log('res', res)
            yield put(actions.fetchUsersSuccess(res))
        } catch (error) {
            console.log(error)
            yield put(actions.fetchUsersFailed(error))
        }
    })
}

export default function* rootSaga () {
    yield all([
        fork(handleUsersFetch),
    ])
}
