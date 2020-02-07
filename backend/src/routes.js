const { Router } = require('express');

const BusinessController = require('./app/controllers/BusinessController');
const ReviewsController = require('./app/controllers/ReviewsController');

const routes = new Router();

routes.get('/businesses', BusinessController.index);
routes.get('/reviews/:id', ReviewsController.index);

module.exports = routes;
