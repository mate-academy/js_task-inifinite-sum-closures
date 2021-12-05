'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let count = 0;
  const adder = function(num) {
    if (arguments.length === 0) {
      sum = (count === 0) ? sum : 0;
      count = (count === 0) ? 1 : 0;

      return sum;
    } else {
      sum += num;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
