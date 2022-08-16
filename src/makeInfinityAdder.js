'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = function(number) {
    if (arguments.length) {
      sum += number;

      return adder;
    }

    const finalSum = sum;

    sum = 0;

    return finalSum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
