'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = function(num = 0) {
    sum += num;

    if (num === 0) {
      const sumCopy = sum + 0;

      sum = 0;

      return sumCopy;
    } else {
      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
