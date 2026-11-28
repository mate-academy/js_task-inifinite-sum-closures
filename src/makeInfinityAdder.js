'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here

  let sum = 0;

  const adder = (summand) => {
    if (summand === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += summand;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
