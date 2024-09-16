'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(number) {
    if (number !== undefined) {
      sum += number;

      return (num) => adder(num);
    }

    const result = sum;

    sum = 0;

    return result;
  };
}

module.exports = makeInfinityAdder;
