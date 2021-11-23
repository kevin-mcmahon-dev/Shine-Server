const db = require('../models');

const conversationIndex = (req, res) => {
    db.Conversation.find({}, (err, foundConversations) => {
        if (err) console.log('Error in conversation index:', err)

        if(!foundConversations) return res.json({
            message: 'No Conversations found in database.'
        })

        res.status(200).json({ conversations: foundConversations});
    })
}

module.exports = {
    conversationIndex,
};