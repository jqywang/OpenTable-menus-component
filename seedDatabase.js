let dummyData = require('./fakeMenus.js');
let dbHelper = require('./database/menudb.js');
let mongoose = require('mongoose');

mongoose.connect('mongod://localhost/entries');
console.log(dummyData.length);
let seedDatabase = function (dummyData) {
    for(var i = 0; i < dummyData.length; i++) {
        dbHelper.saveIntoDB(dummyData[i]);
    }
}
seedDatabase(dummyData);
