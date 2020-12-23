'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(value) {
    if (value === undefined) {
      const sumCopy = sum;

      sum = 0;

      return sumCopy;
    } else {
      sum += value;

      return adder;
    }
  };
}

module.exports = makeInfinityAdder;
