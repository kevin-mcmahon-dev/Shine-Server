const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        type: String,
        require: [true, "Your name must be provided."]
    },
    username: {
        type: String,
        require: [true, "A username must be supplied."],
        unique: true,
    },
    password: {
        type: String,
        require: [true, "A password must be entered."],
    },
    avatar: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    connections: [{
        type: mongoose.Types.ObjectId,
        ref: "User",
    }],
},
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;