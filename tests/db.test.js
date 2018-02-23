const mongoose = require('mongoose');
const dbHelper = require('../database/menudb.js');
describe('test the fact that the database is seeded', () => {
    beforeAll(() => {
        mongoose.connect('mongodb://localhost/entries');
    });
    afterAll((done) => {
        mongoose.disconnect(done);
    });
    test('has fake data in database', () => {
        dbHelper.pullFromDB((err, data) => {
            if(err){throw err;}
            console.log(data.length);
            expect(data.length).toBe(58);
        });
    });
    test('has a function that pulls specific menus from db by restaurant id', () => {
        dbHelper.pullRestaurantFromDB('1', (err, data) => {
            if(err){throw err;}
            expect(data.length).toBe(29);
            expect(data[0].restaurant_id).toBe('1');
        })
    });
})

