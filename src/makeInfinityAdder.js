'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function makeAdder(number) {
    const closureSum = sum;

    if (number === undefined) {
      sum = 0;

      return closureSum;
    }

    sum += number;

    return makeAdder;
  };
}

module.exports = makeInfinityAdder;
