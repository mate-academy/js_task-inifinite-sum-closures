'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  const adder = (input) => {
    if (input !== undefined) {
      sum += input;

      return adder;
    }

    const finalSum = sum;

    sum = 0;

    return finalSum;
  };

  return adder;
}
module.exports = makeInfinityAdder;
