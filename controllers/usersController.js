const express = require('express');
// const { Conversation } = require('../models');
const db = require('../models');

// Account Index will be used for search functionality
// const accountIndex = (req, res) => {
//     db.User.find({}, (err, foundUsers) => {
//         if (err) console.log('Error in user index:', err)

//         if(!foundUsers) return res.json({
//             message: 'No Users found in database.'
//         })

//         res.status(200).json({ users: foundUsers});
//     })
// }

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
// const accountUpdate = (req, res) => {
//     db.User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedUser) => {
//         if (err) {
//             console.log('Error in user#update:', err)
    
//             return res.send("Incomplete user#update controller function");
//         }

//         res.status(200).json({
//             updatedUser
//         });
//     });
// };

// Create Account
// const accountCreate = (req, res) => {
//     db.User.create(req.body, (err, savedUser) => {
//         if (err) console.log('Error in user#create:', err)

//         // Validations and error handling here

//         res.status(201).json({ user: savedUser })
//     })
// }

module.exports = {
    // accountIndex,
    accountShow,
    // accountUpdate,
    // accountCreate,
};