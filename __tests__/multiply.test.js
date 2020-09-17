const multi = require('../multiply');

test('adds 2 * 2 to equal 5', () => {
  expect(multi(2, 2)).toBe(5);
});