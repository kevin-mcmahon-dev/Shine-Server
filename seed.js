// Users
// {   name: "Kevin", username: "kevmcm", password: "sd48920khsdlkfjf" },
// {   name: "Kev", username: "kevinmcm", password: "sdlfkjgh"},
// {   name: "Hannah", username: "HERB", password: "sldkfjgh"},
// {   name: "Cody", username: "Coddddiz", password: "kldsflkjsgh"},
// {   name: "James", username: "Jimmyboi", password: "sdlkhglsbjf"},
// {   name: "Spotts", username: "Spottokun", password: "sdlhglkdjgls"},
// {   name: "Garrett", username: "Ggggdaily", password: "hglksdh9830"},

// Conversations

// {   name: "Kevin and Kev", user: [{_id: "619c32494f20a6ed87e090bd"}, {_id: "619c32494f20a6ed87e090be"}], messages: [{content: "This is Kevin", user: {_id: "61a53450a52967b48592eefe"}}, {content: "This is Kev", user: {_id: "61a53450a52967b48592eeff"}}]},
// {   name: "Kevin, Kev, and Hannah", user: [{_id: "619c32494f20a6ed87e090bd"}, {_id: "619c32494f20a6ed87e090be"}, {_id: "619c32494f20a6ed87e090bf"}], messages: [{content: "Kevin's message", user: {_id: "61a53450a52967b48592eefe"}}, {content: "Kev's message", user: {_id: "61a53450a52967b48592eeff"}}, {content: "Hannah's message", user: {_id: "61a53450a52967b48592ef00"}}]},
// {   name: "Cody, James, Spotts, and Garrett", user: [{_id: "619c32494f20a6ed87e090c0"}, {_id: "619c32494f20a6ed87e090c1"}, {_id: "619c32494f20a6ed87e090c2"}, {_id: "619c32494f20a6ed87e090c3"}],  messages: [{content: "Cody's message", user: {_id: "61a53450a52967b48592ef01"}}, {content: "James's message", user: {_id: "61a53450a52967b48592ef02"}}, {content: "Spotts's message", user: {_id: "61a53450a52967b48592ef03"}}, {content: "Garrett's message", user: {_id: "61a53450a52967b48592ef04"}}]}

// name: {
//     type: String,
//     default: "Conversation Name"
// },
// avatar: {
//     type: String,
//     default: "https://i2.wp.com/boingboing.net/wp-content/uploads/2020/06/IMG_20200602_082003_707.jpg?fit=1&resize=620%2C4000&ssl=1",
// },
// user: [{
//     type: mongoose.Types.ObjectId,
//     ref: "User",
// }],
// lastMessage: {
//     type: mongoose.Types.ObjectId,
//     ref: "Message",
// },

// Message

// { content: "Wow this application is great", user: {_id: "619c32494f20a6ed87e090bd"}, conversation: {_id: "619c34c94f20a6ed87e090c4"}},
// { content: "I totally agree Kevin", user: {_id: "619c32494f20a6ed87e090be"}, conversation: {_id: "619c34c94f20a6ed87e090c4"}},
// { content: "Hello is anyone there?", user: {_id: "619c32494f20a6ed87e090bf"}, conversation: {_id: "619c34c94f20a6ed87e090c5"}},
// { content: "Hey this is Cody", user: {_id: "619c32494f20a6ed87e090c0"}, conversation: {_id: "619c34c94f20a6ed87e090c6"}},
// { content: "James signing on", user: {_id: "619c32494f20a6ed87e090c1"}, conversation: {_id: "619c34c94f20a6ed87e090c6"}},
// { content: "This is Spotts", user: {_id: "619c32494f20a6ed87e090c2"}, conversation: {_id: "619c34c94f20a6ed87e090c6"}},
// { content: "Garrett here", user: {_id: "619c32494f20a6ed87e090c3"}, conversation: {_id: "619c34c94f20a6ed87e090c6"}},


// content: {
//     type: String,
//     require: [true, "You must enter a message."]
// },
// user: {
//     type: mongoose.Types.ObjectId,
//     ref: "User",
// },
// conversation: {
//     type: mongoose.Types.ObjectId,
//     ref: "Conversation",
// },