const { Client } = require('@notionhq/client');

class NotionServer {
  constructor(notionKey, databaseId) {
    this.notion = new Client({ auth: notionKey });
    this.databaseId = databaseId;
  }

  async addPageInDatabase(dataOfPage) {
    try {
      const response = await this.notion.pages.create({
        ...dataOfPage,
      });
      return response;
    } catch (error) {
      return error;
    }
  }
}

module.exports = NotionServer;
