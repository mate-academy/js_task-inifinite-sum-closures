'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function sumOfNumbers(num) {
    if (typeof num === 'number') {
      sum += num;

      return sumOfNumbers;
    }

    const result = sum;

    sum = 0;

    return result;
  };
}

module.exports = makeInfinityAdder;
