'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (nextValue) => {
    if (nextValue === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += nextValue;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
