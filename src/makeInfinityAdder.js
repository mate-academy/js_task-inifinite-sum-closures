'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(x) {
    if (arguments.length > 0) {
      sum += x;

      return adder;
    }

    const res = sum;

    sum = 0;

    return res;
  };

  return adder;
}

module.exports = makeInfinityAdder;
