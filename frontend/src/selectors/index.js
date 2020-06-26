import get from 'lodash/get'
import { createSelector } from 'reselect'

export const getTwitterData = state => get(state, 'Twitter', {})

export const getUsers = createSelector([ getTwitterData ], item => {
    return item.get('users').toArray();
});
