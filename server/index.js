console.log('heythere');
console.log('from index js server');
var express = require(express);
var app = express();

app.use(express.static(__dirname + '../client/dist/'));
app.listen(3000, function () {
    console.log('listening on 3000');
});