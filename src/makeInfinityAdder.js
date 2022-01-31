'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = function(number) {
    if (number === undefined) {
      const sumInFunction = sum;

      sum = 0;

      return sumInFunction;
    }
    sum += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
