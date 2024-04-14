'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(...values) {
    if (values.length === 0) {
      const result = sum;
      sum = 0;

      return result;
    }

    sum += values.reduce((total, num) => total + num, 0);

    return adder;
  };
}

module.exports = makeInfinityAdder;
