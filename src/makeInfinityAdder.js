'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function addition(numberToAdd) {
    if (numberToAdd === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += numberToAdd;

    return addition;
  }

  return addition;
}

module.exports = makeInfinityAdder;
