const port = process.env.PORT || 4000;
const app = express();
const cors = require('cors');
// TODO: middleware - CORS
app.use(cors());

// middleware - JSON parsing
app.use(express.json());

// middleware - API routes
app.use('/api/v1/games', routes.games);

// listen
app.listen(port, () => console.log(`Server is running on port ${port}`));