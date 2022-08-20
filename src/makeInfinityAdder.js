'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  return function adder(value) {
    if (arguments.length === 0) {
      const valueToReturn = sum;

      sum = 0;

      return valueToReturn;
    };

    sum += value;

    return adder;
  };
}

module.exports = makeInfinityAdder;
