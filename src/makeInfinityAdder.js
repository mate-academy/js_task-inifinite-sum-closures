'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(numbers) {
    if (typeof numbers !== 'number') {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += numbers;

    return adder;
  };
}

module.exports = makeInfinityAdder;
