import { all } from 'redux-saga/effects'

import twitterSaga from './twitter/saga'

export default function* rootSaga (getState) {
    yield all([
        twitterSaga(),
    ])
}
