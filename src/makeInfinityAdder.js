'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentSum = 0;

  const addition = (num) => {
    if (num === undefined) {
      const expressionResult = currentSum;

      currentSum = 0;

      return expressionResult;
    };

    currentSum += num;

    return addition;
  };

  return addition;
}

module.exports = makeInfinityAdder;
