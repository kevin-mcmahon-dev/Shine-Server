const port = process.env.PORT || 4000;
const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');

// TODO: middleware - CORS
app.use(cors());

// middleware - JSON parsing
app.use(express.json());

// middleware - API routes
app.use('/api/shine', routes.routes);

// listen
app.listen(port, () => console.log(`Server is running on port ${port}`));