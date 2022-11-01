'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;
  let cleanResult = 0;

  const adder = (x) => {
    if (x) {
      result += x;
    }

    if (x === undefined) {
      cleanResult++;

      return cleanResult === 2 ? 0 : result;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
