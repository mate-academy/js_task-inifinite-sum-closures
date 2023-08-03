'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = function(value) {
    if (arguments.length > 0) {
      sum += value;

      return adder;
    }

    const actual = sum;

    sum = 0;

    return actual;
  };

  return adder;
}

module.exports = makeInfinityAdder;
