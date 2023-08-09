'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;
  let currentResult = 0;

  const adder = (a) => {
    if (a > -1) {
      currentResult += a;

      return adder;
    }
    result = currentResult;
    currentResult = 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
