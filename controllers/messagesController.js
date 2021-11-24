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
//     db.Message.find({/*filter for all messages that have req.params.id*/}, (err, foundMessages) => {
//         if (err) console.log('Error in message show:', err)

//         if(!foundMessages) return res2.json({
//             message: 'No meessages found in database.'
//         })

//         res2.status(200).json({ messages: foundMessages});
//     })
// }

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

// module.exports = {
//     messageShow,
//     messageCreate,
//     messageUpdate,
//     messageDelete,
// };
