'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(num) {
    if (arguments.length < 1) {
      const pseudoSum = sum;

      sum = 0;

      return pseudoSum;
    }

    sum += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
