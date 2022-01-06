const { Conversation } = require('../models');
const db = require('../models');
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

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
        const conversation = await db.Conversation.findById(req.params.id).populate("user").populate("messages.user");
        // const conversation = await db.Conversation.findById(req.params.id).populate("messages.user");

        res.status(200).json({conversation});

    } catch (error) {
        return console.log(error);
    }
}

// Original version that overrides previous values
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

const messageCreate = async (req, res) => {
    try {

        const updatedConversation = await Conversation.findById(req.params.id)
    
        const message = {
            content: req.body.content,
            user: req.currentUser
        }
        console.log(message.content)
        console.log(message.user)
        console.log(req.currentUser)
        updatedConversation.messages.push(message);
        
        await updatedConversation.save()

        res.status(200).json({updatedConversation});

    } catch (err) {
        return console.log(err);
    }
}

//Conversation Create

const conversationCreate = (req, res) => {
    db.Conversation.create(req.body, (err, savedConversation) => {
        // Something like below will need to be supplied to req.body on frontend
        // "content" will be selected user(s)
        // "user" will be currently logged in user
        
        // const message = {
        //     content: req.body.content,
        //     user: req.currentUser
        // }
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
    messageCreate,
    conversationCreate,
    conversationEdit,
    conversationDelete,
};