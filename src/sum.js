'use strict';

/***
 * Implement `sum` function that can be used the next way:
 *
 * sum() === 0
 * sum(1)() === 1
 * sum(2)(3)() === 5
 * sum(1)(1)(1)(1)(1)(1)(1)(1)() === 8
 *
 * Every chain is finished with empty parens ()
 *
 * @param {number} a
 *
 * @return {function}
 */
const sum = (...args) => {
  let accum = args.reduce((acc, a) => acc + a, 0);

  if (args.length < 1) {
    return 0;
  }

  return function adding(...argsExtra) {
    if (argsExtra.length < 1) {
      return accum;
    }

    accum += argsExtra.reduce((acc, b) => acc + b, 0);

    return adding;
  };
};

module.exports = sum;
