const express = require('express');

const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://heroku:1234@cluster0-jyyah.mongodb.net/goweek-backend?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.get('/', (req, res) => {
    return res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server started on pot 3000');
});
