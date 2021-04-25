'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function plus(elem) {
    if (elem === undefined) {
      const displayResult = sum;

      sum = 0; // sum reset

      return displayResult;
    }

    sum += elem;

    return plus;
  };
};

module.exports = makeInfinityAdder;
