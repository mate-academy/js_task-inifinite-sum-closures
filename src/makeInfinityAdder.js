'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;
  let currentResult;

  const adder = (x) => {
    if (x === undefined) {
      currentResult = result;
      result = 0;

      return currentResult;
    }

    result += x;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
