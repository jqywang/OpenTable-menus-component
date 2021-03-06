const mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/entries');
mongoose.connect('mongodb://mongo:27017/entries');

const entrySchema = mongoose.Schema({
  menu_name: String,
  subgroup_name: String,
  subgroup_desc: String,
  entry_name: String,
  entry_desc: String,
  entry_price: String,
  extras_name: String,
  extras_price: String,
  restaurant_id: Number,
});
const Entry = mongoose.model('Entry', entrySchema);

const saveIntoDB = function (entryObj) {
  // SINGLE OBJECT
  const entry = new Entry(entryObj);
  entry.save((err, success) => {
    if(err){
      console.log(err);
      throw err;
    } else {
      console.log('successfully put into the goddamn db bb');
    }
  });
};
const pullFromDB = function (callback) {
  Entry.find().exec(callback);
};
const pullRestaurantFromDB = function (restaurantID, callback) {
  Entry.find({ restaurant_id: restaurantID }).exec(callback);
};
module.exports.saveIntoDB = saveIntoDB;
module.exports.pullFromDB = pullFromDB;
module.exports.pullRestaurantFromDB = pullRestaurantFromDB;
