'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function add(number) {
    if (!number) {
      const addSum = sum;

      sum = 0;

      return addSum;
    }

    sum += number;

    return add;
  };
}

module.exports = makeInfinityAdder;
