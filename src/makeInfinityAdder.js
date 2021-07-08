'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let result;

  const adder = function(number) {
    if (number) {
      sum += number;

      return adder;
    }
    result = sum;
    sum = 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
