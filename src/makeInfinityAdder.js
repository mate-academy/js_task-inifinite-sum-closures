'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let totalSum = 0;

  const adder = function(num) {
    if (!arguments.length) {
      const temporarySum = totalSum;

      totalSum = 0;

      return temporarySum;
    }

    totalSum += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
