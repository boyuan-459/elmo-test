import express from 'express'

import twitter from 'services/twitter'

const router = express.Router()

router.get('/search', async (req, res) => {
    const { q, page = 1, count = 10 } = req.query
    const users = await twitter.get('users/search', {
        q,
        page,
        count,
    })
    return res.json({
        users,
    })
})

router.get('/show/:id', async (req, res) => {
    const { id } = req.params
    const user = await twitter.get('users/show', {
        id,
        include_entities: true,
    })
    const tweets = await twitter.get('statuses/user_timeline', {
        user_id: id,
        count: 5,
    })
    return res.json({
        user,
        tweets,
    })
})

export default router
