'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(numb = 0) {
  let sum = numb;

  function add(number) {
    if (number !== undefined) {
      sum += number;

      return add;
    }

    const preSum = sum;

    sum = 0;

    return preSum;
  }

  return add;
}

module.exports = makeInfinityAdder;
