const multi = require('../multiply');

test('adds 7 * 2 to equal 14', () => {
  expect(multi(7, 2)).toBe(14);
});