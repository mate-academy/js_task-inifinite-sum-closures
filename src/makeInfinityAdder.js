'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(num) {
    if (num) {
      sum += num;

      return adder;
    }

    const res = sum;

    sum = 0;

    return res;
  };

  return adder;
}

module.exports = makeInfinityAdder;
