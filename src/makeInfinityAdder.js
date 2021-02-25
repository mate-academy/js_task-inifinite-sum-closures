'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  return function add(number) {
    if (number === undefined) {
      const sumToReturn = sum;

      sum = 0;

      return sumToReturn;
    }

    sum += number;

    return add;
  };
}

module.exports = makeInfinityAdder;
