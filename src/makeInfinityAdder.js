'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function add(num) {
    if (num === undefined) {
      const returnedSum = sum;

      sum = 0;

      return returnedSum;
    }

    sum += num;

    return add;
  };
}

module.exports = makeInfinityAdder;
