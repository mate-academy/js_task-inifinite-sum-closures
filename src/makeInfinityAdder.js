'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function summerise(num) {
    if (num !== undefined) {
      sum += num;

      return summerise;
    }

    const result = sum;

    sum = 0;

    return result;
  };
}

module.exports = makeInfinityAdder;
