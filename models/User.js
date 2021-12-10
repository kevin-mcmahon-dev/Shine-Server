const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        type: String,
        required: [true, "Your name must be provided."]
    },
    username: {
        type: String,
        required: [true, "A username must be supplied."],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "An email must be supplied"],
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
    password: {
        type: String,
        required: [true, "A password must be entered."],
        select: false,
    },
    avatar: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    connections: [{
        // _id: mongoose.Types.ObjectId,
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
    conversation: [{
        // _id: mongoose.Types.ObjectId,
        type: Schema.Types.ObjectId,
        ref: "Conversation",
    }],
    signup_date: {
        type: Date,
        default: Date.now,
    }
});

userSchema.set("toJSON", {
    transform: (doc, ret, opt) => {
        delete ret["password"];
        return ret;
    },
});

const User = mongoose.model("User", userSchema);
module.exports = User;