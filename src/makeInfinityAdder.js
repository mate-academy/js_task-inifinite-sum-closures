'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sumResult = 0;

  const adder = (x) => {
    if (x === undefined) {
      const currentResult = sumResult;

      sumResult = 0;

      return currentResult;
    } else {
      sumResult += x;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
