const express = require('express');

const cors = require('cors');

const bodyparser = require('body-parser');

const app = express();

app.use(express.static(__dirname + '/../client/dist/'));
app.use(cors());
app.use(bodyparser());


app.listen(3000, () => {
  console.log('listening on 3000 man');
});
