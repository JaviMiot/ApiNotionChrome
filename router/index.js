const express = require('express');
const notionRouter = require('./notion.router');

const routerApi = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/notion', notionRouter);
};

module.exports = routerApi;
