const express = require('express');
const routes = express.Router();

const TweetController = require('./controllers/TweetController');

routes.get('/', TweetController.index);
routes.post('/', TweetController.store);

module.exports = routes;