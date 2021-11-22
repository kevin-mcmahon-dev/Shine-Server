const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
        type: mongoose.Types.ObjectId,
        ref: "User",
    }],
    lastMessage: {
        type: mongoose.Types.ObjectId,
        ref: "Message",
    },
},
    {
        timestamps: true,
    }
);

const Conversation = mongoose.model("Conversation", conversationSchema);
module.exports = Conversation;