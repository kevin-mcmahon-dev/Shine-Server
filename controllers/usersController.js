const express = require('express');
// const { Conversation } = require('../models');
const db = require('../models');

// Account Page
// router.get("/:id", async function (req, res) {
//     try {
//         const user = await db.User.findById(req.params.id);
//         const conversations = await db.Conversation.find({user: req.params.id}).populate("user");
        
//         const conversation_list = [];
//         const test = [];
//         const connection_list = [];

//         for (let i = 0; i <= conversations.length - 1; i++) {
//             conversation_list[i] = conversations[i].user;
//             test[i] =  await Conversation.find({user: conversation_list[i]}).population("user");
//         }
//     } catch (error) {
//         return console.log(error);
//     }
// })
const accountShow = (req, res) => {
    db.User.findById(req.params.id, (err, foundUser) => {
        if (err) {
            console.log('Error in user#index:', err)

            return res.send("Incomplete user controller function");
        }

        res.status(200).json({ user: foundUser });
    });   
};

// Update Page
const accountUpdate = (req, res) => {
    db.User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedUser) => {
        if (err) {
            console.log('Error in user#update:', err)
    
            return res.send("Incomplete user#update controller function");
        }

        res.status(200).json({
            updatedUser
        });
    });
};

// Create Account
const accountCreate = (req, res) => {
    db.User.create(req.body, (err, savedUser) => {
        if (err) console.log('Error in user#create:', err)

        // Validations and error handling here

        res.status(201).json({ user: savedUser })
    })
}

module.exports = {
    accountShow,
    accountUpdate,
    accountCreate,
};