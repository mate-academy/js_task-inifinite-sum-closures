'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sumResult = 0;

  const adder = (sum) => {
    if (sum === undefined) {
      const result = sumResult;

      sumResult = 0;

      return result;
    }
    sumResult += sum;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
