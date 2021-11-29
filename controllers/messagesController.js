const express = require("express");
const db = require('../models');

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
//     db.Message.find({conversation: {_id: req.params.id}}, (err, foundMessages) => {
//         if (err) console.log('Error in message show:', err)

//         if(!foundMessages) return res2.json({
//             message: 'No meessages found in database.'
//         })

//         res2.status(200).json({ messages: foundMessages});
//     })
// }

const messageShow = async function (req, res) {
    try {
        const conversation = await db.Conversation.findById(req.params.id);
        // const messages = await db.Message.find({conversation: req.params.id})
        // const messages = await db.Message.find({conversation: {_id: req.params.id}})

        // .populate("user");

        // const user_ids = [];
        // const user_log = [];
        // console.log(messages);
        // console.log("message array " + messages[1].user._id);
        // console.log("I'm console logging messages array" + messages);
        // for (let i = 0; i <= messages.length - 1; i++) {
        //     user_ids[i] = messages[i].user._id;
        //     console.log(`user_id array ${messages[i].user._id}`);
        //     console.log(user_ids[i]);
        //     user_log[i] = await db.Message.find({user: user_ids[i]}).populate("user");
        //     console.log(`user_log array ${user_log[i]}`);
        // }

        // console.log("full user_id array: " + user_ids)
        const context = {
            conversation, 
            // messages,
            // user_log,
        }

        res.status(200).json({context});

    } catch (error) {
        return console.log(error);
    }
}

// Message Create Route
// const messageCreate = (req, res) => {
//     db.Message.create(req.body, (err, savedMessage) => {
//         if (err) console.log('Error in message#create:', err)

//         // Validations and error handling here

//         res.status(201).json({ message: savedMessage })
//     })
// }

// Message update route

// const messageUpdate = (req, res) => {
//     db.Message.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedMessage) => {
//         if (err) {
//             console.log('Error in message#update:', err)
    
//             return res.send("Incomplete message#update controller function");
//         }

//         res.status(200).json({
//             updatedMessage
//         });
//     });
// }

//Message delete route

// const messageDelete = (req, res) => {
//     db.Message.findByIdAndDelete(req.params.id, (err, deletedMessage) => {
//         if (err) {
//             console.log('Error in message#destroy:', err) 
//             return res.send("Incomplete message#destroy controller function");
//         }
    
//         res.status(200).json(
//             {
//                 deletedMessage
//             }
//         );
//     });
// }

module.exports = {
    messageShow,
    // messageCreate,
    // messageUpdate,
    // messageDelete,
};
