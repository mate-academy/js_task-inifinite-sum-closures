'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function nextStep(number) {
    if (!number) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += number;

    return nextStep;
  };
}

module.exports = makeInfinityAdder;
