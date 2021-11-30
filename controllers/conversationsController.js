const { Conversation } = require('../models');
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

const conversationShow = async function (req, res) {
    try {
        const conversation = await db.Conversation.findById(req.params.id).populate("user");
        // const conversation = await db.Conversation.findById(req.params.id).populate("messages.user");

        res.status(200).json({conversation});

    } catch (error) {
        return console.log(error);
    }
}

const conversationEdit = async (req, res) => {
    try {

        const updatedConversation = await Conversation.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )

        res.status(200).json(updatedConversation);

    } catch (err) {
        return console.log(err);
    }
}

// const conversationEditPage = async (req, res) => {
//     try {
//         const foundConversation = await Conversation.findById(req.params.id).populate("user");
//         console.log(foundConversation);
//         console.log(foundConversation.messages[0]._id)
//         res.status(200).json(foundConversation);
//     } catch (err) {
//         return console.log(err);
//     }
// }

//Conversation Create

const conversationCreate = (req, res) => {
    db.Conversation.create(req.body, (err, savedConversation) => {
        if (err) console.log('Error in conversation#create:', err)

        // Validations and error handling here

        res.status(201).json({ conversation: savedConversation })
    })
}

//Conversation Delete

const conversationDelete = (req, res) => {
    db.Conversation.findByIdAndDelete(req.params.id, (err, deletedConversation) => {
        if (err) {
            console.log('Error in conversation#destroy:', err) 
            return res.send("Incomplete conversation#destroy controller function");
        }
    
        res.status(200).json(
            {
                deletedConversation
            }
        );
    });
}

module.exports = {
    conversationIndex,
    conversationShow,
    conversationEdit,
    conversationCreate,
    // conversationEditPage,
    conversationDelete,
};