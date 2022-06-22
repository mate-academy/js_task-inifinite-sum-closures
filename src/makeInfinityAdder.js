'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const infinityAdder = function(number) {
    if (number === undefined) {
      const sumToReturn = sum;

      sum = 0;

      return sumToReturn;
    }

    sum += number;

    return infinityAdder;
  };

  return infinityAdder;
}

module.exports = makeInfinityAdder;
