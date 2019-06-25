'use strict';

const sum = require('./sum');

test('Should work with a chain of one number', () => {
  expect(sum(1)())
    .toBe(1);
});

test('Should work with a chain of 2 numbers', () => {
  expect(sum(1)(10)())
    .toBe(11);
});

test('Should work with long chains', () => {
  expect(sum(1)(1)(1)(1)(1)(1)(1)(1)())
    .toBe(8);
});

test('Should return 0 for empty chain', () => {
  expect(sum())
    .toBe(0);
});

// testing extended functionality

test('Should work with any number of params', () => {
  expect(sum(0, 1, 2)(3, 4)(10)())
    .toBe(20);
});
