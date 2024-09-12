'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let total = 0;

  return function adder(num) {
    if (num !== undefined) {
      total += num;

      return adder;
    }

    const res = total;

    total = 0;

    return res;
  };
}

module.exports = makeInfinityAdder;
