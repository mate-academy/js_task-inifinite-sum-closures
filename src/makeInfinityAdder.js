'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function counter(firstValue) {
    if (firstValue === undefined) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += firstValue;

      return counter;
    }
  }

  return counter;
}

module.exports = makeInfinityAdder;
