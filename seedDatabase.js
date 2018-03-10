let dummyData = require('./fakeMenus.js');
let dbHelper = require('./database/menudb.js');
let mongoose = require('mongoose');
//
//mongoose.connect('mongod://localhost/entries');
mongoose.connect('mongodb://127.0.0.1:27017/entries');
menuName = ['Breakfast', 'Lunch', 'Dinner'];
var subgroupName = ['Entrees', 'Breads', 'Cheeses', 'Soups', 'Salads'];
var subgroupDescription = [
    'This food is delicious, make it more delicious for like 20 bucks',
    'Ask for happy birthday songs :)',
    'We no longer only serve artichoke',
    'Why does everything cost the same?',
    ''
];
var entryName = [
    'Hamburgers',
    'Artichoke hehe',
    'More Artichoke',
    'Beef Sliders',
    'Soup',
    'Warm Franzia',
    'Steak',
    'Salad',
];
var entryDesc = [
    'Yelp said this was good, so here you go',
    'Organically sourced, free range, farm to table, vegan, gluten-free, cruelty free, fair trade',
    'We have one dude in the kitchen and this is his best shot at making a menu',
    'This is just not that good get something else',
]
var randomThing = (array) => {
   return array[Math.floor(Math.random() * array.length)];
};

let seedDatabase = function () {
    console.log('in seed');
    for(let i = 0; i < 10; i++) { //restaurant: i
        for(let j = 0; j < 3; j++){//big menu: j
            let randIndex = Math.floor(Math.random() * 3);
            let otherRandIndex = Math.floor(Math.random()*3);
            for(let k = 0; k < 3; k++) { //subgroup: k
                let randomSub = subgroupName[k + randIndex];
                let randomDesc = subgroupDescription[k + otherRandIndex];
                for(let l = 0; l < (6 + k); l++) { //entry = l
                    console.log('before entry');
                    var entry = {
                        restaurant_id: i,
                        menu_name: menuName[j],
                        subgroup_name: randomSub,
                        subgroup_desc: randomDesc,
                        entry_name: randomThing(entryName),
                        entry_price: '$15.00',
                    };
                    if(l%2 === 0) {
                        entry['entry_desc'] = randomThing(entryDesc);
                    } if(l%3 === 0) {
                        entry['extras_price'] = '$2.00';
                        entry['extras_name'] = 'make it cheesy';
                    }
                    dbHelper.saveIntoDB(entry);
                }
            }
        }
    }
}
seedDatabase();
