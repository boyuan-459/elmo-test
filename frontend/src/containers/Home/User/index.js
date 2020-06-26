import React from 'react'
import { Link } from 'react-router-dom'

import Card from 'components/Card'
import { Wrapper } from './styles'

const User = ({ user }) => {
    return (
        <Wrapper>
            <Link to={`/profile/${user.id}`}>
                <Card className="card" direction="column">
                    <div>Name: {user.name}</div>
                    <p>{user.description}</p>
                </Card>
            </Link>
        </Wrapper>
    )
}

export default User
