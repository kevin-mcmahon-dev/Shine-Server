const port = process.env.PORT || 4000;
const express = require('express');
// const session = require("express-session");
// const MongoStore = require("connect-mongo");

const app = express();
const cors = require('cors');
const routes = require('./routes');

// TODO: middleware - CORS
app.use(cors());

// middleware - JSON parsing
app.use(express.json());

app.use((req, res, next) => {
    console.log(`[${req.url}] ${req.method} - ${new Date().toLocaleTimeString()}`);
    next();
});

// middleware - API routes
app.use('/api/v1/conversations', routes.conversationRoutes);
app.use('/api/v1/', routes.userRoutes);

// listen
app.listen(port, () => console.log(`Server is running on port ${port}`));