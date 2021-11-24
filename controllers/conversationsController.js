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


// /conversations/:id
// This will find the conversation and find all messages that have that conversations id
// Is it possible to do res1 and res2 in this way?
// How else can you go about doing two queries within one API call?

// const messageShow = (req, res1, res2) => {
//     db.Conversation.findById(req.params.id, (err, foundConversation) => {
//         if (err) console.log('Error in conversation show:', err)

//         if(!foundConversation) return res1.json({
//             message: 'No Conversation found in database.'
//         })

//         res1.status(200).json({ conversation: foundConversation});
//     })
//     db.Message.find({/*filter for all messages that have req.params.id*/}, (err, foundMessages) => {
//         if (err) console.log('Error in message show:', err)

//         if(!foundMessages) return res2.json({
//             message: 'No meessages found in database.'
//         })

//         res2.status(200).json({ messages: foundMessages});
//     })
// }

// Message update route

const messageUpdate = (req, res) => {
    db.Message.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedMessage) => {
        if (err) {
            console.log('Error in message#update:', err)
    
            return res.send("Incomplete message#update controller function");
        }

        res.status(200).json({
            updatedMessage
        });
    });
}

module.exports = {
    conversationIndex,
    conversationShow,
};