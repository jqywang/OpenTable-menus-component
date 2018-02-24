const dummyData = require('../fakeMenus.js');

const restructure = require('../server/dataRestructure.js');

test('data restructuring helper function should return object with correct nesting', () => {
  let testData = restructure.dataRestructure(dummyData.slice(0, 4));
  expect(testData.Dinner.Appetizers.entries.length).toBe(4);
  expect(testData.Dinner.Appetizers.entries[0].name).toBe('artichoke');
  expect(testData.Dinner.Appetizers.entries[0].desc).toBe('tasty');
  expect(testData.Dinner.Appetizers.entries[0].price).toBe('$27.00');
  expect(typeof testData.Dinner.Appetizers.entries[0].extras).toBe('object');

  
});
