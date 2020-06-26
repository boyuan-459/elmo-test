import React from 'react'
import { Link } from 'react-router-dom'

import Box from 'components/Box'
import { Wrapper } from './styles'

const Nav = () => {
    return (
        <Wrapper>
            <Link to='/'>Home</Link>
        </Wrapper>
    )
}

export default Nav
