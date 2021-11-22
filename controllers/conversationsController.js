const db = require('../models');

const index = (req, res) => {
    db.Conversation.find({}, (err, foundConversations, foundMessages) => {
        if (err) console.log('Error in games#index:', err)

        if(!foundConversations || !foundMessages) return res.json({
            message: 'No Conversations or Messages found in database.'
        })

        res.status(200).json({ games: foundGames });
    })
}