const express = require ('express');
const bodyParser = require ('body-parser');
const cookieParser = require ('cookie-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.static('../frontend/public'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

var session = require('express-session')
app.use(session({
   secret: 'toys users',
   resave: false,
   saveUninitialized: true,
   cookie: { secure: false }
}))

const toyRoute = require('./api/toy/toy.route');
const userRoute = require('./api/user/user.route');
const colorRoute = require('./api/color/color.route');

app.use('/api/toy', toyRoute);
app.use('/api/user',userRoute);
app.use('/api/color',colorRoute);

app.get('/', (req, res) => res.send('Welcome to Mister Toy!'));

app.listen(port, () => console.log(`misterToy is listening on port ${port}!`));

