const express = require('express');

const cors = require('cors');

const bodyparser = require('body-parser');

const app = express();

const menuRouter = require('./routers/menuRouter.js');

app.use(express.static(__dirname + '/../client/dist/'));
app.use(cors());
app.use(bodyparser.json());
app.use('/api/menus', menuRouter);

app.listen(8000, () => {
  console.log('listening on port 8000');
});
