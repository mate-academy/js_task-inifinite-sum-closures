'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (value) => {
    if (value >= 0) {
      sum += value;

      return adder;
    }

    const sumValue = sum;

    sum = 0;

    return sumValue;
  };

  return adder;
}

module.exports = makeInfinityAdder;
