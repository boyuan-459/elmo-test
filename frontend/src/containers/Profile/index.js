import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Box from 'components/Box'
import { fetchUser } from 'services/twitter'
import Tweet from './Tweet'
import { Wrapper, Avatar, Name } from './styles'

const Profile = () => {
    const { id } = useParams()
    const [ user, setUser ] = useState({})
    const [ tweets, setTweets ] = useState([])

    useEffect(() => {
        async function getUser () {
            const user = await fetchUser(id)
            console.log('user', user.user)
            setUser(user.user)
            setTweets(user.tweets)
        }
        getUser()
    }, [])

    return (
        <Wrapper direction="column">
            <Box>
                <Avatar><img src={user.profile_image_url_https} /></Avatar>
                <Box direction="column">
                    <Name>{user.name}</Name>
                    <div>{user.followers_count} followers</div>
                </Box>
            </Box>
            {tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} /> )}
        </Wrapper>
    )
}

export default Profile
