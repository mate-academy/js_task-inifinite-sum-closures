'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;

  function adder(number) {
    if (arguments.length < 1) {
      const res = count;

      count = 0;

      return res;
    } else {
      count += number;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
