const div = require('../divide');

test('div 10 / 2 to equal 5', () => {
  expect(div(10, 2)).toBe(5);
});

// Infinity
test('div 5 / 0 to equal 0', () => {
  expect(div(5, 0)).toBe(Infinity);
});
