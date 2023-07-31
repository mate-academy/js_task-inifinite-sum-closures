'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;

  function adder(num) {
    if (num !== undefined) {
      total += num;

      return adder;
    }

    const result = total;

    total = 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
