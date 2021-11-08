const express = require('express');
const Notion = require('../services/notion.services');
const router = express.Router();

const connectToNotion = (notionkey, databaseId) => {
  return (notionService = new Notion(notionkey, databaseId));
};

router.post('/database/:databaseId/createpage/', async (req, res) => {
  const { databaseId } = req.params;
  const dataInput = req.body;
  const notionKey = dataInput.notionkey;
  const dataOfPage = dataInput.data;

  const notionService = connectToNotion(notionKey, databaseId);

  const notionResponse = await notionService.addPageInDatabase(dataOfPage);

  res.send(notionResponse);
});

module.exports = router;
