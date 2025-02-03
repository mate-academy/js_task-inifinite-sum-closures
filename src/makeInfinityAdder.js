'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function curry(number) {
    if (number === undefined) {
      const temp = sum;

      sum = 0;

      return temp;
    }

    sum += number;

    return curry;
  }

  return curry;
}

module.exports = makeInfinityAdder;
