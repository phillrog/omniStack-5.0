const express = require('express');
const routes = express.Router();
const likeRoutes = require('./likes');
const tweetRoutes = require('./tweet');

routes.use('/tweets', tweetRoutes);
routes.use('/likes', likeRoutes);

module.exports = routes;