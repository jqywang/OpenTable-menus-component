const dummyData = require('../fakeMenus.js');

const restructure = require('../server/dataRestructure.js');

test('data restructuring helper function should return object with correct nesting', () => {
  let testData = restructure.dataRestructure(dummyData.slice(0, 4));
  expect(testData.Dinner.Appetizers.entries.length).toBe(5);
  expect(testData.Dinner.Appetizers.entries[0].name).toBe('artichoke');
});
