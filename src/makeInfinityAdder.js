'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;
  let lastResult = 0;

  const adder = (x) => {
    if (x === undefined) {
      lastResult = result;
      result = 0;

      return lastResult;
    }
    result += x;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
