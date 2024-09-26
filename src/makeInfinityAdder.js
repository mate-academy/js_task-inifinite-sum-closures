'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  let currentResult;

  const adder = (nextCall) => {
    if (typeof nextCall !== 'number') {
      currentResult = sum;
      sum = 0;

      return currentResult;
    } else {
      sum += nextCall;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
