const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const db = require('./db');

const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 3001;

app.use(cors());
app.use((req, res, next) => {
    req.io = io;
    
    return next();
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', routes);

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
