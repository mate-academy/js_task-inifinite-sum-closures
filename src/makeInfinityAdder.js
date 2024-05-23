'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const adder = (b) => {
    if (b === undefined) {
      const finalSum = sum;

      sum = 0;

      return finalSum;
    }

    sum += b;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
