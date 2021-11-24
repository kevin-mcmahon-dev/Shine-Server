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

//Conversation Create

// const conversationCreate = (req, res) => {
//     db.Conversatioon.create(req.body, (err, savedConversation) => {
//         if (err) console.log('Error in conversation#create:', err)

//         // Validations and error handling here

//         res.status(201).json({ conversation: savedConversation })
//     })
// }

//Conversation Delete

// const conversationDelete = (req, res) => {
//     db.Conversation.findByIdAndDelete(req.params.id, (err, deletedConversation) => {
//         if (err) {
//             console.log('Error in conversation#destroy:', err) 
//             return res.send("Incomplete conversation#destroy controller function");
//         }
    
//         res.status(200).json(
//             {
//                 deletedConversation
//             }
//         );
//     });
// }

module.exports = {
    conversationIndex,
    conversationShow,
    // conversationCreate,
    // conversationDelete,
};