'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;
  let cleanResult = 0;

  const adder = (x) => {
    if (x >= 0) {
      result += x;
    }

    if (x === undefined && result > 0) {
      cleanResult++;

      return cleanResult === 2 ? 0 : result;
    }

    if (x === undefined && result === 0) {
      return 0;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
