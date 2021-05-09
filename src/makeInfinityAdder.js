'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = function(num = 0) {
    sum += num;

    if (!num) {
      const sumCopy = sum;

      sum = 0;

      return sumCopy;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
