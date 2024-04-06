'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  let finalValue = 0;

  const adder = (n) => {
    if (n === undefined) {
      finalValue = sum;
      sum = 0;

      return finalValue;
    }

    sum += n;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
