'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function counter(number) {
    if (number === undefined) {
      const counted = sum;

      sum = 0;

      return counted;
    }
    sum += number;

    return counter;
  };
}

module.exports = makeInfinityAdder;
