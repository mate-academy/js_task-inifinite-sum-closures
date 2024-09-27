'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (nextValue) => {
    if (nextValue === undefined) {
      const resultWithZero = sum;

      sum = 0;

      return resultWithZero;
    }
    sum += nextValue;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
