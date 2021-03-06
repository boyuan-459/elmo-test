import styled from 'styled-components'

import Card from 'components/Card'
import Box from 'components/Box'

export const Wrapper = styled(Card)`
    padding: 10px;
`

export const Avatar = styled(Box)`
    margin: 0 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #FFFFFF;
    background-color: #f5a442;
    font-size: 30px;
    font-weight: 500;
`

export const Name = styled.h4`
    margin: 0 0 5px;
`
