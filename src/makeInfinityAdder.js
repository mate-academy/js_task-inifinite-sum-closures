'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (num) => {
    if (num || num === 0) {
      sum += num;

      return (number) => adder(number);
    } else {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
