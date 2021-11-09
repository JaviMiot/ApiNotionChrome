const express = require('express');
const Notion = require('../services/notion.services');
const router = express.Router();

const connectToNotion = (notionkey, databaseId) => {
  return (notionService = new Notion(notionkey, databaseId));
};

router.post('/database/:databaseId/createpage/', async (req, res, next) => {
  const { databaseId } = req.params;
  const dataInput = req.body;
  const notionKey = dataInput.notionkey;
  const dataOfPage = dataInput.data;

  const notionService = connectToNotion(notionKey, databaseId);
  const notionResponse = await notionService.addPageInDatabase(dataOfPage);

  if (notionResponse.name === 'APIResponseError') {
    console.log('entra');
    next(notionResponse);
  } else {
    res.json(notionResponse);
  }
});

module.exports = router;
