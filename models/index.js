const mongoose = require('mongoose');

const connectionString = process.env.ATLAS_URI || 'mongodb://localhost:27017/shineServerDatabase';

// const configOptions = {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
// };

mongoose.connect(connectionString)
    .then(() => console.log('MongoDB successfully connected...'))
    .catch((err) => console.log(`MongoDB connection error: ${err}`));

module.exports = {
    Conversation: require('./Conversation'),
    // Message: require('./Message'),
    User: require('./User'),
};
