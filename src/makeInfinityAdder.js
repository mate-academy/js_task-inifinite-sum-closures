'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let additionResult = 0;

  return function adder(num) {
    const sum = additionResult;

    if (num !== undefined) {
      additionResult += num;

      return adder;
    }

    additionResult = 0;

    return sum;
  };
}

module.exports = makeInfinityAdder;
