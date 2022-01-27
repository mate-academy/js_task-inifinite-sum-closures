'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (num1) => {
    if (num1 === undefined) {
      const lastSum = sum;

      sum = 0;

      return lastSum;
    } else {
      sum += num1;

      return (num2) => {
        return adder(num2);
      };
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
