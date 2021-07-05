'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;
  const adder = function(number) {
    if (number === undefined) {
      const sumCopy = sum;

      sum = 0;

      return sumCopy;
    } else {
      sum += number;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
