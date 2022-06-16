'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function add(number) {
    if (number === undefined) {
      const finalSum = sum;

      sum = 0;

      return finalSum;
    } else {
      sum += number;

      return add;
    }
  };
}

module.exports = makeInfinityAdder;
