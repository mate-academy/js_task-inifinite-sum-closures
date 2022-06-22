'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const InfinityAdder = function(number) {
    if (number === undefined) {
      const sumToReturn = sum;

      sum = 0;

      return sumToReturn;
    }

    sum += number;

    return InfinityAdder;
  };

  return InfinityAdder;
}

module.exports = makeInfinityAdder;
