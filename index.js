const express = require('express');
const cors = require('cors');
const routerApi = require('./router');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());
routerApi(app);

app.listen(port, () => console.log(`Init Sever in port: ${port}`));
