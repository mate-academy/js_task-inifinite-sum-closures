'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let arr = [];

  function adder(x) {
    if (arguments.length === 0) {
      const result = arr.reduce((a, b) => a + b, 0);

      arr = [];

      return result;
    }

    arr.push(x);

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
