const express = require('express');
const routes = express.Router();

const LikeController = require('../controllers/LikeController');

routes.post('/:id', LikeController.store);

module.exports = routes;