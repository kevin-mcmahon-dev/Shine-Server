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

const conversationShow = (req, res) => {
    db.Conversation.findById(req.params.id, (err, foundConversation) => {
        if (err) console.log('Error in conversation show:', err)

        if(!foundConversation) return res.json({
            message: 'No Conversation found in database.'
        })

        res.status(200).json({ conversation: foundConversation});
    })
}

module.exports = {
    conversationIndex,
    conversationShow,
};