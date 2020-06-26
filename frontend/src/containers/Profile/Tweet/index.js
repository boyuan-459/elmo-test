import React from 'react'
import format from 'date-fns/format'

import { Wrapper, Time } from './styles'

const Tweet = ({ tweet }) => {
    return (
        <Wrapper className="tweet" direction="column">
            <div>{tweet.text}</div>
            <Time>{format(new Date(tweet.created_at), 'MMM d yyyy h:mm a')}</Time>
        </Wrapper>
    )
}

export default Tweet
