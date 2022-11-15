'use strict';

/***
 *
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  let iterations = 0;

  const adder = (a) => {
    if (a !== undefined) {
      sum += a;
      iterations++;

      return adder;
    }

    if (!iterations) {
      sum = 0;
    }
    iterations = 0;

    return sum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
