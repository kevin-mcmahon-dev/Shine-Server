const express = require('express');
// const { Conversation } = require('../models');
const db = require('../models');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    try {
        const foundUser = await db.User.findOne({ email: req.body.email });
        
        if (foundUser)
            return res.status(400).json({
                status: 400,
                message: "Email has already been registered. Please try again",
            });

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        const createdUser = await db.User.create({ ...req.body, password: hash });
        
        return res
        .status(201)
        .json({ status: 201, message: "success", createdUser });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Something went wrong. Please try again",
        });
    }
};

const login = async (req, res) => {
    try {
        const foundUser = await db.User.findOne({ email: req.body.email }).select(
            "+password"
        );
        
        if (!foundUser) {
            return res
            .status(400)
            .json({ status: 400, message: "Email or password is incorrect" });
        }
        
        const isMatch = await bcrypt.compare(req.body.password, foundUser.password);
        // check if the passwords match
        if (isMatch) {
            //TODO create a json web token and send response
            // .sign(payload,secretkey,options)
            const signedJwt = await jwt.sign(
                { _id: foundUser._id },
                "supersecretwaffels",
                {
                expiresIn: "8h",
                }
            );
            res.status(200).json({
                status: 200,
                message: "Success",
                token: signedJwt,
            });
        } else {
        // the password provided does not match the password on file.
        return res.status(400).json({
            status: 400,
            message: "Username or password is incorrect",
        });
        }
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Something went wrong. Please try again",
        });
    }
};

const profile = async (req, res) => {
    try {
        const foundUser = await db.User.findById(req.currentUser).populate("conversation");
        /* Added this to get all users to list */ const allUsers = await db.User.find({});
        res.json({ headers: req.headers, user: foundUser, /* Added following section */users: allUsers });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Something went wrong. Please try again",
        });
    }
};

// Update Page
const accountUpdate = async (req, res) => {
    try {
        const updatedUser = await db.User.findById(req.currentUser);
        updatedUser.conversation.push(req.body.content);
        await updatedUser.save();

        res.status(200).json({updatedUser});

    } catch (err) {
        return console.log(err);
    }
};

//Old accountUpdate function

// db.User.findByIdAndUpdate(req.currentUser, req.body, {new: true}, (err, updatedUser) => {
//     if (err) {
//         console.log('Error in user#update:', err)

//         return res.send("Incomplete user#update controller function");
//     }

//     res.status(200).json({
//         updatedUser
//     });
// });

// Account Index will be used for search functionality
const accountIndex = (req, res) => {
    db.User.find({}, (err, foundUsers) => {
        if (err) console.log('Error in user index:', err)

        if(!foundUsers) return res.json({
            message: 'No Users found in database.'
        })

        res.status(200).json({ users: foundUsers});
    })
}

// Two functions below are unnecessary with profile and register functions
// const accountShow = (req, res) => {
//     db.User.findById(req.params.id, (err, foundUser) => {
//         if (err) {
//             console.log('Error in user#index:', err)

//             return res.send("Incomplete user controller function");
//         }

//         res.status(200).json({ user: foundUser });
//     });   
// };


// // Create Account
// const accountCreate = (req, res) => {
//     db.User.create(req.body, (err, savedUser) => {
//         if (err) console.log('Error in user#create:', err)

//         // Validations and error handling here

//         res.status(201).json({ user: savedUser })
//     })
// }

module.exports = {
    register,
    login,
    profile,
    accountIndex,
    accountUpdate,
};