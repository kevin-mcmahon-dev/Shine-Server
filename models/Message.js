// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const messageSchema = new Schema ({
//     content: {
//         type: String,
//         require: [true, "You must enter a message."]
//     },
//     user: {
//         // _id: mongoose.Types.ObjectId,
//         type: Schema.Types.ObjectId,
//         ref: "User",
//     },
//     conversation: {
//         // _id: mongoose.Types.ObjectId,
//         type: Schema.Types.ObjectId,
//         ref: "Conversation",
//     },
//     deleted: {
//         type: Boolean,
//         default: false,
//     },
// },
//     {
//         // https://stackoverflow.com/questions/12669615/add-created-at-and-updated-at-fields-to-mongoose-schemas
//         // timestamps has createdAt and updatedAt built in. 
//         timestamps: true,
//     }
// );

// const Message = mongoose.model("Message", messageSchema);
// module.exports = Message;