'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(x) {
    if (typeof x === 'number') {
      sum += x;

      return adder;
    };

    if (!x) {
      const sumCopy = sum;

      sum = 0;

      return sumCopy;
    }

    return sum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
