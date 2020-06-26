import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from 'redux/twitter/action'
import { getUsers } from 'selectors'
import Box from 'components/Box'
import TextInput from 'components/TextInput'
import Button from 'components/Button'
import Block from 'components/Block'
import User from './User'
import { Wrapper } from './styles'

const Home = ({ fetchUsers, users }) => {
    const [ keyword, setKeyword ] = useState('')

    const searchUsers = useCallback(() => {
        fetchUsers({ q: keyword })
    }, [ keyword ])

    return (
        <Wrapper>
            <Box>
                <TextInput name="keyword" value={keyword} onChange={value => setKeyword(value)} />
                <Button onClick={searchUsers}>Search</Button>
            </Box>
            {users.map(user => <User className="user" key={user.id} user={user} />)}
        </Wrapper>
    )
}

const mapStateToProps = state => {
    return {
        users: getUsers(state),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers (params) {
            dispatch(actions.fetchUsers(params))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
