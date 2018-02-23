const mongoose = require('mongoose');

describe('test the fact that the database is seeded', () => {
    beforeAll(() => {
        mongoose.connect('mongodb://localhost/entries');
    });
    afterAll((done) => {
        mongoose.disconnect(done);
    });
    test('has fake data in database', () => {

    });
})

