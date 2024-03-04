'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const args = [...arguments];
  let sum = args.reduce((acc, val) => acc + val, 0);

  return function innerFunction(...innerArgs) {
    if (innerArgs.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += innerArgs.reduce((acc, val) => acc + val, 0);

      return innerFunction;
    }
  };
}

module.exports = makeInfinityAdder;
