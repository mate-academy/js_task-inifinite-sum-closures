'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentTotal = 0;

  const adder = function(number) {
    if (number !== undefined) {
      currentTotal += number;

      return adder;
    }

    const returnTotal = currentTotal;

    currentTotal = 0;

    return returnTotal;
  };

  return adder;
}

module.exports = makeInfinityAdder;
