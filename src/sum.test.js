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

test('Should return undefined if chain is not finished', () => {
  expect(sum(1))
    .toBe(undefined);
});
