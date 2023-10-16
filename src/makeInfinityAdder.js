'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  function makeAdder() {
    let currentSum = 0;

    return function adder(value) {
      if (value === undefined) {
        const result = currentSum;

        currentSum = 0;

        return result;
      } else {
        currentSum += value;

        return adder;
      }
    };
  }

  return makeAdder();
}

module.exports = makeInfinityAdder;
