'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (value) => {
    if (value === undefined) {
      const sumTotal = sum;

      sum = 0;

      return sumTotal;
    }
    sum += value;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
