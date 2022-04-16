'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(num1 = 0) {
  let sum = num1;

  const adder = (num2) => {
    if (num2 === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += num2;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
