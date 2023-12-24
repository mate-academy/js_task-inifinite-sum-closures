'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;

  const adder = number => {
    const result = sum;

    if (number === undefined) {
      sum = 0;

      return result;
    } else {
      sum += number;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
