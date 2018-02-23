import { mongo } from 'mongoose';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/menus');
let entrySchema = mongoose.Schema({
    menu_name: String,
    subgroup_name: String,
    subgroup_desc: String,
    entry_name: String,
    entry_desc: String,
    entry_price: String,
    extras_name: String,
    extras_price: String,
    restaurant_id: Number
});
let Entry = mongoose.model('Entry', entrySchema);

let saveIntoDB = function (entryObj) {
    //SINGLE OBJECT
    let entry = new Entry(entryObj);
    entry.save(function(err, success){
        if(err){
            console.log(err);
            throw err;
        } else {
            console.log('successfully put into the goddamn db bb');
        }
    });
}