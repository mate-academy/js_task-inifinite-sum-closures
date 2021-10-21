'use strict';

const makeInfinityAdder = require('./makeInfinityAdder');

test('The result of makeInfinityNumber should be a function', () => {
  const adder = makeInfinityAdder();

  expect(typeof adder).toBe('function');
});

test('Should work without arguments, should return 0.', () => {
  const adder = makeInfinityAdder();

  const actual = adder();
  const expected = 0;

  expect(actual).toBe(expected);
});

test('Should work with a chain of one number', () => {
  const adder = makeInfinityAdder();

  const actual = adder(1)();
  const expected = 1;

  expect(actual).toBe(expected);
});

test('Should work with a chain of 2 numbers', () => {
  const adder = makeInfinityAdder();

  const actual = adder(1)(10)();
  const expected = 11;

  expect(actual).toBe(expected);
});

test('Should work with long chains', () => {
  const adder = makeInfinityAdder();

  const actual = adder(1)(1)(1)(1)(1)(1)(1)(1)();
  const expected = 8;

  expect(actual).toBe(expected);
});

test('Should work with chains containing zero as argument', () => {
  const adder = makeInfinityAdder();

  const actual = adder(1)(1)(1)(1)(0)(1)(1)(1)();
  const expected = 7;

  expect(actual).toBe(expected);
});

test('Should clear value for empty argument call', () => {
  const adder = makeInfinityAdder();

  adder(1)(10)();

  const actual = adder();
  const expected = 0;

  expect(actual).toBe(expected);
});
