'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const adder = (...valueToAdd) => {
    if (valueToAdd.length === 0) {
      const finalSum = sum;

      sum = 0;

      return finalSum;
    }

    for (const value of valueToAdd) {
      if (typeof value === 'number') {
        sum += value;
      }
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
