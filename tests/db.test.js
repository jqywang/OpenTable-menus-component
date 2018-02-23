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
})

