'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function add(amountToAdd) {
    if (amountToAdd === undefined) {
      const sumCopy = sum;

      sum = 0;

      return sumCopy;
    }

    sum += amountToAdd;

    return add;
  };
}
module.exports = makeInfinityAdder;
