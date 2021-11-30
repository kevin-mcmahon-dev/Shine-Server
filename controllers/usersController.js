const express = require('express');
// const { Conversation } = require('../models');
const db = require('../models');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    try {
        const foundUser = await db.User.findOne({ username: req.body.username });
        
        if (foundUser)
            return res.status(400).json({
                status: 400,
                message: "Username has already been registered. Please try again",
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
        const foundUser = await db.User.findOne({ username: req.body.username }).select(
            "+password"
        );
        
        if (!foundUser) {
            return res
            .status(400)
            .json({ status: 400, message: "Username or password is incorrect" });
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
                expiresIn: "1h",
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
        const foundUser = await db.User.findById(req.currentUser);
        
        res.json({ headers: req.headers, user: foundUser });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Something went wrong. Please try again",
        });
    }
};

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
    register,
    login,
    profile,
    accountIndex,
    accountShow,
    accountUpdate,
    accountCreate,
};