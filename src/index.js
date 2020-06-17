const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(cors());
app.use((req, res, next) => {
    req.io = io;
    
    return next();
});

mongoose.connect('mongodb+srv://heroku:1234@cluster0-jyyah.mongodb.net/goweek-backend?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', routes);

server.listen(3000, () => {
    console.log('Server started on port 3000');
});
