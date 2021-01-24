'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function getAmount(parameter) {
    if (parameter) {
      sum += parameter;

      return getAmount;
    };

    const result = sum;

    sum = 0;

    return result;
  };
};

module.exports = makeInfinityAdder;
