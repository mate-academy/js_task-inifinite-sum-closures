'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = function(input) {
    if (input === undefined) {
      const finalSum = sum;

      sum = 0;

      return finalSum;
    }
    sum += input;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
