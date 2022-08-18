'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sumOfCalls = 0;

  return function adder(number) {
    if (arguments.length > 0) {
      sumOfCalls += number;

      return adder;
    }

    const finishSum = sumOfCalls;

    sumOfCalls = 0;

    return finishSum;
  };
}

module.exports = makeInfinityAdder;
