const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Messages = require('./message');

const conversationSchema = new Schema ({
    name: {
        type: String,
        default: "Conversation Name"
    },
    avatar: {
        type: String,
        default: "https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1&resize=620%2C4000&ssl=1",
    },
    user: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
    messages: [{
        content: {
            type: String,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    }],
},
    {
        timestamps: true,
    }
);

const Conversation = mongoose.model("Conversation", conversationSchema);
module.exports = Conversation;