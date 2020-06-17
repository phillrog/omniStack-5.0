const express = require('express');

const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://heroku:1234@cluster0-jyyah.mongodb.net/goweek-backend?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', routes);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
