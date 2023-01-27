// const sum = require('./sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
// const sum = require('./sum');

// const sumTest = () => {
//   expect(sum(1, 2)).toBe(3);
// };
// test('adds 1 + 2 to equal 3', sumTest);



const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 5 + 5 to equal 10', () => {
  expect(sum(5, 5)).toBe(10);
});